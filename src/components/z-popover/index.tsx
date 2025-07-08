import {Component, Element, Event, EventEmitter, Host, Listen, Prop, State, Watch, h} from "@stencil/core";
import {KeyboardCode, PopoverPosition} from "../../beans";

const DOCUMENT_ELEMENT = document.documentElement;

type Offsets = {top: number; right: number; bottom: number; left: number};
type ElementSizes = {width: number; height: number};
/** Centering offset modifier. 0 for no offset, 0.5 for centering. */
type OffsetModifier = 0 | 0.5;

function getParentElement(element: Element): Element {
  if (element.parentNode === element.shadowRoot) {
    return element.shadowRoot.host;
  }

  return element.parentElement;
}

/**
 * Find the closest scrollable parent of a node.
 *
 * @param {Element} element The node
 */
function findScrollableParent(element: Element): Element {
  let parent = getParentElement(element);

  while (parent && parent !== DOCUMENT_ELEMENT) {
    const style = window.getComputedStyle(parent);
    const {overflow, overflowX, overflowY} = style;

    // Check for hidden overflow first (early return)
    if (overflow === "hidden" || overflowY === "hidden" || overflowX === "hidden") {
      return parent;
    }

    // Only check scrollable if overflow is not visible
    const isOverflowNotVisible = overflow !== "visible";
    const isOverflowYNotVisible = overflowY !== "visible";
    const isOverflowXNotVisible = overflowX !== "visible";

    if (
      (parent.scrollHeight > parent.clientHeight && isOverflowNotVisible && isOverflowYNotVisible) ||
      (parent.scrollWidth > parent.clientWidth && isOverflowNotVisible && isOverflowXNotVisible)
    ) {
      return parent;
    }

    parent = getParentElement(parent);
  }

  return DOCUMENT_ELEMENT;
}

/**
 * Calculate computed offset.
 * It includes matrix transformations.
 * @param element The target element.
 * @param targetParentOffset The relative offset parent.
 */
function computeOffset(element: HTMLElement, targetParentOffset?: HTMLElement): Offsets & ElementSizes {
  const rect = element.getBoundingClientRect();
  const {width, height} = rect;

  let top = 0;
  let left = 0;
  let offsetParent = element;

  while (offsetParent && offsetParent !== targetParentOffset) {
    left += offsetParent.offsetLeft;

    // document.body sometimes has offsetTop == 0 but still has an offset because of children margins!
    if (offsetParent === document.body) {
      top += offsetParent.getBoundingClientRect().top + window.scrollY;
    } else {
      top += offsetParent.offsetTop;
    }

    // Handle CSS transforms only when DOMMatrix is available
    if (window.DOMMatrix) {
      const style = window.getComputedStyle(offsetParent);
      const {transform} = style;

      if (transform && transform !== "none") {
        const domMatrix = new DOMMatrix(transform);
        left += domMatrix.m41;
        if (offsetParent !== document.body) {
          top += domMatrix.m42;
        }
      }
    }

    if (!offsetParent.offsetParent) {
      break;
    }

    offsetParent = offsetParent.offsetParent as HTMLElement;
  }

  let parentWidth: number;
  let parentHeight: number;
  if (offsetParent === document.body) {
    parentWidth = window.innerWidth;
    parentHeight = window.innerHeight;
  } else {
    parentWidth = offsetParent.offsetWidth;
    parentHeight = offsetParent.offsetHeight;
  }

  const right = parentWidth - left - width;
  const bottom = parentHeight - top - height;

  return {top, right, bottom, left, width, height};
}

/**
 * Popover component.
 * This component displays a popover that can be bound to an element.
 * It supports various positions and can automatically adjust its position based on available space.
 *
 * Notes:
 * - To ensure the positioning algorithm finds the right container when calculating the position, set its container's `position` to `relative`.
 * - Consider manually adjusting the size of the slotted element (using `max-width`, `max-height`, etc...) when its content is "fluid" (like a big text), because it can interfere with the position calculation (for example a long text on one single line can be bigger than the available space, letting the algorithm think that the popover doesn't fit in the available space).
 *
 * @cssprop --z-popover-theme--surface - background color of the popover.
 * @cssprop --z-popover-theme--text - foreground color of the popover.
 * @cssprop --z-popover-padding - padding of the popover.
 * @cssprop --z-popover-shadow-filter - drop-shadow filter of the popover. Defaults to `drop-shadow(0 1px 2px var(--shadow-color-base))`.
 */
@Component({
  tag: "z-popover",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZPopover {
  /**
   * The preferred position to render the popover.
   * The popover will automatically search another position if not enough space is available for the preferred position.
   * If the preferred position is not available, it will try to find the best position starting from `TOP` and going clockwise.
   */
  @Prop({reflect: true, mutable: true})
  position?: PopoverPosition = PopoverPosition.TOP;

  /**
   * The open state of the popover.
   */
  @Prop({reflect: true, mutable: true})
  open = false;

  /**
   * The selector or the element bound with the popover.
   * If string css selector is provided make sure to use a valid selector.
   */
  @Prop()
  bindTo?: string | HTMLElement;

  /**
   * Whether to show popover's arrow.
   */
  @Prop({reflect: true})
  showArrow = false;

  /**
   * Whether to center the popup on the main side (according to "position").
   */
  @Prop({reflect: true})
  center = false;

  /**
   * If true, the popover can be closed by clicking outside of it or pressing the escape key.
   * Otherwise, it will be closed only programmatically (by setting `open` to `false`).
   */
  @Prop()
  closable = true;

  /**
   * The current position of the popover.
   * It differs from `position` only when calculated automatically (position=auto) or when the position is recalculated for space reasons.
   */
  @State()
  currentPosition?: PopoverPosition;

  /**
   * Position change event.
   */
  @Event()
  positionChange: EventEmitter;

  /**
   * Open change event.
   */
  @Event()
  openChange: EventEmitter;

  @Element() host: HTMLZPopoverElement;

  private animationFrameRequestId?: number;

  private readonly spaceTolerance = 3; // 3px tolerance for space calculations

  @Listen("keyup", {target: "window"})
  closePopoverWithKeyboard(e: KeyboardEvent): void {
    if (this.closable && e.key === KeyboardCode.ESC) {
      this.open = false;
    }
  }

  /**
   * Close the popover when clicking outside of its content.
   * Stop event propagation if the click was fired by popover's trigger element,
   * to prevent close and reopen glitches.
   * @param {MouseEvent} e
   */
  @Listen("click", {target: "body", capture: true})
  handleOutsideClick(e: MouseEvent): void {
    if (!this.closable || !this.open) {
      return;
    }

    const eventPath = e.composedPath();
    if (!eventPath.includes(this.host)) {
      const target = e.target as HTMLElement;
      let triggerElemClicked = false;

      if (typeof this.bindTo === "string") {
        triggerElemClicked = !!target.closest(this.bindTo);
      } else if (this.bindTo) {
        triggerElemClicked = this.bindTo.contains(target);
      }

      if (triggerElemClicked) {
        // stop propagation if the click was on the trigger element to prevent close and reopen glitches
        e.stopPropagation();
      }

      this.open = false;
      this.positionChange.emit({position: this.currentPosition});
    }
  }

  @Watch("position")
  validatePosition(newValue: PopoverPosition): void {
    if (!Object.values(PopoverPosition).includes(newValue as PopoverPosition) || newValue === PopoverPosition.AUTO) {
      newValue = PopoverPosition.TOP;
    }

    this.position = newValue;
    this.currentPosition = newValue;
    this.positionChange.emit({position: this.currentPosition});
    this.setPosition();
  }

  /**
   * Setup popover behaviors on opening.
   */
  @Watch("open")
  onOpen(): void {
    cancelAnimationFrame(this.animationFrameRequestId);

    if (this.open) {
      const setPosition = (): void => {
        if (this.open) {
          this.setPosition();
          this.animationFrameRequestId = requestAnimationFrame(setPosition);
        }
      };

      // call `setPosition` after a tick to ensure the DOM is ready and sizes are available
      setTimeout(() => {
        setPosition();
      }, 0);
    }

    this.openChange.emit({open: this.open});
  }

  // Clockwise order of positions.
  private static readonly positionOrder: PopoverPosition[] = [
    PopoverPosition.TOP_RIGHT,
    PopoverPosition.TOP,
    PopoverPosition.TOP_LEFT,
    PopoverPosition.RIGHT_BOTTOM,
    PopoverPosition.RIGHT,
    PopoverPosition.RIGHT_TOP,
    PopoverPosition.BOTTOM_LEFT,
    PopoverPosition.BOTTOM,
    PopoverPosition.BOTTOM_RIGHT,
    PopoverPosition.LEFT_TOP,
    PopoverPosition.LEFT,
    PopoverPosition.LEFT_BOTTOM,
  ] as const;

  /**
   * Helper functions for space calculation
   */
  private hasCenteredHorizontalSpace(
    availableLeft: number,
    availableRight: number,
    hostWidth: number,
    boundWidth: number,
    offsetModifier: OffsetModifier
  ): boolean {
    const requiredSpace = (hostWidth - boundWidth) * (1 - offsetModifier);

    return (
      availableLeft >= requiredSpace - this.spaceTolerance && availableRight >= requiredSpace - this.spaceTolerance
    );
  }

  private hasCenteredVerticalSpace(
    availableTop: number,
    availableBottom: number,
    hostHeight: number,
    boundHeight: number,
    offsetModifier: OffsetModifier
  ): boolean {
    const requiredSpace = (hostHeight - boundHeight) * (1 - offsetModifier);

    return (
      availableTop >= requiredSpace - this.spaceTolerance && availableBottom >= requiredSpace - this.spaceTolerance
    );
  }

  private hasOffsetSpace(
    availableSpace: number,
    hostSize: number,
    boundSize: number,
    offsetModifier: OffsetModifier
  ): boolean {
    return availableSpace >= hostSize - boundSize * (1 - offsetModifier) - this.spaceTolerance;
  }

  /**
   * Given a desired position and available space around the bound element, returns the best position
   * that fits the popover, trying all positions if needed.
   * Takes into account offsetModifier for centering.
   * @param desiredPosition The desired position of the popover.
   * @param availableSpace The available space around the bound element.
   * @param boundElemSizes The sizes of the bound element.
   * @param offsetModifier The modifier to apply to the offset for centering.
   */
  private getOptimalPopoverPosition(
    desiredPosition: PopoverPosition,
    availableSpace: Offsets,
    boundElemSizes: ElementSizes,
    offsetModifier: OffsetModifier
  ): PopoverPosition {
    const hostWidth = this.host.offsetWidth;
    const hostHeight = this.host.offsetHeight;

    // Check if the desired position has enough space
    const fits = (pos: PopoverPosition): boolean => {
      switch (pos) {
        case PopoverPosition.TOP:
          return (
            availableSpace.top >= hostHeight &&
            this.hasCenteredHorizontalSpace(
              availableSpace.left,
              availableSpace.right,
              hostWidth,
              boundElemSizes.width,
              offsetModifier
            )
          );

        case PopoverPosition.TOP_RIGHT:
          return (
            availableSpace.top >= hostHeight &&
            this.hasOffsetSpace(availableSpace.right, hostWidth, boundElemSizes.width, offsetModifier)
          );

        case PopoverPosition.TOP_LEFT:
          return (
            availableSpace.top >= hostHeight &&
            this.hasOffsetSpace(availableSpace.left, hostWidth, boundElemSizes.width, offsetModifier)
          );

        case PopoverPosition.RIGHT:
          return (
            availableSpace.right >= hostWidth &&
            this.hasCenteredVerticalSpace(
              availableSpace.top,
              availableSpace.bottom,
              hostHeight,
              boundElemSizes.height,
              offsetModifier
            )
          );

        case PopoverPosition.RIGHT_BOTTOM:
          return (
            availableSpace.right >= hostWidth &&
            this.hasOffsetSpace(availableSpace.bottom, hostHeight, boundElemSizes.height, offsetModifier)
          );

        case PopoverPosition.RIGHT_TOP:
          return (
            availableSpace.right >= hostWidth &&
            this.hasOffsetSpace(availableSpace.top, hostHeight, boundElemSizes.height, offsetModifier)
          );

        case PopoverPosition.BOTTOM:
          return (
            availableSpace.bottom >= hostHeight &&
            this.hasCenteredHorizontalSpace(
              availableSpace.left,
              availableSpace.right,
              hostWidth,
              boundElemSizes.width,
              offsetModifier
            )
          );

        case PopoverPosition.BOTTOM_LEFT:
          return (
            availableSpace.bottom >= hostHeight &&
            this.hasOffsetSpace(availableSpace.left, hostWidth, boundElemSizes.width, offsetModifier)
          );

        case PopoverPosition.BOTTOM_RIGHT:
          return (
            availableSpace.bottom >= hostHeight &&
            this.hasOffsetSpace(availableSpace.right, hostWidth, boundElemSizes.width, offsetModifier)
          );

        case PopoverPosition.LEFT:
          return (
            availableSpace.left >= hostWidth &&
            this.hasCenteredVerticalSpace(
              availableSpace.top,
              availableSpace.bottom,
              hostHeight,
              boundElemSizes.height,
              offsetModifier
            )
          );

        case PopoverPosition.LEFT_TOP:
          return (
            availableSpace.left >= hostWidth &&
            this.hasOffsetSpace(availableSpace.top, hostHeight, boundElemSizes.height, offsetModifier)
          );

        case PopoverPosition.LEFT_BOTTOM:
          return (
            availableSpace.left >= hostWidth &&
            this.hasOffsetSpace(availableSpace.bottom, hostHeight, boundElemSizes.height, offsetModifier)
          );

        default:
          return false;
      }
    };

    // Check desired position first
    if (fits(desiredPosition)) {
      return desiredPosition;
    }

    // Find position index and create rotation starting from next position
    const positions = ZPopover.positionOrder;
    const startIndex = positions.indexOf(desiredPosition);

    if (startIndex === -1) {
      return desiredPosition; // fallback if position not found
    }

    // Try all other positions starting from the next one
    for (let i = 1; i < positions.length; i++) {
      const posIndex = (startIndex + i) % positions.length;
      const pos = positions[posIndex];
      if (fits(pos)) {
        return pos;
      }
    }

    // If no position fits, find the best fallback based on available space
    return this.findBestFallbackPosition(availableSpace);
  }

  /**
   * Find the best fallback position based on available space when no position fits perfectly
   */
  private findBestFallbackPosition(availableSpace: Offsets): PopoverPosition {
    // Determine the directions with the most space
    const bestHorizontalDirection =
      availableSpace.right >= availableSpace.left ? PopoverPosition.RIGHT : PopoverPosition.LEFT;

    const bestVerticalDirection =
      availableSpace.bottom >= availableSpace.top ? PopoverPosition.BOTTOM : PopoverPosition.TOP;

    // Choose the main direction based on which has more space
    const maxHorizontalSpace = Math.max(availableSpace.right, availableSpace.left);
    const maxVerticalSpace = Math.max(availableSpace.bottom, availableSpace.top);

    const mainDirection = maxVerticalSpace >= maxHorizontalSpace ? bestVerticalDirection : bestHorizontalDirection;

    // Check if secondary direction is necessary
    // Only add secondary direction if the difference between min and max in that direction is at least double
    let needsSecondaryDirection = false;

    if (mainDirection === bestVerticalDirection) {
      // Main direction is vertical, check horizontal space difference
      const minHorizontalSpace = Math.min(availableSpace.right, availableSpace.left);
      needsSecondaryDirection = maxHorizontalSpace >= minHorizontalSpace * 2;
    } else {
      // Main direction is horizontal, check vertical space difference
      const minVerticalSpace = Math.min(availableSpace.bottom, availableSpace.top);
      needsSecondaryDirection = maxVerticalSpace >= minVerticalSpace * 2;
    }

    if (!needsSecondaryDirection) {
      return mainDirection;
    }

    const secondaryDirection =
      mainDirection === bestVerticalDirection ? bestHorizontalDirection : bestVerticalDirection;

    // Create a combined position (e.g., "bottom_right")
    return `${mainDirection}_${secondaryDirection}` as PopoverPosition;
  }

  /**
   * Calculate available space around the bound element
   */
  private calculateAvailableSpace(
    boundElementRect: Offsets & ElementSizes,
    scrollContainer: HTMLElement,
    scrollingBoundingRect: DOMRect
  ): {top: number; right: number; bottom: number; left: number} {
    const top = boundElementRect.top - scrollContainer.scrollTop;
    const bottom =
      scrollingBoundingRect.height - (boundElementRect.top + boundElementRect.height) + scrollContainer.scrollTop;
    const left = boundElementRect.left - scrollContainer.scrollLeft;
    const right =
      scrollingBoundingRect.width - (boundElementRect.left + boundElementRect.width) + scrollContainer.scrollLeft;

    const overflowBottom = Math.max(0, scrollingBoundingRect.top + scrollingBoundingRect.height - window.innerHeight);
    const overflowRight = Math.max(0, scrollingBoundingRect.left + scrollingBoundingRect.width - window.innerWidth);

    return {
      top: Math.min(top, top + scrollingBoundingRect.top),
      bottom: Math.min(bottom, bottom - overflowBottom),
      left: Math.min(left, left + scrollingBoundingRect.left),
      right: Math.min(right, right - overflowRight),
    };
  }

  /**
   * Calculate relative offsets for positioning
   */
  private calculateRelativeOffsets(
    boundElementRect: Offsets,
    relativeBoundingRect: Offsets
  ): {top: number; right: number; bottom: number; left: number} {
    return {
      top: boundElementRect.top - relativeBoundingRect.top,
      right: boundElementRect.right - relativeBoundingRect.right,
      bottom: boundElementRect.bottom - relativeBoundingRect.bottom,
      left: boundElementRect.left - relativeBoundingRect.left,
    };
  }

  /**
   * Apply positioning styles based on position
   */
  private applyPositionStyles(
    position: PopoverPosition,
    style: CSSStyleDeclaration,
    offsets: Offsets,
    boundElementSizes: ElementSizes,
    availableSpace: Offsets,
    offsetModifier: OffsetModifier,
    arrowModifier: number
  ): void {
    const distanceFromBound = 8; // 8px is the distance of the popover from the bound element
    // Reset all positioning properties
    style.top = "auto";
    style.right = "auto";
    style.bottom = "auto";
    style.left = "auto";
    style.maxWidth = "";
    style.maxHeight = "";

    switch (position) {
      case PopoverPosition.TOP:
      case PopoverPosition.TOP_RIGHT:
        style.bottom = `${offsets.bottom + boundElementSizes.height}px`;
        style.left = `${offsets.left + boundElementSizes.width * offsetModifier - (position === PopoverPosition.TOP_RIGHT ? arrowModifier : 0)}px`;
        style.maxHeight = `${availableSpace.top - distanceFromBound}px`;
        if (position === PopoverPosition.TOP_RIGHT) {
          style.maxWidth = `${availableSpace.right + boundElementSizes.width * offsetModifier}px`;
        }
        break;

      case PopoverPosition.TOP_LEFT:
        style.right = `${offsets.right + boundElementSizes.width * offsetModifier - arrowModifier}px`;
        style.bottom = `${offsets.bottom + boundElementSizes.height}px`;
        style.maxWidth = `${availableSpace.left}px`;
        style.maxHeight = `${availableSpace.top - distanceFromBound}px`;
        break;

      case PopoverPosition.BOTTOM:
      case PopoverPosition.BOTTOM_RIGHT:
        style.top = `${offsets.top + boundElementSizes.height}px`;
        style.left = `${offsets.left + boundElementSizes.width * offsetModifier - (position === PopoverPosition.BOTTOM_RIGHT ? arrowModifier : 0)}px`;
        style.maxHeight = `${availableSpace.bottom - distanceFromBound}px`;
        if (position === PopoverPosition.BOTTOM_RIGHT) {
          style.maxWidth = `${availableSpace.right + boundElementSizes.width * offsetModifier}px`;
        }
        break;

      case PopoverPosition.BOTTOM_LEFT:
        style.top = `${offsets.top + boundElementSizes.height}px`;
        style.right = `${offsets.right + boundElementSizes.width * offsetModifier - arrowModifier}px`;
        style.maxWidth = `${availableSpace.left}px`;
        style.maxHeight = `${availableSpace.bottom - distanceFromBound}px`;
        break;

      case PopoverPosition.RIGHT:
      case PopoverPosition.RIGHT_BOTTOM:
        style.top = `${offsets.top + boundElementSizes.height * offsetModifier - (position === PopoverPosition.RIGHT_BOTTOM ? arrowModifier : 0)}px`;
        style.left = `${offsets.left + boundElementSizes.width}px`;
        style.maxWidth = `${availableSpace.right - distanceFromBound}px`;
        if (position === PopoverPosition.RIGHT) {
          style.maxHeight = `${Math.min(availableSpace.top + availableSpace.bottom + boundElementSizes.height, window.innerHeight - 20)}px`;
        } else {
          style.maxHeight = `${availableSpace.bottom + boundElementSizes.height * offsetModifier}px`;
        }
        break;

      case PopoverPosition.RIGHT_TOP:
        style.bottom = `${offsets.bottom + boundElementSizes.height * offsetModifier - arrowModifier}px`;
        style.left = `${offsets.left + boundElementSizes.width}px`;
        style.maxWidth = `${availableSpace.right - distanceFromBound}px`;
        if (position === PopoverPosition.RIGHT_TOP) {
          style.maxHeight = `${availableSpace.top + boundElementSizes.height * offsetModifier}px`;
        }
        break;

      case PopoverPosition.LEFT:
      case PopoverPosition.LEFT_BOTTOM:
        style.top = `${offsets.top + boundElementSizes.height * offsetModifier - (position === PopoverPosition.LEFT_BOTTOM ? arrowModifier : 0)}px`;
        style.right = `${offsets.right + boundElementSizes.width}px`;
        style.maxWidth = `${availableSpace.left - distanceFromBound}px`;
        if (position === PopoverPosition.LEFT_BOTTOM) {
          style.maxHeight = `${availableSpace.bottom + boundElementSizes.height * offsetModifier}px`;
        }
        break;

      case PopoverPosition.LEFT_TOP:
        style.right = `${offsets.right + boundElementSizes.width}px`;
        style.bottom = `${offsets.bottom + boundElementSizes.height * offsetModifier - arrowModifier}px`;
        style.maxWidth = `${availableSpace.left - distanceFromBound}px`;
        if (position === PopoverPosition.LEFT_TOP) {
          style.maxHeight = `${availableSpace.top + boundElementSizes.height * offsetModifier}px`;
        }
        break;
    }
  }

  /**
   * Set the position of the popover.
   */
  private setPosition(): void {
    let boundElement: HTMLElement;
    if (typeof this.bindTo === "string") {
      boundElement = this.host.ownerDocument.querySelector(this.bindTo) as HTMLElement;
    } else if (this.bindTo) {
      boundElement = this.bindTo;
    } else {
      boundElement = this.host.parentElement as HTMLElement;
    }

    if (!boundElement) {
      return;
    }

    const scrollContainer = findScrollableParent(boundElement) as HTMLElement;
    const scrollingBoundingRect = scrollContainer.getBoundingClientRect();
    const offsetContainer = this.host.offsetParent as HTMLElement;

    const relativeBoundingRect = offsetContainer
      ? computeOffset(offsetContainer, scrollContainer)
      : {top: 0, right: 0, bottom: 0, left: 0};
    const boundElementRect = computeOffset(boundElement, scrollContainer);

    const availableSpace = this.calculateAvailableSpace(boundElementRect, scrollContainer, scrollingBoundingRect);
    const offsets = this.calculateRelativeOffsets(boundElementRect, relativeBoundingRect);
    const offsetModifier = this.center ? 0.5 : 0;
    const arrowModifier = this.showArrow && this.center ? 8 : 0; // 8px is the distance of the arrow center from the edge of the popover

    const position = this.getOptimalPopoverPosition(
      this.position,
      availableSpace,
      {width: boundElementRect.width, height: boundElementRect.height},
      offsetModifier
    );

    const style = this.host.style;
    this.applyPositionStyles(position, style, offsets, boundElementRect, availableSpace, offsetModifier, arrowModifier);

    this.currentPosition = position;
  }

  componentWillLoad(): void {
    this.validatePosition(this.position);
    this.onOpen();
  }

  componentDidLoad(): void {
    this.setPosition();
  }

  disconnectedCallback(): void {
    cancelAnimationFrame(this.animationFrameRequestId);
  }

  render(): HTMLZPopoverElement {
    return (
      <Host current-position={this.currentPosition}>
        <slot></slot>
      </Host>
    );
  }
}

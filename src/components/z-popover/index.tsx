import {Component, Element, Event, EventEmitter, Host, Listen, Prop, State, Watch, h} from "@stencil/core";
import {Device, KeyboardCode, PopoverPosition} from "../../beans";
import {containsElement, findScrollableParent, getDevice, isElementVisibleInContainer} from "../../utils/utils";

/** Centering offset modifier. 0 for no offset, 0.5 for centering. */
type OffsetModifier = 0 | 0.5;
type Offsets = {top: number; right: number; bottom: number; left: number};

/**
 * Popover component.
 * This component displays a popover bound to an element.
 * It supports various positions and can automatically adjust it based on available space, accounting for scrollable containers.
 *
 * Notes:
 * - If positioning has an odd behavior, consider manually adjusting the size of the slotted elements (using `width`, `height`, `max-width`, `max-height`, etc...) when its content is "fluid" (like text), because it can interfere with the position calculation (for example a long text on one single line can be bigger than the available space, letting the algorithm think the popover doesn't fits).
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

  @Element() host: HTMLZPopoverElement;

  // Clockwise order of positions.
  private static readonly positionOrder: PopoverPosition[] = [
    PopoverPosition.TOP,
    PopoverPosition.TOP_RIGHT,
    PopoverPosition.TOP_LEFT,
    PopoverPosition.RIGHT,
    PopoverPosition.RIGHT_BOTTOM,
    PopoverPosition.RIGHT_TOP,
    PopoverPosition.BOTTOM,
    PopoverPosition.BOTTOM_LEFT,
    PopoverPosition.BOTTOM_RIGHT,
    PopoverPosition.LEFT,
    PopoverPosition.LEFT_TOP,
    PopoverPosition.LEFT_BOTTOM,
  ] as const;

  private animationFrameRequestId?: number;
  /** space tolerance for space calculations */
  private readonly spaceTolerance = 3;
  /** The element bound to the popover. */
  private boundElement?: HTMLElement;
  /** Cached available space around the bound element to avoid unnecessary recalculations */
  private cachedAvailableSpace?: Offsets;
  /** Last bounding rect of the bound element to detect changes and eventually invalidate the caches. */
  private lastBoundRect?: DOMRect;

  /**
   * Fired when the position changes.
   */
  @Event()
  positionChange: EventEmitter;

  /**
   * Open change event.
   */
  @Event()
  openChange: EventEmitter;

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
   */
  @Listen("click", {target: "body", capture: true})
  handleOutsideClick(e: MouseEvent): void {
    const target = e.target as Element;
    if (!this.closable || !this.open || containsElement(this.host, target)) {
      return;
    }

    if (containsElement(this.boundElement, target)) {
      // stop propagation if the click was on the trigger element to prevent close and reopen glitches
      e.stopPropagation();
    }
    this.open = false;
  }

  @Watch("position")
  validatePosition(newValue: PopoverPosition): void {
    if (!Object.values(PopoverPosition).includes(newValue as PopoverPosition) || newValue === PopoverPosition.AUTO) {
      newValue = PopoverPosition.TOP;
      this.position = newValue;
    }
    this.currentPosition = newValue;
    if (this.open) {
      this.setPosition();
    }
  }

  /**
   * Setup popover behaviors when `open` changes.
   */
  @Watch("open")
  onOpen(): void {
    cancelAnimationFrame(this.animationFrameRequestId);
    this.openChange.emit({open: this.open});
    if (!this.open) {
      return;
    }

    const setPosition = (): void => {
      if (!this.open) {
        return;
      }

      this.setPosition();
      this.animationFrameRequestId = requestAnimationFrame(setPosition);
    };

    // call `setPosition` after a tick to ensure the DOM is ready and sizes are available
    setTimeout(() => {
      setPosition();
    }, 0);
  }

  @Watch("bindTo")
  onBindingChange(): void {
    this.findBoundElement();
  }

  /** Returns the offset modifier to use in calculations to align the popover with the bound element. */
  private get offsetModifier(): OffsetModifier {
    return this.center ? 0.5 : 0;
  }

  private findBoundElement(): void {
    if (typeof this.bindTo === "string") {
      this.boundElement = this.host.ownerDocument.querySelector(this.bindTo) as HTMLElement;
    } else if (this.bindTo) {
      this.boundElement = this.bindTo;
    } else {
      this.boundElement = this.host.parentElement as HTMLElement;
    }
  }

  /**
   * Check if element has enough space to the right and left to be centered.
   * Used for `TOP` and `BOTTOM` position.
   * When `center` is not enabled, only one side needs to be checked and `RIGHT` is the default.
   */
  private hasCenteredHorizontalSpace(
    availableLeft: number,
    availableRight: number,
    hostWidth: number,
    boundElementWidth: number
  ): boolean {
    const requiredSideSpace = (hostWidth - boundElementWidth) * (1 - this.offsetModifier);

    if (!this.center) {
      return availableRight >= requiredSideSpace - this.spaceTolerance;
    }

    return (
      availableRight >= requiredSideSpace - this.spaceTolerance &&
      availableLeft >= requiredSideSpace - this.spaceTolerance
    );
  }

  /**
   * Check if element has enough space to the top and bottom to be centered.
   * Used for `RIGHT` and `LEFT` position.
   * When `center` is not enabled, only one side needs to be checked and `BOTTOM` is the default.
   */
  private hasCenteredVerticalSpace(
    availableTop: number,
    availableBottom: number,
    hostHeight: number,
    boundElementHeight: number
  ): boolean {
    const requiredSideSpace = (hostHeight - boundElementHeight) * (1 - this.offsetModifier);

    if (!this.center) {
      return availableBottom >= requiredSideSpace - this.spaceTolerance;
    }

    return (
      availableTop >= requiredSideSpace - this.spaceTolerance &&
      availableBottom >= requiredSideSpace - this.spaceTolerance
    );
  }

  /**
   * Check if there is enough space in the given direction to fit the popover.
   * Used for composed positions like TOP_RIGHT, LEFT_BOTTOM, etc.
   */
  private hasEnoughSideSpace(
    availableSpace: number,
    hostSize: number,
    boundElementSize: number,
    offsetModifier: OffsetModifier
  ): boolean {
    return availableSpace >= hostSize - boundElementSize * (1 - offsetModifier) - this.spaceTolerance;
  }

  /**
   * Given a desired position and available space around the bound element, returns the best position
   * that fits the popover, trying all positions if needed.
   * Takes into account offsetModifier for centering.
   * @param desiredPosition The desired position of the popover.
   * @param availableSpace The available space around the bound element.
   */
  private getOptimalPopoverPosition(desiredPosition: PopoverPosition, availableSpace: Offsets): PopoverPosition {
    const hostWidth = this.host.offsetWidth;
    const hostHeight = this.host.offsetHeight;
    const boundElementWidth = this.boundElement.getBoundingClientRect().width;
    const boundElementHeight = this.boundElement.getBoundingClientRect().height;
    const offsetModifier = this.offsetModifier;

    /** Check if there is enough space to fit the popover in the desired position */
    const fits = (pos: PopoverPosition): boolean => {
      switch (pos) {
        case PopoverPosition.TOP:
          return (
            availableSpace.top >= hostHeight - this.spaceTolerance &&
            this.hasCenteredHorizontalSpace(availableSpace.left, availableSpace.right, hostWidth, boundElementWidth)
          );
        case PopoverPosition.TOP_RIGHT:
          return (
            availableSpace.top >= hostHeight &&
            this.hasEnoughSideSpace(availableSpace.right, hostWidth, boundElementWidth, offsetModifier)
          );
        case PopoverPosition.TOP_LEFT:
          return (
            availableSpace.top >= hostHeight &&
            this.hasEnoughSideSpace(availableSpace.left, hostWidth, boundElementWidth, offsetModifier)
          );
        case PopoverPosition.RIGHT:
          return (
            availableSpace.right >= hostWidth &&
            this.hasCenteredVerticalSpace(availableSpace.top, availableSpace.bottom, hostHeight, boundElementHeight)
          );
        case PopoverPosition.RIGHT_BOTTOM:
          return (
            availableSpace.right >= hostWidth &&
            this.hasEnoughSideSpace(availableSpace.bottom, hostHeight, boundElementHeight, offsetModifier)
          );
        case PopoverPosition.RIGHT_TOP:
          return (
            availableSpace.right >= hostWidth &&
            this.hasEnoughSideSpace(availableSpace.top, hostHeight, boundElementHeight, offsetModifier)
          );
        case PopoverPosition.BOTTOM:
          return (
            availableSpace.bottom >= hostHeight &&
            this.hasCenteredHorizontalSpace(availableSpace.left, availableSpace.right, hostWidth, boundElementWidth)
          );
        case PopoverPosition.BOTTOM_LEFT:
          return (
            availableSpace.bottom >= hostHeight &&
            this.hasEnoughSideSpace(availableSpace.left, hostWidth, boundElementWidth, offsetModifier)
          );
        case PopoverPosition.BOTTOM_RIGHT:
          return (
            availableSpace.bottom >= hostHeight &&
            this.hasEnoughSideSpace(availableSpace.right, hostWidth, boundElementWidth, offsetModifier)
          );
        case PopoverPosition.LEFT:
          return (
            availableSpace.left >= hostWidth &&
            this.hasCenteredVerticalSpace(availableSpace.top, availableSpace.bottom, hostHeight, boundElementHeight)
          );
        case PopoverPosition.LEFT_TOP:
          return (
            availableSpace.left >= hostWidth &&
            this.hasEnoughSideSpace(availableSpace.top, hostHeight, boundElementHeight, offsetModifier)
          );
        case PopoverPosition.LEFT_BOTTOM:
          return (
            availableSpace.left >= hostWidth &&
            this.hasEnoughSideSpace(availableSpace.bottom, hostHeight, boundElementHeight, offsetModifier)
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
    // Determine which horizontal and vertical direction has the most available space
    const bestHorizontalDirection =
      availableSpace.right >= availableSpace.left ? PopoverPosition.RIGHT : PopoverPosition.LEFT;

    const bestVerticalDirection =
      availableSpace.bottom >= availableSpace.top ? PopoverPosition.BOTTOM : PopoverPosition.TOP;

    // Choose the main direction based on which axis has more space overall
    const maxHorizontalSpace = Math.max(availableSpace.right, availableSpace.left);
    const maxVerticalSpace = Math.max(availableSpace.bottom, availableSpace.top);

    const mainDirection = maxVerticalSpace >= maxHorizontalSpace ? bestVerticalDirection : bestHorizontalDirection;

    // Decide if a secondary direction is needed
    // Only add a secondary direction if the difference between min and max in that axis is at least double
    let needsSecondaryDirection = false;

    if (mainDirection === bestVerticalDirection) {
      // If main direction is vertical, check horizontal space difference
      const minHorizontalSpace = Math.min(availableSpace.right, availableSpace.left);
      needsSecondaryDirection = maxHorizontalSpace >= minHorizontalSpace * 2;
    } else {
      // If main direction is horizontal, check vertical space difference
      const minVerticalSpace = Math.min(availableSpace.bottom, availableSpace.top);
      needsSecondaryDirection = maxVerticalSpace >= minVerticalSpace * 2;
    }

    if (!needsSecondaryDirection) {
      return mainDirection;
    }

    const secondaryDirection =
      mainDirection === bestVerticalDirection ? bestHorizontalDirection : bestVerticalDirection;

    // Return a combined position (e.g., "bottom_right")
    return `${mainDirection}_${secondaryDirection}` as PopoverPosition;
  }

  /**
   * Calculate available space around the element bound with the popover, based on its nearest scrollable ancestor.
   *
   * Calculations for `right` and `bottom` can be a little bit confusing because `boundingRect.right` and `bottom` may not be what you expect...
   * For more information see the explanation in the docs.
   * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#return_value
   */
  private calculateAvailableSpace(): Offsets {
    const boundElementRect = this.boundElement.getBoundingClientRect();

    if (
      this.lastBoundRect &&
      this.lastBoundRect.x === boundElementRect.x &&
      this.lastBoundRect.y === boundElementRect.y &&
      this.lastBoundRect.width === boundElementRect.width &&
      this.lastBoundRect.height === boundElementRect.height &&
      this.cachedAvailableSpace
    ) {
      // If the bound element's rect hasn't changed, return the cached rect
      return this.cachedAvailableSpace;
    }

    this.lastBoundRect = boundElementRect;
    const scrollableParent = findScrollableParent(this.boundElement);
    const scrollableParentRect = scrollableParent.getBoundingClientRect();
    const hasNestedScrollableParent = scrollableParent !== this.boundElement.ownerDocument.documentElement;
    const documentWidth = this.boundElement.ownerDocument.documentElement.clientWidth;
    const documentHeight = this.boundElement.ownerDocument.documentElement.clientHeight;
    const safeSpace = 8; // extra space to avoid popover being too close to the edges

    // These deltas represent the offset between the scrollable parent and the viewport.
    // They are used to adjust the available space calculations when the scrollable parent is not the document or body,
    // to try to fit the popover inside the scrollable parent.
    const deltaTop = hasNestedScrollableParent ? scrollableParentRect.top : 0;
    const deltaRight = hasNestedScrollableParent ? documentWidth - scrollableParentRect.right : 0;
    const deltaBottom = hasNestedScrollableParent ? documentHeight - scrollableParentRect.bottom : 0;
    const deltaLeft = hasNestedScrollableParent ? scrollableParentRect.left : 0;

    this.cachedAvailableSpace = {
      top: boundElementRect.top - deltaTop - safeSpace,
      right: documentWidth - boundElementRect.right - deltaRight - safeSpace,
      bottom: documentHeight - boundElementRect.bottom - deltaBottom - safeSpace,
      left: boundElementRect.left - deltaLeft - safeSpace,
    };

    return this.cachedAvailableSpace;
  }

  /**
   * Calculate the space around an element relative to the viewport.
   */
  private calculateElementOffsets(element: HTMLElement): Offsets {
    const elementRect = element.getBoundingClientRect();
    const viewportWidth = element.ownerDocument.documentElement.clientWidth;
    const viewportHeight = element.ownerDocument.documentElement.clientHeight;

    return {
      top: elementRect.top,
      right: viewportWidth - elementRect.right,
      bottom: viewportHeight - elementRect.bottom,
      left: elementRect.left,
    };
  }

  /**
   * Apply positioning styles based on passed position.
   */
  private applyPositionStyles(position: PopoverPosition, availableSpace: Offsets): void {
    const boundElementWidth = this.boundElement.offsetWidth;
    const boundElementHeight = this.boundElement.offsetHeight;
    /** Distance between the popover and the bound element */
    const distanceFromBound = 8;
    const offsetModifier = this.offsetModifier;
    /** Distance between the arrow center and the popover edge. Needed to align the center of the arrow with the center of the bound element when `showArrow` and `center` are enabled. */
    const arrowModifier = this.showArrow && this.center ? 8 : 0;
    const hostStyle = this.host.style;
    const boundElementOffsets = this.calculateElementOffsets(this.boundElement);

    let maxWidth: number;
    let maxHeight: number;

    switch (position) {
      case PopoverPosition.TOP:
      case PopoverPosition.TOP_RIGHT:
        hostStyle.bottom = `${boundElementOffsets.bottom + boundElementHeight}px`;
        hostStyle.left = `${boundElementOffsets.left + boundElementWidth * offsetModifier - (position === PopoverPosition.TOP_RIGHT ? arrowModifier : 0)}px`;
        maxHeight = availableSpace.top - distanceFromBound;
        if (position === PopoverPosition.TOP_RIGHT) {
          maxWidth = availableSpace.right + boundElementWidth * offsetModifier;
        }
        break;

      case PopoverPosition.TOP_LEFT:
        hostStyle.right = `${boundElementOffsets.right + boundElementWidth * offsetModifier - arrowModifier}px`;
        hostStyle.bottom = `${boundElementOffsets.bottom + boundElementHeight}px`;
        maxWidth = availableSpace.left + boundElementWidth * offsetModifier;
        maxHeight = availableSpace.top - distanceFromBound;
        break;

      case PopoverPosition.BOTTOM:
      case PopoverPosition.BOTTOM_RIGHT:
        hostStyle.top = `${boundElementOffsets.top + boundElementHeight}px`;
        hostStyle.left = `${boundElementOffsets.left + boundElementWidth * offsetModifier - (position === PopoverPosition.BOTTOM_RIGHT ? arrowModifier : 0)}px`;
        maxHeight = availableSpace.bottom - distanceFromBound;
        if (position === PopoverPosition.BOTTOM_RIGHT) {
          maxWidth = availableSpace.right + boundElementWidth * offsetModifier;
        }
        break;

      case PopoverPosition.BOTTOM_LEFT:
        hostStyle.top = `${boundElementOffsets.top + boundElementHeight}px`;
        hostStyle.right = `${boundElementOffsets.right + boundElementWidth * offsetModifier - arrowModifier}px`;
        maxWidth = availableSpace.left + boundElementWidth * offsetModifier;
        maxHeight = availableSpace.bottom - distanceFromBound;
        break;

      case PopoverPosition.RIGHT:
      case PopoverPosition.RIGHT_BOTTOM:
        hostStyle.top = `${boundElementOffsets.top + boundElementHeight * offsetModifier - (position === PopoverPosition.RIGHT_BOTTOM ? arrowModifier : 0)}px`;
        hostStyle.left = `${boundElementOffsets.left + boundElementWidth}px`;
        maxWidth = availableSpace.right - distanceFromBound;
        if (position === PopoverPosition.RIGHT) {
          maxHeight = availableSpace.top + availableSpace.bottom + boundElementHeight;
        } else {
          maxHeight = availableSpace.bottom + boundElementHeight * offsetModifier;
        }
        break;

      case PopoverPosition.RIGHT_TOP:
        hostStyle.bottom = `${boundElementOffsets.bottom + boundElementHeight * offsetModifier - arrowModifier}px`;
        hostStyle.left = `${boundElementOffsets.left + boundElementWidth}px`;
        maxWidth = availableSpace.right - distanceFromBound;
        maxHeight = availableSpace.top + boundElementHeight * offsetModifier;
        break;

      case PopoverPosition.LEFT:
      case PopoverPosition.LEFT_BOTTOM:
        hostStyle.top = `${boundElementOffsets.top + boundElementHeight * offsetModifier - (position === PopoverPosition.LEFT_BOTTOM ? arrowModifier : 0)}px`;
        hostStyle.right = `${boundElementOffsets.right + boundElementWidth}px`;
        maxWidth = availableSpace.left - distanceFromBound;
        if (position === PopoverPosition.LEFT_BOTTOM) {
          maxHeight = availableSpace.bottom + boundElementHeight * offsetModifier;
        }
        break;

      case PopoverPosition.LEFT_TOP:
        hostStyle.right = `${boundElementOffsets.right + boundElementWidth}px`;
        hostStyle.bottom = `${boundElementOffsets.bottom + boundElementHeight * offsetModifier - arrowModifier}px`;
        maxWidth = availableSpace.left - distanceFromBound;
        maxHeight = availableSpace.top + boundElementHeight * offsetModifier;
        break;
    }

    if (getDevice() !== Device.MOBILE) {
      // Only force max sizes on non-mobile viewports
      hostStyle.maxWidth = maxWidth ? `${maxWidth}px` : "";
      hostStyle.maxHeight = maxHeight ? `${maxHeight}px` : "";
    }
  }

  /**
   * Set the position of the popover.
   */
  private setPosition(): void {
    if (!this.boundElement) {
      return;
    }

    if (!isElementVisibleInContainer(this.boundElement, findScrollableParent(this.boundElement))) {
      // If the bound element is not visible, hide the popover too
      this.open = false;

      return;
    }

    Object.assign(this.host.style, {
      // Reset all positioning properties
      top: "auto",
      right: "auto",
      bottom: "auto",
      left: "auto",
      maxWidth: "",
      maxHeight: "",
      // Set initial visibility to hidden while calculating position...
      visibility: "hidden",
    });

    const availableSpace = this.calculateAvailableSpace();
    const position = this.getOptimalPopoverPosition(this.position, availableSpace);

    this.applyPositionStyles(position, availableSpace);
    this.currentPosition = position;
    this.positionChange.emit({position: this.currentPosition});

    // ...then restore the visibility
    this.host.style.visibility = "visible";
  }

  componentWillLoad(): void {
    this.validatePosition(this.position);
  }

  componentDidLoad(): void {
    this.findBoundElement();
    if (this.open) {
      this.onOpen();
    }
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

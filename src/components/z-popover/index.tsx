import {Component, Element, Event, EventEmitter, Host, Listen, Prop, State, Watch, h} from "@stencil/core";
import {KeyboardCode, PopoverPosition} from "../../beans";

// const DOCUMENT_ELEMENT = document.documentElement;

type Offsets = {top: number; right: number; bottom: number; left: number};
// type ElementSizes = {width: number; height: number};
/** Centering offset modifier. 0 for no offset, 0.5 for centering. */
type OffsetModifier = 0 | 0.5;

// function getParentElement(element: Element): Element {
//   if (element.parentNode === element.shadowRoot) {
//     return element.shadowRoot.host;
//   }

//   return element.parentElement;
// }

/**
 * Find all scrollable parents of an element (nearest first) and include DOCUMENT_ELEMENT as last fallback.
 * This returns an array of HTMLElements ordered from the nearest scrollable parent to the documentElement.
 */
// function findScrollableParents(element: Element): HTMLElement[] {
//   const parents: HTMLElement[] = [];
//   let parent = getParentElement(element);

//   while (parent && parent !== DOCUMENT_ELEMENT) {
//     const style = window.getComputedStyle(parent);
//     const {overflow, overflowX, overflowY} = style;

//     const isHidden = overflow === "hidden" || overflowY === "hidden" || overflowX === "hidden";

//     const isScrollable =
//       (parent.scrollHeight > parent.clientHeight && overflow !== "visible" && overflowY !== "visible") ||
//       (parent.scrollWidth > parent.clientWidth && overflow !== "visible" && overflowX !== "visible");

//     if (isHidden || isScrollable) {
//       parents.push(parent as HTMLElement);
//     }

//     parent = getParentElement(parent);
//   }

//   // Always include documentElement as the last bounding container
//   parents.push(DOCUMENT_ELEMENT as HTMLElement);

//   return parents;
// }

/**
 * Compute element offsets and sizes relative to an optional offset parent.
 *
 * This function returns the computed top/left position of the provided element
 * by summing offsetLeft/offsetTop up the chain of offsetParents until an
 * optional `relativeOffsetParent` is reached (or there are no more
 * offsetParents). It also accounts for CSS `transform` translations when
 * DOMMatrix is available and handles the document body specially to consider
 * children margins and page scroll.
 *
 * Returns an object with { top, right, bottom, left, width, height } where
 * right/bottom are computed relative to the final parent width/height.
 *
 * @param element The target element to measure.
 * @param relativeOffsetParent Optional: stop accumulating offsets when this parent is reached.
 */
// function computeElementOffsets(element: HTMLElement, relativeOffsetParent?: HTMLElement): Offsets & ElementSizes {
//   const rect = element.getBoundingClientRect();
//   const body = element.ownerDocument.body;
//   const {width, height} = rect;

//   let top = 0;
//   let left = 0;
//   let offsetParent = element;

//   while (offsetParent && offsetParent !== relativeOffsetParent) {
//     left += offsetParent.offsetLeft;

//     // body sometimes has offsetTop == 0 but still has an offset because of children margins!
//     if (offsetParent === body) {
//       top += offsetParent.getBoundingClientRect().top + window.scrollY;
//     } else {
//       top += offsetParent.offsetTop;
//     }

//     // Handle CSS transforms only when DOMMatrix is available
//     if (window.DOMMatrix) {
//       const style = window.getComputedStyle(offsetParent);
//       const {transform} = style;

//       if (transform && transform !== "none") {
//         const domMatrix = new DOMMatrix(transform);
//         left += domMatrix.m41;
//         if (offsetParent !== body) {
//           top += domMatrix.m42;
//         }
//       }
//     }

//     if (!offsetParent.offsetParent) {
//       break;
//     }

//     offsetParent = offsetParent.offsetParent as HTMLElement;
//   }

//   let parentWidth: number;
//   let parentHeight: number;
//   if (offsetParent === body) {
//     parentWidth = window.innerWidth;
//     parentHeight = window.innerHeight;
//   } else {
//     parentWidth = offsetParent.offsetWidth;
//     parentHeight = offsetParent.offsetHeight;
//   }

//   const right = parentWidth - left - width;
//   const bottom = parentHeight - top - height;

//   return {top, right, bottom, left, width, height};
// }

/**
 * Popover component.
 * This component displays a popover that can be bound to an element.
 * It supports various positions and can automatically adjust it based on available space.
 *
 * Notes:
 * - It is preferrable to put the popover element near the bound element, in the same container.
 * - To ensure the positioning algorithm correctly calculates the available space around the popover, it may be necessary to set `position: relative` on one of its ancestor containers. It becomes more important when there are one or more scrollable containers; in that case set `position: relative` on the nearest container with `overflow: auto` or `overflow: scroll`.
 * - Consider manually adjusting the size of the slotted element (using `width`, `height`, `max-width`, `max-height`, etc...) when its content is "fluid" (like text), because it can interfere with the position calculation (for example a long text on one single line can be bigger than the available space, letting the algorithm think that the popover doesn't fit in the available space).
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
   * Fired when the position changes.
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
      let isBoundElementClicked = false;

      if (typeof this.bindTo === "string") {
        isBoundElementClicked = !!target.closest(this.bindTo);
      } else if (this.bindTo) {
        isBoundElementClicked = this.bindTo.contains(target);
      }

      if (isBoundElementClicked) {
        // stop propagation if the click was on the trigger element to prevent close and reopen glitches
        e.stopPropagation();
      }

      this.open = false;
    }
  }

  @Watch("position")
  validatePosition(newValue: PopoverPosition): void {
    if (!Object.values(PopoverPosition).includes(newValue as PopoverPosition) || newValue === PopoverPosition.AUTO) {
      newValue = PopoverPosition.TOP;
    }

    this.position = newValue;
    this.currentPosition = newValue;
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
   * @param boundElement The sizes of the bound element.
   * @param offsetModifier The modifier to apply to the offset for centering.
   */
  private getOptimalPopoverPosition(
    desiredPosition: PopoverPosition,
    availableSpace: Offsets,
    boundElement: HTMLElement,
    offsetModifier: OffsetModifier
  ): PopoverPosition {
    const hostWidth = this.host.offsetWidth;
    const hostHeight = this.host.offsetHeight;

    const boundElementWidth = boundElement.getBoundingClientRect().width;
    const boundElementHeight = boundElement.getBoundingClientRect().height;

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
              boundElementWidth,
              offsetModifier
            )
          );

        case PopoverPosition.TOP_RIGHT:
          return (
            availableSpace.top >= hostHeight &&
            this.hasOffsetSpace(availableSpace.right, hostWidth, boundElementWidth, offsetModifier)
          );

        case PopoverPosition.TOP_LEFT:
          return (
            availableSpace.top >= hostHeight &&
            this.hasOffsetSpace(availableSpace.left, hostWidth, boundElementWidth, offsetModifier)
          );

        case PopoverPosition.RIGHT:
          return (
            availableSpace.right >= hostWidth &&
            this.hasCenteredVerticalSpace(
              availableSpace.top,
              availableSpace.bottom,
              hostHeight,
              boundElementHeight,
              offsetModifier
            )
          );

        case PopoverPosition.RIGHT_BOTTOM:
          return (
            availableSpace.right >= hostWidth &&
            this.hasOffsetSpace(availableSpace.bottom, hostHeight, boundElementHeight, offsetModifier)
          );

        case PopoverPosition.RIGHT_TOP:
          return (
            availableSpace.right >= hostWidth &&
            this.hasOffsetSpace(availableSpace.top, hostHeight, boundElementHeight, offsetModifier)
          );

        case PopoverPosition.BOTTOM:
          return (
            availableSpace.bottom >= hostHeight &&
            this.hasCenteredHorizontalSpace(
              availableSpace.left,
              availableSpace.right,
              hostWidth,
              boundElementWidth,
              offsetModifier
            )
          );

        case PopoverPosition.BOTTOM_LEFT:
          return (
            availableSpace.bottom >= hostHeight &&
            this.hasOffsetSpace(availableSpace.left, hostWidth, boundElementWidth, offsetModifier)
          );

        case PopoverPosition.BOTTOM_RIGHT:
          return (
            availableSpace.bottom >= hostHeight &&
            this.hasOffsetSpace(availableSpace.right, hostWidth, boundElementWidth, offsetModifier)
          );

        case PopoverPosition.LEFT:
          return (
            availableSpace.left >= hostWidth &&
            this.hasCenteredVerticalSpace(
              availableSpace.top,
              availableSpace.bottom,
              hostHeight,
              boundElementHeight,
              offsetModifier
            )
          );

        case PopoverPosition.LEFT_TOP:
          return (
            availableSpace.left >= hostWidth &&
            this.hasOffsetSpace(availableSpace.top, hostHeight, boundElementHeight, offsetModifier)
          );

        case PopoverPosition.LEFT_BOTTOM:
          return (
            availableSpace.left >= hostWidth &&
            this.hasOffsetSpace(availableSpace.bottom, hostHeight, boundElementHeight, offsetModifier)
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
   * Calculate available space around the element bound with the popover, based on its `offsetParent`.
   * The most common use case is to set `position: relative` on the nearest scrollable container, so that the popover can correctly calculate available space when the container is scrolled.
   * Not setting `position: relative` on any container will make the popover calculate available space relative to the viewport, which can cause unexpected positioning.
   */
  private calculateAvailableSpace(boundElement: HTMLElement): {
    top: number;
    right: number;
    bottom: number;
    left: number;
  } {
    const boundElementRect = boundElement.getBoundingClientRect();
    const offsetParent = (boundElement.offsetParent ?? this.host.ownerDocument.body) as HTMLElement;
    const offsetParentRect = offsetParent.getBoundingClientRect();

    return {
      top: boundElementRect.top - offsetParentRect.top,
      right: offsetParentRect.width - boundElementRect.right,
      bottom: offsetParentRect.bottom - boundElementRect.bottom,
      left: boundElementRect.left - offsetParentRect.left,
    };
  }

  /**
   * Apply positioning styles based on position.
   */
  private applyPositionStyles(
    position: PopoverPosition,
    boundElement: HTMLElement,
    availableSpace: Offsets,
    offsetModifier: OffsetModifier,
    arrowModifier: number
  ): void {
    const boundElementWidth = boundElement.getBoundingClientRect().width;
    const boundElementHeight = boundElement.getBoundingClientRect().height;
    /** 8px is the distance of the popover from the bound element */
    const distanceFromBound = 8;
    const hostStyle = this.host.style;
    const boundElementOffsets = this.calculateRelativeOffsets(boundElement);


    // TODO: valutare se impostere `visibility: hidden` durante l'applicazione degli stili per poi togierlo alla fine ed evitare di vedere il popover spostarsi mentre si apre

    // Reset all positioning properties
    hostStyle.top = "auto";
    hostStyle.right = "auto";
    hostStyle.bottom = "auto";
    hostStyle.left = "auto";
    hostStyle.maxWidth = "";
    hostStyle.maxHeight = "";

    switch (position) {
      case PopoverPosition.TOP:
      case PopoverPosition.TOP_RIGHT:
        hostStyle.bottom = `${boundElementOffsets.bottom + boundElementHeight}px`;
        hostStyle.left = `${boundElementOffsets.left + boundElementWidth * offsetModifier - (position === PopoverPosition.TOP_RIGHT ? arrowModifier : 0)}px`;
        hostStyle.maxHeight = `${availableSpace.top - distanceFromBound}px`;
        if (position === PopoverPosition.TOP_RIGHT) {
          hostStyle.maxWidth = `${availableSpace.right + boundElementWidth * offsetModifier}px`;
        }
        break;

      case PopoverPosition.TOP_LEFT:
        hostStyle.right = `${boundElementOffsets.right + boundElementWidth * offsetModifier - arrowModifier}px`;
        hostStyle.bottom = `${boundElementOffsets.bottom}px`;
        hostStyle.maxWidth = `${availableSpace.left}px`;
        hostStyle.maxHeight = `${availableSpace.top - distanceFromBound}px`;
        break;

      case PopoverPosition.BOTTOM:
      case PopoverPosition.BOTTOM_RIGHT:
        hostStyle.top = `${boundElementOffsets.top + boundElementHeight}px`;
        hostStyle.left = `${boundElementOffsets.left + boundElementWidth * offsetModifier - (position === PopoverPosition.BOTTOM_RIGHT ? arrowModifier : 0)}px`;
        hostStyle.maxHeight = `${availableSpace.bottom - distanceFromBound}px`;
        if (position === PopoverPosition.BOTTOM_RIGHT) {
          hostStyle.maxWidth = `${availableSpace.right + boundElementWidth * offsetModifier}px`;
        }
        break;

      case PopoverPosition.BOTTOM_LEFT:
        hostStyle.top = `${boundElementOffsets.top + boundElementHeight}px`;
        hostStyle.right = `${boundElementOffsets.right + boundElementWidth * offsetModifier - arrowModifier}px`;
        hostStyle.maxWidth = `${availableSpace.left}px`;
        hostStyle.maxHeight = `${availableSpace.bottom - distanceFromBound}px`;
        break;

      case PopoverPosition.RIGHT:
      case PopoverPosition.RIGHT_BOTTOM:
        hostStyle.top = `${boundElementOffsets.top + boundElementHeight * offsetModifier - (position === PopoverPosition.RIGHT_BOTTOM ? arrowModifier : 0)}px`;
        hostStyle.left = `${boundElementOffsets.left + boundElementWidth}px`;
        hostStyle.maxWidth = `${availableSpace.right - distanceFromBound}px`;
        if (position === PopoverPosition.RIGHT) {
          hostStyle.maxHeight = `${Math.min(availableSpace.top + availableSpace.bottom + boundElementHeight, window.innerHeight - 20)}px`;
        } else {
          hostStyle.maxHeight = `${availableSpace.bottom + boundElementHeight * offsetModifier}px`;
        }
        break;

      case PopoverPosition.RIGHT_TOP:
        hostStyle.bottom = `${boundElementOffsets.bottom + boundElementHeight * offsetModifier - arrowModifier}px`;
        hostStyle.left = `${boundElementOffsets.left + boundElementWidth}px`;
        hostStyle.maxWidth = `${availableSpace.right - distanceFromBound}px`;
        if (position === PopoverPosition.RIGHT_TOP) {
          hostStyle.maxHeight = `${availableSpace.top + boundElementHeight * offsetModifier}px`;
        }
        break;

      case PopoverPosition.LEFT:
      case PopoverPosition.LEFT_BOTTOM:
        hostStyle.top = `${availableSpace.top + boundElementHeight * offsetModifier - (position === PopoverPosition.LEFT_BOTTOM ? arrowModifier : 0)}px`;
        hostStyle.right = `${availableSpace.right + boundElementWidth}px`;
        hostStyle.maxWidth = `${availableSpace.left - distanceFromBound}px`;
        if (position === PopoverPosition.LEFT_BOTTOM) {
          hostStyle.maxHeight = `${availableSpace.bottom + boundElementHeight * offsetModifier}px`;
        }
        break;

      case PopoverPosition.LEFT_TOP:
        hostStyle.right = `${availableSpace.right + boundElementWidth}px`;
        hostStyle.bottom = `${availableSpace.bottom + boundElementHeight * offsetModifier - arrowModifier}px`;
        hostStyle.maxWidth = `${availableSpace.left - distanceFromBound}px`;
        if (position === PopoverPosition.LEFT_TOP) {
          hostStyle.maxHeight = `${availableSpace.top + boundElementHeight * offsetModifier}px`;
        }
        break;
    }
  }

  /**
   * Calculate the distance of the bound element from the edges of the relative ancestor.
   * @param boundElement The element to which the popover is bound.
   */
  private calculateRelativeOffsets(boundElement: HTMLElement): Offsets {
    const offsetParent = (boundElement.offsetParent ?? this.host.ownerDocument.body) as HTMLElement;

    return {
      top: boundElement.offsetTop,
      left: boundElement.offsetLeft,
      right: offsetParent.offsetWidth - (boundElement.offsetLeft + boundElement.offsetWidth),
      bottom: offsetParent.offsetHeight - (boundElement.offsetTop + boundElement.offsetHeight),
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

    const availableSpace = this.calculateAvailableSpace(boundElement);
    const offsetModifier = this.center ? 0.5 : 0;
    /** 8px is the distance between the arrow center and the edge of the popover */
    const arrowModifier = this.showArrow && this.center ? 8 : 0;
    const position = this.getOptimalPopoverPosition(this.position, availableSpace, boundElement, offsetModifier);

    this.applyPositionStyles(
      position,
      boundElement,
      availableSpace,
      offsetModifier,
      arrowModifier
    );
    this.currentPosition = position;
    this.positionChange.emit({position: this.currentPosition});
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

import {Component, Prop, h, Watch, Listen, Element, State, Event, EventEmitter} from "@stencil/core";
import {PopoverPosition, KeyboardCode} from "../../beans";

const DOCUMENT_ELEMENT = document.documentElement;

function getParentElement(element: Element): ShadowRoot["host"] {
  if ((element.parentNode as ShadowRoot).host) {
    return (element.parentNode as ShadowRoot).host;
  }

  return element.parentNode as Element;
}

/**
 * Find the closest scrollable parent of a node.
 *
 * @param {Element} element The node
 */
function findScrollableParent(element: Element): Element {
  let parent = getParentElement(element);

  while (parent && parent !== DOCUMENT_ELEMENT) {
    const {overflow, overflowX, overflowY} = window.getComputedStyle(parent);
    if (overflow === "hidden" || overflowY === "hidden" || overflowX === "hidden") {
      return parent;
    }

    if (
      (parent.scrollHeight > parent.clientHeight && overflow !== "visible" && overflowY !== "visible") ||
      (parent.scrollWidth > parent.clientWidth && overflow !== "visible" && overflowX !== "visible")
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
 * @return A client rect object.
 */
function computeOffset(element: HTMLElement, targetParentOffset?: HTMLElement): Record<string, number> {
  const rect = element.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;

  let top = 0;
  let left = 0;
  let offsetParent = element;
  while (offsetParent && offsetParent != targetParentOffset) {
    left += offsetParent.offsetLeft;

    // document.body sometimes has offsetTop == 0 but still has an
    // offset because of children margins!
    if (offsetParent === document.body) {
      top += offsetParent.getBoundingClientRect().top + window.scrollY;
    } else {
      top += offsetParent.offsetTop;
    }

    if (window.DOMMatrix) {
      const style = window.getComputedStyle(offsetParent);
      const transform = style.transform || style.webkitTransform;
      const domMatrix = new DOMMatrix(transform);
      if (domMatrix) {
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

  const right = parentWidth - left - rect.width;
  const bottom = parentHeight - top - rect.height;

  return {top, right, bottom, left, width, height};
}

/**
 * Popover component.
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
  /** Popover position. */
  @Prop({reflect: true})
  position: PopoverPosition = PopoverPosition.AUTO;

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

    if (!e.composedPath().includes(this.host)) {
      const target = e.target as HTMLElement;
      const triggerElemClicked =
        this.bindTo instanceof HTMLElement ? this.bindTo.contains(target) : target.closest(this.bindTo);
      if (triggerElemClicked) {
        e.stopPropagation();
      }

      this.open = false;
      this.positionChange.emit({position: this.currentPosition});
    }
  }

  @Watch("position")
  validatePosition(newValue: PopoverPosition): void {
    if (newValue && !Object.values(PopoverPosition).includes(newValue as PopoverPosition)) {
      this.position = PopoverPosition.AUTO;
    }

    this.currentPosition = this.position;
    this.positionChange.emit({position: this.currentPosition});
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

      setPosition();
    } else if (this.host.hasAttribute("current-position")) {
      this.host.removeAttribute("current-position");
      this.currentPosition = undefined;
    }

    this.openChange.emit({open: this.open});
  }

  disconnectedCallback(): void {
    cancelAnimationFrame(this.animationFrameRequestId);
  }

  /**
   * Set the position of the popover.
   */
  private setPosition(): void {
    let element: HTMLElement;
    if (typeof this.bindTo === "string") {
      element = this.host.ownerDocument.querySelector(this.bindTo) as HTMLElement;
    } else if (this.bindTo) {
      element = this.bindTo;
    } else {
      element = this.host.parentElement as HTMLElement;
    }

    if (!element) {
      return;
    }

    const scrollContainer = findScrollableParent(element) as HTMLElement;
    const scrollingBoundingRect = scrollContainer.getBoundingClientRect();
    const offsetContainer = this.host.offsetParent as HTMLElement;

    const relativeBoundingRect = offsetContainer
      ? computeOffset(offsetContainer, scrollContainer)
      : {top: 0, right: 0, bottom: 0, left: 0};
    const boundingRect = computeOffset(element, scrollContainer);

    const top = boundingRect.top - scrollContainer.scrollTop;
    const bottom = scrollingBoundingRect.height - (boundingRect.top + boundingRect.height) + scrollContainer.scrollTop;
    const left = boundingRect.left - scrollContainer.scrollLeft;
    const right = scrollingBoundingRect.width - (boundingRect.left + boundingRect.width) + scrollContainer.scrollLeft;

    const overflowBottom = Math.max(0, scrollingBoundingRect.top + scrollingBoundingRect.height - window.innerHeight);
    const overflowRight = Math.max(0, scrollingBoundingRect.left + scrollingBoundingRect.width - window.innerWidth);

    const availableTop = Math.min(top, top + scrollingBoundingRect.top);
    const availableBottom = Math.min(bottom, bottom - overflowBottom);
    const availableLeft = Math.min(left, left + scrollingBoundingRect.left);
    const availableRight = Math.min(right, right - overflowRight);

    const availableHeight = availableTop + availableBottom + boundingRect.height;
    const availableWidth = availableLeft + availableRight + boundingRect.width;

    let position = this.currentPosition;
    const positions: PopoverPosition[] = [];
    if (this.position === PopoverPosition.AUTO) {
      /**
       * The `AUTO` position tries to place the popover in the 'safest' area,
       * where there's more space available.
       */
      if (availableLeft / availableWidth > 0.6) {
        positions.push(PopoverPosition.LEFT);
      } else if (availableLeft / availableWidth < 0.4) {
        positions.push(PopoverPosition.RIGHT);
      }

      if (availableTop / availableHeight > 0.9) {
        positions.unshift(PopoverPosition.TOP);
      } else if (availableTop / availableHeight > 0.6) {
        positions.push(PopoverPosition.TOP);
      } else if (availableTop / availableHeight < 0.1) {
        positions.unshift(PopoverPosition.BOTTOM);
      } else {
        positions.push(PopoverPosition.BOTTOM);
      }

      position = positions.join("_") as PopoverPosition;
    }

    const style = this.host.style;
    style.position = "absolute";

    const offsetTop = boundingRect.top - relativeBoundingRect.top;
    const offsetRight = boundingRect.right - relativeBoundingRect.right;
    const offsetBottom = boundingRect.bottom - relativeBoundingRect.bottom;
    const offsetLeft = boundingRect.left - relativeBoundingRect.left;
    const offsetModifier = this.center ? 0.5 : 0;
    const sizeModifier = this.center ? 0.5 : 0;

    if (position === PopoverPosition.TOP || position === PopoverPosition.TOP_RIGHT) {
      style.top = "auto";
      style.right = "auto";
      style.bottom = `${offsetBottom + boundingRect.height}px`;

      style.left = `${offsetLeft + boundingRect.width * offsetModifier}px`;
      style.maxHeight = `${availableTop}px`;
      if (position === PopoverPosition.TOP_RIGHT) {
        style.maxWidth = `${availableRight + boundingRect.width * sizeModifier}px`;
      }
    } else if (position === PopoverPosition.TOP_LEFT) {
      style.top = "auto";
      style.right = `${offsetRight + boundingRect.width * offsetModifier}px`;
      style.bottom = `${offsetBottom + boundingRect.height}px`;
      style.left = "auto";
      style.maxWidth = `${availableLeft}px`;
      style.maxHeight = `${availableTop}px`;
    } else if (position === PopoverPosition.BOTTOM || position === PopoverPosition.BOTTOM_RIGHT) {
      style.top = `${offsetTop + boundingRect.height}px`;
      style.right = "auto";
      style.bottom = "auto";
      style.left = `${offsetLeft + boundingRect.width * offsetModifier}px`;
      style.maxHeight = `${availableBottom}px`;
      if (position === PopoverPosition.BOTTOM_RIGHT) {
        style.maxWidth = `${availableRight + boundingRect.width * sizeModifier}px`;
      }
    } else if (position === PopoverPosition.BOTTOM_LEFT) {
      style.top = `${offsetTop + boundingRect.height}px`;
      style.right = `${offsetRight + boundingRect.width * offsetModifier}px`;
      style.bottom = "auto";
      style.left = "auto";
      style.maxWidth = `${availableLeft}px`;
      style.maxHeight = `${availableBottom}px`;
    } else if (position === PopoverPosition.RIGHT || position === PopoverPosition.RIGHT_BOTTOM) {
      style.top = `${offsetTop + boundingRect.height * offsetModifier}px`;
      style.right = "auto";
      style.bottom = "auto";
      style.left = `${offsetLeft + boundingRect.width}px`;
      style.maxWidth = `${availableRight}px`;
      style.maxHeight = `${availableBottom + boundingRect.height * sizeModifier}px`;
    } else if (position === PopoverPosition.RIGHT_TOP) {
      style.top = "auto";
      style.right = "auto";
      style.bottom = `${offsetBottom + boundingRect.height * offsetModifier}px`;
      style.left = `${offsetLeft + boundingRect.width}px`;
      style.maxWidth = `${availableRight}px`;
      style.maxHeight = `${availableTop + boundingRect.height * sizeModifier}px`;
    } else if (position === PopoverPosition.LEFT || position === PopoverPosition.LEFT_BOTTOM) {
      style.top = `${offsetTop + boundingRect.height * offsetModifier}px`;
      style.right = `${offsetRight + boundingRect.width}px`;
      style.bottom = "auto";
      style.left = "auto";
      style.maxWidth = `${availableLeft}px`;
      style.maxHeight = `${availableBottom + boundingRect.height * sizeModifier}px`;
    } else if (position === PopoverPosition.LEFT_TOP) {
      style.top = "auto";
      style.right = `${offsetRight + boundingRect.width}px`;
      style.bottom = `${offsetBottom + boundingRect.height * offsetModifier}px`;
      style.left = "auto";
      style.maxWidth = `${availableLeft}px`;
      style.maxHeight = `${availableTop + boundingRect.height * sizeModifier}px`;
    }

    this.currentPosition = position || this.position;
    this.host.setAttribute("current-position", this.currentPosition);
  }

  componentWillLoad(): void {
    this.validatePosition(this.position);
    this.onOpen();
  }

  render(): HTMLSlotElement {
    return <slot></slot>;
  }
}

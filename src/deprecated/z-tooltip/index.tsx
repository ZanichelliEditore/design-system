import {
  Component,
  Prop,
  h,
  Host,
  Watch,
  Element,
  State,
  Event,
  EventEmitter,
} from "@stencil/core";
import { PopoverPosition } from "../../beans/index";

const documentElement = document.documentElement;

/**
 * Find the closest scrollable parent of a node.
 *
 * @param {Element} element The node
 */
function findScrollableParent(element: Element) {
  let parent = element.parentNode as Element;
  while (parent && parent !== documentElement) {
    const { overflow, overflowX, overflowY } = window.getComputedStyle(parent);
    if (overflow === 'hidden' ||
      overflowY === 'hidden' ||
      overflowX === 'hidden'
    ) {
      return parent;
    }

    if ((parent.scrollHeight > parent.clientHeight && overflow !== 'visible' && overflowY !== 'visible') ||
      (parent.scrollWidth > parent.clientWidth && overflow !== 'visible' && overflowX !== 'visible')) {
      return parent;
    }

    parent = parent.parentNode as Element;
  }

  return documentElement;
}

/**
 * Calculate computed offset.
 * It includes matrix transformations.
 * @param element The target element.
 * @param targetParentOffset The relative offset parent.
 * @return A client rect object.
 */
function computeOffset(element: HTMLElement, targetParentOffset?: HTMLElement) {
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

  return { top, right, bottom, left, width, height };
}

@Component({
  tag: "z-tooltip",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZTooltip {
  /** Content text.
   * @deprecated
   */
  @Prop() content: string;

  /** Tooltip position. */
  @Prop({ mutable: true }) type: PopoverPosition = PopoverPosition.AUTO;

  /**
   * The open state of the tooltip.
   */
  @Prop({ reflect: true, mutable: true }) open: boolean = false;

  /**
   * The selector or the element bound with the tooltip.
   */
  @Prop() bindTo?: string | HTMLElement;

  /**
   * The current position of the tooltip.
   */
  @State() position?: PopoverPosition;

  /**
   * Position change event.
   */
  @Event() positionChange: EventEmitter;

  @Element() host: HTMLElement;

  private animationFrameRequestId?: number;

  @Watch("type")
  validateType(newValue) {
    if (
      newValue &&
      Object
        .values(PopoverPosition)
        .every((position) => newValue !== position)
    ) {
      this.type = PopoverPosition.AUTO;
    }
  }

  @Watch("position")
  onPositionChange() {
    this.positionChange.emit({ position: this.position });
  }

  disconnectedCallback() {
    cancelAnimationFrame(this.animationFrameRequestId);
  }

  /**
   * Setup tooltip behaviors on opening.
   */
  @Watch("open")
  onOpen() {
    cancelAnimationFrame(this.animationFrameRequestId);
    if (this.content) {
      return;
    }

    if (this.open) {
      const setPosition = () => {
        if (this.open) {
          this.setPosition();
          this.animationFrameRequestId = requestAnimationFrame(setPosition);
        }
      };

      setPosition();
    } else {
      const style = this.host.style;
      style.removeProperty("top");
      style.removeProperty("right");
      style.removeProperty("bottom");
      style.removeProperty("left");
    }
  }

  /**
   * Set the position of the tooltip.
   */
  private setPosition() {
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
    const relativeBoundingRect = offsetContainer ? computeOffset(offsetContainer, scrollContainer) : { top: 0, right: 0, bottom: 0, left: 0 };
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

    let position = this.type;
    if (position === PopoverPosition.AUTO) {
      /**
       * The `AUTO` position tries to place the tooltip in the "safest" area,
       * where there's more space available.
       */
      const positions: PopoverPosition[] = [];
      if (availableTop / availableHeight > 0.9) {
        positions.unshift(PopoverPosition.TOP);
      } else if (availableTop / availableHeight > 0.6) {
        positions.push(PopoverPosition.TOP);
      } else if (availableTop / availableHeight < 0.1) {
        positions.unshift(PopoverPosition.BOTTOM);
      } else {
        positions.push(PopoverPosition.BOTTOM);
      }

      if (availableLeft / availableWidth > 0.6) {
        positions.push(PopoverPosition.LEFT);
      } else if (availableLeft / availableWidth < 0.4) {
        positions.push(PopoverPosition.RIGHT);
      }

      position = positions.join("_") as PopoverPosition;
    }

    const style = this.host.style;
    if (!this.content) {
      style.position = "absolute";
    }

    const offsetTop = boundingRect.top - relativeBoundingRect.top;
    const offsetRight = boundingRect.right - relativeBoundingRect.right;
    const offsetBottom = boundingRect.bottom - relativeBoundingRect.bottom;
    const offsetLeft = boundingRect.left - relativeBoundingRect.left;

    if (
      position === PopoverPosition.TOP ||
      position === PopoverPosition.TOP_RIGHT ||
      position === PopoverPosition.TOP_LEFT
    ) {
      style.top = "auto";
      style.bottom = `${offsetBottom + boundingRect.height}px`;
    }
    if (
      position === PopoverPosition.BOTTOM ||
      position === PopoverPosition.BOTTOM_RIGHT ||
      position === PopoverPosition.BOTTOM_LEFT
    ) {
      style.top = `${offsetTop + boundingRect.height}px`;
      style.bottom = "auto";
    }
    if (
      position === PopoverPosition.TOP ||
      position === PopoverPosition.BOTTOM
    ) {
      style.left = `${
        offsetLeft +
        (boundingRect.width / 2) -
        (this.host.clientWidth / 2)
      }px`;
    }
    if (
      position === PopoverPosition.TOP_RIGHT ||
      position === PopoverPosition.BOTTOM_RIGHT
    ) {
      style.right = "auto";
      style.left = `${offsetLeft + boundingRect.width}px`;
    }
    if (
      position === PopoverPosition.TOP_LEFT ||
      position === PopoverPosition.BOTTOM_LEFT
    ) {
      style.left = "auto";
      style.right = `${offsetRight + boundingRect.width}px`;
    }
    if (
      position === PopoverPosition.RIGHT ||
      position === PopoverPosition.LEFT
    ) {
      style.top = `${
        offsetTop +
        (boundingRect.height / 2) -
        (this.host.clientHeight / 2)
      }px`;
      style.bottom = "auto";
    }
    if (position === PopoverPosition.RIGHT) {
      style.right = "auto";
      style.left = `${offsetLeft + boundingRect.width}px`;
    }
    if (position === PopoverPosition.LEFT) {
      style.left = "auto";
      style.right = `${offsetRight + boundingRect.width}px`;
    }

    this.position = position;
  }

  componentWillLoad() {
    // Keep backward compatibility
    if (this.content) {
      this.open = true;
    }

    this.validateType(this.type);
    this.onOpen();
  }

  render() {
    if (this.content) {
      return (
        <Host class="legacy" position={this.type}>
          {this.content}
        </Host>
      );
    }

    return (
      <Host position={this.position}>
        <slot></slot>
      </Host>
    );
  }
}

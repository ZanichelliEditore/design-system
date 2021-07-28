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
import { TooltipPosition } from "../../../beans/index";

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

  const right = parentWidth - left;
  const bottom = parentHeight - top;

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
  @Prop({ mutable: true }) type: TooltipPosition = TooltipPosition.AUTO;

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
  @State() position?: TooltipPosition;

  /**
   * position change event.
   */
  @Event() positionChange: EventEmitter;

  @Element() host: HTMLElement;

  @Watch("type")
  validateType(newValue) {
    if (
      newValue &&
      Object
        .values(TooltipPosition)
        .every((position) => newValue !== position)
    ) {
      this.type = TooltipPosition.AUTO;
    }
  }

  @Watch("position")
  onPositionChange() {
    this.positionChange.emit({ position: this.position });
  }

  /**
   * Setup tooltip behaviors on opening.
   */
  @Watch("open")
  onOpen() {
    if (this.content) {
      return;
    }

    if (this.open) {
      const setPosition = () => {
        if (this.open) {
          this.setPosition();
          requestAnimationFrame(setPosition);
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

    let position = this.type;
    const boundingRect = computeOffset(element, this.host.offsetParent as HTMLElement);

    if (position === TooltipPosition.AUTO) {
      /**
       * The `AUTO` position tries to place the tooltip in the "safest" area,
       * where there's more space available.
       */
      const positions: TooltipPosition[] = [];
      if ((boundingRect.top + boundingRect.height) / window.innerHeight > 0.9) {
        positions.unshift(TooltipPosition.TOP);
      } else if ((boundingRect.top + boundingRect.height) / window.innerHeight > 0.6) {
        positions.push(TooltipPosition.TOP);
      } else if ((boundingRect.top + boundingRect.height) / window.innerHeight < 0.1) {
        positions.unshift(TooltipPosition.BOTTOM);
      } else {
        positions.push(TooltipPosition.BOTTOM);
      }

      if ((boundingRect.left + boundingRect.width) / window.innerWidth > 0.6) {
        positions.push(TooltipPosition.LEFT);
      } else if ((boundingRect.left + boundingRect.width) / window.innerWidth < 0.4) {
        positions.push(TooltipPosition.RIGHT);
      }

      position = positions.join("_") as TooltipPosition;
    }

    const style = this.host.style;
    if (!this.content) {
      style.position = "absolute";
    }

    if (
      position === TooltipPosition.TOP ||
      position === TooltipPosition.TOP_RIGHT ||
      position === TooltipPosition.TOP_LEFT
    ) {
      style.top = "auto";
      style.bottom = `${boundingRect.bottom}px`;
    }
    if (
      position === TooltipPosition.BOTTOM ||
      position === TooltipPosition.BOTTOM_RIGHT ||
      position === TooltipPosition.BOTTOM_LEFT
    ) {
      style.top = `${boundingRect.top + boundingRect.height}px`;
      style.bottom = "auto";
    }
    if (
      position === TooltipPosition.TOP ||
      position === TooltipPosition.BOTTOM
    ) {
      style.left = `${
        boundingRect.left +
        (boundingRect.width / 2) -
        (this.host.clientWidth / 2)
      }px`;
    }
    if (
      position === TooltipPosition.TOP_RIGHT ||
      position === TooltipPosition.BOTTOM_RIGHT
    ) {
      style.right = "auto";
      style.left = `${boundingRect.left + boundingRect.width - 16}px`;
    }
    if (
      position === TooltipPosition.TOP_LEFT ||
      position === TooltipPosition.BOTTOM_LEFT
    ) {
      style.left = "auto";
      style.right = `${boundingRect.right - 16}px`;
    }
    if (
      position === TooltipPosition.RIGHT ||
      position === TooltipPosition.LEFT
    ) {
      style.top = `${
        boundingRect.top +
        (boundingRect.height / 2) -
        (this.host.clientHeight / 2)
      }px`;
      style.bottom = "auto";
    }
    if (position === TooltipPosition.RIGHT) {
      style.right = "auto";
      style.left = `${boundingRect.left + boundingRect.width}px`;
    }
    if (position === TooltipPosition.LEFT) {
      style.left = "auto";
      style.right = `${boundingRect.right}px`;
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

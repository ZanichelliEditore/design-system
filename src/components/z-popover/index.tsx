import { Component, Prop, h, Host, State, Listen } from "@stencil/core";
import classNames from "classnames";
import {
  PopoverPosition,
  PopoverBorderRadius,
  PopoverShadow,
  KeyboardKeys,
} from "../../beans";
import { getElementTree } from "../../utils/utils";

@Component({
  tag: "z-popover",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZPopover {
  /** [optional] Popover position */
  @Prop() position?: PopoverPosition = PopoverPosition["after-up"];
  /** [optional] Background color token for popover */
  @Prop() backgroundColor?: string = "color-white";
  /** [optional] Border radius token for popover */
  @Prop() borderRadius?: PopoverBorderRadius = PopoverBorderRadius.small;
  /** [optional] Box shadow token for popover */
  @Prop() boxShadow?: PopoverShadow = PopoverShadow["shadow-1"];
  /** [optional] Show or hide arrow */
  @Prop() showArrow?: boolean = false;
  /** [optional] Sets padding for Popover container */
  @Prop() padding?: string = "8px";

  @State() isVisible: boolean = false;
  @State() popoverPosition: PopoverPosition = this.position;

  private popoverElem: HTMLElement;

  /**
   * Constructor.
   */
  constructor() {
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  openPopover() {
    const width = document.body.clientWidth;
    const height = window.innerHeight;
    const rect = this.popoverElem.getBoundingClientRect();

    const l = rect.left;
    const r = rect.right;
    const t = rect.top;
    const b = rect.bottom;

    let firstSide = this.position.split("-")[0];
    let secondSide = this.position.split("-")[1];

    // If top is outside viewport
    if (t < 0) {
      if (this.position.startsWith("above")) {
        firstSide = "below";
      } else {
        secondSide = "down";
      }
    }

    // If bottom is outside viewport
    if (b > height) {
      if (this.position.startsWith("below")) {
        firstSide = "above";
      } else {
        secondSide = "up";
      }
    }

    // If right is outside viewport
    if (r > width) {
      if (
        this.position.startsWith("above") ||
        this.position.startsWith("below")
      ) {
        secondSide = "left";
      } else {
        firstSide = "before";
      }
    }

    // If left is outside viewport
    if (l < 0) {
      if (
        this.position.startsWith("above") ||
        this.position.startsWith("below")
      ) {
        secondSide = "right";
      } else {
        firstSide = "after";
      }
    }

    this.popoverPosition = PopoverPosition[`${firstSide}-${secondSide}`];
    this.isVisible = true;
  }

  @Listen("closePopover")
  closePopover() {
    this.popoverPosition = this.position;
    this.isVisible = false;
  }

  @Listen("keyup", { target: "window" })
  closePopoverWithKeyboard(e: any) {
    if (e.key === KeyboardKeys.ESC) {
      this.closePopover();
    }
  }

  handleClick(event) {
    this.isVisible ? this.closePopover() : this.openPopover();
    event.stopPropagation();
  }

  handleKeyDown(event) {
    if (event.code === KeyboardKeys.ENTER) {
      this.isVisible ? this.closePopover() : this.openPopover();
    }
  }

  @Listen("click", { target: "body", capture: true })
  handleOutsideClick(e: any) {
    const tree = getElementTree(e.target);
    const parent = tree.find(
      (elem: Element) => elem.nodeName.toLowerCase() === "z-popover"
    );

    if (!parent) {
      this.closePopover();
    }
  }

  render() {
    return (
      <Host onKeyDown={this.handleKeyDown}>
        <div
          tabindex="0"
          onClick={(event) => this.handleClick(event)}
          onKeyDown={(event) => {
            if (event.key === KeyboardKeys.ENTER) {
              this.handleClick(event);
            }
          }}
        >
          <slot name="trigger"></slot>
        </div>
        <div
          ref={(e) => (this.popoverElem = e)}
          class={classNames(
            "popover-content-container",
            this.popoverPosition,
            `border-radius-${this.borderRadius}`,
            this.boxShadow,
            { "show-arrow": this.showArrow },
            { visible: this.isVisible }
          )}
          style={{
            backgroundColor: `var(--${this.backgroundColor})`,
            padding: this.padding,
          }}
        >
          <slot name="popover"></slot>
        </div>
      </Host>
    );
  }
}

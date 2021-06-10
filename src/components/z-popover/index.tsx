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
  @Prop({ mutable: true }) position?: PopoverPosition =
    PopoverPosition["after-up"];
  /** [optional] Background color token for popover */
  @Prop() backgroundColor?: string = "color-white";
  /** [optional] Border radius token for popover */
  @Prop() borderRadius?: PopoverBorderRadius = PopoverBorderRadius.small;
  /** [optional] Box shadow token for popover */
  @Prop() boxShadow?: PopoverShadow = PopoverShadow["shadow-1"];
  /** [optional] Show or hide arrow */
  @Prop() showArrow?: boolean = false;

  @State() isVisible: boolean = false;

  private popoverElem: HTMLElement;
  private defaultPosition: PopoverPosition = this.position;

  @Listen("closePopover")
  closePopover() {
    this.isVisible = false;
  }

  @Listen("keyup", { target: "window" })
  closePopoverWithKeyboard(e: any) {
    if (e.key === KeyboardKeys.ESC) {
      this.closePopover();
    }
  }

  handleClick(event) {
    this.isVisible = !this.isVisible;
    this.checkSpaceAvailable();
    event.stopPropagation();
  }

  @Listen("click", { target: "body", capture: true })
  handleOutsideClick(e: any) {
    const tree = getElementTree(e.target);
    const parent = tree.find(
      (elem: any) => elem.nodeName.toLowerCase() === "z-popover"
    );

    if (!parent) {
      this.isVisible = false;
    }
  }

  checkSpaceAvailable() {
    if (!this.isVisible) {
      this.position = this.defaultPosition;
      return;
    }

    const width = document.body.clientWidth;
    const height = window.innerHeight;

    const l = this.popoverElem.getBoundingClientRect().left;
    const r = this.popoverElem.getBoundingClientRect().right;
    const t = this.popoverElem.getBoundingClientRect().top;
    const b = this.popoverElem.getBoundingClientRect().bottom;

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

    this.position = PopoverPosition[`${firstSide}-${secondSide}`];
  }

  render() {
    return (
      <Host>
        <div onClick={(event) => this.handleClick(event)}>
          <slot name="trigger"></slot>
        </div>
        <div
          ref={(e) => (this.popoverElem = e)}
          class={classNames(
            "popover-content-container",
            this.position,
            `border-radius-${this.borderRadius}`,
            this.boxShadow,
            { "show-arrow": this.showArrow },
            { visible: this.isVisible }
          )}
          style={{
            backgroundColor: `var(--${this.backgroundColor})`,
          }}
        >
          <slot name="popover"></slot>
        </div>
      </Host>
    );
  }
}

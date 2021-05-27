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

  @State() isVisible: boolean = false;

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

  handleClick() {
    this.isVisible = !this.isVisible;
  }

  @Listen("click", { target: "body", capture: true })
  handleOutsideClick() {
    const tree = getElementTree(document.activeElement);
    const parent = tree.find(
      (elem: any) => elem.nodeName.toLowerCase() === "z-popover"
    );

    if (!parent) {
      this.isVisible = false;
    }
  }

  render() {
    return (
      <Host>
        <div onClick={() => this.handleClick()}>
          <slot name="trigger"></slot>
        </div>
        <div
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

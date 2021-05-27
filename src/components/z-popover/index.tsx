import { Component, Prop, h, Host } from "@stencil/core";
import classNames from "classnames";
import {
  PopoverPosition,
  PopoverBorderRadius,
  PopoverShadow,
} from "../../beans";

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

  render() {
    return (
      <Host>
        <slot name="trigger"></slot>
        <div
          class={classNames(
            "popover-content-container",
            this.position,
            `border-radius-${this.borderRadius}`,
            this.boxShadow,
            { "show-arrow": this.showArrow }
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

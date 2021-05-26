import { Component, Prop, h, Host } from "@stencil/core";
import classNames from "classnames";
import { PopoverPosition } from "../../beans";

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
  @Prop() borderRadius?: string = "border-base";
  /** [optional] Box shadow token for popover */
  @Prop() boxShadow?: string = "shadow-1";
  /** [optional] Show or hide arrow */
  @Prop() showArrow?: boolean = false;

  render() {
    return (
      <Host>
        <slot name="trigger"></slot>
        <div
          class={classNames("arrow", this.position)}
          style={{ backgroundColor: `var(--${this.backgroundColor})` }}
        />
        <div
          class={classNames("popover-content-container", this.position)}
          style={{
            backgroundColor: `var(--${this.backgroundColor})`,
            borderRadius: `var(--${this.borderRadius})`,
            boxShadow: `var(--${this.boxShadow})`,
          }}
        >
          <slot name="popover"></slot>
        </div>
      </Host>
    );
  }
}

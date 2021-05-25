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
  @Prop() position: PopoverPosition = PopoverPosition["after-up"];
  @Prop() backgroundColor: string = "color-white";
  @Prop() borderRadius: string = "border-base";
  @Prop() boxShadow: string = "shadow-1";

  render() {
    return (
      <Host>
        <slot name="trigger"></slot>
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

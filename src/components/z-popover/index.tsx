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

  render() {
    return (
      <Host>
        <slot name="trigger"></slot>
        <div class={classNames("popover-content-container", this.position)}>
          <slot name="popover"></slot>
        </div>
      </Host>
    );
  }
}

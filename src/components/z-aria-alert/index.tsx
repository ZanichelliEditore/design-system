import {Component, Prop, h, Host} from "@stencil/core";
import {HostElement} from "@stencil/core/internal";
import {ZAriaAlertMode} from "../../beans";

@Component({
  tag: "z-aria-alert",
  shadow: false,
})
export class ZAriaAlert {
  /** Aria live mode */
  @Prop()
  mode: ZAriaAlertMode = ZAriaAlertMode.POLITE;

  render(): HostElement {
    return (
      <Host
        aria-live={this.mode}
        aria-atomic="true"
        aria-relevant="additions"
      >
        <slot></slot>
      </Host>
    );
  }
}
import {Component, Host, Prop, h} from "@stencil/core";
import {ZAriaAlertMode} from "../../beans";

@Component({
  tag: "z-aria-alert",
  shadow: false,
})
export class ZAriaAlert {
  /** Aria live mode */
  @Prop()
  mode: ZAriaAlertMode = ZAriaAlertMode.POLITE;

  render(): HTMLZAriaAlertElement {
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

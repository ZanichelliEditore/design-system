import { Component, Prop, h } from "@stencil/core";
import { AlertTypes } from "../../../beans/index";

/**
 * @slot - alert content
 */

@Component({
  tag: "z-alert",
  styleUrl: "styles.css",
  shadow: true
})
export class ZAlert {
  /** alert variant type */
  @Prop() type: AlertTypes;

  render() {
    return (
      <div class={this.type}>
        <slot />
      </div>
    );
  }
}

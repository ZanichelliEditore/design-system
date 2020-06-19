import { Component, Prop, h, Event, EventEmitter, State } from "@stencil/core";
import { handleKeyboardSubmit } from "../../../utils/utils";
import { AlertTypesEnum } from "../../../beans/index";

/**
 * @slot alert content
 */

@Component({
  tag: "z-alert",
  styleUrl: "styles.css",
  shadow: true
})
export class ZAlert {
  /** alert variant type */
  @Prop() type: AlertTypesEnum;

  render() {
    return (
      <div class={this.type}>
        <slot />
      </div>
    );
  }
}

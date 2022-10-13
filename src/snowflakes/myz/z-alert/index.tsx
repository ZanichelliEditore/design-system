import {Component, Prop, h} from "@stencil/core";
import {AlertTypesEnum} from "../../../beans/index";

/**
 * @slot - alert content
 */

@Component({
  tag: "z-alert",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZAlert {
  /** alert variant type */
  @Prop()
  type: AlertTypesEnum;

  render(): HTMLDivElement {
    return (
      <div class={this.type}>
        <slot />
      </div>
    );
  }
}

import { Component, Prop, h, Host } from "@stencil/core";
import classNames from "classnames";

@Component({
  tag: "z-tag",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZTag {
  /** [optional] Tag icon */
  @Prop() icon?: string;
  /** [optional] Hide the text and show it on hover*/
  @Prop() expandable?: boolean;

  render() {
    return (
      <Host
        class={classNames("body-5-sb", {
          expandable: this.expandable && this.icon,
        })}
      >
        {this.icon && <z-icon name={this.icon} />}
        <div>
          <slot />
        </div>
      </Host>
    );
  }
}

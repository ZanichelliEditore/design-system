import { Component, Prop, h, Host } from "@stencil/core";
import classNames from "classnames";

@Component({
  tag: "z-tag",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true
})
export class ZTag {
  /** [optional] Tag icon */
  @Prop() icon?: string;
  /** [optional] Tag text */
  @Prop() text?: string;
  /** [optional] Hide the text and show it on hover*/
  @Prop() expandable?: boolean;
  /** [optional] Color token for the icon and text */

  constructor() {
    if (!this.icon && !this.text) {
      console.warn(
        "z-tag must contain at least one prop between icon and text"
      );
    }
  }

  render() {
    return (
      <Host
        class={classNames("body-5-sb", {
          expandable: this.expandable && this.icon && this.text,
        })}
      >
        {this.icon && <z-icon name={this.icon} />}
        {this.text && <span>{this.text}</span>}
      </Host>
    );
  }
}

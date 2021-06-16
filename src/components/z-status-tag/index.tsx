import { Component, Prop, h, Host } from "@stencil/core";
import { StatusTagVariant, StatusTagType } from "../../beans";
import classNames from "classnames";

@Component({
  tag: "z-status-tag",
  styleUrl: "styles.css",
  shadow: false,
})
export class ZStatusTag {
  /** [optional] Status tag icon */
  @Prop() icon?: string;
  /** [optional] Status tag text */
  @Prop() text?: string;
  /** [optional] Hide the text and show it on hover*/
  @Prop() expandable?: boolean;
  /** [optional] Status tag color */
  @Prop() type?: StatusTagType = StatusTagType.blue;
  /** [optional] Status tag style */
  @Prop() variant?: StatusTagVariant = StatusTagVariant.default;

  constructor() {
    if (!this.icon && !this.text) {
      console.warn(
        "z-status-tag must contain at least one prop between icon and text"
      );
    }
  }

  render() {
    return (
      <Host
        class={classNames(this.type, this.variant, {
          expandable: this.expandable && this.icon && this.text,
        })}
      >
        {this.icon && <z-icon name={this.icon} height={30} width={30} />}
        {this.text && (
          <z-body level={5} variant="semibold">
            {this.text}
          </z-body>
        )}
      </Host>
    );
  }
}

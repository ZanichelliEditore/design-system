import { Component, Prop, h, Host } from "@stencil/core";
import { StatusTagVariant, StatusTagType } from "../../beans";
import classNames from "classnames";

@Component({
  tag: "z-status-tag",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZStatusTag {
  /** [optional] Status tag icon */
  @Prop() icon?: string;
  /** [optional] Status tag text */
  @Prop() text?: string;
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
      <Host class={classNames(this.type, this.variant)}>
        {this.icon && <z-icon name={this.icon} height={14} width={14} />}
        {this.text && <span>{this.text}</span>}
      </Host>
    );
  }
}

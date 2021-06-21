import { Component, Prop, h, Host } from "@stencil/core";
import classNames from "classnames";
import { AvatarSize } from "../../beans";

@Component({
  tag: "z-avatar",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZAvatar {
  /** [optional] Avatar size */
  @Prop() size?: AvatarSize = AvatarSize.medium;
  /** [optional] Avatar text */
  @Prop() text?: string;
  /** [optional] Avatar text color */
  @Prop() textColor?: string = "text-white";
  /** [optional] Avatar background color */
  @Prop() backgroundColor?: string = "bg-grey-700";
  /** [optional] Avatar image */
  @Prop({ mutable: true }) image?: string;

  constructor() {
    if (!this.text && !this.image) {
      console.warn(
        "z-avatar must contain at least one prop between text and image"
      );
    }
  }

  getTextSize() {
    if (this.size === AvatarSize.small) {
      return "5";
    } else if (this.size === AvatarSize.medium) {
      return "4";
    } else if (this.size === AvatarSize.large) {
      return "2";
    }
  }

  render() {
    return (
      <Host
        class={classNames(this.size, `body-${this.getTextSize()}-sb`)}
        style={{
          color: `var(--${this.textColor})`,
          backgroundColor: `var(--${this.backgroundColor})`,
        }}
      >
        {this.text && !this.image && <span>{this.text.substring(0, 2)}</span>}
        {this.image && (
          <img src={this.image} onError={() => (this.image = "")} />
        )}
      </Host>
    );
  }
}

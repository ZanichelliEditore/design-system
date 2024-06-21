import {Component, Host, Prop, h} from "@stencil/core";
import {AvatarSize} from "../../beans";

@Component({
  tag: "z-avatar",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZAvatar {
  /** [optional] Avatar size */
  @Prop()
  size?: AvatarSize = AvatarSize.MEDIUM;

  /** [optional] Avatar text */
  @Prop()
  text?: string;

  /** [optional] Avatar text color */
  @Prop()
  textColor?: string = "color-white";

  /** [optional] Avatar background color */
  @Prop()
  backgroundColor?: string = "gray700";

  /** [optional] Avatar image */
  @Prop({mutable: true})
  image?: string;

  constructor() {
    if (this.text?.length === 0 && this.image?.length === 0) {
      console.warn("z-avatar must contain at least one prop between text and image");
    }
  }

  private getTextSize(): string {
    if (this.size === AvatarSize.SMALL) {
      return "5";
    } else if (this.size === AvatarSize.MEDIUM) {
      return "4";
    } else if (this.size === AvatarSize.LARGE) {
      return "2";
    }
  }

  render(): HTMLZAvatarElement {
    return (
      <Host
        class={{[this.size]: true, [`body-${this.getTextSize()}-sb`]: true}}
        style={{
          color: `var(--${this.textColor})`,
          backgroundColor: `var(--${this.backgroundColor})`,
        }}
      >
        {this.text && !this.image && <span>{this.text.substring(0, 2)}</span>}
        {this.image && (
          <img
            src={this.image}
            onError={() => (this.image = "")}
          />
        )}
      </Host>
    );
  }
}

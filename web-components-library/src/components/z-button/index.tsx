import { Component, Prop, h } from "@stencil/core";
import {
  ButtonVariantBean,
  ButtonVariantEnum,
  ButtonTypeEnum
} from "../../beans";

/**
 * @slot - button label
 */
@Component({
  tag: "z-button",
  styleUrl: "styles.css",
  shadow: true
})
export class ZButton {
  /** id, should be unique */
  @Prop() htmlid?: string;
  /** name */
  @Prop() name?: string;
  /** disable button */
  @Prop() disabled?: boolean = false;
  /** button type */
  @Prop() type?: HTMLButtonElement["type"] = ButtonTypeEnum.button;
  /** graphic variant */
  @Prop() variant?: ButtonVariantBean = ButtonVariantEnum.primary;
  /** reduce button size (optional) */
  @Prop() issmall?: boolean = false;
  /** add an icon to button (optional) */
  @Prop() icon?: string;

  render() {
    return (
      <button
        id={this.htmlid}
        name={this.name}
        type={this.type}
        disabled={this.disabled}
        class={`${this.variant} ${this.issmall && "small"}`}
      >
        {this.icon && <z-icon name={this.icon} width={16} height={16} />}
        <slot />
      </button>
    );
  }
}

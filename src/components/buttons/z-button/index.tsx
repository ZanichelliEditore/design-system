import { Component, Prop, h, Element } from "@stencil/core";
import classNames from "classnames";
import {
  ButtonVariantBean,
  ButtonVariantEnum,
  ButtonTypeEnum,
  ButtonSizeEnum,
} from "../../../beans";

/**
 * @slot - button label
 */
@Component({
  tag: "z-button",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZButton {
  @Element() hostElement: HTMLElement;

  /** id, should be unique */
  @Prop() htmlid?: string;
  /** name */
  @Prop() name?: string;
  /** disable button */
  @Prop({ reflect: true }) disabled?: boolean = false;
  /** button type */
  @Prop() type?: HTMLButtonElement["type"] = ButtonTypeEnum.button;
  /** graphic variant */
  @Prop({ reflect: true }) variant?: ButtonVariantBean =
    ButtonVariantEnum.primary;
  /** add an icon to button (optional) */
  @Prop() icon?: string;

  @Prop({ reflect: true })
  size?: ButtonSizeEnum = ButtonSizeEnum.big;
  /** @deprecated Use `size` prop.
   *
   *  Reduce button size (optional).
   * */
  @Prop({ reflect: true }) issmall?: boolean = false;

  render() {
    this.hostElement.style.pointerEvents = this.disabled ? 'none' : 'auto';

    return (
      <slot name="element">
        <button
          id={this.htmlid}
          name={this.name}
          type={this.type}
          disabled={this.disabled}
          class={classNames(
            this.variant,
            this.size,
            { issmall: this.issmall },
            { hasContent: this.hostElement.innerHTML }
          )}
        >
          {this.icon && <z-icon name={this.icon} width={16} height={16} />}
          <slot />
        </button>
      </slot>
    );
  }
}

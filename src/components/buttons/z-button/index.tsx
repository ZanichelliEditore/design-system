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

  /** Identifier, should be unique. */
  @Prop() htmlid?: string;
  /** HTML button name attribute. */
  @Prop() name?: string;
  /** HTML button disabled attribute. */
  @Prop({ reflect: true }) disabled?: boolean = false;
  /** HTML button type attribute. */
  @Prop() type?: HTMLButtonElement["type"] = ButtonTypeEnum.button;
  /** Graphical variant: `primary`, `secondary` and `tertiary`. Defaults to `primary`. */
  @Prop({ reflect: true }) variant?: ButtonVariantBean =
    ButtonVariantEnum.primary;
  /** `z-icon` name to use (optional). */
  @Prop() icon?: string;

  /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
  @Prop({ reflect: true })
  size?: ButtonSizeEnum = ButtonSizeEnum.big;
  /** Reduce button size (deprecated).
   *
   * @deprecated Use `size` prop.
   * */
  @Prop({ reflect: true }) issmall?: boolean = false;

  /** Spy to render square button. */
  @Prop({ reflect: true })
  square?: boolean = false;

  render() {
    this.hostElement.style.pointerEvents = this.disabled ? "none" : "auto";

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
            { square: this.square }
          )}
        >
          {this.icon && <z-icon name={this.icon} width={16} height={16} />}
          <slot />
        </button>
      </slot>
    );
  }
}

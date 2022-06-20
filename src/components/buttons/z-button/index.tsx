import { Component, Prop, h } from "@stencil/core";
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
  shadow: false,
})
export class ZButton {
  /** define whether it renders a button or an a. */
  @Prop({ reflect: true })
  as?: string = "button";

  /** HTML a href attribute. */
  @Prop({ reflect: true })
  href?: string = "";
  /** HTML a target attribute. */
  @Prop({ reflect: true })
  target?: string = "_blank";
  /** defines a string value that labels an interactive element, used for accessibility. */
  @Prop({ reflect: true }) ariaLabel?: string;
  /** Identifier, should be unique. */
  @Prop() htmlid?: string;
  /** HTML button name attribute. */
  @Prop() name?: string;
  /** HTML button disabled attribute. */
  @Prop({ reflect: true }) disabled?: boolean = false;
  /** HTML button type attribute. */
  @Prop() type?: HTMLButtonElement["type"] = ButtonTypeEnum.button;
  /** Graphical variant: `primary`, `secondary`, `tertiary`, `dark-bg`. Defaults to `primary`. */
  @Prop({ reflect: true }) variant?: ButtonVariantBean =
    ButtonVariantEnum.primary;
  /** `z-icon` name to use (optional). */
  @Prop() icon?: string;
  /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
  @Prop({ reflect: true })
  size?: ButtonSizeEnum = ButtonSizeEnum.big;
  /** Reduce button size (deprecated).
   * @deprecated Use `size` prop.
   *
   *
   * TODO: RIMUOVERE???
   */
  @Prop({ reflect: true }) issmall?: boolean = false;
  /** Spy to render square button. */
  @Prop({ reflect: true })
  square?: boolean = false;

  render() {
    if (this.as === "a")
      return (
        //usare a oppure component link del DS
        <a
          aria-label={this.ariaLabel}
          href={this.href}
          target={this.target}
          id={this.htmlid}
          class={classNames(this.variant, this.size, { square: this.square })}
        >
          {this.icon && <z-icon name={this.icon} width={16} height={16} />}
          <slot />
        </a>
      );

    return (
      <button
        aria-label={this.ariaLabel}
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
    );
  }
}

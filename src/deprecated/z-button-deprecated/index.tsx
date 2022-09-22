import {Component, Prop, h, Element} from "@stencil/core";
import {ButtonVariantEnum, ButtonTypeEnum, ButtonSizeEnum} from "../../beans";

/**
 * @slot - button label
 */
@Component({
  tag: "z-button-deprecated",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZButtonDeprecated {
  @Element() hostElement: HTMLZButtonDeprecatedElement;

  /** Identifier, should be unique. */
  @Prop()
  htmlid?: string;
  /** HTML button name attribute. */
  @Prop()
  name?: string;
  /** HTML button disabled attribute. */
  @Prop({reflect: true})
  disabled?: boolean = false;
  /** HTML button type attribute. */
  @Prop()
  type?: HTMLButtonElement["type"] = ButtonTypeEnum.BUTTON;
  /** Graphical variant: `primary`, `secondary`, `tertiary`, `dark-bg`. Defaults to `primary`. */
  @Prop({reflect: true})
  variant?: ButtonVariantEnum = ButtonVariantEnum.PRIMARY;
  /** `z-icon` name to use (optional). */
  @Prop()
  icon?: string;
  /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
  @Prop({reflect: true})
  size?: ButtonSizeEnum = ButtonSizeEnum.BIG;
  /** Reduce button size (deprecated).
   * @deprecated Use `size` prop.
   */
  @Prop({reflect: true})
  issmall?: boolean = false;
  /** Spy to render square button. */
  @Prop({reflect: true})
  square?: boolean = false;

  render(): HTMLSlotElement {
    this.hostElement.style.pointerEvents = this.disabled ? "none" : "auto";

    return (
      <slot name="element">
        <button
          id={this.htmlid}
          name={this.name}
          type={this.type}
          disabled={this.disabled}
          class={{
            [this.variant]: true,
            [this.size]: true,
            issmall: this.issmall,
            square: this.square,
          }}
        >
          {this.icon && (
            <z-icon
              name={this.icon}
              width={16}
              height={16}
            />
          )}
          <slot />
        </button>
      </slot>
    );
  }
}

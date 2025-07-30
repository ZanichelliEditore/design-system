import {Component, Element, Prop, h} from "@stencil/core";
import {JSXBase} from "@stencil/core/internal";
import {ButtonSize, ButtonType, ButtonVariant, ControlSize, IconPosition} from "../../beans";

/**
 * @slot - button label
 */
@Component({
  tag: "z-button",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZButton {
  @Element() hostElement: HTMLZButtonElement;

  /** defines a string value that labels the internal interactive element. Used for accessibility. */
  @Prop()
  ariaLabel: string | undefined = undefined;

  /**
   * **Deprecated:** Use `htmlrole` instead.
   * @deprecated This prop has been deprecated in favor of `htmlrole` for better accessibility.
   */
  @Prop()
  role = "";

  /** defines role attribute, used for accessibility. */
  @Prop()
  htmlrole?: string;

  /** HTML <a> href attribute. If it is set, it renders an HTML <a> tag. */
  @Prop()
  href?: string;

  /** HTML a target attribute. */
  @Prop()
  target?: string;

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
  type?: ButtonType = ButtonType.BUTTON;

  /** Graphical variant: `primary`, `secondary`, `tertiary`. Defaults to `primary`. */
  @Prop({reflect: true})
  variant?: ButtonVariant = ButtonVariant.PRIMARY;

  /** `z-icon` name to use (optional). */
  @Prop()
  icon?: string;

  /** the button icon position. Defaults to `left` */
  @Prop({reflect: true})
  iconPosition?: IconPosition = IconPosition.LEFT;

  /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
  @Prop({reflect: true})
  size?: ButtonSize | ControlSize = ControlSize.BIG;

  private getAttributes(): JSXBase.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
    return {
      id: this.htmlid,
      class: {
        "z-button--container": true,
        "z-button--has-text": !!this.hostElement.textContent.trim(),
      },
    };
  }

  private renderIcon(): JSX.Element | undefined {
    return this.icon && <z-icon name={this.icon} />;
  }

  render(): HTMLAnchorElement | HTMLButtonElement {
    if (this.href) {
      return (
        <a
          {...this.getAttributes()}
          aria-label={this.ariaLabel || undefined}
          href={this.href}
          target={this.target}
        >
          {this.renderIcon()}
          <slot />
        </a>
      );
    }

    return (
      <button
        {...this.getAttributes()}
        aria-label={this.ariaLabel || undefined}
        name={this.name}
        type={this.type}
        disabled={this.disabled}
        role={this.htmlrole || this.role || undefined}
      >
        {this.renderIcon()}
        <slot />
      </button>
    );
  }
}

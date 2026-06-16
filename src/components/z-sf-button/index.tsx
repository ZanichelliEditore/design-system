import {Component, ComponentInterface, Element, Prop, h} from "@stencil/core";
import {JSXBase} from "@stencil/core/internal";
import {SfButtonSize, SfButtonType, SfButtonVariant, SfControlSize, SfIconPosition} from "../../beans";

/**
 * @slot - button label
 */
@Component({
  tag: "z-sf-button",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZSfButton implements ComponentInterface {
  @Element() hostElement: HTMLZButtonElement;

  /** defines a string value that labels the internal interactive element. Used for accessibility. */
  @Prop()
  ariaLabel: string | undefined = undefined;

  /**
   * Use `htmlrole` instead.
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
  type?: SfButtonType = SfButtonType.BUTTON;

  /** Graphical variant: `primary`, `secondary`, `tertiary`. Defaults to `primary`. */
  @Prop({reflect: true})
  variant?: SfButtonVariant = SfButtonVariant.PRIMARY;

  /** `z-sf-icon` name to use (optional). */
  @Prop()
  icon?: string;

  /** the button icon position. Defaults to `left` */
  @Prop({reflect: true})
  SfIconPosition?: SfIconPosition = SfIconPosition.LEFT;

  /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
  @Prop({reflect: true})
  size?: SfButtonSize | SfControlSize = SfControlSize.BIG;

  private hasText = false;

  componentWillLoad(): void {
    this.hasText = !!this.hostElement.textContent?.trim();
  }

  private get attributes(): JSXBase.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
    return {
      id: this.htmlid,
      class: {
        "z-sf-button--container": true,
        "z-sf-button--has-text": this.hasText,
      },
    };
  }

  private renderIcon(): HTMLZIconElement | undefined {
    return this.icon && <z-sf-icon name={this.icon} />;
  }

  render(): HTMLAnchorElement | HTMLButtonElement {
    const normalizedAriaLabel = this.ariaLabel?.trim() || undefined;
    const normalizedRole = this.htmlrole || this.role?.trim() || undefined;

    if (this.href) {
      return (
        <a
          {...this.attributes}
          aria-label={normalizedAriaLabel}
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
        {...this.attributes}
        aria-label={normalizedAriaLabel}
        name={this.name}
        type={this.type}
        disabled={this.disabled}
        role={normalizedRole}
      >
        {this.renderIcon()}
        <slot />
      </button>
    );
  }
}

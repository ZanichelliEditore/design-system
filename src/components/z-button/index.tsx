import {Component, Prop, h, Element} from "@stencil/core";
import {JSXBase} from "@stencil/core/internal";
import {ButtonVariant, ButtonType, ButtonSize, ControlSize} from "../../beans";

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

  /** defines a string value that labels an interactive element, used for accessibility. */
  @Prop({reflect: true})
  ariaLabel = "";

  /** defines role attribute, used for accessibility. */
  @Prop()
  role = "";

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

  render(): HTMLAnchorElement | HTMLButtonElement {
    if (this.href) {
      return (
        <a
          {...this.getAttributes()}
          aria-label={this.ariaLabel}
          href={this.href}
          target={this.target}
        >
          {this.icon && <z-icon name={this.icon} />}
          <slot />
        </a>
      );
    }

    return (
      <button
        {...this.getAttributes()}
        aria-label={this.ariaLabel}
        name={this.name}
        type={this.type}
        role={this.role}
        disabled={this.disabled}
      >
        {this.icon && <z-icon name={this.icon} />}
        <slot />
      </button>
    );
  }
}

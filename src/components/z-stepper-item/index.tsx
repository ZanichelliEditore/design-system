import {Component, Host, Prop, h} from "@stencil/core";

@Component({
  tag: "z-stepper-item",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZStepperItem {
  /**
   * The number of the step item.
   */
  @Prop({reflect: true})
  index: number;

  /**
   * The href to navigate on click.
   */
  @Prop({reflect: true})
  href: string;

  /**
   * The pressed state of the item.
   */
  @Prop({reflect: true})
  pressed: boolean;

  /**
   * The checked state of the item.
   */
  @Prop({reflect: true})
  checked: boolean;

  /**
   * The disabled state of the item.
   */
  @Prop({reflect: true})
  disabled: boolean;

  private getAttributes(): Record<string, unknown> {
    const href =
      this.href && !this.pressed && !this.disabled ? {onClick: () => (location.href = this.href)} : undefined;
    const role = href ? {role: "link"} : undefined;
    const current = this.pressed && !this.disabled ? {ariaCurrent: "step"} : undefined;
    const tabindex = this.pressed || this.href === "" ? {tabindex: -1} : undefined;
    const ariaPressed = this.pressed !== undefined ? {"aria-pressed": String(this.pressed)} : undefined;
    const ariaDisabled = this.disabled !== undefined ? {"aria-disabled": String(this.disabled)} : undefined;

    return {
      ...href,
      ...role,
      ...current,
      ...tabindex,
      ...ariaPressed,
      ...ariaDisabled,
    };
  }

  render(): HTMLAnchorElement | HTMLButtonElement {
    return (
      <Host role="listitem">
        <button
          class="stepper-item"
          disabled={this.disabled}
          {...this.getAttributes()}
        >
          <div class="indicator">{this.checked ? <z-icon name="checkmark" /> : this.index}</div>
          <span>
            <slot />
          </span>
        </button>
      </Host>
    );
  }
}

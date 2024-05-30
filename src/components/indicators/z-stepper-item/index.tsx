import {Component, Prop, h} from "@stencil/core";

@Component({
  tag: "z-stepper-item",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZStepperItem {
  /**
   * The number of the step item.
   */
  @Prop({attribute: "index"})
  index: number;

  /**
   * The href to navigate on click.
   */
  @Prop({attribute: "href"})
  href: string;

  /**
   * The pressed state of the item.
   */
  @Prop({attribute: "pressed"})
  pressed: boolean;

  /**
   * The checked state of the item.
   */
  @Prop({attribute: "checked"})
  checked: boolean;

  /**
   * The disabled state of the item.
   */
  @Prop({attribute: "disabled"})
  disabled: boolean;

  private getAttributes(): Record<string, unknown> {
    const href = this.href && !this.pressed && !this.disabled ? {onClick: () => (location.href = this.href)} : {};
    const role = this.href && !this.disabled ? {role: "link"} : {};
    const current = this.pressed && !this.disabled ? {ariaCurrent: "step"} : {};
    const tabindex = this.pressed || !this.href ? {tabindex: -1} : {};

    return {
      ...href,
      ...role,
      ...current,
      ...tabindex,
    };
  }

  render(): HTMLAnchorElement | HTMLButtonElement {
    return (
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
    );
  }
}

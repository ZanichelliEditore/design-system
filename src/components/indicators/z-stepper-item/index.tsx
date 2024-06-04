import {Component, Prop, Element, h} from "@stencil/core";

@Component({
  tag: "z-stepper-item",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZStepperItem {
  @Element() element: HTMLZStepperItemElement;

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
    const href =
      this.href && !this.pressed && !this.disabled ? {onClick: () => (location.href = this.href)} : undefined;
    const role = href ? {role: "link"} : undefined;
    const current = this.pressed && !this.disabled ? {ariaCurrent: "step"} : undefined;
    const tabindex = !this.element.onclick && !href ? {tabindex: -1} : undefined;

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

import {Component, ComponentInterface, Host, Listen, Prop, State, h} from "@stencil/core";
import {Device} from "../../beans";
import {getDevice} from "../../utils/utils";

@Component({
  tag: "z-stepper-item",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZStepperItem implements ComponentInterface {
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

  @State()
  viewPortWidth: Device = Device.DESKTOP;

  @Listen("resize", {target: "window"})
  handleResize(): void {
    this.viewPortWidth = getDevice();
  }

  componentWillLoad(): void | Promise<void> {
    this.viewPortWidth = getDevice();
  }

  private getAttributes(): Record<string, unknown> {
    const href =
      this.href && !this.pressed && !this.disabled ? {onClick: () => (location.href = this.href)} : undefined;
    const role = href ? {role: "link"} : undefined;
    const current = this.pressed && !this.disabled ? {"aria-current": "step"} : undefined;
    const tabindex = this.pressed || this.href === "" ? {tabIndex: -1} : undefined;

    return {
      ...href,
      ...role,
      ...current,
      ...tabindex,
    };
  }

  private getLabelClass(): Record<string, boolean> {
    if (this.disabled) {
      return {
        "mobile-body-4": this.viewPortWidth === Device.MOBILE,
        "tablet-body-4": this.viewPortWidth === Device.TABLET,
        "desktop-body-3": this.viewPortWidth === Device.DESKTOP,
        "wide-body-3": this.viewPortWidth === Device.DESKTOP_WIDE,
      };
    }

    return {
      "mobile-body-4-sb": this.viewPortWidth === Device.MOBILE,
      "tablet-body-4-sb": this.viewPortWidth === Device.TABLET,
      "desktop-body-3-sb": this.viewPortWidth === Device.DESKTOP,
      "wide-body-3-sb": this.viewPortWidth === Device.DESKTOP_WIDE,
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
          <div
            class={{
              "indicator": true,
              "mobile-interactive-3-sb": this.viewPortWidth === Device.MOBILE,
              "tablet-interactive-3-sb": this.viewPortWidth === Device.TABLET,
              "desktop-interactive-1-sb": this.viewPortWidth === Device.DESKTOP,
              "wide-interactive-1-sb": this.viewPortWidth === Device.DESKTOP_WIDE,
            }}
          >
            {this.checked ? <z-icon name="checkmark" /> : this.index}
          </div>
          <span class={this.getLabelClass()}>
            <slot />
          </span>
        </button>
      </Host>
    );
  }
}

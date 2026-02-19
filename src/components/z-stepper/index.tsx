import {Component, Host, h} from "@stencil/core";

/**
 * @slot - slot for `z-stepper-item`
 */
@Component({
  tag: "z-stepper",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZStepper {
  render(): HTMLSlotElement {
    return (
      <Host role="navigation">
        <slot />
      </Host>
    );
  }
}

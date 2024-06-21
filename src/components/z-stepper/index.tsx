import {Component, Host, h} from "@stencil/core";

/**
 * @slot - slot for `z-stepper-item`s
 */
@Component({
  tag: "z-stepper",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZStepper {
  render(): HTMLSlotElement {
    return (
      <Host role="list">
        <slot />
      </Host>
    );
  }
}

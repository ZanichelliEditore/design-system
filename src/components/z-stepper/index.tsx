import {Component, ComponentInterface, Host, h} from "@stencil/core";

/**
 * @slot - slot for `z-stepper-item`
 */
@Component({
  tag: "z-stepper",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZStepper implements ComponentInterface {
  render(): HTMLSlotElement {
    return (
      <Host role="navigation">
        <slot />
      </Host>
    );
  }
}

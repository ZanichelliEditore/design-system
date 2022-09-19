import {Component, h} from "@stencil/core";

/**
 * @slot - z-stepper-item
 */
@Component({
  tag: "z-stepper",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZStepper {
  render(): HTMLSlotElement {
    return <slot />;
  }
}

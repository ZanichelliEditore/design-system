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
  render(): HTMLDivElement {
    return (
      <Host role="navigation">
        <div
          class="stepper-list"
          role="list"
        >
          <slot />
        </div>
      </Host>
    );
  }
}

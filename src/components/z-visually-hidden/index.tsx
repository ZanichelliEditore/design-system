import {Component, ComponentInterface, h} from "@stencil/core";

@Component({
  tag: "z-visually-hidden",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZVisuallyHidden implements ComponentInterface {
  render(): HTMLSlotElement {
    return <slot />;
  }
}

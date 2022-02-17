import { Component, h } from "@stencil/core";

@Component({
  tag: "z-visually-hidden",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZVisuallyHidden {
  render() {
    return <slot />;
  }
}

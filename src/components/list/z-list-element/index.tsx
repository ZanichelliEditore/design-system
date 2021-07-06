import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "z-list-element",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZListElement {
  render() {
    return (
      <Host role="listitem">
        <slot />
      </Host>
    );
  }
}

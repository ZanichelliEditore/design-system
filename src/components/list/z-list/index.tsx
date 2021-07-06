import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "z-list",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZList {
  render() {
    return (
      <Host role="list">
        <slot />
      </Host>
    );
  }
}

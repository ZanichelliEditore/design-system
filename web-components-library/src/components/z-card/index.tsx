import { Component, h } from "@stencil/core";

@Component({
  tag: "z-card",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCardComponent {
  render() {
    return (
      <div>
        <slot />
      </div>
    );
  }
}

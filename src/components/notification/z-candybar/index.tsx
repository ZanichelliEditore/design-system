import { Component, h } from "@stencil/core";

@Component({
  tag: "z-candybar",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCandybar {
  render() {
    return (
      <div>
        <slot name="content"></slot>
      </div>
    );
  }
}

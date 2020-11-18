import { Component, h } from "@stencil/core";

/**
 * @slot content - fill the content of the candybar (full width, full height)
 */
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

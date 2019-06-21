import { Component, h } from "@stencil/core";

@Component({
  tag: "z-card",
  styleUrls: ["../../global-styles.css", "z-card.css"],
  shadow: true
})
export class ZCardComponent {
  render() {
    return <slot />;
  }
}

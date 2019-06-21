import { Component, h } from "@stencil/core";

@Component({
  tag: "z-card-button",
  styleUrls: ["../../global-styles.css", "z-card-button.css"],
  shadow: true
})
export class ZCardButton {
  render() {
    return <z-button label="Risorse" />;
  }
}

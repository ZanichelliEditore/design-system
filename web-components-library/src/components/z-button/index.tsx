import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-button",
  styleUrls: ["../../global-styles.css", "./z-button.css"],
  shadow: true
})
export class ZButton {
  @Prop() label: string;

  render() {
    return <button>{this.label}</button>;
  }
}

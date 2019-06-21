import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-icon",
  styleUrls: ["../../global-styles.css", "z-icon.css"],
  shadow: true
})
export class ZIcon {
  @Prop() icon: string;

  render() {
    return (
      <span>
        <img src={this.icon} />
      </span>
    );
  }
}

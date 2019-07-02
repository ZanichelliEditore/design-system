import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-card-icon",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCardIcon {
  @Prop() icon: string;

  render() {
    return (
      <span>
        <img src={this.icon} />
      </span>
    );
  }
}

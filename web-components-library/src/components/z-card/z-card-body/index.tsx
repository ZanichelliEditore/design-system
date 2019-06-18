import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-card-body",
  styleUrls: ["../../../global-styles.css", "z-card-body.css"],
  shadow: true
})
export class ZCardBody {
  @Prop() img: string;
  @Prop() titolo: string;

  render() {
    return <img alt={this.titolo} src={this.img} />;
  }
}

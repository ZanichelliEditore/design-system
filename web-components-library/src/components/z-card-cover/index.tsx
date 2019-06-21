import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-card-cover",
  styleUrls: ["../../global-styles.css", "z-card-cover.css"],
  shadow: true
})
export class ZCardCover {
  @Prop() img: string;
  @Prop() titolo: string;

  render() {
    return <img alt={this.titolo} src={this.img} />;
  }
}

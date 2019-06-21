import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-card-title",
  styleUrls: ["../../global-styles.css", "z-card-title.css"],
  shadow: true
})
export class ZCardTitle {
  @Prop() titolo: string;

  render() {
    return <h2>{this.titolo}</h2>;
  }
}

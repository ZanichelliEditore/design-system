import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-card-header",
  styleUrls: ["../../../global-styles.css", "z-card-header.css"],
  shadow: true
})
export class ZCardHeader {
  @Prop() titolo: string;

  render() {
    return (
      <header>
        <h2>{this.titolo}</h2>
        <icon />
      </header>
    );
  }
}

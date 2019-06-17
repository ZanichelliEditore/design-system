import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "card-header",
  styleUrls: ["../../../global-styles.css", "card-header.css"],
  shadow: true
})
export class CardHeader {
  @Prop() titolo: string;

  render() {
    return (
      <header>
        <h2>{this.titolo}</h2>
      </header>
    );
  }
}

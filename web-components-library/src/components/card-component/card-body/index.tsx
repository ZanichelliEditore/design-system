import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "card-body",
  styleUrls: ["../../../global-styles.css", "card-body.css"],
  shadow: true
})
export class CardBody {
  @Prop() bookimg: string;

  render() {
    return <img src={this.bookimg} />;
  }
}

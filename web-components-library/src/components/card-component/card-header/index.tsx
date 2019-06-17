import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "card-header",
  styleUrls: ["../../global-styles.css", "card-header.css"],
  shadow: true
})
export class CardHeader {
  @Prop() myProp: string;

  render() {
    return (
      <div>
        This is yourcard-headercomponent This is your default prop:{" "}
        {this.myProp}
      </div>
    );
  }
}

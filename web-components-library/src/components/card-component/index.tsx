import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "card-component",
  styleUrls: ["../../global-styles.css", "card-component.css"],
  shadow: true
})
export class CardComponent {
  @Prop() myProp: string;

  render() {
    return (
      <div>
        This is yourcard-componentcomponent This is your default prop:{" "}
        {this.myProp}
      </div>
    );
  }
}

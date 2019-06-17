import { Component, Prop, h } from "@stencil/core";
import * as cardData from "./card-mock-data.json";

@Component({
  tag: "z-card-manager",
  styleUrls: ["../../global-styles.css", "z-card-manager.css"],
  shadow: true
})
export class ZCardManager {
  @Prop() myProp: string;

  render() {
    return (
      <div>
        <z-card-component carddata={cardData} />
      </div>
    );
  }
}

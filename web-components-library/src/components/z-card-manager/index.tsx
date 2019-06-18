import { Component, h } from "@stencil/core";
import * as cardData from "./card-mock-data.json";

@Component({
  tag: "z-card-manager",
  styleUrls: ["../../global-styles.css", "z-card-manager.css"],
  shadow: true
})
export class ZCardManager {
  handleCardRemove(e: MouseEvent): void {
    e.preventDefault();

    // TODO: chain remove card Action in Redux App
    alert("card removed");
  }

  render() {
    return (
      <z-card handlecardremove={this.handleCardRemove} carddata={cardData} />
    );
  }
}

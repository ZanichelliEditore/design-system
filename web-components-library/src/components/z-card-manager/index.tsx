import { Component, h } from "@stencil/core";
import * as cardData from "./card-mock-data.json";

const bookIcon = "../../assets/images/png/zanichelli-book-gray@8x.png";
@Component({
  tag: "z-card-manager",
  styleUrls: ["../../global-styles.css", "z-card-manager.css"],
  shadow: true
})
export class ZCardManager {
  private hasButton: boolean = true;

  handleCardRemove(e: MouseEvent): void {
    e.preventDefault();

    // TODO: chain remove card Action in Redux App
    alert("card removed");
  }

  render() {
    return (
      <z-card
        headericon={bookIcon}
        handleiconclick={this.handleCardRemove}
        hasbutton={this.hasButton}
        carddata={cardData}
      />
    );
  }
}

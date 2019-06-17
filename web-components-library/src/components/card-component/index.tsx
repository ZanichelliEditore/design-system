import { Component, h, Prop, State } from "@stencil/core";
import { CardBean } from "../../beans";
import * as cardData from "./card-mock-data.json";

@Component({
  tag: "card-component",
  styleUrls: ["../../global-styles.css", "card-component.css"],
  shadow: true
})
export class CardComponent {
  @Prop() carddata: CardBean & {} = cardData;
  @State() isopen: boolean = false;

  constructor() {
    this.handleCardOpen = this.handleCardOpen.bind(this);
  }

  handleCardOpen(e): void {
    e.preventDefault();
    this.isopen = !this.isopen;
  }

  render() {
    return (
      <div>
        <card-header />
        <card-body />
        <card-footer
          carddata={this.carddata}
          handlecardopen={this.handleCardOpen}
        />
      </div>
    );
  }
}

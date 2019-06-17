import { Component, h, Prop, State } from "@stencil/core";
import { CardBean } from "../../beans";

@Component({
  tag: "z-card-component",
  styleUrls: ["../../global-styles.css", "z-card-component.css"],
  shadow: true
})
export class ZCardComponent {
  @Prop() carddata: CardBean & {};
  @State() isOpen: boolean = false;

  constructor() {
    this.handleCardOpen = this.handleCardOpen.bind(this);
  }

  handleCardOpen(e): void {
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }

  render() {
    const { titolo } = this.carddata;
    return (
      <div>
        <z-card-header titolo={titolo} />
        <z-card-body />
        <z-card-footer
          isopen={this.isOpen}
          carddata={this.carddata}
          handlecardopen={this.handleCardOpen}
        />
      </div>
    );
  }
}

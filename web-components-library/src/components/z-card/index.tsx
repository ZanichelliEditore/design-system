import { Component, h, Prop, State } from "@stencil/core";
import { CardBean } from "../../beans";

const bookIcon = "../../assets/images/png/zanichelli-book-gray@8x.png";
@Component({
  tag: "z-card",
  styleUrls: ["../../global-styles.css", "z-card.css"],
  shadow: true
})
export class ZCardComponent {
  @Prop() carddata: CardBean & {};
  @Prop() handlecardremove?: (e: MouseEvent) => void;
  @State() isOpen: boolean = false;

  constructor() {
    this.handleCardOpen = this.handleCardOpen.bind(this);
  }

  handleCardOpen(e): void {
    e.preventDefault();
    this.isOpen = !this.isOpen;
    // TODO: handle card Open internal state change
    console.log(this.isOpen);
  }

  render() {
    const { titolo } = this.carddata;
    return (
      <div>
        <z-card-header
          titolo={titolo}
          icon={bookIcon}
          handleiconclick={this.handlecardremove}
        />
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

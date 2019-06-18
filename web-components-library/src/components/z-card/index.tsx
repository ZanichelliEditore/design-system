import { Component, h, Prop, State } from "@stencil/core";

@Component({
  tag: "z-card",
  styleUrls: ["../../global-styles.css", "z-card.css"],
  shadow: true
})
export class ZCardComponent {
  @Prop() headericon: string;
  @Prop() carddata: any;
  @Prop() hasbutton: boolean;
  @Prop() handleiconclick: (e: MouseEvent) => void;
  @State() isOpen: boolean = false;

  constructor() {
    this.handleIsOpen = this.handleIsOpen.bind(this);
  }

  handleIsOpen() {
    if (!this.hasbutton) {
      return false;
    }
    this.isOpen = !this.isOpen;

    // TODO: handle card Open internal state change
    console.log(this.isOpen);
  }

  render() {
    const { titolo, img } = this.carddata;
    return (
      <div>
        <z-card-header
          titolo={titolo}
          icon={this.headericon}
          handleiconclick={this.handleiconclick}
        />
        <z-card-body titolo={titolo} img={img} />
        <z-card-footer
          isopen={this.isOpen}
          carddata={this.carddata}
          hasbutton={this.hasbutton}
          handlecardopen={this.handleIsOpen}
        />
      </div>
    );
  }
}

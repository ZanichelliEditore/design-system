import { Component, h, Prop, State, Event, EventEmitter } from "@stencil/core";
const removeBookIcon =
  "../../../assets/images/png/zanichelli-book-remove-gray@8x.png";
const addBookIcon =
  "../../../assets/images/png/zanichelli-add-book-gray@8x.png";
@Component({
  tag: "z-card",
  styleUrls: ["../../global-styles.css", "z-card.css"],
  shadow: true
})
export class ZCardComponent {
  @Prop() carddata: any;
  @Prop() hasbutton: boolean;
  @Prop() cardtype: string;
  @Prop() isremoved?: boolean = true;
  @State() isOpen: boolean = false;

  @Event({
    composed: true,
    cancelable: true,
    bubbles: true
  })
  headerIconClick: EventEmitter<any>;

  constructor() {
    this.handleIsOpen = this.handleIsOpen.bind(this);
  }

  handleHeaderIconClick(e: CustomEvent) {
    this.headerIconClick.emit(e);
  }

  handleIsOpen() {
    if (!this.hasbutton) {
      return false;
    }
    this.isOpen = !this.isOpen;

    // TODO: handle card Open internal state change
  }

  handleHeaderIcon() {
    if (this.cardtype === "card") return removeBookIcon;
    if (this.cardtype === "resource" && this.isremoved) return removeBookIcon;
    if (this.cardtype === "resource" && !this.isremoved) return addBookIcon;
  }

  render() {
    const { titolo, img } = JSON.parse(this.carddata);
    return (
      <div>
        <z-card-header
          onIconClick={(e: CustomEvent) => this.handleHeaderIconClick(e)}
          titolo={titolo}
          icon={this.handleHeaderIcon()}
          // handleiconclick={this.handleiconclick}
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

import { Component, Prop, h } from "@stencil/core";

// import * as cardData from "./card-mock-data.json";

const removeBookIcon =
  "../../../assets/images/png/zanichelli-book-remove-gray@8x.png";
// const addBookIcon =
//   "../../../assets/images/png/zanichelli-add-book-gray@8x.png";

@Component({
  tag: "base-component-layer",
  styleUrls: ["../../global-styles.css"],
  shadow: true
})
export class BaseComponentLayer {
  @Prop() myProp: string;

  constructor() {
    // this.handleIsOpen = this.handleIsOpen.bind(this);
  }

  // handleHeaderIconClick(e: CustomEvent) {
  //   this.headerIconClick.emit(e);
  // }

  // handleIsOpen() {
  //   if (!this.hasbutton) {
  //     return false;
  //   }
  //   this.isOpen = !this.isOpen;

  //   // TODO: handle card Open internal state change
  // }

  // handleHeaderIcon() {
  //   if (this.cardtype === "card") return removeBookIcon;
  //   if (this.cardtype === "resource" && this.isremoved) return removeBookIcon;
  //   if (this.cardtype === "resource" && !this.isremoved) return addBookIcon;
  // }

  render() {
    return (
      <z-card>
        <z-card-header titolo={"titolo"}>
          <z-icon icon={removeBookIcon} slot="icon" />
        </z-card-header>

        {/*

        <z-card-body>
          <z-cover
            titolo="Il nuovo invito alla biologia blu"
            img="http://media.curtisinvitoblu.bedita.net/a1/40/curti_a140cb3359b7611d84f80e384d2fb49b/curtis_plus-1A_320x_71bc3567ace1ff728caef1b381d7535b.png"
          />
        </z-card-body>

        <z-card-footer titolo={"titolo"} autori={"autori"} anno={"anno"}>
          <z-button />
          <z-list listData={"data[]"} />
        </z-card-footer> */}
      </z-card>
    );
  }
}

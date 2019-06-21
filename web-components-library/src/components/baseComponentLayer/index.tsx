import { Component, Prop, h } from "@stencil/core";

import * as cardData from "./card-mock-data.json";

@Component({
  tag: "base-component-layer",
  styleUrl: "../../global-styles.css",
  styles: `header {
    display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 301px;
  height: 40px;
  position: relative;
  background: var(--bg-artboard-gray);
  border-bottom: var(--border-base) solid var(--bg-artboard-gray-very-light);
  border-radius: var(--radius-base) var(--radius-base) var(--radius-min)
    var(--radius-min);
  }`
})
export class BaseComponentLayer {
  @Prop() myProp: string;

  render() {
    return (
      <div>
        <header>
          <z-card-title titolo="titolo" />
          <z-card-icon icon="../../assets/images/png/zanichelli-book-remove-gray@8x.png" />
        </header>
        <z-card-body titolo="Il nuovo invito alla biologia blu" img="http://media.curtisinvitoblu.bedita.net/a1/40/curti_a140cb3359b7611d84f80e384d2fb49b/curtis_plus-1A_320x_71bc3567ace1ff728caef1b381d7535b.png" />
        <z-card-footer carddata={JSON.stringify(cardData)} isopen={false} />
      </div>
    );
  }
}

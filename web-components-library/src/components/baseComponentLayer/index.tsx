import { Component, Prop, h } from "@stencil/core";

import * as cardData from "./card-mock-data.json";

const removeBookIcon =
  "../../../assets/images/png/zanichelli-book-remove-gray@8x.png";
// const addBookIcon =
//   "../../../assets/images/png/zanichelli-add-book-gray@8x.png";

@Component({
  tag: "base-component-layer",
  styleUrls: ["../../global-styles.css"]
})
export class BaseComponentLayer {
  @Prop() myProp: string;

  render() {
    const { actions, anno, autori, titolo, img } = cardData;
    return (
      <z-card>
        <z-card-header titolo={titolo}>
          <z-card-icon
            icon={removeBookIcon}
            slot="icon"
            onClick={() => console.log("icon clicked")}
          />
        </z-card-header>

        <z-card-body>
          <z-card-cover slot="cover" titolo={titolo} img={img} />
        </z-card-body>

        <z-card-footer hasbutton titolo={titolo} autori={autori} anno={anno}>
          <z-card-list listdata={JSON.stringify(actions)} slot="list" />
        </z-card-footer>
      </z-card>
    );
  }
}

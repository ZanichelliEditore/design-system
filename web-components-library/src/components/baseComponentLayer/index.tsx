import { Component, Prop, h } from "@stencil/core";
import { ListItemBean } from "../../beans/index.js";

@Component({
  tag: "base-component-layer",
  styleUrl: "../../global-styles.css"
})
export class BaseComponentLayer {
  @Prop() myProp: string;

  getnodes(): ListItemBean[] {
    var myArray = new Array<ListItemBean>();
    myArray.push({
      text: "level1.1",
      link: "",
      innernode: [{ text: "level2", link: "", innernode: [] }]
    });
    myArray.push({
      text: "level1.2",
      link: "",
      innernode: []
    });

    return myArray;
  }

  render() {
    return <zanichelli-list getnodes={this.getnodes} />;
  }
}

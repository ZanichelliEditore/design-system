import { Component, Prop, h } from "@stencil/core";
import { ListItemBean } from "../../beans/index.js";

@Component({
  tag: "base-component-layer",
  styleUrls: ["../../global-styles.css", "./styles.css"]
})
export class BaseComponentLayer {
  @Prop() myProp: string;

  getnodes(): ListItemBean[] {
    var myArray = new Array<ListItemBean>();
    myArray.push({
      text: "level1.1",
      link: "",
      separator: true,
      innernode: [
        {
          text: "level2",
          link: "",
          separator: true,
          innernode: [
            {
              text: "level3",
              link: "http://www.google.it",
              innernode: []
            },
            {
              text: "Separated link",
              link: "http://www.google.it",
              separator: true,
              innernode: []
            }
          ]
        }
      ]
    });
    myArray.push({
      text: "level1.2",
      link: "",
      separator: false,
      innernode: []
    });

    return myArray;
  }

  render() {
    return (
      <div>
        <h1> Passing an object</h1>
        <div>
          <z-list list={this.getnodes()} />
        </div>
        <br />

        <h1> Passing a callback that populate the object</h1>
        <div>
          <z-list getnodes={this.getnodes} />
        </div>
        <br />

        <h1>
          {" "}
          Passing a json string (to be parsed by wc) that represent the object{" "}
        </h1>
        <div>
          <z-list inputrawdata={JSON.stringify(this.getnodes())} />
        </div>
        <br />
      </div>
    );
  }
}

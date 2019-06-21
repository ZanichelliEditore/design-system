import { Component, Prop, h } from "@stencil/core";
import { ListItemBean } from "../../beans/index.js";

@Component({
  tag: "base-component-layer",
  styleUrls: ["../../global-styles.css", "./styles.css"]
})
export class BaseComponentLayer {
  @Prop({ mutable: true }) myProp: string;
  @Prop({ mutable: true }) list: ListItemBean[];

  constructor() {
    this.populatenodes();
    this.getnodes = this.getnodes.bind(this);
  }

  populatenodes() {
    this.list = new Array<ListItemBean>();
    this.list.push({
      text: "Testo1",
      icon: "test"
    });

    this.list.push({
      text: "Testo2",
      link: "http://www.google.it"
    });
  }

  addNode(): void {
    this.list.push({
      text: "Testo3",
      link: "http://www.google.it"
    });

    console.log(this.list);
    this.myProp = "ciao";
  }

  getnodes(): ListItemBean[] {
    return this.list;
  }

  render() {
    return (
      <div>
        <button onClick={() => this.addNode()}>Cambia il dom</button>
        <h1> Passing an object</h1>
        <h3> This is how it should work</h3>

        <div>
          <z-list
            list={this.list}
            isnestedcomponent={true}
            hasseparator={false}
          />
        </div>
        <br />

        <h1>
          {" "}
          Passing a json string (to be parsed by wc) that represent the object{" "}
        </h1>
        <h3> Drawback: dirty coding, but render on prop change should work</h3>

        <div>
          <z-list
            inputrawdata={JSON.stringify(this.list)}
            isnestedcomponent={false}
            hasseparator={true}
          />
        </div>
        <br />
      </div>
    );
  }
}

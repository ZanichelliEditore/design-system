import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "zanichelli-list",
  styleUrls: ["../../global-styles.css", "./styles.css"]
})
export class ZanichelliList {
  @Prop() inputRawData: string;
  list: Object[];

  constructor() {
    console.log("data" + this.inputRawData);
    this.list = JSON.parse(this.inputRawData);
  }

  render() {
    return (
      <ul>
        <list-item
          text="prova"
          is-link="false"
          is-leaf="true"
          icon="fas fa-cat"
        />
      </ul>
    );
  }
}

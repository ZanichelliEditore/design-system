import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-card-list",
  styleUrls: ["../../global-styles.css", "z-card-list.css"],
  shadow: true
})
export class ZCardList {
  @Prop() listdata: string;

  constructor() {
    this.renderList = this.renderList.bind(this);
  }

  renderList(dataArray) {
    return dataArray.map(data => {
      return <li>{data}</li>;
    });
  }

  render() {
    return <ul>{this.renderList(JSON.parse(this.listdata))}</ul>;
  }
}

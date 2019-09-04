import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-card-list",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCardList {
  @Prop() listdata: string;

  constructor() {
    this.renderList = this.renderList.bind(this);
  }

  formatListContent(data) {
    if (!data.isLink) return <span>{data.value}</span>;
    return (
      <a href={data.url} target="_blank">
        {data.value}
      </a>
    );
  }

  renderList(dataArray) {
    return dataArray.map(data => {
      return <li>{this.formatListContent(data)}</li>;
    });
  }

  render() {
    return <ul>{this.renderList(JSON.parse(this.listdata))}</ul>;
  }
}

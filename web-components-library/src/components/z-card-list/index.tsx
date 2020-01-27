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

  handleSpaceKey(e: KeyboardEvent, url: string): void {
    e.preventDefault();
    if (e.keyCode == 32 || e.keyCode == 13) {
      window.open(url, "_blank");
    }
  }

  formatListContent(data) {
    const { value, isLink, url } = data;
    if (!isLink) return <span>{value}</span>;
    return (
      <a
        role="button"
        onKeyPress={(e: KeyboardEvent) => this.handleSpaceKey(e, url)}
        href={url}
        target="_blank"
      >
        {value}
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

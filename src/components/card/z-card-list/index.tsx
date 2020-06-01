import { Component, Prop, h } from "@stencil/core";
import { ActionBean } from "../../../beans";

@Component({
  tag: "z-card-list",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCardList {
  /** list data stringified array */
  @Prop() listdata: string;

  constructor() {
    this.renderList = this.renderList.bind(this);
  }

  handleSpaceKeyPress(e: KeyboardEvent, url: string): void {
    if (e.keyCode == 32 || e.keyCode == 13) {
      e.preventDefault();
      window.open(url, "_blank");
    }
  }

  formatListContent(data: ActionBean): HTMLAnchorElement {
    const { value, isLink, url } = data;
    if (!isLink) return <span>{value}</span>;
    return (
      <a
        role="button"
        onKeyPress={(e: KeyboardEvent) => this.handleSpaceKeyPress(e, url)}
        href={url}
        target="_blank"
      >
        {value}
      </a>
    );
  }

  renderList(dataArray: ActionBean[]): HTMLLIElement[] {
    return dataArray.map((data: ActionBean) => {
      return <li>{this.formatListContent(data)}</li>;
    });
  }

  render() {
    return <ul>{this.renderList(JSON.parse(this.listdata))}</ul>;
  }
}

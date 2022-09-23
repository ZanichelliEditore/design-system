import {Component, Prop, h} from "@stencil/core";
import {ActionBean} from "../../../../beans";

@Component({
  tag: "z-myz-card-list",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZMyzCardList {
  /** list data stringified array */
  @Prop()
  listdata: string;

  constructor() {
    this.renderList = this.renderList.bind(this);
  }

  private handleSpaceKeyPress(e: KeyboardEvent, url: string): void {
    if (e.keyCode == 32 || e.keyCode == 13) {
      e.preventDefault();
      window.open(url, "_blank");
    }
  }

  private formatListContent(data: ActionBean): HTMLAnchorElement {
    const {value, isLink, url} = data;
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

  private renderList(dataArray: ActionBean[]): HTMLLIElement[] {
    return dataArray.map((data: ActionBean) => {
      return <li>{this.formatListContent(data)}</li>;
    });
  }

  render(): HTMLUListElement {
    return <ul>{this.renderList(JSON.parse(this.listdata))}</ul>;
  }
}

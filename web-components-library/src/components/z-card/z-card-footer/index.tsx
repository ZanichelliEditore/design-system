import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-card-footer",
  styleUrls: ["../../../global-styles.css", "z-card-footer.css"],
  shadow: true
})
export class ZCardFooter {
  @Prop() isopen: boolean;
  @Prop() carddata: any;
  @Prop() hasbutton: boolean;
  @Prop() handlecardopen?: (e: MouseEvent) => void;

  renderListItem(items: string[]): HTMLLIElement[] {
    return items.map((item: string, index: number) => (
      <li key={item}>
        {item}
        {index !== items.length - 1 ? `, \u00A0` : `.`}
      </li>
    ));
  }

  renderAutori(items: string[]): string {
    let newString = "";
    items.map((item: string) => {
      newString = newString.concat(item, ", ");
    });
    return newString.substr(0, newString.length - 2);
  }

  displayResourceButton(isopen: boolean): HTMLButtonElement | null {
    if (!this.hasbutton) {
      return;
    }
    return (
      <button onClick={this.handlecardopen}>
        {isopen ? "<" : ">"} Risorse
      </button>
    );
  }

  displayList(isopen: boolean, actions: string[]): HTMLUListElement | null {
    if (!isopen) {
      return;
    }
    return <ul>{this.renderListItem(actions)}</ul>;
  }

  render() {
    const { titolo, autori, anno, actions } = this.carddata;
    return (
      <footer class={this.isopen && "isopen"}>
        {this.displayResourceButton(this.isopen)}
        <h2 class={this.isopen && "isopen"}>{titolo}</h2>
        <div>
          <p>
            Autore: <b>{this.renderAutori(autori)}</b>
          </p>
          <p>
            Edizione: <b>{anno}</b>
          </p>
        </div>
        <section>{this.displayList(this.isopen, actions)}</section>
      </footer>
    );
  }
}

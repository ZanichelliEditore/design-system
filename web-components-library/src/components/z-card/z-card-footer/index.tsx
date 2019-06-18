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

  displayResourceButton() {
    if (!this.hasbutton) {
      return;
    }
    return <button onClick={this.handlecardopen}>Risorse</button>;
  }

  render() {
    // console.log(this.isopen);
    const { titolo, autori, anno, actions } = this.carddata;
    return (
      <footer>
        {this.displayResourceButton()}
        <h2>{titolo} RICORDIAMOCI L'OVERFLOW!</h2>
        <div>Autore: {this.renderAutori(autori)}</div>
        <p>
          Edizione: <b>{anno}</b>
        </p>
        <div>
          <ul>{this.renderListItem(actions)}</ul>
        </div>
      </footer>
    );
  }
}

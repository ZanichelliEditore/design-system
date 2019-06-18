import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-card-footer",
  styleUrls: ["../../../global-styles.css", "z-card-footer.css"],
  shadow: true
})
export class ZCardFooter {
  @Prop() isopen: boolean;
  @Prop() carddata: {};
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

  displayResourceButton() {
    if (!this.hasbutton) {
      return;
    }
    return <button onClick={this.handlecardopen}>Risorse</button>;
  }

  render() {
    // console.log(this.isopen);
    const { titolo, tags, autori, anno, actions } = this.carddata;
    return (
      <footer>
        {this.displayResourceButton()}
        <h2>{titolo}</h2>
        <div>{this.renderListItem(tags)}</div>
        <div>
          Autore:
          {this.renderListItem(autori)}
        </div>
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

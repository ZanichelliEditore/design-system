import { Component, Prop, h } from "@stencil/core";
import { CardBean } from "../../../beans";

@Component({
  tag: "card-footer",
  styleUrls: ["../../../global-styles.css", "card-footer.css"],
  shadow: true
})
export class CardFooter {
  @Prop() carddata: CardBean & {};
  @Prop() handlecardopen: Function;

  handleOnClick(e) {
    e.preventDefault();
    this.handlecardopen();
  }

  renderListItem(items: string[]): HTMLLIElement[] {
    return items.map((item: string, index: number) => (
      <li key={item}>
        {item}
        {index !== items.length - 1 ? `, \u00A0` : `.`}
      </li>
    ));
  }

  render() {
    const { titolo, tags, autori, anno, actions } = this.carddata;
    return (
      <footer>
        <button onClick={this.handleOnClick}>Risorse</button>
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

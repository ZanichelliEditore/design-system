import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-card-footer",
  styleUrls: ["../../global-styles.css", "z-card-footer.css"],
  shadow: true
})
export class ZCardFooter {
  @Prop() isopen: boolean;
  @Prop() titolo: string;
  @Prop() autori: string;
  @Prop() anno: number;

  render() {
    return (
      <footer class={this.isopen && "isopen"}>
        <slot name="button" />
        <h2 class={this.isopen && "isopen"}>{this.titolo}</h2>
        <div>
          <p>
            Autore: <b>{this.autori}</b>
          </p>
          <p>
            Edizione: <b>{this.anno}</b>
          </p>
        </div>
        <slot name="list" />
      </footer>
    );
  }
}

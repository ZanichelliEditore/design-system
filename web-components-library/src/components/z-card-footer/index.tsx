import { Component, Prop, h, State, Listen } from "@stencil/core";

@Component({
  tag: "z-card-footer",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCardFooter {
  @Prop() titolo: string;
  @Prop() autori: string;
  @Prop() anno: number;
  @Prop() isbn: string;

  @State() isOpen: boolean = false;

  @Listen('toggleClick')
  handleToggle(): void {
    this.isOpen = !this.isOpen;
  }

  render() {
    return (
      <footer class={this.isOpen && "isopen"}>
        <span class="toggle">
          <slot name="toggle" />
        </span>
        <h2 class={this.isOpen && "isopen"}>{this.titolo}</h2>
        <div>
          <p>
            Autore: <b>{this.autori}</b>
          </p>
          <p>
            <span class="year">Anno: <b>{this.anno}</b></span>
            <span class="isbn">ISBN: <b>{this.isbn}</b></span>
          </p>
        </div>
        <slot name="list" />
      </footer>
    );
  }
}

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

  @State() isOpen: boolean = false;

  @Listen('toggle')
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
            Edizione: <b>{this.anno}</b>
          </p>
        </div>
        <slot name="list" />
      </footer>
    );
  }
}

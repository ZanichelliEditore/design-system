import { Component, Prop, h, State, Listen } from "@stencil/core";

@Component({
  tag: "z-card-footer",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCardFooter {
  @Prop() titolo: string;
  @Prop() autorilabel: string = 'Autore';
  @Prop() autori: string;
  @Prop() anno: number;
  @Prop() annolabel: string = 'Edizione';

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
            {this.autorilabel}: <b>{this.autori}</b>
          </p>
          <p>
          {this.annolabel}: <b>{this.anno}</b>
          </p>
        </div>
        <slot name="list" />
      </footer>
    );
  }
}

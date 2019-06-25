import { Component, Prop, h, State } from "@stencil/core";

@Component({
  tag: "z-card-footer",
  styleUrls: ["../../global-styles.css", "z-card-footer.css"],
  shadow: true
})
export class ZCardFooter {
  @Prop() titolo: string;
  @Prop() autori: string;
  @Prop() anno: number;
  @Prop() hasbutton: boolean;

  @State() isOpen: boolean = false;

  handleOnButtonClick(e: MouseEvent): void {
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }

  handleButtonDisplay() {
    if (!this.hasbutton) {
      return;
    }
    return (
      <button
        class={this.isOpen && "isopen"}
        onClick={(e: MouseEvent) => this.handleOnButtonClick(e)}
      >
        <i /> Risorse
      </button>
    );
  }

  render() {
    return (
      <footer class={this.isOpen && "isopen"}>
        {this.handleButtonDisplay()}

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

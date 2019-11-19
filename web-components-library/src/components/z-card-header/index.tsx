import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-card-header",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCardHeader {
  @Prop() titolo: string;
  @Prop() faded: boolean;


  render() {
    return (
      <header class={this.faded && 'faded'}>
        <h2>{this.titolo}</h2>
        <slot name="icon" />
      </header>
    );
  }
}

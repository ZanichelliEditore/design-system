import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "z-card",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCardComponent {

  @Prop() faded: boolean;

  render() {
    return (
      <div class={this.faded && "faded"}>
        <slot />
      </div>
    );
  }
}

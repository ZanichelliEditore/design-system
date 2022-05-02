import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-carousel",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZCarousel {
  @Prop() itemsDistance: number;
  @Prop() itemList: Array<any> = [];

  render() {
    return (
      <div>
        <slot />
      </div>
    );
  }
}

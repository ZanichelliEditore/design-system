import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-carousel-item",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZCarouselItem {
  /** [optional] gutter between the slide items */
  @Prop() gutter?: number = 0;

  render() {
    return (
      <li class="carousel-item" style={{ paddingRight: `${this.gutter}px` }}>
        <slot />
      </li>
    );
  }
}

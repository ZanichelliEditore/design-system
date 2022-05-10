import { Component, h } from "@stencil/core";

/**
 * ZCarousel component.
 * @cssprop --z-carousel-gutter - The gutter between items.
 * @slot - carousel items. use `<li>` elements inside this slot as it is wrapped inside an `<ul>`
 */

@Component({
  tag: "z-carousel",
  styleUrl: "styles.css",
  shadow: false
})
export class ZCarousel {
  render() {
    return (
      <div>
        <ul class="z-carousel-items-container">
          <slot />
        </ul>
      </div>
    );
  }
}

import { Component, h } from "@stencil/core";
/**
 * ZCarousel component.
 * @cssprop --z-carousel-gutter - The gutter between items.
 * @slot - carousel items. use `<li>` elements inside this slot as it is wrapped inside an `<ul>`
 */
export class ZCarousel {
  render() {
    return (h("ul", { class: "z-carousel-items-container" },
      h("slot", null)));
  }
  static get is() { return "z-carousel"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
}

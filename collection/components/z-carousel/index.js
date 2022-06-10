import { Component, h, Prop } from "@stencil/core";
/**
 * ZCarousel component.
 * @cssprop --z-carousel-gutter - The gutter between items.
 * @slot - carousel items. use `<li>` elements inside this slot as it is wrapped inside an `<ul>`
 */
export class ZCarousel {
  constructor() {
    /** sets the height of z-carousel ghost loading, this prop is mandatory when isloading is set to true, as otherwise the component won't show. */
    this.ghostLoadingHeight = 100;
  }
  render() {
    if (this.isLoading) {
      return (h("div", { style: { height: `${this.ghostLoadingHeight}px` } },
        h("z-ghost-loading", null),
        h("div", { style: { display: "none" } },
          h("slot", null))));
    }
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
  static get properties() { return {
    "isLoading": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "sets whether the z-carousel is on loading state"
      },
      "attribute": "is-loading",
      "reflect": false
    },
    "ghostLoadingHeight": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "sets the height of z-carousel ghost loading, this prop is mandatory when isloading is set to true, as otherwise the component won't show."
      },
      "attribute": "ghost-loading-height",
      "reflect": false,
      "defaultValue": "100"
    }
  }; }
}

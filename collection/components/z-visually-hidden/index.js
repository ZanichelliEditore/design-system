import { Component, h } from "@stencil/core";
export class ZVisuallyHidden {
  render() {
    return h("slot", null);
  }
  static get is() { return "z-visually-hidden"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
}

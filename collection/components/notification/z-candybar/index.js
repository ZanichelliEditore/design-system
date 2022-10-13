import { h } from "@stencil/core";
/**
 * @slot content - fill the content of the candybar (full width, full height)
 */
export class ZCandybar {
  render() {
    return (h("div", null, h("slot", { name: "content" })));
  }
  static get is() { return "z-candybar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["styles.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["styles.css"]
    };
  }
}

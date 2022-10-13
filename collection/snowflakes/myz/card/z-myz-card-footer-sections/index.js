import { h } from "@stencil/core";
/**
 * @slot top - footer top content
 * @slot bottom - footer bottom content
 */
export class ZMyzCardFooterSections {
  render() {
    return (h("div", null, h("footer", null, h("div", { class: "top" }, h("slot", { name: "top" })), h("div", { class: "bottom" }, h("slot", { name: "bottom" })))));
  }
  static get is() { return "z-myz-card-footer-sections"; }
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

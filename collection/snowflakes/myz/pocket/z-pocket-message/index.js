import { h } from "@stencil/core";
/**
 * @slot  - message body
 * @slot cta - message CTAs
 */
export class ZPocketMessage {
  render() {
    return (h("div", null, h("z-icon", { name: "exclamation-circle" }), h("div", { class: "content" }, h("slot", null)), h("div", { class: "ctaWrapper" }, h("slot", { name: "cta" }))));
  }
  static get is() { return "z-pocket-message"; }
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

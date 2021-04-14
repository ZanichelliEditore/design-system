import { Component, h } from "@stencil/core";
/**
 * @slot alert - card alert slot
 * @slot cover - book cover slot
 */
export class ZCardBody {
  render() {
    return (h("div", null,
      h("slot", { name: "alert" }),
      h("slot", { name: "cover" })));
  }
  static get is() { return "z-card-body"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
}

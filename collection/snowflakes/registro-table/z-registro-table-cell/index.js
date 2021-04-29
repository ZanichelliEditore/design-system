import { Component, Element, h } from "@stencil/core";
export class ZRegistroTableCell {
  componentWillRender() {
    this.host.setAttribute("role", "cell");
  }
  render() {
    return h("slot", null);
  }
  static get is() { return "z-registro-table-cell"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get elementRef() { return "host"; }
}

import { Component, Element, h } from "@stencil/core";
export class ZRegistroTableRow {
  componentWillRender() {
    this.host.setAttribute("role", "row");
  }
  render() {
    return h("slot", null);
  }
  static get is() { return "z-registro-table-row"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get elementRef() { return "host"; }
}

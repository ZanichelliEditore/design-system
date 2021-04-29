import { Component, Element, h } from "@stencil/core";
export class ZRegistroTableHeader {
  componentWillRender() {
    this.host.setAttribute("role", "columnheader");
  }
  render() {
    return h("slot", null);
  }
  static get is() { return "z-registro-table-header"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get elementRef() { return "host"; }
}

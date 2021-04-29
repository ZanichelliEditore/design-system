import { Component, Element, h } from "@stencil/core";
export class ZRegistroTableHead {
  componentWillRender() {
    this.host.setAttribute("role", "rowgroup");
  }
  render() {
    return h("slot", null);
  }
  static get is() { return "z-registro-table-head"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get elementRef() { return "host"; }
}

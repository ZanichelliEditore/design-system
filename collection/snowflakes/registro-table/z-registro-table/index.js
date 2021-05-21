import { Component, Element, Host, h } from "@stencil/core";
/**
 * @slot - table elements
 * @slot sticky-footer - set the content of the sticky footer
 */
export class ZRegistroTable {
  componentWillRender() {
    this.host.setAttribute("role", "table");
  }
  render() {
    return (h(Host, null,
      h("div", { class: "table" },
        h("slot", null)),
      h("slot", { name: "sticky-footer" })));
  }
  static get is() { return "z-registro-table"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get elementRef() { return "host"; }
}

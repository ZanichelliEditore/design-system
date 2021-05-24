import { Component, Element, Host, Prop, h } from "@stencil/core";
/**
 * @slot - table elements
 * @slot sticky-footer - set the content of the sticky footer
 */
export class ZRegistroTable {
  constructor() {
    /** Sets table with border */
    this.bordered = false;
    /** Sets first column sticky */
    this.columnSticky = false;
    /** Sets header sticky */
    this.headerSticky = false;
  }
  componentWillRender() {
    this.host.setAttribute("role", "table");
  }
  render() {
    return (h(Host, null,
      h("div", { class: `table ${this.bordered ? "table-bordered" : ""} 
            ${this.columnSticky ? "table-column-sticky" : ""} 
            ${this.headerSticky ? "table-header-sticky" : ""}` },
        h("slot", null)),
      h("slot", { name: "sticky-footer" })));
  }
  static get is() { return "z-registro-table"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "bordered": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Sets table with border"
      },
      "attribute": "bordered",
      "reflect": false,
      "defaultValue": "false"
    },
    "columnSticky": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Sets first column sticky"
      },
      "attribute": "column-sticky",
      "reflect": false,
      "defaultValue": "false"
    },
    "headerSticky": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Sets header sticky"
      },
      "attribute": "header-sticky",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "host"; }
}

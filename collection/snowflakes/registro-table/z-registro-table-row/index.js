import { Component, Prop, State, Host, h, Event, } from "@stencil/core";
export class ZRegistroTableRow {
  constructor() {
    this.expanded = false;
  }
  emitOnExpand() {
    this.expand.emit({ expanded: this.expanded });
  }
  handleExpand() {
    this.expanded = !this.expanded;
    this.emitOnExpand();
  }
  _renderExpandButton() {
    return (h("z-registro-table-cell", { onClick: () => this.handleExpand() },
      h("z-icon", { name: this.expanded ? "minus-circled" : "plus-circled" })));
  }
  render() {
    return (h(Host, { role: "row", expanded: this.expanded },
      this.expandable && this._renderExpandButton(),
      h("slot", null)));
  }
  static get is() { return "z-registro-table-row"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "expandable": {
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
        "text": ""
      },
      "attribute": "expandable",
      "reflect": true
    }
  }; }
  static get states() { return {
    "expanded": {}
  }; }
  static get events() { return [{
      "method": "expand",
      "name": "expand",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}

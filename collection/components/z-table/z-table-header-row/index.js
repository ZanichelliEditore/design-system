import { Host, h } from "@stencil/core";
export class ZTableHeaderRow {
  _renderExpandHeader() {
    return h("z-table-header", null);
  }
  render() {
    return (h(Host, { role: "row" }, this.expandable && this._renderExpandHeader(), h("slot", null)));
  }
  static get is() { return "z-table-header-row"; }
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
  static get properties() {
    return {
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
    };
  }
}

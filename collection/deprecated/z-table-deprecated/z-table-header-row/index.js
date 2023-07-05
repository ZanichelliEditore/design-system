import { Host, h } from "@stencil/core";
/**
 * @deprecated
 */
export class ZTableHeaderRow {
  renderExpandHeader() {
    return h("z-table-header", null);
  }
  render() {
    return (h(Host, { role: "row" }, this.expandable && this.renderExpandHeader(), h("slot", null)));
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
          "text": "Row expandable flag"
        },
        "attribute": "expandable",
        "reflect": true
      }
    };
  }
}

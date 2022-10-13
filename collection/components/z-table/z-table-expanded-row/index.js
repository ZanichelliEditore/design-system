import { h } from "@stencil/core";
export class ZTableExpandedRow {
  render() {
    return (h("td", { colSpan: this.colSpan }, h("div", { class: "content-container" }, h("slot", null))));
  }
  static get is() { return "z-table-expanded-row"; }
  static get encapsulation() { return "shadow"; }
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
      "colSpan": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Number table column plus 1 for the expand button"
        },
        "attribute": "col-span",
        "reflect": false
      }
    };
  }
}

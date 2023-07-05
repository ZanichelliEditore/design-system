import { Host, h } from "@stencil/core";
/**
 * ZTFoot component.
 * @slot - ZTFoot content (`z-tr`).
 */
export class ZTfoot {
  constructor() {
    /**
     * If true, the footer will be stuck to the bottom of the table.
     */
    this.sticky = false;
  }
  render() {
    return (h(Host, { role: "rowgroup" }, h("slot", null)));
  }
  static get is() { return "z-tfoot"; }
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
      "sticky": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If true, the footer will be stuck to the bottom of the table."
        },
        "attribute": "sticky",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
}

import { Host, h } from "@stencil/core";
/**
 * ZThead component.
 * @slot - ZThead content (`z-tr`).
 */
export class ZThead {
  constructor() {
    /**
     * If true, the header will be stuck to the top of the table.
     */
    this.sticky = false;
  }
  render() {
    return (h(Host, { role: "rowgroup" }, h("slot", null)));
  }
  static get is() { return "z-thead"; }
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
          "text": "If true, the header will be stuck to the top of the table."
        },
        "attribute": "sticky",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
}

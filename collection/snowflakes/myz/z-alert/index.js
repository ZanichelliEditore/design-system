import { h } from "@stencil/core";
/**
 * @slot - alert content
 */
export class ZAlert {
  render() {
    return (h("div", { class: this.type }, h("slot", null)));
  }
  static get is() { return "z-alert"; }
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
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "AlertType",
          "resolved": "AlertType.ERROR | AlertType.SUCCESS | AlertType.WARNING",
          "references": {
            "AlertType": {
              "location": "import",
              "path": "../../../beans/index"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "alert variant type"
        },
        "attribute": "type",
        "reflect": false
      }
    };
  }
}

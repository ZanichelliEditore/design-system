import { h } from "@stencil/core";
/**
 * @slot - link label
 */
export class ZFooterLink {
  render() {
    return (h("a", { href: this.href, target: "_blank" }, h("slot", null)));
  }
  static get is() { return "z-footer-link"; }
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
      "href": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "link"
        },
        "attribute": "href",
        "reflect": false
      }
    };
  }
}

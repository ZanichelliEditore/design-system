import { h } from "@stencil/core";
export class ZBody {
  constructor() {
    /** Font weight variant */
    this.variant = "regular";
  }
  render() {
    return (h("z-typography", { tabIndex: 0, component: this.component || "span", level: `b${this.level}`, variant: this.variant }, h("slot", null)));
  }
  static get is() { return "z-body"; }
  static get encapsulation() { return "shadow"; }
  static get properties() {
    return {
      "level": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "1 | 2 | 3 | 4 | 5",
          "resolved": "1 | 2 | 3 | 4 | 5",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Typography level"
        },
        "attribute": "level",
        "reflect": false
      },
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "\"regular\" | \"semibold\"",
          "resolved": "\"regular\" | \"semibold\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Font weight variant"
        },
        "attribute": "variant",
        "reflect": false,
        "defaultValue": "\"regular\""
      },
      "component": {
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
          "text": "HTML tag to use to wrap slotted content"
        },
        "attribute": "component",
        "reflect": false
      }
    };
  }
}

import { h } from "@stencil/core";
export class ZHeading {
  constructor() {
    this.variant = "regular";
  }
  render() {
    return (h("z-typography", { tabIndex: 0, component: this.component || `h${this.level}`, level: `h${this.level}`, variant: this.variant }, h("slot", null)));
  }
  static get is() { return "z-heading"; }
  static get encapsulation() { return "shadow"; }
  static get properties() {
    return {
      "level": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "1 | 2 | 3 | 4",
          "resolved": "1 | 2 | 3 | 4",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "level",
        "reflect": false
      },
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "\"regular\" | \"semibold\" | \"light\"",
          "resolved": "\"light\" | \"regular\" | \"semibold\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
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
          "text": ""
        },
        "attribute": "component",
        "reflect": false
      }
    };
  }
}

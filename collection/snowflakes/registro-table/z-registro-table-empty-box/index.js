import { Component, h, Host, Prop } from "@stencil/core";
export class ZRegistroTableEmptyBox {
  constructor() {
    /** Sets main title message*/
    this.message = "Siamo spiacenti, al momento non sono presenti dati da visualizzare.";
    /** Sets message */
    this.subtitle = "";
  }
  render() {
    return (h(Host, null,
      h("z-body", { level: 3, variant: "semibold" }, this.message),
      h("br", null),
      h("z-body", { level: 4, variant: "regular" }, this.subtitle),
      h("div", { class: "cta" },
        h("slot", { name: "cta1" }),
        h("slot", { name: "cta2" }))));
  }
  static get is() { return "z-registro-table-empty-box"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "message": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Sets main title message"
      },
      "attribute": "message",
      "reflect": false,
      "defaultValue": "\"Siamo spiacenti, al momento non sono presenti dati da visualizzare.\""
    },
    "subtitle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Sets message"
      },
      "attribute": "subtitle",
      "reflect": false,
      "defaultValue": "\"\""
    }
  }; }
}

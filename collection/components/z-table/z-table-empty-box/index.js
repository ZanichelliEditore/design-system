import { h, Host } from "@stencil/core";
export class ZTableEmptyBox {
  constructor() {
    /** Sets main title message*/
    this.message = "Siamo spiacenti, al momento non sono presenti dati da visualizzare.";
    /** Sets message */
    this.subtitle = "";
  }
  componentWillLoad() {
    this.hasCta1Slot = !!this.hostElement.querySelector('[slot="cta1"]');
    this.hasCta2Slot = !!this.hostElement.querySelector('[slot="cta2"]');
  }
  render() {
    return (h(Host, null, h("span", { class: "body-3-sb" }, this.message), h("br", null), !!this.subtitle && h("span", { class: "body-4" }, this.subtitle), (!!this.hasCta1Slot || !!this.hasCta2Slot) && (h("div", { class: {
        "cta": true,
        "has-2-cta": !!this.hasCta1Slot && !!this.hasCta2Slot,
      } }, h("slot", { name: "cta1" }), h("slot", { name: "cta2" })))));
  }
  static get is() { return "z-table-empty-box"; }
  static get encapsulation() { return "scoped"; }
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
    };
  }
  static get elementRef() { return "hostElement"; }
}

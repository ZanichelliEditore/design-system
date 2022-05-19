import { Component, Prop, h, Host } from "@stencil/core";
import { ZAriaAlertMode } from "../../beans";
export class ZAriaAlert {
  constructor() {
    this.mode = ZAriaAlertMode.polite;
  }
  render() {
    return (h(Host, { "aria-live": this.mode, "aria-atomic": "true", "aria-relevant": "additions" },
      h("slot", null)));
  }
  static get is() { return "z-aria-alert"; }
  static get properties() { return {
    "mode": {
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
      "attribute": "mode",
      "reflect": false,
      "defaultValue": "ZAriaAlertMode.polite"
    }
  }; }
}

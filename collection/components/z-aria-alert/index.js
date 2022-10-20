import { h, Host } from "@stencil/core";
import { ZAriaAlertMode } from "../../beans";
export class ZAriaAlert {
  constructor() {
    /** Aria live mode */
    this.mode = ZAriaAlertMode.POLITE;
  }
  render() {
    return (h(Host, { "aria-live": this.mode, "aria-atomic": "true", "aria-relevant": "additions" }, h("slot", null)));
  }
  static get is() { return "z-aria-alert"; }
  static get properties() {
    return {
      "mode": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ZAriaAlertMode",
          "resolved": "ZAriaAlertMode.ASSERTIVE | ZAriaAlertMode.POLITE",
          "references": {
            "ZAriaAlertMode": {
              "location": "import",
              "path": "../../beans"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Aria live mode"
        },
        "attribute": "mode",
        "reflect": false,
        "defaultValue": "ZAriaAlertMode.POLITE"
      }
    };
  }
}

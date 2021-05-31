import { Component, Prop, State, h } from "@stencil/core";
import { LicenseTypeEnum } from "../../../../beans/index";
/**
 * @slot icon - card header icon slot
 */
export class ZMyzCardHeader {
  constructor() {
    this.allowTooltip = false;
  }
  getTitle() {
    return this.allowTooltip ? this.titolo : "";
  }
  componentDidLoad() {
    if (this.elementHasEllipsis())
      this.allowTooltip = true;
  }
  elementHasEllipsis() {
    return this.ellipsis.offsetWidth < this.ellipsis.scrollWidth;
  }
  retrieveClass() {
    return {
      real: this.cardtype === LicenseTypeEnum.real,
      trial: this.cardtype === LicenseTypeEnum.trial,
      faded: this.faded
    };
  }
  render() {
    return (h("header", { class: this.retrieveClass() },
      h("h2", { ref: el => (this.ellipsis = el), title: this.getTitle() }, this.titolo),
      h("slot", { name: "icon" })));
  }
  static get is() { return "z-myz-card-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "titolo": {
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
        "text": "volume title"
      },
      "attribute": "titolo",
      "reflect": false
    },
    "faded": {
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
        "text": "faded status"
      },
      "attribute": "faded",
      "reflect": false
    },
    "cardtype": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "LicenseTypeEnum",
        "resolved": "LicenseTypeEnum.real | LicenseTypeEnum.trial | LicenseTypeEnum.virtual",
        "references": {
          "LicenseTypeEnum": {
            "location": "import",
            "path": "../../../../beans/index"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "card graphic variant (optional)"
      },
      "attribute": "cardtype",
      "reflect": false
    }
  }; }
  static get states() { return {
    "allowTooltip": {}
  }; }
}

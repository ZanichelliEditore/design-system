import { Component, Prop, h, Element } from "@stencil/core";
import { ButtonVariantEnum, } from "../../../beans";
export class ZStoriaButton {
  constructor() {
    /** graphic variant */
    this.variant = ButtonVariantEnum.primary;
  }
  render() {
    return h("slot", null);
  }
  static get is() { return "z-storia-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ButtonVariantBean",
        "resolved": "ButtonVariantEnum.primary | ButtonVariantEnum.secondary | ButtonVariantEnum.tertiary",
        "references": {
          "ButtonVariantBean": {
            "location": "import",
            "path": "../../../beans"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "graphic variant"
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "ButtonVariantEnum.primary"
    }
  }; }
  static get elementRef() { return "hostElement"; }
}

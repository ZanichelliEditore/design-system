import { Component, Prop, h, Element } from "@stencil/core";
import { ButtonVariantEnum, ButtonTypeEnum, } from "../../../beans";
/**
 * @slot - button label
 */
export class ZButton {
  constructor() {
    /** disable button */
    this.disabled = false;
    /** button type */
    this.type = ButtonTypeEnum.button;
    /** graphic variant */
    this.variant = ButtonVariantEnum.primary;
    /** reduce button size (optional) */
    this.issmall = false;
  }
  renderLegacyButton() {
    return (h("button", { id: this.htmlid, name: this.name, type: this.type, disabled: this.disabled, class: `${this.variant}${this.issmall ? " small" : ""}` },
      this.icon && h("z-icon", { name: this.icon, width: 16, height: 16 }),
      h("slot", null)));
  }
  render() {
    this.hostElement.style.pointerEvents = this.disabled ? 'none' : 'auto';
    return (h("slot", { name: "element" }, this.renderLegacyButton()));
  }
  static get is() { return "z-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "htmlid": {
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
        "text": "id, should be unique"
      },
      "attribute": "htmlid",
      "reflect": false
    },
    "name": {
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
        "text": "name"
      },
      "attribute": "name",
      "reflect": false
    },
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "disable button"
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "HTMLButtonElement[\"type\"]",
        "resolved": "string",
        "references": {
          "HTMLButtonElement": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "button type"
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "ButtonTypeEnum.button"
    },
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
      "reflect": true,
      "defaultValue": "ButtonVariantEnum.primary"
    },
    "issmall": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "reduce button size (optional)"
      },
      "attribute": "issmall",
      "reflect": true,
      "defaultValue": "false"
    },
    "icon": {
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
        "text": "add an icon to button (optional)"
      },
      "attribute": "icon",
      "reflect": false
    }
  }; }
  static get elementRef() { return "hostElement"; }
}

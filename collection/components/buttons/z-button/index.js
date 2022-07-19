import { Component, Prop, h, Element } from "@stencil/core";
import { ButtonVariantEnum, ButtonTypeEnum, ButtonSizeEnum, } from "../../../beans";
/**
 * @slot - button label
 */
export class ZButton {
  constructor() {
    /** HTML button disabled attribute. */
    this.disabled = false;
    /** HTML button type attribute. */
    this.type = ButtonTypeEnum.button;
    /** Graphical variant: `primary`, `secondary`, `tertiary`. Defaults to `primary`. */
    this.variant = ButtonVariantEnum.primary;
    /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
    this.size = ButtonSizeEnum.big;
  }
  getAttributes() {
    return {
      id: this.htmlid,
      "aria-label": this.ariaLabel,
      class: {
        container: true,
        [this.variant]: true,
        [this.size]: true,
        "has-text": !!this.hostElement.textContent
      }
    };
  }
  render() {
    if (this.href) {
      return (h("a", Object.assign({}, this.getAttributes(), { href: this.href, target: this.target }),
        this.icon && h("z-icon", { name: this.icon, width: 16, height: 16 }),
        h("slot", null)));
    }
    return (h("button", Object.assign({}, this.getAttributes(), { name: this.name, type: this.type, disabled: this.disabled }),
      this.icon && h("z-icon", { name: this.icon, width: 16, height: 16 }),
      h("slot", null)));
  }
  static get is() { return "z-button"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "ariaLabel": {
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
        "text": "defines a string value that labels an interactive element, used for accessibility."
      },
      "attribute": "aria-label",
      "reflect": true
    },
    "href": {
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
        "text": "HTML <a> href attribute. If it is set, it renders an HTML <a> tag."
      },
      "attribute": "href",
      "reflect": true
    },
    "target": {
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
        "text": "HTML a target attribute."
      },
      "attribute": "target",
      "reflect": true
    },
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
        "text": "Identifier, should be unique."
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
        "text": "HTML button name attribute."
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
        "text": "HTML button disabled attribute."
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
        "text": "HTML button type attribute."
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
        "resolved": "ButtonVariantEnum.primary | ButtonVariantEnum.secondary | ButtonVariantEnum.tertiary | typeof ButtonVariantEnum[\"dark-bg\"]",
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
        "text": "Graphical variant: `primary`, `secondary`, `tertiary`. Defaults to `primary`."
      },
      "attribute": "variant",
      "reflect": true,
      "defaultValue": "ButtonVariantEnum.primary"
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
        "text": "`z-icon` name to use (optional)."
      },
      "attribute": "icon",
      "reflect": true
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ButtonSizeEnum",
        "resolved": "ButtonSizeEnum.big | ButtonSizeEnum.small | typeof ButtonSizeEnum[\"x-small\"]",
        "references": {
          "ButtonSizeEnum": {
            "location": "import",
            "path": "../../../beans"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Available sizes: `big`, `small` and `x-small`. Defaults to `big`."
      },
      "attribute": "size",
      "reflect": true,
      "defaultValue": "ButtonSizeEnum.big"
    }
  }; }
  static get elementRef() { return "hostElement"; }
}

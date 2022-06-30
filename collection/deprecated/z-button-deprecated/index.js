import { Component, Prop, h, Element } from "@stencil/core";
import classNames from "classnames";
import { ButtonVariantEnum, ButtonTypeEnum, ButtonSizeEnum, } from "../../beans";
/**
 * @slot - button label
 */
export class ZButtonDeprecated {
  constructor() {
    /** HTML button disabled attribute. */
    this.disabled = false;
    /** HTML button type attribute. */
    this.type = ButtonTypeEnum.button;
    /** Graphical variant: `primary`, `secondary`, `tertiary`, `dark-bg`. Defaults to `primary`. */
    this.variant = ButtonVariantEnum.primary;
    /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
    this.size = ButtonSizeEnum.big;
    /** Reduce button size (deprecated).
     * @deprecated Use `size` prop.
     */
    this.issmall = false;
    /** Spy to render square button. */
    this.square = false;
  }
  render() {
    this.hostElement.style.pointerEvents = this.disabled ? "none" : "auto";
    return (h("slot", { name: "element" },
      h("button", { id: this.htmlid, name: this.name, type: this.type, disabled: this.disabled, class: classNames(this.variant, this.size, { issmall: this.issmall }, { square: this.square }) },
        this.icon && h("z-icon", { name: this.icon, width: 16, height: 16 }),
        h("slot", null))));
  }
  static get is() { return "z-button-deprecated"; }
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
            "path": "../../beans"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Graphical variant: `primary`, `secondary`, `tertiary`, `dark-bg`. Defaults to `primary`."
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
      "reflect": false
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
            "path": "../../beans"
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
        "tags": [{
            "name": "deprecated",
            "text": "Use `size` prop."
          }],
        "text": "Reduce button size (deprecated)."
      },
      "attribute": "issmall",
      "reflect": true,
      "defaultValue": "false"
    },
    "square": {
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
        "text": "Spy to render square button."
      },
      "attribute": "square",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "hostElement"; }
}

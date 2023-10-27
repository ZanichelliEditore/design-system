import { h } from "@stencil/core";
import { ButtonVariant, ButtonType, ControlSize } from "../../../beans";
/**
 * @slot - button label
 */
export class ZButton {
  constructor() {
    /** defines a string value that labels an interactive element, used for accessibility. */
    this.ariaLabel = "";
    /** HTML button disabled attribute. */
    this.disabled = false;
    /** HTML button type attribute. */
    this.type = ButtonType.BUTTON;
    /** Graphical variant: `primary`, `secondary`, `tertiary`. Defaults to `primary`. */
    this.variant = ButtonVariant.PRIMARY;
    /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
    this.size = ControlSize.BIG;
  }
  getAttributes() {
    return {
      id: this.htmlid,
      class: {
        "z-button--container": true,
        "z-button--has-text": !!this.hostElement.textContent.trim(),
      },
    };
  }
  render() {
    if (this.href) {
      return (h("a", Object.assign({}, this.getAttributes(), { "aria-label": this.ariaLabel, href: this.href, target: this.target }), this.icon && (h("z-icon", { name: this.icon, width: 16, height: 16 })), h("slot", null)));
    }
    return (h("button", Object.assign({}, this.getAttributes(), { "aria-label": this.ariaLabel, name: this.name, type: this.type, role: this.role, disabled: this.disabled }), this.icon && (h("z-icon", { name: this.icon, width: 16, height: 16 })), h("slot", null)));
  }
  static get is() { return "z-button"; }
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
      "ariaLabel": {
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
          "text": "defines a string value that labels an interactive element, used for accessibility."
        },
        "attribute": "aria-label",
        "reflect": true,
        "defaultValue": "\"\""
      },
      "role": {
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
          "text": "defines role attribute, used for accessibility."
        },
        "attribute": "role",
        "reflect": false
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
        "reflect": false
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
        "reflect": false
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
          "original": "ButtonType",
          "resolved": "ButtonType.BUTTON | ButtonType.RESET | ButtonType.SUBMIT",
          "references": {
            "ButtonType": {
              "location": "import",
              "path": "../../../beans"
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
        "defaultValue": "ButtonType.BUTTON"
      },
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ButtonVariant",
          "resolved": "ButtonVariant.DARK_BG | ButtonVariant.PRIMARY | ButtonVariant.SECONDARY | ButtonVariant.TERTIARY",
          "references": {
            "ButtonVariant": {
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
        "defaultValue": "ButtonVariant.PRIMARY"
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
          "original": "ButtonSize | ControlSize",
          "resolved": "ButtonSize.BIG | ButtonSize.SMALL | ButtonSize.X_SMALL | ControlSize.BIG | ControlSize.SMALL | ControlSize.X_SMALL",
          "references": {
            "ButtonSize": {
              "location": "import",
              "path": "../../../beans"
            },
            "ControlSize": {
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
        "defaultValue": "ControlSize.BIG"
      }
    };
  }
  static get elementRef() { return "hostElement"; }
}

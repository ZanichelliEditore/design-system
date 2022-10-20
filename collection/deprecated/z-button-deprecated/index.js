import { h } from "@stencil/core";
import { ButtonVariant, ButtonType, ButtonSize } from "../../beans";
/**
 * @slot - button label
 */
export class ZButtonDeprecated {
  constructor() {
    /** HTML button disabled attribute. */
    this.disabled = false;
    /** HTML button type attribute. */
    this.type = ButtonType.BUTTON;
    /** Graphical variant: `primary`, `secondary`, `tertiary`, `dark-bg`. Defaults to `primary`. */
    this.variant = ButtonVariant.PRIMARY;
    /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
    this.size = ButtonSize.BIG;
    /** Reduce button size (deprecated).
     * @deprecated Use `size` prop.
     */
    this.issmall = false;
    /** Spy to render square button. */
    this.square = false;
  }
  render() {
    this.hostElement.style.pointerEvents = this.disabled ? "none" : "auto";
    return (h("slot", { name: "element" }, h("button", { id: this.htmlid, name: this.name, type: this.type, disabled: this.disabled, class: {
        [this.variant]: true,
        [this.size]: true,
        issmall: this.issmall,
        square: this.square,
      } }, this.icon && (h("z-icon", { name: this.icon, width: 16, height: 16 })), h("slot", null))));
  }
  static get is() { return "z-button-deprecated"; }
  static get encapsulation() { return "shadow"; }
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
              "path": "../../beans"
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
          "original": "ButtonSize",
          "resolved": "ButtonSize.BIG | ButtonSize.SMALL | ButtonSize.X_SMALL",
          "references": {
            "ButtonSize": {
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
        "defaultValue": "ButtonSize.BIG"
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
    };
  }
  static get elementRef() { return "hostElement"; }
}

import { h } from "@stencil/core";
import { ZChipType } from "../../../beans";
export class ZChip {
  constructor() {
    /** z-chip size type, can be default, medium or small */
    this.type = ZChipType.DEFAULT;
    /** set z-chip as disabled */
    this.disabled = false;
    /** z-chip aria-label string */
    this.ariaLabel = "";
  }
  render() {
    return (h("div", { class: {
        "z-chip-container": true,
        "z-chip-interactive": !!this.interactiveIcon,
        [this.type]: true,
      }, "aria-disabled": this.disabled }, this.icon && h("z-icon", { name: this.icon }), h("slot", null), this.interactiveIcon && (h("button", { type: "button", onClick: () => this.interactiveIconClick.emit(), onKeyUp: () => this.interactiveIconClick.emit(), "aria-label": this.ariaLabel, disabled: this.disabled }, h("z-icon", { class: "interactive-icon", name: this.interactiveIcon })))));
  }
  static get is() { return "z-chip"; }
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
          "text": "Non interactive icon"
        },
        "attribute": "icon",
        "reflect": false
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ZChipType",
          "resolved": "ZChipType.DEFAULT | ZChipType.MEDIUM | ZChipType.SMALL",
          "references": {
            "ZChipType": {
              "location": "import",
              "path": "../../../beans"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "z-chip size type, can be default, medium or small"
        },
        "attribute": "type",
        "reflect": true,
        "defaultValue": "ZChipType.DEFAULT"
      },
      "interactiveIcon": {
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
          "text": "z-chip interactive icon"
        },
        "attribute": "interactive-icon",
        "reflect": true
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
          "text": "set z-chip as disabled"
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
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
          "text": "z-chip aria-label string"
        },
        "attribute": "aria-label",
        "reflect": false,
        "defaultValue": "\"\""
      }
    };
  }
  static get events() {
    return [{
        "method": "interactiveIconClick",
        "name": "interactiveIconClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "click on interactive icon"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
}

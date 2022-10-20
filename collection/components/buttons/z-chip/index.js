import { h } from "@stencil/core";
import { Device, ZChipType } from "../../../beans";
import { getDevice, handleKeyboardSubmit } from "../../../utils/utils";
export class ZChip {
  constructor() {
    /** z-chip size type, can be default, medium or small */
    this.type = ZChipType.DEFAULT;
    /** set z-chip as disabled  */
    this.disabled = false;
  }
  emitinteractiveIconClick() {
    this.interactiveIconClick.emit();
  }
  getIconSize() {
    return getDevice() !== Device.DESKTOP ? 22 : 14;
  }
  render() {
    if (this.interactiveIcon) {
      return (h("button", { class: this.type, disabled: this.disabled, tabindex: "0", type: "button" }, this.icon && (h("z-icon", { class: "icon-sx", name: this.icon, width: this.getIconSize(), height: this.getIconSize() })), h("slot", null), h("z-icon", { tabIndex: this.disabled ? -1 : 0, onClick: () => this.emitinteractiveIconClick(), onKeyUp: (e) => handleKeyboardSubmit(e, this.emitinteractiveIconClick.bind(this)), name: this.interactiveIcon, width: this.getIconSize(), height: this.getIconSize() })));
    }
    return (h("div", { class: `${this.type}`, tabindex: "0" }, this.icon && (h("z-icon", { name: this.icon, width: this.getIconSize(), height: this.getIconSize() })), h("slot", null)));
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

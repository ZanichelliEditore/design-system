import { h, Host } from "@stencil/core";
import { PopoverPosition, PopoverBorderRadius, PopoverShadow, KeyboardCode } from "../../beans";
import { getElementTree } from "../../utils/utils";
export class ZPopoverDeprecated {
  /**
   * Constructor.
   */
  constructor() {
    /** [optional] Popover position */
    this.position = PopoverPosition.AFTER_UP;
    /** [optional] Background color token for popover */
    this.backgroundColor = "color-white";
    /** [optional] Border radius token for popover */
    this.borderRadius = PopoverBorderRadius.SMALL;
    /** [optional] Box shadow token for popover */
    this.boxShadow = PopoverShadow.SHADOW_1;
    /** [optional] Show or hide arrow */
    this.showArrow = false;
    /** [optional] Sets padding for Popover container */
    this.padding = "8px";
    this.isVisible = false;
    this.popoverPosition = this.position;
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  emitTriggerClick() {
    this.triggerClick.emit({
      isVisible: this.isVisible,
    });
  }
  openPopover() {
    const width = document.body.clientWidth;
    const height = window.innerHeight;
    const rect = this.popoverElem.getBoundingClientRect();
    const l = rect.left;
    const r = rect.right;
    const t = rect.top;
    const b = rect.bottom;
    let firstSide = this.position.split("-")[0];
    let secondSide = this.position.split("-")[1];
    // If top is outside viewport
    if (t < 0) {
      if (this.position.startsWith("above")) {
        firstSide = "below";
      }
      else {
        secondSide = "down";
      }
    }
    // If bottom is outside viewport
    if (b > height) {
      if (this.position.startsWith("below")) {
        firstSide = "above";
      }
      else {
        secondSide = "up";
      }
    }
    // If right is outside viewport
    if (r > width) {
      if (this.position.startsWith("above") || this.position.startsWith("below")) {
        secondSide = "left";
      }
      else {
        firstSide = "before";
      }
    }
    // If left is outside viewport
    if (l < 0) {
      if (this.position.startsWith("above") || this.position.startsWith("below")) {
        secondSide = "right";
      }
      else {
        firstSide = "after";
      }
    }
    this.popoverPosition = PopoverPosition[`${firstSide}-${secondSide}`];
    this.isVisible = true;
  }
  closePopover() {
    this.popoverPosition = this.position;
    this.isVisible = false;
  }
  closePopoverWithKeyboard(e) {
    if (e.key === KeyboardCode.ESC) {
      this.closePopover();
    }
  }
  handleClick(event) {
    this.isVisible ? this.closePopover() : this.openPopover();
    this.emitTriggerClick();
    event.stopPropagation();
  }
  handleKeyDown(event) {
    if (event.code === KeyboardCode.ENTER) {
      this.isVisible ? this.closePopover() : this.openPopover();
    }
  }
  handleOutsideClick(e) {
    const tree = getElementTree(e.target);
    const parent = tree.find((elem) => elem.nodeName.toLowerCase() === "z-popover-deprecated");
    if (!parent) {
      this.closePopover();
    }
  }
  render() {
    return (h(Host, { onKeyDown: this.handleKeyDown }, h("div", { tabindex: "0", onClick: (event) => this.handleClick(event), onKeyDown: (event) => {
        if (event.key === KeyboardCode.ENTER) {
          this.handleClick(event);
        }
      } }, h("slot", { name: "trigger" })), h("div", { ref: (e) => (this.popoverElem = e), class: {
        "popover-content-container": true,
        [this.popoverPosition]: true,
        [`border-radius-${this.borderRadius}`]: true,
        [this.boxShadow]: true,
        "show-arrow": this.showArrow,
        "visible": this.isVisible,
      }, style: {
        backgroundColor: `var(--${this.backgroundColor})`,
        padding: this.padding,
      } }, h("slot", { name: "popover" }))));
  }
  static get is() { return "z-popover-deprecated"; }
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
      "position": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "PopoverPosition",
          "resolved": "PopoverPosition.ABOVE_CENTER | PopoverPosition.ABOVE_LEFT | PopoverPosition.ABOVE_RIGHT | PopoverPosition.AFTER_CENTER | PopoverPosition.AFTER_DOWN | PopoverPosition.AFTER_UP | PopoverPosition.BEFORE_CENTER | PopoverPosition.BEFORE_DOWN | PopoverPosition.BEFORE_UP | PopoverPosition.BELOW_CENTER | PopoverPosition.BELOW_LEFT | PopoverPosition.BELOW_RIGHT",
          "references": {
            "PopoverPosition": {
              "location": "import",
              "path": "../../beans"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "[optional] Popover position"
        },
        "attribute": "position",
        "reflect": false,
        "defaultValue": "PopoverPosition.AFTER_UP"
      },
      "backgroundColor": {
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
          "text": "[optional] Background color token for popover"
        },
        "attribute": "background-color",
        "reflect": false,
        "defaultValue": "\"color-white\""
      },
      "borderRadius": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "PopoverBorderRadius",
          "resolved": "PopoverBorderRadius.MEDIUM | PopoverBorderRadius.NONE | PopoverBorderRadius.SMALL",
          "references": {
            "PopoverBorderRadius": {
              "location": "import",
              "path": "../../beans"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "[optional] Border radius token for popover"
        },
        "attribute": "border-radius",
        "reflect": false,
        "defaultValue": "PopoverBorderRadius.SMALL"
      },
      "boxShadow": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "PopoverShadow",
          "resolved": "PopoverShadow.SHADOW_1 | PopoverShadow.SHADOW_12 | PopoverShadow.SHADOW_16 | PopoverShadow.SHADOW_2 | PopoverShadow.SHADOW_24 | PopoverShadow.SHADOW_3 | PopoverShadow.SHADOW_4 | PopoverShadow.SHADOW_6 | PopoverShadow.SHADOW_8",
          "references": {
            "PopoverShadow": {
              "location": "import",
              "path": "../../beans"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "[optional] Box shadow token for popover"
        },
        "attribute": "box-shadow",
        "reflect": false,
        "defaultValue": "PopoverShadow.SHADOW_1"
      },
      "showArrow": {
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
          "text": "[optional] Show or hide arrow"
        },
        "attribute": "show-arrow",
        "reflect": false,
        "defaultValue": "false"
      },
      "padding": {
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
          "text": "[optional] Sets padding for Popover container"
        },
        "attribute": "padding",
        "reflect": false,
        "defaultValue": "\"8px\""
      }
    };
  }
  static get states() {
    return {
      "isVisible": {},
      "popoverPosition": {}
    };
  }
  static get events() {
    return [{
        "method": "triggerClick",
        "name": "triggerClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted on popover click, returns isVisible state"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get listeners() {
    return [{
        "name": "closePopover",
        "method": "closePopover",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "keyup",
        "method": "closePopoverWithKeyboard",
        "target": "window",
        "capture": false,
        "passive": false
      }, {
        "name": "click",
        "method": "handleOutsideClick",
        "target": "body",
        "capture": true,
        "passive": false
      }];
  }
}

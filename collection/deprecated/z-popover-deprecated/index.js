import { Component, Prop, h, Host, State, Listen, Event, } from "@stencil/core";
import classNames from "classnames";
import { PopoverPosition, PopoverBorderRadius, PopoverShadow, KeyboardKeys, } from "../../beans";
import { getElementTree } from "../../utils/utils";
export class ZPopoverDeprecated {
  /**
   * Constructor.
   */
  constructor() {
    /** [optional] Popover position */
    this.position = PopoverPosition["after-up"];
    /** [optional] Background color token for popover */
    this.backgroundColor = "color-white";
    /** [optional] Border radius token for popover */
    this.borderRadius = PopoverBorderRadius.small;
    /** [optional] Box shadow token for popover */
    this.boxShadow = PopoverShadow["shadow-1"];
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
      if (this.position.startsWith("above") ||
        this.position.startsWith("below")) {
        secondSide = "left";
      }
      else {
        firstSide = "before";
      }
    }
    // If left is outside viewport
    if (l < 0) {
      if (this.position.startsWith("above") ||
        this.position.startsWith("below")) {
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
    if (e.key === KeyboardKeys.ESC) {
      this.closePopover();
    }
  }
  handleClick(event) {
    this.isVisible ? this.closePopover() : this.openPopover();
    this.emitTriggerClick();
    event.stopPropagation();
  }
  handleKeyDown(event) {
    if (event.code === KeyboardKeys.ENTER) {
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
    return (h(Host, { onKeyDown: this.handleKeyDown },
      h("div", { tabindex: "0", onClick: (event) => this.handleClick(event), onKeyDown: (event) => {
          if (event.key === KeyboardKeys.ENTER) {
            this.handleClick(event);
          }
        } },
        h("slot", { name: "trigger" })),
      h("div", { ref: (e) => (this.popoverElem = e), class: classNames("popover-content-container", this.popoverPosition, `border-radius-${this.borderRadius}`, this.boxShadow, { "show-arrow": this.showArrow }, { visible: this.isVisible }), style: {
          backgroundColor: `var(--${this.backgroundColor})`,
          padding: this.padding,
        } },
        h("slot", { name: "popover" }))));
  }
  static get is() { return "z-popover-deprecated"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "position": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "PopoverPosition",
        "resolved": "typeof PopoverPosition[\"above-center\"] | typeof PopoverPosition[\"above-left\"] | typeof PopoverPosition[\"above-right\"] | typeof PopoverPosition[\"after-center\"] | typeof PopoverPosition[\"after-down\"] | typeof PopoverPosition[\"after-up\"] | typeof PopoverPosition[\"before-center\"] | typeof PopoverPosition[\"before-down\"] | typeof PopoverPosition[\"before-up\"] | typeof PopoverPosition[\"below-center\"] | typeof PopoverPosition[\"below-left\"] | typeof PopoverPosition[\"below-right\"]",
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
      "defaultValue": "PopoverPosition[\"after-up\"]"
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
        "resolved": "PopoverBorderRadius.medium | PopoverBorderRadius.none | PopoverBorderRadius.small",
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
      "defaultValue": "PopoverBorderRadius.small"
    },
    "boxShadow": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "PopoverShadow",
        "resolved": "typeof PopoverShadow[\"shadow-1\"] | typeof PopoverShadow[\"shadow-12\"] | typeof PopoverShadow[\"shadow-16\"] | typeof PopoverShadow[\"shadow-2\"] | typeof PopoverShadow[\"shadow-24\"] | typeof PopoverShadow[\"shadow-3\"] | typeof PopoverShadow[\"shadow-4\"] | typeof PopoverShadow[\"shadow-6\"] | typeof PopoverShadow[\"shadow-8\"]",
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
      "defaultValue": "PopoverShadow[\"shadow-1\"]"
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
  }; }
  static get states() { return {
    "isVisible": {},
    "popoverPosition": {}
  }; }
  static get events() { return [{
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
    }]; }
  static get listeners() { return [{
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
    }]; }
}
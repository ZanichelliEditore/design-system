import { Component, Prop, h, Host, State, Listen } from "@stencil/core";
import classNames from "classnames";
import { PopoverPosition, PopoverBorderRadius, PopoverShadow, KeyboardKeys, } from "../../beans";
import { getElementTree } from "../../utils/utils";
export class ZPopover {
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
    this.isVisible = false;
    this.defaultPosition = this.position;
  }
  closePopover() {
    this.isVisible = false;
  }
  closePopoverWithKeyboard(e) {
    if (e.key === KeyboardKeys.ESC) {
      this.closePopover();
    }
  }
  handleClick() {
    this.isVisible = !this.isVisible;
    this.checkSpaceAvailable();
  }
  handleOutsideClick(e) {
    const tree = getElementTree(e.target);
    const parent = tree.find((elem) => elem.nodeName.toLowerCase() === "z-popover");
    if (!parent) {
      this.isVisible = false;
    }
  }
  checkSpaceAvailable() {
    if (!this.isVisible) {
      this.position = this.defaultPosition;
      return;
    }
    const width = document.body.clientWidth;
    const height = window.innerHeight;
    const l = this.popoverElem.getBoundingClientRect().left;
    const r = this.popoverElem.getBoundingClientRect().right;
    const t = this.popoverElem.getBoundingClientRect().top;
    const b = this.popoverElem.getBoundingClientRect().bottom;
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
    this.position = PopoverPosition[`${firstSide}-${secondSide}`];
  }
  render() {
    return (h(Host, null,
      h("div", { onClick: () => this.handleClick() },
        h("slot", { name: "trigger" })),
      h("div", { ref: (e) => (this.popoverElem = e), class: classNames("popover-content-container", this.position, `border-radius-${this.borderRadius}`, this.boxShadow, { "show-arrow": this.showArrow }, { visible: this.isVisible }), style: {
          backgroundColor: `var(--${this.backgroundColor})`,
        } },
        h("slot", { name: "popover" }))));
  }
  static get is() { return "z-popover"; }
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
      "mutable": true,
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
        "resolved": "typeof PopoverShadow[\"shadow-0\"] | typeof PopoverShadow[\"shadow-1\"] | typeof PopoverShadow[\"shadow-2\"] | typeof PopoverShadow[\"shadow-3\"] | typeof PopoverShadow[\"shadow-4\"]",
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
    }
  }; }
  static get states() { return {
    "isVisible": {}
  }; }
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

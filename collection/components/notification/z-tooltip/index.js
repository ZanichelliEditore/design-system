import { Component, Prop, h } from "@stencil/core";
import { TooltipPosition } from "../../../beans/index";
export class ZTooltip {
  constructor() {
    this.direction = TooltipPosition[(this.type).toUpperCase()];
  }
  getArrowClass() {
    switch (this.direction) {
      case TooltipPosition.TOP:
        return "tooltip tooltip-bottom-arrow";
      case TooltipPosition.BOTTOM:
        return "tooltip tooltip-top-arrow";
      case TooltipPosition.LEFT:
        return "tooltip tooltip-right-arrow";
      case TooltipPosition.RIGHT:
        return "tooltip tooltip-left-arrow";
    }
  }
  render() {
    return h("div", { class: this.getArrowClass() }, this.content);
  }
  static get is() { return "z-tooltip"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "content": {
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
        "text": "content text"
      },
      "attribute": "content",
      "reflect": false
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "TooltipPosition",
        "resolved": "TooltipPosition.BOTTOM | TooltipPosition.LEFT | TooltipPosition.NO_ARROW | TooltipPosition.RIGHT | TooltipPosition.TOP",
        "references": {
          "TooltipPosition": {
            "location": "import",
            "path": "../../../beans/index"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "tooltip position variant"
      },
      "attribute": "type",
      "reflect": false
    }
  }; }
}

import { Component, Prop, h } from "@stencil/core";
import { TooltipPosition } from "../../../beans/index";
export class ZTooltip {
  getArrowClass() {
    const direction = TooltipPosition[(this.type).toUpperCase()];
    switch (direction) {
      case TooltipPosition.TOP:
        return "tooltip tooltip-bottom-arrow";
      case TooltipPosition.BOTTOM:
        return "tooltip tooltip-top-arrow";
      case TooltipPosition.LEFT:
        return "tooltip tooltip-right-arrow";
      case TooltipPosition.RIGHT:
        return "tooltip tooltip-left-arrow";
      case TooltipPosition.TOP_LEFT:
        return "tooltip tooltip-bottom-right-arrow";
      case TooltipPosition.TOP_RIGHT:
        return "tooltip tooltip-bottom-left-arrow";
      case TooltipPosition.BOTTOM_LEFT:
        return "tooltip tooltip-top-right-arrow";
      case TooltipPosition.BOTTOM_RIGHT:
        return "tooltip tooltip-top-left-arrow";
    }
  }
  render() {
    if (this.content) {
      return (h("div", { class: `${this.getArrowClass()} legacy` }, this.content));
    }
    return (h("div", { class: this.getArrowClass() },
      h("slot", null)));
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
        "resolved": "TooltipPosition.BOTTOM | TooltipPosition.BOTTOM_LEFT | TooltipPosition.BOTTOM_RIGHT | TooltipPosition.LEFT | TooltipPosition.NO_ARROW | TooltipPosition.RIGHT | TooltipPosition.TOP | TooltipPosition.TOP_LEFT | TooltipPosition.TOP_RIGHT",
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

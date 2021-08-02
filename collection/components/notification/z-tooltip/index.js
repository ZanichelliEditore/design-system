import { Component, Prop, h, Host, Watch, Element, State, Event, } from "@stencil/core";
import { TooltipPosition } from "../../../beans/index";
/**
 * Calculate computed offset.
 * It includes matrix transformations.
 * @param element The target element.
 * @param targetParentOffset The relative offset parent.
 * @return A client rect object.
 */
function computeOffset(element, targetParentOffset) {
  const rect = element.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;
  let top = 0;
  let left = 0;
  let offsetParent = element;
  while (offsetParent && offsetParent != targetParentOffset) {
    left += offsetParent.offsetLeft;
    // document.body sometimes has offsetTop == 0 but still has an
    // offset because of children margins!
    if (offsetParent === document.body) {
      top += offsetParent.getBoundingClientRect().top + window.scrollY;
    }
    else {
      top += offsetParent.offsetTop;
    }
    if (!offsetParent.offsetParent) {
      break;
    }
    offsetParent = offsetParent.offsetParent;
  }
  let parentWidth;
  let parentHeight;
  if (offsetParent === document.body) {
    parentWidth = window.innerWidth;
    parentHeight = window.innerHeight;
  }
  else {
    parentWidth = offsetParent.offsetWidth;
    parentHeight = offsetParent.offsetHeight;
  }
  const right = parentWidth - left;
  const bottom = parentHeight - top;
  return { top, right, bottom, left, width, height };
}
export class ZTooltip {
  constructor() {
    /** Tooltip position. */
    this.type = TooltipPosition.AUTO;
    /**
     * The open state of the tooltip.
     */
    this.open = false;
  }
  validateType(newValue) {
    if (newValue &&
      Object
        .values(TooltipPosition)
        .every((position) => newValue !== position)) {
      this.type = TooltipPosition.AUTO;
    }
  }
  onPositionChange() {
    this.positionChange.emit({ position: this.position });
  }
  /**
   * Setup tooltip behaviors on opening.
   */
  onOpen() {
    if (this.content) {
      return;
    }
    if (this.open) {
      const setPosition = () => {
        if (this.open) {
          this.setPosition();
          requestAnimationFrame(setPosition);
        }
      };
      setPosition();
    }
    else {
      const style = this.host.style;
      style.removeProperty("top");
      style.removeProperty("right");
      style.removeProperty("bottom");
      style.removeProperty("left");
    }
  }
  /**
   * Set the position of the tooltip.
   */
  setPosition() {
    let element;
    if (typeof this.bindTo === "string") {
      element = this.host.ownerDocument.querySelector(this.bindTo);
    }
    else if (this.bindTo) {
      element = this.bindTo;
    }
    else {
      element = this.host.parentElement;
    }
    if (!element) {
      return;
    }
    let position = this.type;
    const boundingRect = computeOffset(element, this.host.offsetParent);
    if (position === TooltipPosition.AUTO) {
      /**
       * The `AUTO` position tries to place the tooltip in the "safest" area,
       * where there's more space available.
       */
      const positions = [];
      if ((boundingRect.top + boundingRect.height) / window.innerHeight > 0.9) {
        positions.unshift(TooltipPosition.TOP);
      }
      else if ((boundingRect.top + boundingRect.height) / window.innerHeight > 0.6) {
        positions.push(TooltipPosition.TOP);
      }
      else if ((boundingRect.top + boundingRect.height) / window.innerHeight < 0.1) {
        positions.unshift(TooltipPosition.BOTTOM);
      }
      else {
        positions.push(TooltipPosition.BOTTOM);
      }
      if ((boundingRect.left + boundingRect.width) / window.innerWidth > 0.6) {
        positions.push(TooltipPosition.LEFT);
      }
      else if ((boundingRect.left + boundingRect.width) / window.innerWidth < 0.4) {
        positions.push(TooltipPosition.RIGHT);
      }
      position = positions.join("_");
    }
    const style = this.host.style;
    if (!this.content) {
      style.position = "absolute";
    }
    if (position === TooltipPosition.TOP ||
      position === TooltipPosition.TOP_RIGHT ||
      position === TooltipPosition.TOP_LEFT) {
      style.top = "auto";
      style.bottom = `${boundingRect.bottom}px`;
    }
    if (position === TooltipPosition.BOTTOM ||
      position === TooltipPosition.BOTTOM_RIGHT ||
      position === TooltipPosition.BOTTOM_LEFT) {
      style.top = `${boundingRect.top + boundingRect.height}px`;
      style.bottom = "auto";
    }
    if (position === TooltipPosition.TOP ||
      position === TooltipPosition.BOTTOM) {
      style.left = `${boundingRect.left +
        (boundingRect.width / 2) -
        (this.host.clientWidth / 2)}px`;
    }
    if (position === TooltipPosition.TOP_RIGHT ||
      position === TooltipPosition.BOTTOM_RIGHT) {
      style.right = "auto";
      style.left = `${boundingRect.left + boundingRect.width - 16}px`;
    }
    if (position === TooltipPosition.TOP_LEFT ||
      position === TooltipPosition.BOTTOM_LEFT) {
      style.left = "auto";
      style.right = `${boundingRect.right - 16}px`;
    }
    if (position === TooltipPosition.RIGHT ||
      position === TooltipPosition.LEFT) {
      style.top = `${boundingRect.top +
        (boundingRect.height / 2) -
        (this.host.clientHeight / 2)}px`;
      style.bottom = "auto";
    }
    if (position === TooltipPosition.RIGHT) {
      style.right = "auto";
      style.left = `${boundingRect.left + boundingRect.width}px`;
    }
    if (position === TooltipPosition.LEFT) {
      style.left = "auto";
      style.right = `${boundingRect.right}px`;
    }
    this.position = position;
  }
  componentWillLoad() {
    // Keep backward compatibility
    if (this.content) {
      this.open = true;
    }
    this.validateType(this.type);
    this.onOpen();
  }
  render() {
    if (this.content) {
      return (h(Host, { class: "legacy", position: this.type }, this.content));
    }
    return (h(Host, { position: this.position },
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
        "tags": [{
            "text": undefined,
            "name": "deprecated"
          }],
        "text": "Content text."
      },
      "attribute": "content",
      "reflect": false
    },
    "type": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "TooltipPosition",
        "resolved": "TooltipPosition.AUTO | TooltipPosition.BOTTOM | TooltipPosition.BOTTOM_LEFT | TooltipPosition.BOTTOM_RIGHT | TooltipPosition.LEFT | TooltipPosition.RIGHT | TooltipPosition.TOP | TooltipPosition.TOP_LEFT | TooltipPosition.TOP_RIGHT",
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
        "text": "Tooltip position."
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "TooltipPosition.AUTO"
    },
    "open": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The open state of the tooltip."
      },
      "attribute": "open",
      "reflect": true,
      "defaultValue": "false"
    },
    "bindTo": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | HTMLElement",
        "resolved": "HTMLElement | string",
        "references": {
          "HTMLElement": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The selector or the element bound with the tooltip."
      },
      "attribute": "bind-to",
      "reflect": false
    }
  }; }
  static get states() { return {
    "position": {}
  }; }
  static get events() { return [{
      "method": "positionChange",
      "name": "positionChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Position change event."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "host"; }
  static get watchers() { return [{
      "propName": "type",
      "methodName": "validateType"
    }, {
      "propName": "position",
      "methodName": "onPositionChange"
    }, {
      "propName": "open",
      "methodName": "onOpen"
    }]; }
}

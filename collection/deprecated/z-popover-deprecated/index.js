import { Component, Prop, h, Watch, Listen, Element, State, Event, } from "@stencil/core";
import { PopoverPositions, KeyboardKeys } from "../../beans";
import { getElementTree } from "../../utils/utils";
const documentElement = document.documentElement;
function getParentElement(element) {
  if (element.parentNode.host) {
    return element.parentNode.host;
  }
  return element.parentNode;
}
/**
 * Find the closest scrollable parent of a node.
 *
 * @param {Element} element The node
 */
function findScrollableParent(element) {
  let parent = getParentElement(element);
  while (parent && parent !== documentElement) {
    const { overflow, overflowX, overflowY } = window.getComputedStyle(parent);
    if (overflow === "hidden" ||
      overflowY === "hidden" ||
      overflowX === "hidden") {
      return parent;
    }
    if ((parent.scrollHeight > parent.clientHeight &&
      overflow !== "visible" &&
      overflowY !== "visible") ||
      (parent.scrollWidth > parent.clientWidth &&
        overflow !== "visible" &&
        overflowX !== "visible")) {
      return parent;
    }
    parent = getParentElement(parent);
  }
  return documentElement;
}
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
    if (window.DOMMatrix) {
      const style = window.getComputedStyle(offsetParent);
      const transform = style.transform || style.webkitTransform;
      const domMatrix = new DOMMatrix(transform);
      if (domMatrix) {
        left += domMatrix.m41;
        if (offsetParent !== document.body) {
          top += domMatrix.m42;
        }
      }
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
  const right = parentWidth - left - rect.width;
  const bottom = parentHeight - top - rect.height;
  return { top, right, bottom, left, width, height };
}
/**
 * Popover component.
 *
 * @cssprop --z-popover-theme--surface - background color of the popover.
 * @cssprop --z-popover-theme--text - foreground color of the popover.
 * @cssprop --z-popover-shadow - shadow of the popover.
 */
export class ZPopoverDeprecated {
  constructor() {
    /** Popover position. */
    this.position = PopoverPositions.AUTO;
    /**
     * The open state of the popover.
     */
    this.open = false;
    /**
     * Whether to show popover's arrow.
     */
    this.showArrow = false;
    /**
     * Whether center the popup on the main side - according to "position".
     */
    this.center = false;
  }
  closePopoverWithKeyboard(e) {
    if (e.key === KeyboardKeys.ESC) {
      this.open = false;
    }
  }
  handleOutsideClick(e) {
    const tree = getElementTree(e.target);
    const parent = tree.find((elem) => elem.nodeName.toLowerCase() === "z-popover");
    if (!parent) {
      this.open = false;
      this.positionChange.emit({ position: this.currentPosition });
    }
  }
  validatePosition(newValue) {
    if (newValue &&
      Object.values(PopoverPositions).every((position) => newValue !== position)) {
      this.position = PopoverPositions.AUTO;
    }
    this.currentPosition = this.position;
    this.positionChange.emit({ position: this.currentPosition });
  }
  /**
   * Setup popover behaviors on opening.
   */
  onOpen() {
    cancelAnimationFrame(this.animationFrameRequestId);
    if (this.open) {
      const setPosition = () => {
        if (this.open) {
          this.setPosition();
          this.animationFrameRequestId = requestAnimationFrame(setPosition);
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
      style.removeProperty("max-width");
      style.removeProperty("max-height");
      this.currentPosition = undefined;
    }
    this.openChange.emit({ open: this.open });
  }
  disconnectedCallback() {
    cancelAnimationFrame(this.animationFrameRequestId);
  }
  /**
   * Set the position of the popover.
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
    const scrollContainer = findScrollableParent(element);
    const scrollingBoundingRect = scrollContainer.getBoundingClientRect();
    const offsetContainer = this.host.offsetParent;
    const relativeBoundingRect = offsetContainer
      ? computeOffset(offsetContainer, scrollContainer)
      : { top: 0, right: 0, bottom: 0, left: 0 };
    const boundingRect = computeOffset(element, scrollContainer);
    const top = boundingRect.top - scrollContainer.scrollTop;
    const bottom = scrollingBoundingRect.height -
      (boundingRect.top + boundingRect.height) +
      scrollContainer.scrollTop;
    const left = boundingRect.left - scrollContainer.scrollLeft;
    const right = scrollingBoundingRect.width -
      (boundingRect.left + boundingRect.width) +
      scrollContainer.scrollLeft;
    const overflowBottom = Math.max(0, scrollingBoundingRect.top +
      scrollingBoundingRect.height -
      window.innerHeight);
    const overflowRight = Math.max(0, scrollingBoundingRect.left +
      scrollingBoundingRect.width -
      window.innerWidth);
    const availableTop = Math.min(top, top + scrollingBoundingRect.top);
    const availableBottom = Math.min(bottom, bottom - overflowBottom);
    const availableLeft = Math.min(left, left + scrollingBoundingRect.left);
    const availableRight = Math.min(right, right - overflowRight);
    const availableHeight = availableTop + availableBottom + boundingRect.height;
    const availableWidth = availableLeft + availableRight + boundingRect.width;
    let position = this.currentPosition;
    const positions = [];
    if (this.position === PopoverPositions.AUTO) {
      /**
       * The `AUTO` position tries to place the popover in the 'safest' area,
       * where there's more space available.
       */
      if (availableLeft / availableWidth > 0.6) {
        positions.push(PopoverPositions.LEFT);
      }
      else if (availableLeft / availableWidth < 0.4) {
        positions.push(PopoverPositions.RIGHT);
      }
      if (availableTop / availableHeight > 0.9) {
        positions.unshift(PopoverPositions.TOP);
      }
      else if (availableTop / availableHeight > 0.6) {
        positions.push(PopoverPositions.TOP);
      }
      else if (availableTop / availableHeight < 0.1) {
        positions.unshift(PopoverPositions.BOTTOM);
      }
      else {
        positions.push(PopoverPositions.BOTTOM);
      }
      position = positions.join("_");
    }
    const style = this.host.style;
    style.position = "absolute";
    const offsetTop = boundingRect.top - relativeBoundingRect.top;
    const offsetRight = boundingRect.right - relativeBoundingRect.right;
    const offsetBottom = boundingRect.bottom - relativeBoundingRect.bottom;
    const offsetLeft = boundingRect.left - relativeBoundingRect.left;
    const offsetModifier = this.center ? 0.5 : 0;
    const sizeModifier = this.center ? 0.5 : 0;
    if (position === PopoverPositions.TOP ||
      position === PopoverPositions.TOP_RIGHT) {
      style.top = "auto";
      style.right = "auto";
      style.bottom = `${offsetBottom + boundingRect.height}px`;
      style.left = `${offsetLeft + boundingRect.width * offsetModifier}px`;
      style.maxHeight = `${availableTop}px`;
      if (position === PopoverPositions.TOP_RIGHT) {
        style.maxWidth = `${availableRight + boundingRect.width * sizeModifier}px`;
      }
    }
    else if (position === PopoverPositions.TOP_LEFT) {
      style.top = "auto";
      style.right = `${offsetRight + boundingRect.width * offsetModifier}px`;
      style.bottom = `${offsetBottom + boundingRect.height}px`;
      style.left = "auto";
      style.maxWidth = `${availableLeft}px`;
      style.maxHeight = `${availableTop}px`;
    }
    else if (position === PopoverPositions.BOTTOM ||
      position === PopoverPositions.BOTTOM_RIGHT) {
      style.top = `${offsetTop + boundingRect.height}px`;
      style.right = "auto";
      style.bottom = "auto";
      style.left = `${offsetLeft + boundingRect.width * offsetModifier}px`;
      style.maxHeight = `${availableBottom}px`;
      if (position === PopoverPositions.BOTTOM_RIGHT) {
        style.maxWidth = `${availableRight + boundingRect.width * sizeModifier}px`;
      }
    }
    else if (position === PopoverPositions.BOTTOM_LEFT) {
      style.top = `${offsetTop + boundingRect.height}px`;
      style.right = `${offsetRight + boundingRect.width * offsetModifier}px`;
      style.bottom = "auto";
      style.left = "auto";
      style.maxWidth = `${availableLeft}px`;
      style.maxHeight = `${availableBottom}px`;
    }
    else if (position === PopoverPositions.RIGHT ||
      position === PopoverPositions.RIGHT_BOTTOM) {
      style.top = `${offsetTop + boundingRect.height * offsetModifier}px`;
      style.right = "auto";
      style.bottom = "auto";
      style.left = `${offsetLeft + boundingRect.width}px`;
      style.maxWidth = `${availableRight}px`;
      style.maxHeight = `${availableBottom + boundingRect.height * sizeModifier}px`;
    }
    else if (position === PopoverPositions.RIGHT_TOP) {
      style.top = "auto";
      style.right = "auto";
      style.bottom = `${offsetBottom + boundingRect.height * offsetModifier}px`;
      style.left = `${offsetLeft + boundingRect.width}px`;
      style.maxWidth = `${availableRight}px`;
      style.maxHeight = `${availableTop + boundingRect.height * sizeModifier}px`;
    }
    else if (position === PopoverPositions.LEFT ||
      position === PopoverPositions.LEFT_BOTTOM) {
      style.top = `${offsetTop + boundingRect.height * offsetModifier}px`;
      style.right = `${offsetRight + boundingRect.width}px`;
      style.bottom = "auto";
      style.left = "auto";
      style.maxWidth = `${availableLeft}px`;
      style.maxHeight = `${availableBottom + boundingRect.height * sizeModifier}px`;
    }
    else if (position === PopoverPositions.LEFT_TOP) {
      style.top = "auto";
      style.right = `${offsetRight + boundingRect.width}px`;
      style.bottom = `${offsetBottom + boundingRect.height * offsetModifier}px`;
      style.left = "auto";
      style.maxWidth = `${availableLeft}px`;
      style.maxHeight = `${availableTop + boundingRect.height * sizeModifier}px`;
    }
    this.currentPosition = position || this.position;
    this.host.setAttribute('current-position', this.currentPosition);
  }
  componentWillLoad() {
    this.validatePosition(this.position);
    this.onOpen();
  }
  render() {
    return h("slot", null);
  }
  static get is() { return "z-popover-deprecated"; }
  static get encapsulation() { return "shadow"; }
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
        "original": "PopoverPositions",
        "resolved": "PopoverPositions.AUTO | PopoverPositions.BOTTOM | PopoverPositions.BOTTOM_LEFT | PopoverPositions.BOTTOM_RIGHT | PopoverPositions.LEFT | PopoverPositions.LEFT_BOTTOM | PopoverPositions.LEFT_TOP | PopoverPositions.RIGHT | PopoverPositions.RIGHT_BOTTOM | PopoverPositions.RIGHT_TOP | PopoverPositions.TOP | PopoverPositions.TOP_LEFT | PopoverPositions.TOP_RIGHT",
        "references": {
          "PopoverPositions": {
            "location": "import",
            "path": "../../beans"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Popover position."
      },
      "attribute": "position",
      "reflect": true,
      "defaultValue": "PopoverPositions.AUTO"
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
        "text": "The open state of the popover."
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
        "text": "The selector or the element bound with the popover."
      },
      "attribute": "bind-to",
      "reflect": false
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Whether to show popover's arrow."
      },
      "attribute": "show-arrow",
      "reflect": true,
      "defaultValue": "false"
    },
    "center": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Whether center the popup on the main side - according to \"position\"."
      },
      "attribute": "center",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "currentPosition": {}
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
    }, {
      "method": "openChange",
      "name": "openChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Open change event."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "host"; }
  static get watchers() { return [{
      "propName": "position",
      "methodName": "validatePosition"
    }, {
      "propName": "open",
      "methodName": "onOpen"
    }]; }
  static get listeners() { return [{
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

import { Component, Prop, h, Host, Watch, Element, State, Event, } from "@stencil/core";
import { PopoverPositions } from "../../beans/index";
const documentElement = document.documentElement;
/**
 * Find the closest scrollable parent of a node.
 *
 * @param {Element} element The node
 */
function findScrollableParent(element) {
  let parent = element.parentNode;
  while (parent && parent !== documentElement) {
    const { overflow, overflowX, overflowY } = window.getComputedStyle(parent);
    if (overflow === 'hidden' ||
      overflowY === 'hidden' ||
      overflowX === 'hidden') {
      return parent;
    }
    if ((parent.scrollHeight > parent.clientHeight && overflow !== 'visible' && overflowY !== 'visible') ||
      (parent.scrollWidth > parent.clientWidth && overflow !== 'visible' && overflowX !== 'visible')) {
      return parent;
    }
    parent = parent.parentNode;
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
export class ZTooltipDeprecated {
  constructor() {
    /** Tooltip position. */
    this.type = PopoverPositions.auto;
    /**
     * The open state of the tooltip.
     */
    this.open = false;
  }
  validateType(newValue) {
    if (newValue &&
      Object
        .values(PopoverPositions)
        .every((position) => newValue !== position)) {
      this.type = PopoverPositions.auto;
    }
  }
  onPositionChange() {
    this.positionChange.emit({ position: this.position });
  }
  disconnectedCallback() {
    cancelAnimationFrame(this.animationFrameRequestId);
  }
  /**
   * Setup tooltip behaviors on opening.
   */
  onOpen() {
    cancelAnimationFrame(this.animationFrameRequestId);
    if (this.content) {
      return;
    }
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
    const scrollContainer = findScrollableParent(element);
    const scrollingBoundingRect = scrollContainer.getBoundingClientRect();
    const offsetContainer = this.host.offsetParent;
    const relativeBoundingRect = offsetContainer ? computeOffset(offsetContainer, scrollContainer) : { top: 0, right: 0, bottom: 0, left: 0 };
    const boundingRect = computeOffset(element, scrollContainer);
    const top = boundingRect.top - scrollContainer.scrollTop;
    const bottom = scrollingBoundingRect.height - (boundingRect.top + boundingRect.height) + scrollContainer.scrollTop;
    const left = boundingRect.left - scrollContainer.scrollLeft;
    const right = scrollingBoundingRect.width - (boundingRect.left + boundingRect.width) + scrollContainer.scrollLeft;
    const overflowBottom = Math.max(0, scrollingBoundingRect.top + scrollingBoundingRect.height - window.innerHeight);
    const overflowRight = Math.max(0, scrollingBoundingRect.left + scrollingBoundingRect.width - window.innerWidth);
    const availableTop = Math.min(top, top + scrollingBoundingRect.top);
    const availableBottom = Math.min(bottom, bottom - overflowBottom);
    const availableLeft = Math.min(left, left + scrollingBoundingRect.left);
    const availableRight = Math.min(right, right - overflowRight);
    const availableHeight = availableTop + availableBottom + boundingRect.height;
    const availableWidth = availableLeft + availableRight + boundingRect.width;
    let position = this.type;
    if (position === PopoverPositions.auto) {
      /**
       * The `AUTO` position tries to place the tooltip in the "safest" area,
       * where there's more space available.
       */
      const positions = [];
      if (availableTop / availableHeight > 0.9) {
        positions.unshift(PopoverPositions.top);
      }
      else if (availableTop / availableHeight > 0.6) {
        positions.push(PopoverPositions.top);
      }
      else if (availableTop / availableHeight < 0.1) {
        positions.unshift(PopoverPositions.bottom);
      }
      else {
        positions.push(PopoverPositions.bottom);
      }
      if (availableLeft / availableWidth > 0.6) {
        positions.push(PopoverPositions.left);
      }
      else if (availableLeft / availableWidth < 0.4) {
        positions.push(PopoverPositions.right);
      }
      position = positions.join("_");
    }
    const style = this.host.style;
    if (!this.content) {
      style.position = "absolute";
    }
    const offsetTop = boundingRect.top - relativeBoundingRect.top;
    const offsetRight = boundingRect.right - relativeBoundingRect.right;
    const offsetBottom = boundingRect.bottom - relativeBoundingRect.bottom;
    const offsetLeft = boundingRect.left - relativeBoundingRect.left;
    if (position === PopoverPositions.top ||
      position === PopoverPositions.top_right ||
      position === PopoverPositions.top_left) {
      style.top = "auto";
      style.bottom = `${offsetBottom + boundingRect.height}px`;
    }
    if (position === PopoverPositions.bottom ||
      position === PopoverPositions.bottom_right ||
      position === PopoverPositions.bottom_left) {
      style.top = `${offsetTop + boundingRect.height}px`;
      style.bottom = "auto";
    }
    if (position === PopoverPositions.top ||
      position === PopoverPositions.bottom) {
      style.left = `${offsetLeft +
        (boundingRect.width / 2) -
        (this.host.clientWidth / 2)}px`;
    }
    if (position === PopoverPositions.top_right ||
      position === PopoverPositions.bottom_right) {
      style.right = "auto";
      style.left = `${offsetLeft + boundingRect.width}px`;
    }
    if (position === PopoverPositions.top_left ||
      position === PopoverPositions.bottom_left) {
      style.left = "auto";
      style.right = `${offsetRight + boundingRect.width}px`;
    }
    if (position === PopoverPositions.right ||
      position === PopoverPositions.left) {
      style.top = `${offsetTop +
        (boundingRect.height / 2) -
        (this.host.clientHeight / 2)}px`;
      style.bottom = "auto";
    }
    if (position === PopoverPositions.right) {
      style.right = "auto";
      style.left = `${offsetLeft + boundingRect.width}px`;
    }
    if (position === PopoverPositions.left) {
      style.left = "auto";
      style.right = `${offsetRight + boundingRect.width}px`;
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
  static get is() { return "z-tooltip-deprecated"; }
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
            "name": "deprecated",
            "text": undefined
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
        "original": "PopoverPositions",
        "resolved": "PopoverPositions.auto | PopoverPositions.bottom | PopoverPositions.bottom_left | PopoverPositions.bottom_right | PopoverPositions.left | PopoverPositions.left_bottom | PopoverPositions.left_top | PopoverPositions.right | PopoverPositions.right_bottom | PopoverPositions.right_top | PopoverPositions.top | PopoverPositions.top_left | PopoverPositions.top_right",
        "references": {
          "PopoverPositions": {
            "location": "import",
            "path": "../../beans/index"
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
      "defaultValue": "PopoverPositions.auto"
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

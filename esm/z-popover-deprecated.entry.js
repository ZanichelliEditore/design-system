import { r as registerInstance, c as createEvent, h, g as getElement } from './index-90e18641.js';
import { P as PopoverPositions, q as KeyboardKeys } from './index-c1ce8cab.js';
import { a as getElementTree } from './utils-99c70c57.js';
import './breakpoints-c386984e.js';

const stylesCss = ":host{--z-popover-theme--surface:var(--color-surface01);--z-popover-theme--text:var(--color-text01);--z-popover-padding:var(--space-unit);--z-popover-shadow-filter:drop-shadow(0 1px 2px var(--shadow-color-base));--arrow-size:6px;--edge-offset:calc(-1 * (var(--arrow-size) + calc(var(--space-unit) * 2)));position:relative;display:flex;align-items:center;justify-content:center;padding:var(--z-popover-padding);min-width:calc(var(--space-unit) * 8);min-height:calc(var(--space-unit) * 4);color:var(--z-popover-theme--text);fill:currentColor;font-family:var(--font-family-sans);text-align:center;border-radius:var(--border-radius-small);background:var(--z-popover-theme--surface);filter:var(--z-popover-shadow-filter)}:host(:not([open])),:host([open=\"false\"]){display:none}:host([center][current-position='top']),:host([center][current-position='bottom']){transform:translateX(-50%)}:host([center][current-position='right']),:host([center][current-position='left']){transform:translateY(-50%)}:host([current-position])::before{--arrow-edge-offset:calc(100% - var(--arrow-size) - var(--space-unit));--arrow-center-x-offset:calc(50% - calc(var(--arrow-size) / 2));--arrow-center-y-offset:calc(100% - calc(var(--arrow-size) / 2));display:block;content:'';position:absolute;width:var(--arrow-size);height:var(--arrow-size);background:var(--z-popover-theme--surface);transform:rotate(45deg)}:host([show-arrow=false])::before,:host(:not([show-arrow]))::before{display:none}:host([current-position^='top'])::before{top:var(--arrow-center-y-offset)}:host([current-position^='bottom'])::before{bottom:var(--arrow-center-y-offset)}:host([current-position='top'])::before,:host([current-position='bottom'])::before{left:var(--arrow-center-x-offset)}:host([current-position='right'])::before,:host([current-position='left'])::before{top:var(--arrow-center-x-offset)}:host([current-position='right'])::before{right:var(--arrow-center-y-offset)}:host([current-position='left'])::before{left:var(--arrow-center-y-offset)}:host([current-position='top_right'])::before,:host([current-position='bottom_right'])::before{right:calc(var(--arrow-edge-offset) + var(--arrow-size))}:host([current-position='top_right']:not([center]))::before,:host([current-position='bottom_right']:not([center]))::before,:host([current-position='top_right'][center=\"false\"])::before,:host([current-position='bottom_right'][center=\"false\"])::before{right:calc(var(--arrow-edge-offset) - var(--arrow-size) + 1px)}:host([current-position='top_left'])::before,:host([current-position='bottom_left'])::before{left:calc(var(--arrow-edge-offset) + var(--arrow-size))}:host([current-position='top_left']:not([center]))::before,:host([current-position='bottom_left']:not([center]))::before,:host([current-position='top_left'][center=\"false\"])::before,:host([current-position='bottom_left'][center=\"false\"])::before{left:calc(var(--arrow-edge-offset) - var(--arrow-size) + 1px)}:host([current-position='right_top'])::before,:host([current-position='left_top'])::before{bottom:var(--arrow-size)}:host([current-position='right_top'])::before,:host([current-position='right_bottom'])::before{right:var(--arrow-center-y-offset)}:host([current-position='left_top'])::before,:host([current-position='left_bottom'])::before{left:var(--arrow-center-y-offset)}:host([current-position='right_bottom'])::before,:host([current-position='left_bottom'])::before{top:var(--arrow-size)}::slotted(*){flex:1 auto;overflow:auto}";

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
const ZPopoverDeprecated = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.positionChange = createEvent(this, "positionChange", 7);
    this.openChange = createEvent(this, "openChange", 7);
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
  get host() { return getElement(this); }
  static get watchers() { return {
    "position": ["validatePosition"],
    "open": ["onOpen"]
  }; }
};
ZPopoverDeprecated.style = stylesCss;

export { ZPopoverDeprecated as z_popover_deprecated };

import { r as registerInstance, c as createEvent, h, g as getElement } from './index-90e18641.js';
import { P as PopoverPositions, i as KeyboardKeys } from './index-3c2d757b.js';

const stylesCss = ":host{--z-popover-theme--surface:var(--color-surface01);--z-popover-theme--text:var(--color-text01);--z-popover-padding:0;--z-popover-shadow-filter:drop-shadow(0 1px 2px var(--shadow-color-base));position:relative;display:none;align-items:center;justify-content:center;padding:var(--z-popover-padding);min-width:calc(var(--space-unit) * 8);min-height:calc(var(--space-unit) * 4);color:var(--z-popover-theme--text);fill:currentColor;font-family:var(--font-family-sans);text-align:center;border-radius:var(--border-radius-small);background:var(--z-popover-theme--surface);filter:var(--z-popover-shadow-filter)}:host([open][current-position]),:host([open=\"true\"][current-position]){display:flex}:host([center][current-position=\"top\"]),:host([center][current-position=\"bottom\"]){transform:translateX(-50%)}:host([center][current-position=\"right\"]),:host([center][current-position=\"left\"]){transform:translateY(-50%)}:host([current-position^=\"top\"]){margin:0 0 var(--space-unit)}:host([current-position^=\"bottom\"]){margin:var(--space-unit) 0 0}:host([current-position^=\"left\"]){margin:0 var(--space-unit) 0 0}:host([current-position^=\"right\"]){margin:0 0 0 var(--space-unit)}:host([current-position])::before{--arrow-size:6px;--arrow-edge-offset:calc(100% - var(--space-unit) - (var(--arrow-size) / 2));--arrow-center-x-offset:calc(50% - (var(--arrow-size) / 2));--arrow-center-y-offset:calc(100% - (var(--arrow-size) / 2));display:block;content:\"\";position:absolute;width:var(--arrow-size);height:var(--arrow-size);background:var(--z-popover-theme--surface);transform:rotate(45deg)}:host([show-arrow=\"false\"])::before,:host(:not([show-arrow]))::before{display:none}:host([current-position^=\"top\"])::before{top:var(--arrow-center-y-offset)}:host([current-position^=\"bottom\"])::before{bottom:var(--arrow-center-y-offset)}:host([current-position=\"top\"])::before,:host([current-position=\"bottom\"])::before{right:var(--arrow-edge-offset)}:host([current-position=\"right\"])::before,:host([current-position=\"left\"])::before{bottom:var(--arrow-edge-offset)}:host([current-position=\"right\"])::before{right:var(--arrow-center-y-offset)}:host([current-position=\"left\"])::before{left:var(--arrow-center-y-offset)}:host([current-position=\"top_right\"])::before,:host([current-position=\"bottom_right\"])::before{right:var(--arrow-edge-offset)}:host([current-position=\"top_left\"])::before,:host([current-position=\"bottom_left\"])::before{left:var(--arrow-edge-offset)}:host([current-position=\"right_top\"])::before,:host([current-position=\"left_top\"])::before{top:var(--arrow-edge-offset)}:host([current-position=\"right_top\"])::before,:host([current-position=\"right_bottom\"])::before{right:var(--arrow-center-y-offset)}:host([current-position=\"left_top\"])::before,:host([current-position=\"left_bottom\"])::before{left:var(--arrow-center-y-offset)}:host([current-position=\"right_bottom\"])::before,:host([current-position=\"left_bottom\"])::before{bottom:var(--arrow-edge-offset)}:host([center][current-position=\"top\"])::before,:host([center][current-position=\"bottom\"])::before{right:auto;left:var(--arrow-center-x-offset)}:host([center][current-position=\"right\"])::before,:host([center][current-position=\"left\"])::before{top:var(--arrow-center-x-offset);bottom:auto}::slotted(*){flex:1 auto;overflow:auto}";

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
const ZPopover = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.positionChange = createEvent(this, "positionChange", 7);
    this.openChange = createEvent(this, "openChange", 7);
    /** Popover position. */
    this.position = PopoverPositions.auto;
    /**
     * The open state of the popover.
     */
    this.open = false;
    /**
     * Whether to show popover's arrow.
     */
    this.showArrow = false;
    /**
     * Whether to center the popup on the main side (according to "position").
     */
    this.center = false;
    /**
     * Whether the popover should be closed when the user clicks outside of it or hit "ESC".
     */
    this.closable = true;
  }
  closePopoverWithKeyboard(e) {
    if (this.closable && e.key === KeyboardKeys.ESC) {
      this.open = false;
    }
  }
  handleOutsideClick(e) {
    if (!this.closable) {
      return;
    }
    const parent = e.path.find((elem) => elem === this.host);
    if (!parent) {
      this.open = false;
      this.positionChange.emit({ position: this.currentPosition });
    }
  }
  validatePosition(newValue) {
    if (newValue &&
      !Object.values(PopoverPositions).includes(newValue)) {
      this.position = PopoverPositions.auto;
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
    else if (this.host.hasAttribute('current-position')) {
      this.host.removeAttribute('current-position');
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
    if (this.position === PopoverPositions.auto) {
      /**
       * The `AUTO` position tries to place the popover in the 'safest' area,
       * where there's more space available.
       */
      if (availableLeft / availableWidth > 0.6) {
        positions.push(PopoverPositions.left);
      }
      else if (availableLeft / availableWidth < 0.4) {
        positions.push(PopoverPositions.right);
      }
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
    if (position === PopoverPositions.top ||
      position === PopoverPositions.top_right) {
      style.top = "auto";
      style.right = "auto";
      style.bottom = `${offsetBottom + boundingRect.height}px`;
      style.left = `${offsetLeft + boundingRect.width * offsetModifier}px`;
      style.maxHeight = `${availableTop}px`;
      if (position === PopoverPositions.top_right) {
        style.maxWidth = `${availableRight + boundingRect.width * sizeModifier}px`;
      }
    }
    else if (position === PopoverPositions.top_left) {
      style.top = "auto";
      style.right = `${offsetRight + boundingRect.width * offsetModifier}px`;
      style.bottom = `${offsetBottom + boundingRect.height}px`;
      style.left = "auto";
      style.maxWidth = `${availableLeft}px`;
      style.maxHeight = `${availableTop}px`;
    }
    else if (position === PopoverPositions.bottom ||
      position === PopoverPositions.bottom_right) {
      style.top = `${offsetTop + boundingRect.height}px`;
      style.right = "auto";
      style.bottom = "auto";
      style.left = `${offsetLeft + boundingRect.width * offsetModifier}px`;
      style.maxHeight = `${availableBottom}px`;
      if (position === PopoverPositions.bottom_right) {
        style.maxWidth = `${availableRight + boundingRect.width * sizeModifier}px`;
      }
    }
    else if (position === PopoverPositions.bottom_left) {
      style.top = `${offsetTop + boundingRect.height}px`;
      style.right = `${offsetRight + boundingRect.width * offsetModifier}px`;
      style.bottom = "auto";
      style.left = "auto";
      style.maxWidth = `${availableLeft}px`;
      style.maxHeight = `${availableBottom}px`;
    }
    else if (position === PopoverPositions.right ||
      position === PopoverPositions.right_bottom) {
      style.top = `${offsetTop + boundingRect.height * offsetModifier}px`;
      style.right = "auto";
      style.bottom = "auto";
      style.left = `${offsetLeft + boundingRect.width}px`;
      style.maxWidth = `${availableRight}px`;
      style.maxHeight = `${availableBottom + boundingRect.height * sizeModifier}px`;
    }
    else if (position === PopoverPositions.right_top) {
      style.top = "auto";
      style.right = "auto";
      style.bottom = `${offsetBottom + boundingRect.height * offsetModifier}px`;
      style.left = `${offsetLeft + boundingRect.width}px`;
      style.maxWidth = `${availableRight}px`;
      style.maxHeight = `${availableTop + boundingRect.height * sizeModifier}px`;
    }
    else if (position === PopoverPositions.left ||
      position === PopoverPositions.left_bottom) {
      style.top = `${offsetTop + boundingRect.height * offsetModifier}px`;
      style.right = `${offsetRight + boundingRect.width}px`;
      style.bottom = "auto";
      style.left = "auto";
      style.maxWidth = `${availableLeft}px`;
      style.maxHeight = `${availableBottom + boundingRect.height * sizeModifier}px`;
    }
    else if (position === PopoverPositions.left_top) {
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
ZPopover.style = stylesCss;

export { ZPopover as z_popover };
import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a2ca4b97.js';
import { P as PopoverPositions } from './index-9d028352.js';

const stylesCss = ":host{--z-tooltip-theme--surface:var(--color-surface01);--z-tooltip-theme--text:var(--color-text01);--arrow-size:6px;--edge-offset:calc(-1 * (var(--arrow-size) + calc(var(--space-unit) * 2)));position:relative;display:none;min-width:calc(var(--space-unit) * 8);min-height:calc(var(--space-unit) * 4);align-items:center;justify-content:center;padding:var(--space-unit);background:var(--z-tooltip-theme--surface);border-radius:var(--border-radius-small);color:var(--z-tooltip-theme--text);fill:currentcolor;filter:drop-shadow(0 4px 8px var(--shadow-color-base));font-family:var(--font-family-sans);text-align:center;will-change:filter}:host(.legacy){display:inline-flex;min-width:auto;max-width:200px;min-height:auto;padding:calc(var(--space-unit) * 2);border:var(--border-size-small) solid var(--gray200);border-radius:var(--border-radius);filter:drop-shadow(0 0 2px rgb(0 0 0 / 8%));font-size:12px;font-style:italic;letter-spacing:0.32px;line-height:16px}:host(.legacy)::before{--arrow-size:14px}:host([position])::before{--arrow-edge-offset:calc(100% - var(--arrow-size) - var(--space-unit));--arrow-center-x-offset:calc(50% - calc(var(--arrow-size) / 2));--arrow-center-y-offset:calc(100% - calc(var(--arrow-size) / 2));position:absolute;width:var(--arrow-size);height:var(--arrow-size);background:inherit;content:\"\";transform:rotate(45deg)}:host([open][style*=\"top:\"]),:host([open][style*=\"inset:\"]){display:inline-flex}:host([position^=\"top\"]){margin-bottom:var(--space-unit)}:host([position=\"right\"]){margin-left:var(--space-unit)}:host([position=\"top_right\"]),:host([position=\"bottom_right\"]){margin-left:var(--edge-offset)}:host([position^=\"bottom\"]){margin-top:var(--space-unit)}:host([position=\"left\"]){margin-right:var(--space-unit)}:host([position=\"top_left\"]),:host([position=\"bottom_left\"]){margin-right:var(--edge-offset)}:host([position^=\"top\"])::before{top:var(--arrow-center-y-offset)}:host([position^=\"bottom\"])::before{bottom:var(--arrow-center-y-offset)}:host([position=\"top\"])::before,:host([position=\"bottom\"])::before{left:var(--arrow-center-x-offset)}:host([position=\"right\"])::before,:host([position=\"left\"])::before{top:var(--arrow-center-x-offset)}:host([position=\"right\"])::before{right:var(--arrow-center-y-offset)}:host([position=\"top_right\"])::before,:host([position=\"bottom_right\"])::before{right:var(--arrow-edge-offset)}:host([position=\"left\"])::before{left:var(--arrow-center-y-offset)}:host([position=\"top_left\"])::before,:host([position=\"bottom_left\"])::before{left:var(--arrow-edge-offset)}::slotted(*){overflow:auto;flex:1 auto}";

const DOCUMENT_ELEMENT = document.documentElement;
/**
 * Find the closest scrollable parent of a node.
 *
 * @param {Element} element The node
 */
function findScrollableParent(element) {
  let parent = element.parentNode;
  while (parent && parent !== DOCUMENT_ELEMENT) {
    const { overflow, overflowX, overflowY } = window.getComputedStyle(parent);
    if (overflow === "hidden" || overflowY === "hidden" || overflowX === "hidden") {
      return parent;
    }
    if ((parent.scrollHeight > parent.clientHeight && overflow !== "visible" && overflowY !== "visible") ||
      (parent.scrollWidth > parent.clientWidth && overflow !== "visible" && overflowX !== "visible")) {
      return parent;
    }
    parent = parent.parentNode;
  }
  return DOCUMENT_ELEMENT;
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
const ZTooltipDeprecated = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.positionChange = createEvent(this, "positionChange", 7);
    /** Tooltip position. */
    this.type = PopoverPositions.AUTO;
    /**
     * The open state of the tooltip.
     */
    this.open = false;
  }
  validateType(newValue) {
    if (newValue && Object.values(PopoverPositions).every((position) => newValue !== position)) {
      this.type = PopoverPositions.AUTO;
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
    const relativeBoundingRect = offsetContainer
      ? computeOffset(offsetContainer, scrollContainer)
      : { top: 0, right: 0, bottom: 0, left: 0 };
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
    if (position === PopoverPositions.AUTO) {
      /**
       * The `AUTO` position tries to place the tooltip in the "safest" area,
       * where there's more space available.
       */
      const positions = [];
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
      if (availableLeft / availableWidth > 0.6) {
        positions.push(PopoverPositions.LEFT);
      }
      else if (availableLeft / availableWidth < 0.4) {
        positions.push(PopoverPositions.RIGHT);
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
    if (position === PopoverPositions.TOP ||
      position === PopoverPositions.TOP_RIGHT ||
      position === PopoverPositions.TOP_LEFT) {
      style.top = "auto";
      style.bottom = `${offsetBottom + boundingRect.height}px`;
    }
    if (position === PopoverPositions.BOTTOM ||
      position === PopoverPositions.BOTTOM_RIGHT ||
      position === PopoverPositions.BOTTOM_LEFT) {
      style.top = `${offsetTop + boundingRect.height}px`;
      style.bottom = "auto";
    }
    if (position === PopoverPositions.TOP || position === PopoverPositions.BOTTOM) {
      style.left = `${offsetLeft + boundingRect.width / 2 - this.host.clientWidth / 2}px`;
    }
    if (position === PopoverPositions.TOP_RIGHT || position === PopoverPositions.BOTTOM_RIGHT) {
      style.right = "auto";
      style.left = `${offsetLeft + boundingRect.width}px`;
    }
    if (position === PopoverPositions.TOP_LEFT || position === PopoverPositions.BOTTOM_LEFT) {
      style.left = "auto";
      style.right = `${offsetRight + boundingRect.width}px`;
    }
    if (position === PopoverPositions.RIGHT || position === PopoverPositions.LEFT) {
      style.top = `${offsetTop + boundingRect.height / 2 - this.host.clientHeight / 2}px`;
      style.bottom = "auto";
    }
    if (position === PopoverPositions.RIGHT) {
      style.right = "auto";
      style.left = `${offsetLeft + boundingRect.width}px`;
    }
    if (position === PopoverPositions.LEFT) {
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
    return (h(Host, { position: this.position }, h("slot", null)));
  }
  get host() { return getElement(this); }
  static get watchers() { return {
    "type": ["validateType"],
    "position": ["onPositionChange"],
    "open": ["onOpen"]
  }; }
};
ZTooltipDeprecated.style = stylesCss;

export { ZTooltipDeprecated as z_tooltip_deprecated };

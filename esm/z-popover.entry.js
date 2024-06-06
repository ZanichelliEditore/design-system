import { r as registerInstance, c as createEvent, h, g as getElement } from './index-f16bc2ca.js';
import { P as PopoverPosition, g as KeyboardCode } from './index-2255c6c8.js';

const stylesCss = ":host{--z-popover-theme--surface:var(--color-surface01);--z-popover-theme--text:var(--color-default-text);--z-popover-padding:0;--z-popover-shadow-filter:drop-shadow(0 1px 2px var(--shadow-color-base));position:relative;display:none;min-width:calc(var(--space-unit) * 8);min-height:calc(var(--space-unit) * 4);align-items:center;justify-content:center;padding:var(--z-popover-padding);background:var(--z-popover-theme--surface);border-radius:var(--border-radius-small);color:var(--z-popover-theme--text);fill:currentcolor;filter:var(--z-popover-shadow-filter);font-family:var(--font-family-sans);text-align:center}:host([open][current-position]),:host([open=\"true\"][current-position]){display:flex}:host([center][current-position=\"top\"]),:host([center][current-position=\"bottom\"]){transform:translateX(-50%)}:host([center][current-position=\"right\"]),:host([center][current-position=\"left\"]){transform:translateY(-50%)}:host([current-position^=\"top\"]){margin:0 0 var(--space-unit)}:host([current-position^=\"bottom\"]){margin:var(--space-unit) 0 0}:host([current-position^=\"left\"]){margin:0 var(--space-unit) 0 0}:host([current-position^=\"right\"]){margin:0 0 0 var(--space-unit)}:host([current-position])::before{--arrow-size:6px;--arrow-edge-offset:calc(100% - var(--space-unit) - (var(--arrow-size) / 2));--arrow-center-x-offset:calc(50% - (var(--arrow-size) / 2));--arrow-center-y-offset:calc(100% - (var(--arrow-size) / 2));position:absolute;display:block;width:var(--arrow-size);height:var(--arrow-size);background:var(--z-popover-theme--surface);content:\"\";transform:rotate(45deg)}:host([show-arrow=\"false\"])::before,:host(:not([show-arrow]))::before{display:none}:host([current-position^=\"top\"])::before{top:var(--arrow-center-y-offset)}:host([current-position^=\"bottom\"])::before{bottom:var(--arrow-center-y-offset)}:host([current-position=\"top\"])::before,:host([current-position=\"bottom\"])::before{right:var(--arrow-edge-offset)}:host([current-position=\"right\"])::before,:host([current-position=\"left\"])::before{bottom:var(--arrow-edge-offset)}:host([current-position=\"right\"])::before{right:var(--arrow-center-y-offset)}:host([current-position=\"left\"])::before{left:var(--arrow-center-y-offset)}:host([current-position=\"top_right\"])::before,:host([current-position=\"bottom_right\"])::before{right:var(--arrow-edge-offset)}:host([current-position=\"top_left\"])::before,:host([current-position=\"bottom_left\"])::before{left:var(--arrow-edge-offset)}:host([current-position=\"right_top\"])::before,:host([current-position=\"left_top\"])::before{top:var(--arrow-edge-offset)}:host([current-position=\"right_top\"])::before,:host([current-position=\"right_bottom\"])::before{right:var(--arrow-center-y-offset)}:host([current-position=\"left_top\"])::before,:host([current-position=\"left_bottom\"])::before{left:var(--arrow-center-y-offset)}:host([current-position=\"right_bottom\"])::before,:host([current-position=\"left_bottom\"])::before{bottom:var(--arrow-edge-offset)}:host([center][current-position=\"top\"])::before,:host([center][current-position=\"bottom\"])::before{right:auto;left:var(--arrow-center-x-offset)}:host([center][current-position=\"right\"])::before,:host([center][current-position=\"left\"])::before{top:var(--arrow-center-x-offset);bottom:auto}::slotted(*){overflow:auto;flex:1 auto}";
const ZPopoverStyle0 = stylesCss;

const DOCUMENT_ELEMENT = document.documentElement;
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
    while (parent && parent !== DOCUMENT_ELEMENT) {
        const { overflow, overflowX, overflowY } = window.getComputedStyle(parent);
        if (overflow === "hidden" || overflowY === "hidden" || overflowX === "hidden") {
            return parent;
        }
        if ((parent.scrollHeight > parent.clientHeight && overflow !== "visible" && overflowY !== "visible") ||
            (parent.scrollWidth > parent.clientWidth && overflow !== "visible" && overflowX !== "visible")) {
            return parent;
        }
        parent = getParentElement(parent);
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
const ZPopover = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.positionChange = createEvent(this, "positionChange", 7);
        this.openChange = createEvent(this, "openChange", 7);
        this.position = PopoverPosition.AUTO;
        this.open = false;
        this.bindTo = undefined;
        this.showArrow = false;
        this.center = false;
        this.closable = true;
        this.currentPosition = undefined;
    }
    closePopoverWithKeyboard(e) {
        if (this.closable && e.key === KeyboardCode.ESC) {
            this.open = false;
        }
    }
    /**
     * Close the popover when clicking outside of its content.
     * Stop event propagation if the click was fired by popover's trigger element,
     * to prevent close and reopen glitches.
     * @param {MouseEvent} e
     */
    handleOutsideClick(e) {
        if (!this.closable || !this.open) {
            return;
        }
        if (!e.composedPath().includes(this.host)) {
            const target = e.target;
            const triggerElemClicked = this.bindTo instanceof HTMLElement ? this.bindTo.contains(target) : target.closest(this.bindTo);
            if (triggerElemClicked) {
                e.stopPropagation();
            }
            this.open = false;
            this.positionChange.emit({ position: this.currentPosition });
        }
    }
    validatePosition(newValue) {
        if (newValue && !Object.values(PopoverPosition).includes(newValue)) {
            this.position = PopoverPosition.AUTO;
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
        else if (this.host.hasAttribute("current-position")) {
            this.host.removeAttribute("current-position");
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
        let position = this.currentPosition;
        const positions = [];
        if (this.position === PopoverPosition.AUTO) {
            /**
             * The `AUTO` position tries to place the popover in the 'safest' area,
             * where there's more space available.
             */
            if (availableLeft / availableWidth > 0.6) {
                positions.push(PopoverPosition.LEFT);
            }
            else if (availableLeft / availableWidth < 0.4) {
                positions.push(PopoverPosition.RIGHT);
            }
            if (availableTop / availableHeight > 0.9) {
                positions.unshift(PopoverPosition.TOP);
            }
            else if (availableTop / availableHeight > 0.6) {
                positions.push(PopoverPosition.TOP);
            }
            else if (availableTop / availableHeight < 0.1) {
                positions.unshift(PopoverPosition.BOTTOM);
            }
            else {
                positions.push(PopoverPosition.BOTTOM);
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
        if (position === PopoverPosition.TOP || position === PopoverPosition.TOP_RIGHT) {
            style.top = "auto";
            style.right = "auto";
            style.bottom = `${offsetBottom + boundingRect.height}px`;
            style.left = `${offsetLeft + boundingRect.width * offsetModifier}px`;
            style.maxHeight = `${availableTop}px`;
            if (position === PopoverPosition.TOP_RIGHT) {
                style.maxWidth = `${availableRight + boundingRect.width * sizeModifier}px`;
            }
        }
        else if (position === PopoverPosition.TOP_LEFT) {
            style.top = "auto";
            style.right = `${offsetRight + boundingRect.width * offsetModifier}px`;
            style.bottom = `${offsetBottom + boundingRect.height}px`;
            style.left = "auto";
            style.maxWidth = `${availableLeft}px`;
            style.maxHeight = `${availableTop}px`;
        }
        else if (position === PopoverPosition.BOTTOM || position === PopoverPosition.BOTTOM_RIGHT) {
            style.top = `${offsetTop + boundingRect.height}px`;
            style.right = "auto";
            style.bottom = "auto";
            style.left = `${offsetLeft + boundingRect.width * offsetModifier}px`;
            style.maxHeight = `${availableBottom}px`;
            if (position === PopoverPosition.BOTTOM_RIGHT) {
                style.maxWidth = `${availableRight + boundingRect.width * sizeModifier}px`;
            }
        }
        else if (position === PopoverPosition.BOTTOM_LEFT) {
            style.top = `${offsetTop + boundingRect.height}px`;
            style.right = `${offsetRight + boundingRect.width * offsetModifier}px`;
            style.bottom = "auto";
            style.left = "auto";
            style.maxWidth = `${availableLeft}px`;
            style.maxHeight = `${availableBottom}px`;
        }
        else if (position === PopoverPosition.RIGHT || position === PopoverPosition.RIGHT_BOTTOM) {
            style.top = `${offsetTop + boundingRect.height * offsetModifier}px`;
            style.right = "auto";
            style.bottom = "auto";
            style.left = `${offsetLeft + boundingRect.width}px`;
            style.maxWidth = `${availableRight}px`;
            style.maxHeight = `${availableBottom + boundingRect.height * sizeModifier}px`;
        }
        else if (position === PopoverPosition.RIGHT_TOP) {
            style.top = "auto";
            style.right = "auto";
            style.bottom = `${offsetBottom + boundingRect.height * offsetModifier}px`;
            style.left = `${offsetLeft + boundingRect.width}px`;
            style.maxWidth = `${availableRight}px`;
            style.maxHeight = `${availableTop + boundingRect.height * sizeModifier}px`;
        }
        else if (position === PopoverPosition.LEFT || position === PopoverPosition.LEFT_BOTTOM) {
            style.top = `${offsetTop + boundingRect.height * offsetModifier}px`;
            style.right = `${offsetRight + boundingRect.width}px`;
            style.bottom = "auto";
            style.left = "auto";
            style.maxWidth = `${availableLeft}px`;
            style.maxHeight = `${availableBottom + boundingRect.height * sizeModifier}px`;
        }
        else if (position === PopoverPosition.LEFT_TOP) {
            style.top = "auto";
            style.right = `${offsetRight + boundingRect.width}px`;
            style.bottom = `${offsetBottom + boundingRect.height * offsetModifier}px`;
            style.left = "auto";
            style.maxWidth = `${availableLeft}px`;
            style.maxHeight = `${availableTop + boundingRect.height * sizeModifier}px`;
        }
        this.currentPosition = position || this.position;
        this.host.setAttribute("current-position", this.currentPosition);
    }
    componentWillLoad() {
        this.validatePosition(this.position);
        this.onOpen();
    }
    render() {
        return h("slot", { key: 'fc1d26a6af4fb99ea37da14628dfe730f4a5fd94' });
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "position": ["validatePosition"],
        "open": ["onOpen"]
    }; }
};
ZPopover.style = ZPopoverStyle0;

export { ZPopover as z_popover };

//# sourceMappingURL=z-popover.entry.js.map
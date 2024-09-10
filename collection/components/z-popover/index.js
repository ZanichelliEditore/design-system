import { h } from "@stencil/core";
import { KeyboardCode, PopoverPosition } from "../../beans";
const DOCUMENT_ELEMENT = document.documentElement;
function getParentElement(element) {
    if (element.parentNode === element.shadowRoot) {
        return element.shadowRoot.host;
    }
    return element.parentElement;
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
/**
 * Popover component.
 *
 * @cssprop --z-popover-theme--surface - background color of the popover.
 * @cssprop --z-popover-theme--text - foreground color of the popover.
 * @cssprop --z-popover-padding - padding of the popover.
 * @cssprop --z-popover-shadow-filter - drop-shadow filter of the popover. Defaults to `drop-shadow(0 1px 2px var(--shadow-color-base))`.
 */
export class ZPopover {
    constructor() {
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
        return h("slot", { key: '3c34ab8733a93885e6e2a9fd8b0f3607cafca402' });
    }
    static get is() { return "z-popover"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["styles.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["styles.css"]
        };
    }
    static get properties() {
        return {
            "position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "PopoverPosition",
                    "resolved": "PopoverPosition.AUTO | PopoverPosition.BOTTOM | PopoverPosition.BOTTOM_LEFT | PopoverPosition.BOTTOM_RIGHT | PopoverPosition.LEFT | PopoverPosition.LEFT_BOTTOM | PopoverPosition.LEFT_TOP | PopoverPosition.RIGHT | PopoverPosition.RIGHT_BOTTOM | PopoverPosition.RIGHT_TOP | PopoverPosition.TOP | PopoverPosition.TOP_LEFT | PopoverPosition.TOP_RIGHT",
                    "references": {
                        "PopoverPosition": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::PopoverPosition"
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
                "defaultValue": "PopoverPosition.AUTO"
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
                            "location": "global",
                            "id": "global::HTMLElement"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The selector or the element bound with the popover.\nIf string css selector is provided make sure to use a valid selector."
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
                    "text": "Whether to center the popup on the main side (according to \"position\")."
                },
                "attribute": "center",
                "reflect": true,
                "defaultValue": "false"
            },
            "closable": {
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
                    "text": "If true, the popover can be closed by clicking outside of it or pressing the escape key.\nOtherwise, it will be closed only programmatically (by setting `open` to `false`)."
                },
                "attribute": "closable",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "currentPosition": {}
        };
    }
    static get events() {
        return [{
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
            }];
    }
    static get elementRef() { return "host"; }
    static get watchers() {
        return [{
                "propName": "position",
                "methodName": "validatePosition"
            }, {
                "propName": "open",
                "methodName": "onOpen"
            }];
    }
    static get listeners() {
        return [{
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
            }];
    }
}
//# sourceMappingURL=index.js.map

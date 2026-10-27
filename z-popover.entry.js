import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './index-SFwvdS4t.js';
import { P as PopoverPosition, g as KeyboardCode, p as Device } from './index-DdetsoIY.js';
import { a as containsElement, j as getParentElement, k as findContainingBlockAncestor, g as getDevice, l as isElementVisibleInContainer } from './utils-CJc3A9NX.js';
import './breakpoints-Q-tWjk7P.js';

const stylesCss = () => `:host{position:fixed;display:none;max-width:calc(100dvw - var(--grid-margin) * 2);max-height:calc(100dvh - var(--grid-margin) * 2);padding:var(--z-popover-padding, 0);background:var(--z-popover-theme--surface, var(--color-surface01));border-radius:var(--border-radius-small);color:var(--z-popover-theme--text, var(--color-default-text));fill:currentcolor;filter:var(--z-popover-shadow-filter, drop-shadow(0 1px 2px var(--shadow-color-base)));text-align:center;visibility:hidden;}:host([open]:not([open="false"])[current-position]){display:block}:host([center][current-position="top"]),:host([center][current-position="bottom"]){transform:translateX(-50%)}:host([center][current-position="right"]),:host([center][current-position="left"]){transform:translateY(-50%)}:host([current-position^="top"]){margin:0 0 var(--space-unit)}:host([current-position^="bottom"]){margin:var(--space-unit) 0 0}:host([current-position^="left"]){margin:0 var(--space-unit) 0 0}:host([current-position^="right"]){margin:0 0 0 var(--space-unit)}:host([current-position])::before{--arrow-size:6px;--arrow-edge-offset:calc(100% - var(--space-unit) - (var(--arrow-size) / 2));--arrow-center-x-offset:calc(50% - (var(--arrow-size) / 2));--arrow-center-y-offset:calc(100% - (var(--arrow-size) / 2));position:absolute;display:block;width:var(--arrow-size);height:var(--arrow-size);background:var(--z-popover-theme--surface, var(--color-surface01));content:"";transform:rotate(45deg)}:host([show-arrow="false"])::before,:host(:not([show-arrow]))::before{display:none}:host([current-position^="top"])::before{top:var(--arrow-center-y-offset)}:host([current-position^="bottom"])::before{bottom:var(--arrow-center-y-offset)}:host([current-position="top"])::before,:host([current-position="bottom"])::before{right:var(--arrow-edge-offset)}:host([current-position="right"])::before,:host([current-position="left"])::before{bottom:var(--arrow-edge-offset)}:host([current-position="right"])::before{right:var(--arrow-center-y-offset)}:host([current-position="left"])::before{left:var(--arrow-center-y-offset)}:host([current-position="top_right"])::before,:host([current-position="bottom_right"])::before{right:var(--arrow-edge-offset)}:host([current-position="top_left"])::before,:host([current-position="bottom_left"])::before{left:var(--arrow-edge-offset)}:host([current-position="right_top"])::before,:host([current-position="left_top"])::before{top:var(--arrow-edge-offset)}:host([current-position="right_top"])::before,:host([current-position="right_bottom"])::before{right:var(--arrow-center-y-offset)}:host([current-position="left_top"])::before,:host([current-position="left_bottom"])::before{left:var(--arrow-center-y-offset)}:host([current-position="right_bottom"])::before,:host([current-position="left_bottom"])::before{bottom:var(--arrow-edge-offset)}:host([center][current-position="top"])::before,:host([center][current-position="bottom"])::before{right:auto;left:var(--arrow-center-x-offset)}:host([center][current-position="right"])::before,:host([center][current-position="left"])::before{top:var(--arrow-center-x-offset);bottom:auto}`;

const ZPopover = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.positionChange = createEvent(this, "positionChange", 7);
        this.openChange = createEvent(this, "openChange", 7);
        /**
         * The preferred position to render the popover.
         * The popover will automatically search another position if not enough space is available for the preferred position.
         * If the preferred position is not available, it will try to find the best position starting from `TOP` and going clockwise.
         */
        this.position = PopoverPosition.TOP;
        /**
         * The initial open state of the popover.
         * Internal changes of this prop are emitted through the `openChange` event.
         * Make sure to listen to that event if you need the updated state of the popover from the outside, to avoid inconsistent values.
         */
        this.open = false;
        /** Whether to show popover's arrow. */
        this.showArrow = false;
        /** Whether to center the popup on the main side (according to "position"). */
        this.center = false;
        /**
         * Whether the popover can be closed by clicking outside of it or pressing the escape key.
         * Otherwise, it will be closed only programmatically (by setting `open` to `false`).
         * Default: `true`.
         */
        this.closable = true;
        /** space tolerance for space calculations */
        this.spaceTolerance = 3;
    }
    closePopoverWithKeyboard(e) {
        if (this.closable && e.key === KeyboardCode.ESC) {
            e.stopPropagation();
            this.open = false;
        }
    }
    /**
     * Close the popover when clicking outside of its content.
     * Stop event propagation if the click was fired by popover's trigger element,
     * to prevent close and reopen glitches.
     */
    handleOutsideClick(e) {
        const target = e.target;
        if (!this.closable || !this.open || containsElement(this.host, target)) {
            return;
        }
        if (containsElement(this.boundElement, target)) {
            // stop propagation if the click was on the trigger element to prevent close and reopen glitches
            e.stopPropagation();
        }
        this.open = false;
    }
    validatePosition(newValue) {
        if (!Object.values(PopoverPosition).includes(newValue) || newValue === PopoverPosition.AUTO) {
            newValue = PopoverPosition.TOP;
            this.position = newValue;
        }
        this.currentPosition = newValue;
        if (this.open) {
            this.setPosition();
        }
    }
    /** Setup popover behaviors when `open` changes. */
    onOpen() {
        cancelAnimationFrame(this.animationFrameRequestId);
        this.openChange.emit({ open: this.open });
        if (!this.open) {
            Object.assign(this.host.style, {
                // Reset all positioning properties
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto",
                maxWidth: "",
                maxHeight: "",
                // Set initial visibility to hidden while calculating position...
                visibility: "hidden",
            });
            this.currentPosition = undefined;
            return;
        }
        const updatePositionLoop = () => {
            if (!this.open) {
                return;
            }
            this.setPosition();
            this.animationFrameRequestId = requestAnimationFrame(updatePositionLoop);
        };
        // call `setPosition` after a tick to ensure the DOM is ready and sizes are available
        setTimeout(() => {
            updatePositionLoop();
        }, 0);
    }
    onBindingChange() {
        this.findBoundElement();
    }
    /** Returns the offset modifier to use in calculations to align the popover with the bound element. */
    get offsetModifier() {
        return this.center ? 0.5 : 0;
    }
    findBoundElement() {
        if (typeof this.bindTo === "string") {
            this.boundElement = this.host.ownerDocument.querySelector(this.bindTo);
        }
        else if (this.bindTo) {
            this.boundElement = this.bindTo;
        }
        else {
            this.boundElement = getParentElement(this.host);
            if (this.boundElement.tagName.toLowerCase() === "z-tooltip") {
                // If the popover is used inside a tooltip without a specified `bindTo`, bind it to the parent of the tooltip.
                this.boundElement = getParentElement(this.boundElement);
            }
        }
    }
    /**
     * Check if element has enough space to the right and left to be centered.
     * Used for `TOP` and `BOTTOM` position.
     * When `center` is not enabled, only one side needs to be checked and `RIGHT` is the default.
     */
    hasCenteredHorizontalSpace(availableLeft, availableRight, hostWidth, boundElementWidth) {
        const requiredSideSpace = (hostWidth - boundElementWidth) * (1 - this.offsetModifier);
        if (!this.center) {
            return availableRight >= requiredSideSpace - this.spaceTolerance;
        }
        return (availableRight >= requiredSideSpace - this.spaceTolerance &&
            availableLeft >= requiredSideSpace - this.spaceTolerance);
    }
    /**
     * Check if element has enough space to the top and bottom to be centered.
     * Used for `RIGHT` and `LEFT` position.
     * When `center` is not enabled, only one side needs to be checked and `BOTTOM` is the default.
     */
    hasCenteredVerticalSpace(availableTop, availableBottom, hostHeight, boundElementHeight) {
        const requiredSideSpace = (hostHeight - boundElementHeight) * (1 - this.offsetModifier);
        if (!this.center) {
            return availableBottom >= requiredSideSpace - this.spaceTolerance;
        }
        return (availableTop >= requiredSideSpace - this.spaceTolerance &&
            availableBottom >= requiredSideSpace - this.spaceTolerance);
    }
    /**
     * Check if there is enough space in the given direction to fit the popover.
     * Used for composed positions like TOP_RIGHT, LEFT_BOTTOM, etc.
     */
    hasEnoughSideSpace(availableSpace, hostSize, boundElementSize, offsetModifier) {
        return availableSpace >= hostSize - boundElementSize * (1 - offsetModifier) - this.spaceTolerance;
    }
    /**
     * Given a desired position and available space around the bound element, returns the best position
     * that fits the popover, trying all positions if needed.
     * Takes into account offsetModifier for centering.
     * @param desiredPosition The desired position of the popover.
     * @param availableSpace The available space around the bound element.
     */
    getOptimalPopoverPosition(desiredPosition, availableSpace) {
        const hostWidth = this.host.offsetWidth;
        const hostHeight = this.host.offsetHeight;
        const boundElementWidth = this.boundElement.getBoundingClientRect().width;
        const boundElementHeight = this.boundElement.getBoundingClientRect().height;
        const offsetModifier = this.offsetModifier;
        /** Check if there is enough space to fit the popover in the desired position */
        const fits = (pos) => {
            switch (pos) {
                case PopoverPosition.TOP:
                    return (availableSpace.top >= hostHeight - this.spaceTolerance &&
                        this.hasCenteredHorizontalSpace(availableSpace.left, availableSpace.right, hostWidth, boundElementWidth));
                case PopoverPosition.TOP_RIGHT:
                    return (availableSpace.top >= hostHeight &&
                        this.hasEnoughSideSpace(availableSpace.right, hostWidth, boundElementWidth, offsetModifier));
                case PopoverPosition.TOP_LEFT:
                    return (availableSpace.top >= hostHeight &&
                        this.hasEnoughSideSpace(availableSpace.left, hostWidth, boundElementWidth, offsetModifier));
                case PopoverPosition.RIGHT:
                    return (availableSpace.right >= hostWidth &&
                        this.hasCenteredVerticalSpace(availableSpace.top, availableSpace.bottom, hostHeight, boundElementHeight));
                case PopoverPosition.RIGHT_BOTTOM:
                    return (availableSpace.right >= hostWidth &&
                        this.hasEnoughSideSpace(availableSpace.bottom, hostHeight, boundElementHeight, offsetModifier));
                case PopoverPosition.RIGHT_TOP:
                    return (availableSpace.right >= hostWidth &&
                        this.hasEnoughSideSpace(availableSpace.top, hostHeight, boundElementHeight, offsetModifier));
                case PopoverPosition.BOTTOM:
                    return (availableSpace.bottom >= hostHeight &&
                        this.hasCenteredHorizontalSpace(availableSpace.left, availableSpace.right, hostWidth, boundElementWidth));
                case PopoverPosition.BOTTOM_LEFT:
                    return (availableSpace.bottom >= hostHeight &&
                        this.hasEnoughSideSpace(availableSpace.left, hostWidth, boundElementWidth, offsetModifier));
                case PopoverPosition.BOTTOM_RIGHT:
                    return (availableSpace.bottom >= hostHeight &&
                        this.hasEnoughSideSpace(availableSpace.right, hostWidth, boundElementWidth, offsetModifier));
                case PopoverPosition.LEFT:
                    return (availableSpace.left >= hostWidth &&
                        this.hasCenteredVerticalSpace(availableSpace.top, availableSpace.bottom, hostHeight, boundElementHeight));
                case PopoverPosition.LEFT_TOP:
                    return (availableSpace.left >= hostWidth &&
                        this.hasEnoughSideSpace(availableSpace.top, hostHeight, boundElementHeight, offsetModifier));
                case PopoverPosition.LEFT_BOTTOM:
                    return (availableSpace.left >= hostWidth &&
                        this.hasEnoughSideSpace(availableSpace.bottom, hostHeight, boundElementHeight, offsetModifier));
                default:
                    return false;
            }
        };
        // Check desired position first
        if (fits(desiredPosition)) {
            return desiredPosition;
        }
        // Find position index and create rotation starting from next position
        const positions = ZPopover.positionOrder;
        const startIndex = positions.indexOf(desiredPosition);
        if (startIndex === -1) {
            return desiredPosition; // fallback if position not found
        }
        // Try all other positions starting from the next one
        for (let i = 1; i < positions.length; i++) {
            const posIndex = (startIndex + i) % positions.length;
            const pos = positions[posIndex];
            if (fits(pos)) {
                return pos;
            }
        }
        return this.findBestFallbackPosition(availableSpace);
    }
    /** Find the best fallback position based on available space when no position fits perfectly. */
    findBestFallbackPosition(availableSpace) {
        // Determine which horizontal and vertical direction has the most available space
        const bestHorizontalDirection = availableSpace.right >= availableSpace.left ? PopoverPosition.RIGHT : PopoverPosition.LEFT;
        const bestVerticalDirection = availableSpace.bottom >= availableSpace.top ? PopoverPosition.BOTTOM : PopoverPosition.TOP;
        // Choose the main direction based on which axis has more space overall
        const maxHorizontalSpace = Math.max(availableSpace.right, availableSpace.left);
        const maxVerticalSpace = Math.max(availableSpace.bottom, availableSpace.top);
        const mainDirection = maxVerticalSpace >= maxHorizontalSpace ? bestVerticalDirection : bestHorizontalDirection;
        // Decide if a secondary direction is needed
        // Only add a secondary direction if the difference between min and max in that axis is at least double
        let needsSecondaryDirection = false;
        if (mainDirection === bestVerticalDirection) {
            // If main direction is vertical, check horizontal space difference
            const minHorizontalSpace = Math.min(availableSpace.right, availableSpace.left);
            needsSecondaryDirection = maxHorizontalSpace >= minHorizontalSpace * 2;
        }
        else {
            // If main direction is horizontal, check vertical space difference
            const minVerticalSpace = Math.min(availableSpace.bottom, availableSpace.top);
            needsSecondaryDirection = maxVerticalSpace >= minVerticalSpace * 2;
        }
        if (!needsSecondaryDirection) {
            return mainDirection;
        }
        const secondaryDirection = mainDirection === bestVerticalDirection ? bestHorizontalDirection : bestVerticalDirection;
        // Return a combined position (e.g., "bottom_right")
        return `${mainDirection}_${secondaryDirection}`;
    }
    /**
     * Find the nearest scrollable ancestor of an element to take as a reference for positioning.
     * The ancestor is considered scrollable if it doesn't have `overflow` property set to `hidden` and its scroll size is bigger than its client size.
     */
    findScrollableAncestor(element) {
        let parent = getParentElement(element);
        while (parent) {
            if (parent === element.ownerDocument.documentElement) {
                return parent;
            }
            const style = getComputedStyle(parent);
            const { overflow, overflowX, overflowY } = style;
            const hasHiddenOverflow = overflow === "hidden" || overflowY === "hidden" || overflowX === "hidden";
            const isScrollable = (parent.scrollHeight > parent.clientHeight && overflow !== "visible" && overflowY !== "visible") ||
                (parent.scrollWidth > parent.clientWidth && overflow !== "visible" && overflowX !== "visible");
            if (!hasHiddenOverflow && isScrollable) {
                return parent;
            }
            parent = getParentElement(parent);
        }
        return element.ownerDocument.documentElement;
    }
    /**
     * Calculate available space around the element bound with the popover, based on its nearest scrollable ancestor.
     *
     * Calculations for `right` and `bottom` can be a little bit confusing because `boundingRect.right` and `bottom` may not be what you expect...
     * For more information see the explanation in the docs.
     * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#return_value
     */
    calculateAvailableSpace() {
        const boundElementRect = this.boundElement.getBoundingClientRect();
        if (this.lastBoundRect &&
            this.lastBoundRect.x === boundElementRect.x &&
            this.lastBoundRect.y === boundElementRect.y &&
            this.lastBoundRect.width === boundElementRect.width &&
            this.lastBoundRect.height === boundElementRect.height &&
            this.cachedAvailableSpace) {
            // If the bound element's rect hasn't changed, return the cached rect
            return this.cachedAvailableSpace;
        }
        this.lastBoundRect = boundElementRect;
        const scrollableAncestor = this.findScrollableAncestor(this.boundElement);
        const scrollableAncestorRect = scrollableAncestor.getBoundingClientRect();
        const isScrollableAncestorNested = scrollableAncestor !== this.boundElement.ownerDocument.documentElement;
        const documentWidth = this.boundElement.ownerDocument.documentElement.clientWidth;
        const documentHeight = this.boundElement.ownerDocument.documentElement.clientHeight;
        const safeSpace = 8; // extra space to avoid popover being too close to the edges
        // These deltas represent the offset between the scrollable ancestor and the viewport.
        // They are used to adjust the available space calculations when the scrollable ancestor is not the document or body,
        // to try to fit the popover inside the scrollable ancestor.
        const deltaTop = isScrollableAncestorNested ? scrollableAncestorRect.top : 0;
        const deltaRight = isScrollableAncestorNested ? documentWidth - scrollableAncestorRect.right : 0;
        const deltaBottom = isScrollableAncestorNested ? documentHeight - scrollableAncestorRect.bottom : 0;
        const deltaLeft = isScrollableAncestorNested ? scrollableAncestorRect.left : 0;
        this.cachedAvailableSpace = {
            top: boundElementRect.top - deltaTop - safeSpace,
            right: documentWidth - boundElementRect.right - deltaRight - safeSpace,
            bottom: documentHeight - boundElementRect.bottom - deltaBottom - safeSpace,
            left: boundElementRect.left - deltaLeft - safeSpace,
        };
        return this.cachedAvailableSpace;
    }
    /** Calculate the space around the bound element relative to the viewport. */
    getBoundElementOffsets() {
        const elementRect = this.boundElement.getBoundingClientRect();
        const documentWidth = this.boundElement.ownerDocument.documentElement.clientWidth;
        const documentHeight = this.boundElement.ownerDocument.documentElement.clientHeight;
        return {
            top: elementRect.top,
            right: documentWidth - elementRect.right,
            bottom: documentHeight - elementRect.bottom,
            left: elementRect.left,
        };
    }
    /** Compute positioning offsets in the appropriate coordinate space, accounting for transformed containing blocks and scroll. */
    computePositionOffsets() {
        const boundElementOffsets = this.getBoundElementOffsets();
        const containingBlockAncestor = findContainingBlockAncestor(this.host);
        const isDocumentElement = containingBlockAncestor === this.host.ownerDocument.documentElement;
        if (isDocumentElement) {
            return boundElementOffsets;
        }
        const containingBlockRect = containingBlockAncestor.getBoundingClientRect();
        const containingBlockStyle = getComputedStyle(containingBlockAncestor);
        /** Padding box of the containing block, accounting for borders. */
        const paddingBox = {
            top: containingBlockRect.top + parseFloat(containingBlockStyle.borderTopWidth),
            right: containingBlockRect.right - parseFloat(containingBlockStyle.borderRightWidth),
            bottom: containingBlockRect.bottom - parseFloat(containingBlockStyle.borderBottomWidth),
            left: containingBlockRect.left + parseFloat(containingBlockStyle.borderLeftWidth),
        };
        const boundElementRect = this.boundElement.getBoundingClientRect();
        /** Bound element offsets relative to the containing block padding box. */
        const relativeOffsets = {
            top: boundElementRect.top - paddingBox.top,
            right: paddingBox.right - boundElementRect.right,
            bottom: paddingBox.bottom - boundElementRect.bottom,
            left: boundElementRect.left - paddingBox.left,
        };
        /** Account for scroll to keep the popover aligned while the containing block scrolls. */
        return {
            top: relativeOffsets.top + containingBlockAncestor.scrollTop,
            right: relativeOffsets.right - containingBlockAncestor.scrollLeft,
            bottom: relativeOffsets.bottom - containingBlockAncestor.scrollTop,
            left: relativeOffsets.left + containingBlockAncestor.scrollLeft,
        };
    }
    /** Apply positioning styles based on `position` parameter. */
    applyPositionStyles(position, availableSpace) {
        const boundElementWidth = this.boundElement.offsetWidth;
        const boundElementHeight = this.boundElement.offsetHeight;
        const offsetModifier = this.offsetModifier;
        /**
         * Distance between the arrow center and the popover edge.
         * Needed to align the center of the arrow with the center of the bound element when `showArrow` and `center` are enabled.
         */
        const arrowModifier = this.showArrow && this.center ? 8 : 0;
        const hostStyle = this.host.style;
        /** Gap between the popover and the bound element, set as margin in CSS. */
        const distanceFromBound = parseFloat(getComputedStyle(this.host).marginTop.replace("px", "")) || 0;
        const positionOffsets = this.computePositionOffsets();
        /**
         * Precomputed bases to reduce repeated arithmetic in the switch below.
         * They represent the bound element edges plus optional centering offsets.
         */
        const leftBase = positionOffsets.left + boundElementWidth * offsetModifier;
        const rightBase = positionOffsets.right + boundElementWidth * offsetModifier;
        const topBase = positionOffsets.top + boundElementHeight;
        const bottomBase = positionOffsets.bottom + boundElementHeight;
        const sideTopBase = positionOffsets.top + boundElementHeight * offsetModifier;
        const sideBottomBase = positionOffsets.bottom + boundElementHeight * offsetModifier;
        let maxWidth;
        let maxHeight;
        switch (position) {
            case PopoverPosition.TOP:
            case PopoverPosition.TOP_RIGHT:
                hostStyle.bottom = `${bottomBase}px`;
                hostStyle.left = `${leftBase - (position === PopoverPosition.TOP_RIGHT ? arrowModifier : 0)}px`;
                maxHeight = availableSpace.top - distanceFromBound;
                if (position === PopoverPosition.TOP_RIGHT) {
                    maxWidth = availableSpace.right + boundElementWidth * offsetModifier;
                }
                break;
            case PopoverPosition.TOP_LEFT:
                hostStyle.right = `${rightBase - arrowModifier}px`;
                hostStyle.bottom = `${bottomBase}px`;
                maxWidth = availableSpace.left + boundElementWidth * offsetModifier;
                maxHeight = availableSpace.top - distanceFromBound;
                break;
            case PopoverPosition.BOTTOM:
            case PopoverPosition.BOTTOM_RIGHT:
                hostStyle.top = `${topBase}px`;
                hostStyle.left = `${leftBase - (position === PopoverPosition.BOTTOM_RIGHT ? arrowModifier : 0)}px`;
                maxHeight = availableSpace.bottom - distanceFromBound;
                if (position === PopoverPosition.BOTTOM_RIGHT) {
                    maxWidth = availableSpace.right + boundElementWidth * offsetModifier;
                }
                break;
            case PopoverPosition.BOTTOM_LEFT:
                hostStyle.top = `${topBase}px`;
                hostStyle.right = `${rightBase - arrowModifier}px`;
                maxWidth = availableSpace.left + boundElementWidth * offsetModifier;
                maxHeight = availableSpace.bottom - distanceFromBound;
                break;
            case PopoverPosition.RIGHT:
            case PopoverPosition.RIGHT_BOTTOM:
                hostStyle.top = `${sideTopBase - (position === PopoverPosition.RIGHT_BOTTOM ? arrowModifier : 0)}px`;
                hostStyle.left = `${positionOffsets.left + boundElementWidth}px`;
                maxWidth = availableSpace.right - distanceFromBound;
                if (position === PopoverPosition.RIGHT) {
                    maxHeight = availableSpace.top + availableSpace.bottom + boundElementHeight;
                }
                else {
                    maxHeight = availableSpace.bottom + boundElementHeight * offsetModifier;
                }
                break;
            case PopoverPosition.RIGHT_TOP:
                hostStyle.bottom = `${sideBottomBase - arrowModifier}px`;
                hostStyle.left = `${positionOffsets.left + boundElementWidth}px`;
                maxWidth = availableSpace.right - distanceFromBound;
                maxHeight = availableSpace.top + boundElementHeight * offsetModifier;
                break;
            case PopoverPosition.LEFT:
            case PopoverPosition.LEFT_BOTTOM:
                hostStyle.top = `${sideTopBase - (position === PopoverPosition.LEFT_BOTTOM ? arrowModifier : 0)}px`;
                hostStyle.right = `${positionOffsets.right + boundElementWidth}px`;
                maxWidth = availableSpace.left - distanceFromBound;
                if (position === PopoverPosition.LEFT_BOTTOM) {
                    maxHeight = availableSpace.bottom + boundElementHeight * offsetModifier;
                }
                break;
            case PopoverPosition.LEFT_TOP:
                hostStyle.right = `${positionOffsets.right + boundElementWidth}px`;
                hostStyle.bottom = `${sideBottomBase - arrowModifier}px`;
                maxWidth = availableSpace.left - distanceFromBound;
                maxHeight = availableSpace.top + boundElementHeight * offsetModifier;
                break;
        }
        if (getDevice() !== Device.MOBILE) {
            // Only force max sizes on non-mobile viewports
            Object.assign(hostStyle, {
                maxWidth: maxWidth ? `${maxWidth}px` : "",
                maxHeight: maxHeight ? `${maxHeight}px` : "",
            });
        }
    }
    /** Set the position of the popover. */
    setPosition() {
        if (!this.boundElement) {
            return;
        }
        if (!isElementVisibleInContainer(this.boundElement, this.findScrollableAncestor(this.boundElement))) {
            // If the bound element is not visible, hide the popover too
            this.open = false;
            return;
        }
        Object.assign(this.host.style, {
            // Reset all positioning properties
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto",
            maxWidth: "",
            maxHeight: "",
            // Set initial visibility to hidden while calculating position...
            visibility: "hidden",
        });
        const availableSpace = this.calculateAvailableSpace();
        const position = this.getOptimalPopoverPosition(this.position, availableSpace);
        this.applyPositionStyles(position, availableSpace);
        this.currentPosition = position;
        this.positionChange.emit({ position: this.currentPosition });
        // ...then restore the visibility
        this.host.style.visibility = "visible";
    }
    componentWillLoad() {
        this.validatePosition(this.position);
    }
    componentDidLoad() {
        this.findBoundElement();
        if (this.open) {
            this.onOpen();
        }
    }
    disconnectedCallback() {
        cancelAnimationFrame(this.animationFrameRequestId);
    }
    render() {
        return (h(Host, { key: 'e966103be59ff2a16c40ff2e2a1d31de604be689', "current-position": this.currentPosition }, h("slot", { key: '78a7a8745c8d13e7f337ad740fba6b77ddbe69f6' })));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "position": [{
                "validatePosition": 0
            }],
        "open": [{
                "onOpen": 0
            }],
        "bindTo": [{
                "onBindingChange": 0
            }]
    }; }
};
// Clockwise order of positions.
ZPopover.positionOrder = [
    PopoverPosition.TOP,
    PopoverPosition.TOP_RIGHT,
    PopoverPosition.TOP_LEFT,
    PopoverPosition.RIGHT,
    PopoverPosition.RIGHT_BOTTOM,
    PopoverPosition.RIGHT_TOP,
    PopoverPosition.BOTTOM,
    PopoverPosition.BOTTOM_LEFT,
    PopoverPosition.BOTTOM_RIGHT,
    PopoverPosition.LEFT,
    PopoverPosition.LEFT_TOP,
    PopoverPosition.LEFT_BOTTOM,
];
ZPopover.style = stylesCss();

export { ZPopover as z_popover };

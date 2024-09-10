import { Host, h } from "@stencil/core";
import { KeyboardCode } from "../../beans";
/**
 * A component to create submenus inside the ZMenu.
 * @slot - Label of the menu section.
 * @slot item - Single entry of the section. Set the same slot name to different items to put many of them. Add the `active` attribute to a slotted item to highlight it.
 */
export class ZMenuSection {
    constructor() {
        this.currentIndex = -1;
        this.currentCanvasOpenStatus = false;
        this.active = undefined;
        this.open = undefined;
        this.hasContent = undefined;
    }
    canvasOpenStatusChanged(e) {
        this.currentCanvasOpenStatus = e.detail;
    }
    handleKeyDown(e) {
        if (e.code === KeyboardCode.ENTER) {
            return;
        }
        if (this.open && !this.currentCanvasOpenStatus) {
            this.handleNavigationSideArrow(e);
        }
        this.handleArrowsNav(e);
    }
    handleNavigationSideArrow(e) {
        if (e.code !== KeyboardCode.ARROW_RIGHT && e.code !== KeyboardCode.ARROW_LEFT) {
            return;
        }
        if (e.code === KeyboardCode.ARROW_RIGHT) {
            const nextElement = this.hostElement.parentElement.nextElementSibling;
            if (nextElement) {
                const menuButton = nextElement.shadowRoot.querySelector(".menu-label");
                console.log(this.hostElement.parentElement);
                menuButton.focus();
            }
            this.open = false;
            nextElement.setAttribute("open", "true");
        }
        else if (e.code === KeyboardCode.ARROW_LEFT) {
            const prevElement = this.hostElement.parentElement.previousElementSibling;
            if (prevElement) {
                const menuButton = prevElement.shadowRoot.querySelector(".menu-label");
                menuButton.focus();
            }
            prevElement.setAttribute("open", "true");
            this.open = false;
        }
    }
    handleArrowsNav(e) {
        const menuItems = Array.from(this.hostElement.querySelectorAll('[slot="section"]'));
        if (this.open) {
            e.preventDefault();
            e.stopPropagation();
            if (e.code === KeyboardCode.ARROW_DOWN || e.code === KeyboardCode.ARROW_UP) {
                let nextFocusableItem;
                // INFO: reset focus on all menu items
                menuItems.forEach((item) => item.setAttribute("tabindex", "-1"));
                if (e.code === KeyboardCode.ARROW_DOWN) {
                    nextFocusableItem = this.getNextItem(menuItems, 1);
                }
                else if (e.code === KeyboardCode.ARROW_UP) {
                    nextFocusableItem = this.getNextItem(menuItems, -1);
                }
                if (nextFocusableItem) {
                    nextFocusableItem.setAttribute("tabindex", "0");
                    nextFocusableItem.focus();
                }
            }
            else if (e.code === KeyboardCode.ESC) {
                this.focusToParentAndCloseMenu();
            }
            else if (e.shiftKey && e.code === KeyboardCode.TAB) {
                this.focusToParentAndCloseMenu();
            }
        }
    }
    getNextItem(menuItems, direction) {
        if (this.currentIndex === -1) {
            this.currentIndex = direction === 1 ? 0 : menuItems.length - 1;
            return menuItems[this.currentIndex];
        }
        this.currentIndex = (this.currentIndex + direction + menuItems.length) % menuItems.length;
        return menuItems[this.currentIndex];
    }
    focusToParentAndCloseMenu() {
        const menuButton = this.hostElement.shadowRoot.querySelector("button");
        menuButton.focus();
        this.currentIndex = -1;
        this.open = false;
    }
    toggle() {
        if (!this.hasContent) {
            return;
        }
        this.open = !this.open;
        this.open ? this.opened.emit() : this.closed.emit();
    }
    /** Close the list when a click is performed outside of this Element. */
    handleClick(ev) {
        if (!this.open || this.hostElement.contains(ev.target)) {
            return;
        }
        this.open = false;
        this.closed.emit();
    }
    /**
     * Check if some content slot is set.
     */
    checkContent() {
        this.hasContent = this.hostElement.querySelectorAll('[slot="section"]').length > 0;
    }
    /**
     * Sets slotted item text as `data-text` attribute value, to let CSS use it through `attr()`.
     * @param ev Slotchange event
     */
    onLabelSlotChange(ev) {
        const labelElement = ev.target.assignedElements()[0];
        labelElement.dataset.text = (labelElement === null || labelElement === void 0 ? void 0 : labelElement.innerText) || null;
    }
    focusFirstSectionItemOnKeyUp() {
        const firstElement = this.hostElement.querySelectorAll('[slot="section"]')[0];
        if (firstElement) {
            firstElement.focus();
            this.currentIndex = 0;
        }
    }
    componentWillLoad() {
        this.checkContent();
    }
    render() {
        return (h(Host, { key: '1370ec8c9379a204ed8bfb387ef53f6ad976ce0f', role: "menu", open: this.open }, h("button", { key: '4a474f4f47b9f72f3621a4c1f043f287ebf98d66', class: "label", "aria-pressed": this.open ? "true" : "false", onClick: this.toggle.bind(this), onKeyUp: this.focusFirstSectionItemOnKeyUp.bind(this) }, h("slot", { key: '1332d96212421fd936b1ee1e295c856219bfb1cc', onSlotchange: this.onLabelSlotChange.bind(this) }), this.hasContent && h("z-icon", { key: '04b94f8f22bd56d16f7cdb3f394024c5726435e5', name: this.open ? "chevron-up" : "chevron-down" })), this.open && (h("div", { key: '01353c9f9b57cce04361849e79c3264f5f106472', class: "items" }, h("slot", { key: '29379c69dff6189d4226246eb859dad6c67ca0ec', name: "section", onSlotchange: this.checkContent.bind(this) })))));
    }
    static get is() { return "z-menu-section"; }
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
            "active": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Active state"
                },
                "attribute": "active",
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "open": {},
            "hasContent": {}
        };
    }
    static get events() {
        return [{
                "method": "opened",
                "name": "opened",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "The section has been opened."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "closed",
                "name": "closed",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "The section has been closed."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
    static get listeners() {
        return [{
                "name": "canvasOpenStatusChanged",
                "method": "canvasOpenStatusChanged",
                "target": "document",
                "capture": false,
                "passive": false
            }, {
                "name": "keydown",
                "method": "handleKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "click",
                "method": "handleClick",
                "target": "document",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=index.js.map

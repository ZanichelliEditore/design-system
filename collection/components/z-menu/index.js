import { Host, h } from "@stencil/core";
import { KeyboardCode } from "../../beans";
/**
 * @slot - Menu label
 * @slot header - Header to display as the first entry of the open menu.
 * @slot item - Single entry of the section. Can be slotted multiple times to insert items onto the menu. Use `z-menu-section` for submenus.
 * @cssprop --z-menu-label-color - Color of the label's text.
 */
export class ZMenu {
    toggle() {
        if (!this.hasContent) {
            return;
        }
        this.open = !this.open;
        this.open ? this.opened.emit() : this.closed.emit();
    }
    /** Close the floating list when a click is performed outside of this Element. */
    handleClick(ev) {
        if (!this.floating || !this.open || this.hostElement.contains(ev.target)) {
            return;
        }
        this.reflow();
        this.open = false;
        this.closed.emit();
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
            const nextElement = this.hostElement.nextElementSibling;
            if (!nextElement) {
                const firstMenuItem = this.firstElMenu.shadowRoot.querySelector(".menu-label");
                firstMenuItem.focus();
                this.open = false;
            }
            if (nextElement && nextElement.tagName === "Z-MENU") {
                const menuButton = nextElement.shadowRoot.querySelector(".menu-label");
                menuButton.focus();
                if (nextElement.children.length > 1) {
                    nextElement.setAttribute("open", "true");
                }
                this.open = false;
            }
        }
        else if (e.code === KeyboardCode.ARROW_LEFT) {
            const prevElement = this.hostElement.previousElementSibling;
            if (prevElement.tagName !== "Z-MENU") {
                const lastElMenuItem = this.lastElMenu.shadowRoot.querySelector(".menu-label");
                lastElMenuItem.focus();
                this.open = false;
            }
            if (prevElement && prevElement.tagName === "Z-MENU") {
                const menuButton = prevElement.shadowRoot.querySelector(".menu-label");
                menuButton.focus();
                if (prevElement.children.length > 1) {
                    prevElement.setAttribute("open", "true");
                }
                this.open = false;
            }
        }
    }
    handleArrowsNav(e) {
        const menuItems = Array.from(this.hostElement.querySelectorAll("[slot='item']"));
        const newMenuItems = menuItems.map((el) => {
            if (el.tagName === "Z-MENU-SECTION") {
                return el.shadowRoot.querySelector("button");
            }
            return el;
        });
        if (this.open) {
            e.preventDefault();
            e.stopPropagation();
            if (e.code === KeyboardCode.ARROW_DOWN || e.code === KeyboardCode.ARROW_UP) {
                let nextFocusableItem;
                // INFO: reset focus on all menu items
                newMenuItems.forEach((item) => item.setAttribute("tabindex", "-1"));
                if (e.code === KeyboardCode.ARROW_DOWN) {
                    nextFocusableItem = this.getNextItem(newMenuItems, 1);
                }
                else if (e.code === KeyboardCode.ARROW_UP) {
                    nextFocusableItem = this.getNextItem(newMenuItems, -1);
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
        const menuButton = this.hostElement.shadowRoot.querySelector(".menu-label");
        menuButton.focus();
        this.currentIndex = -1;
        this.open = false;
    }
    onOpenChanged() {
        if (this.open) {
            this.reflow(true);
        }
        else {
            cancelAnimationFrame(this.raf);
        }
    }
    constructor() {
        this.currentIndex = -1;
        this.currentCanvasOpenStatus = false;
        this.active = undefined;
        this.floating = true;
        this.open = false;
        this.verticalContext = false;
        this.hasHeader = undefined;
        this.hasContent = undefined;
        this.toggle = this.toggle.bind(this);
        this.checkContent = this.checkContent.bind(this);
        this.onLabelSlotChange = this.onLabelSlotChange.bind(this);
        this.onItemsChange = this.onItemsChange.bind(this);
    }
    componentWillLoad() {
        const menuItems = Array.from(this.hostElement.parentElement.querySelectorAll('[slot="menu"]'));
        this.firstElMenu = menuItems[0];
        this.lastElMenu = menuItems[menuItems.length - 1];
        this.checkContent();
    }
    /**
     * Sets slotted item text as `data-text` attribute value, to let CSS use it through `attr()`.
     * @param ev Slotchange event
     */
    onLabelSlotChange(ev) {
        const labelElement = ev.target.assignedElements()[0];
        labelElement.dataset.text = labelElement === null || labelElement === void 0 ? void 0 : labelElement.textContent;
    }
    /**
     * Correctly set position of the floating menu in order to prevent overflow.
     * @param live Should run the method on every refresh frame.
     */
    reflow(live = false) {
        if (this.content) {
            const { style } = this.content;
            const { left } = this.hostElement.getBoundingClientRect();
            const widthPx = getComputedStyle(this.content).width;
            const width = widthPx ? parseFloat(widthPx.replace("px", "")) : 375;
            const safeScrollbarSpace = 30;
            style.left = `${Math.min(window.innerWidth - left - width - safeScrollbarSpace, 0)}px`;
        }
        if (live) {
            this.raf = requestAnimationFrame(this.reflow.bind(this, live));
        }
    }
    /**
     * Check if some content slot is set.
     */
    checkContent() {
        this.hasHeader = !!this.hostElement.querySelectorAll("[slot=header]").length;
        this.hasContent = !!this.hostElement.querySelectorAll("[slot=item]").length || this.hasHeader;
    }
    /**
     * Set `menuitem` role to all menu items.
     * Set the item's inner text to the `data-text` attribute (this is for using bold text avoiding layout shifts).
     */
    onItemsChange() {
        this.checkContent();
        const items = this.hostElement.querySelectorAll("[slot=item]");
        items.forEach((item) => {
            item.setAttribute("role", "menuitem");
            item.setAttribute("tabindex", "-1");
            item.dataset.text = item.textContent;
        });
    }
    focusFirstItemOnKeyUp() {
        const firstElement = this.hostElement.querySelectorAll("[slot='item']")[0];
        if (firstElement) {
            firstElement.focus();
            this.currentIndex = 0;
        }
    }
    renderMenuLabel() {
        if (this.hasContent) {
            return (h("div", { class: "menu-wrapper" }, h("button", { class: "menu-label", "aria-expanded": this.open ? "true" : "false", "aria-label": this.open ? "Chiudi menù" : "Apri menù", onClick: this.toggle, onKeyUp: this.focusFirstItemOnKeyUp.bind(this) }, h("div", { class: "menu-label-content" }, h("slot", { onSlotchange: this.onLabelSlotChange }), h("z-icon", { name: this.open ? "chevron-up" : "chevron-down" })))));
        }
        return (h("div", { class: "menu-wrapper" }, h("div", { class: "menu-label" }, h("div", { class: "menu-label-content" }, h("slot", { onSlotchange: this.onLabelSlotChange })))));
    }
    render() {
        return (h(Host, { key: 'e2ab0535d927c4ef1dbaf75746a1e7ee1a87858a' }, this.renderMenuLabel(), this.hasContent && (h("div", { key: '3f0a5da5e77bd229ff0ee232afbbf0273d4245cf', class: "content", ref: (el) => (this.content = el) }, this.hasHeader && (h("header", { key: '4264de0204704ad5f16cb1b0617532220ab121fb', class: "header" }, h("slot", { key: '6b88411ff1c87fa1d12f2e6dedcec19605921df9', name: "header", onSlotchange: this.checkContent }))), h("div", { key: '4fab11ecc9b79b5b95d3238da7f25b05b6e36ec9', class: "items", role: "menu" }, h("slot", { key: '42d1e2006d0588e337a5cb9df4688081e128c9f9', name: "item", onSlotchange: this.onItemsChange }))))));
    }
    static get is() { return "z-menu"; }
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
                    "text": "Flag to set the active status of the menu."
                },
                "attribute": "active",
                "reflect": true
            },
            "floating": {
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
                    "text": "Flag to set the display mode of the list.\nIf true, the list will be absolutely positioned under the menu label,\nstacked beneath it otherwise."
                },
                "attribute": "floating",
                "reflect": true,
                "defaultValue": "true"
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
                    "text": "The opening state of the menu."
                },
                "attribute": "open",
                "reflect": true,
                "defaultValue": "false"
            },
            "verticalContext": {
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
                    "text": "Tells the component that it's placed in a vertical context with other `ZMenu`s (e.g. in the ZAppHeader's offcanvas).\nA small border is placed under it as a separator from other elements."
                },
                "attribute": "vertical-context",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "hasHeader": {},
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
                    "text": "The menu has been opened."
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
                    "text": "The menu has been closed."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "onOpenChanged"
            }];
    }
    static get listeners() {
        return [{
                "name": "click",
                "method": "handleClick",
                "target": "document",
                "capture": false,
                "passive": false
            }, {
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
            }];
    }
}
//# sourceMappingURL=index.js.map

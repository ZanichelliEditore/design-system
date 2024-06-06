import { h, Host } from "@stencil/core";
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
    onOpenChanged() {
        if (this.open) {
            this.reflow(true);
        }
        else {
            cancelAnimationFrame(this.raf);
        }
    }
    constructor() {
        this.active = undefined;
        this.floating = false;
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
            item.dataset.text = item.textContent;
        });
    }
    renderMenuLabel() {
        if (this.hasContent) {
            return (h("button", { class: "menu-label", "aria-expanded": this.open ? "true" : "false", "aria-label": this.open ? "Chiudi menù" : "Apri menù", onClick: this.toggle }, h("div", { class: "menu-label-content" }, h("slot", { onSlotchange: this.onLabelSlotChange }), h("z-icon", { name: this.open ? "chevron-up" : "chevron-down" }))));
        }
        return (h("div", { class: "menu-label" }, h("div", { class: "menu-label-content" }, h("slot", { onSlotchange: this.onLabelSlotChange }))));
    }
    render() {
        return (h(Host, { key: '0ecfa6c7439e2472ebb454362e5dd86b4eef9ad3' }, this.renderMenuLabel(), this.hasContent && (h("div", { class: "content", ref: (el) => (this.content = el) }, this.hasHeader && (h("header", { class: "header" }, h("slot", { name: "header", onSlotchange: this.checkContent }))), h("div", { class: "items", role: "menu" }, h("slot", { name: "item", onSlotchange: this.onItemsChange }))))));
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
                "defaultValue": "false"
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
            }];
    }
}
//# sourceMappingURL=index.js.map

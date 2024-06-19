import { Host, h } from "@stencil/core";
/**
 * A component to create submenus inside the ZMenu.
 * @slot - Label of the menu section.
 * @slot item - Single entry of the section. Set the same slot name to different items to put many of them. Add the `active` attribute to a slotted item to highlight it.
 */
export class ZMenuSection {
    constructor() {
        this.active = undefined;
        this.open = undefined;
        this.hasContent = undefined;
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
        this.hasContent = this.hostElement.querySelectorAll('[slot="item"]').length > 0;
    }
    /**
     * Sets slotted item text as `data-text` attribute value, to let CSS use it through `attr()`.
     * @param ev Slotchange event
     */
    onLabelSlotChange(ev) {
        const labelElement = ev.target.assignedElements()[0];
        labelElement.dataset.text = (labelElement === null || labelElement === void 0 ? void 0 : labelElement.innerText) || null;
    }
    componentWillLoad() {
        this.checkContent();
    }
    render() {
        return (h(Host, { key: '7261f7c68d7e097fe0a70e6f8c0b513958605dbd', role: "menu", open: this.open }, h("button", { key: '74fd64a789a7f9ea93ec118dc2978809e70c5312', class: "label", "aria-pressed": this.open ? "true" : "false", onClick: this.toggle.bind(this) }, h("slot", { key: 'b8e32ae6fc27571d5318eb71ceddea6d87ca3ffa', onSlotchange: this.onLabelSlotChange.bind(this) }), this.hasContent && h("z-icon", { key: '5500c12ff4f374564c03e887a69ceba287a8d577', name: this.open ? "chevron-up" : "chevron-down" })), this.open && (h("div", { key: 'ff66588a6fa8fe8968ec9d7e12d6fac3bb1bb45f', class: "items" }, h("slot", { key: 'de19fdba5a89f0a048b6f8e824feacaa80bbe3fc', name: "item", onSlotchange: this.checkContent.bind(this) })))));
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
                "name": "click",
                "method": "handleClick",
                "target": "document",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=index.js.map

import { Host, h } from "@stencil/core";
/**
 * A component to create submenus inside the ZMenu.
 * @slot - Label of the menu section.
 * @slot item - Single entry of the section. Set the same slot name to different items to put many of them. Add the `active` attribute to a slotted item to highlight it.
 */
export class ZMenuSectionDeprecated {
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
        return (h(Host, { key: '9f5e6272fec856fc30b8f00632105cf2d41f53cc', role: "menu", open: this.open }, h("button", { key: '31fbf5069fe344a43e5835f14459300dcf3359ac', class: "label", "aria-pressed": this.open ? "true" : "false", onClick: this.toggle.bind(this) }, h("slot", { key: '789bf049b23b099e4fb07f12a3fa5a80a221f833', onSlotchange: this.onLabelSlotChange.bind(this) }), this.hasContent && h("z-icon", { key: 'ffc7213860bca2db3fc12d575aaf26a0c598caaa', name: this.open ? "chevron-up" : "chevron-down" })), this.open && (h("div", { key: '14cc6b2bb5f80030df79598464af61c4e375293b', class: "items" }, h("slot", { key: '830b84cf4ce1028c7cfed3ec5051f206f742e66f', name: "item", onSlotchange: this.checkContent.bind(this) })))));
    }
    static get is() { return "z-menu-section-deprecated"; }
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

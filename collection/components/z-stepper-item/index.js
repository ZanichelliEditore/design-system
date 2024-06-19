import { Host, h } from "@stencil/core";
export class ZStepperItem {
    constructor() {
        this.index = undefined;
        this.href = undefined;
        this.pressed = undefined;
        this.checked = undefined;
        this.disabled = undefined;
    }
    getAttributes() {
        const href = this.href && !this.pressed && !this.disabled ? { onClick: () => (location.href = this.href) } : undefined;
        const role = href ? { role: "link" } : undefined;
        const current = this.pressed && !this.disabled ? { ariaCurrent: "step" } : undefined;
        const tabindex = this.pressed || this.href === "" ? { tabindex: -1 } : undefined;
        return Object.assign(Object.assign(Object.assign(Object.assign({}, href), role), current), tabindex);
    }
    render() {
        return (h(Host, { key: 'd760ab7aef2991d5ffc8754e4e03263c4c476a6d', role: "listitem" }, h("button", Object.assign({ key: '7fca3fa04459cdea8813db6382726cc601e4e3f8', class: "stepper-item", disabled: this.disabled }, this.getAttributes()), h("div", { key: 'c727b40105af8807c1b7fddf19243147bc2acdab', class: "indicator" }, this.checked ? h("z-icon", { name: "checkmark" }) : this.index), h("span", { key: 'f8d063aeeac60eb9adeaf65774b60ff07bb1c9ba' }, h("slot", { key: 'b0bd5470c318acc8037abb11b974a4cc1f057fd8' })))));
    }
    static get is() { return "z-stepper-item"; }
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
            "index": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The number of the step item."
                },
                "attribute": "index",
                "reflect": false
            },
            "href": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The href to navigate on click."
                },
                "attribute": "href",
                "reflect": false
            },
            "pressed": {
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
                    "text": "The pressed state of the item."
                },
                "attribute": "pressed",
                "reflect": false
            },
            "checked": {
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
                    "text": "The checked state of the item."
                },
                "attribute": "checked",
                "reflect": false
            },
            "disabled": {
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
                    "text": "The disabled state of the item."
                },
                "attribute": "disabled",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=index.js.map

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
        return (h(Host, { key: 'c5ca192ca8a2dbf5a7df76d24059e2f312e2d6de', role: "listitem" }, h("button", Object.assign({ key: 'df91258ecfeef2cc2d42b7cdeb35fe4d74fa53d9', class: "stepper-item", disabled: this.disabled }, this.getAttributes()), h("div", { key: '45a0b2b14d11094e753e89747c89ad6554b6f086', class: "indicator" }, this.checked ? h("z-icon", { name: "checkmark" }) : this.index), h("span", { key: 'fbb1e1340c9d200312814aac29bf76077b956ea8' }, h("slot", { key: '79791a5e64454e4b543b49e97f9af3592a18c4cf' })))));
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

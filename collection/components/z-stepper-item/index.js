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
        return (h(Host, { key: '0994d3d3a8e89f1a93f17cb71baff1c1581bf7e4', role: "listitem" }, h("button", Object.assign({ key: '14becf7e97de2bd909f61cc3aa09b64b45f7ab30', class: "stepper-item", disabled: this.disabled }, this.getAttributes()), h("div", { key: '69f3cd00d2eeaafa65037d939218b2665d34b62b', class: "indicator" }, this.checked ? h("z-icon", { name: "checkmark" }) : this.index), h("span", { key: '8d2ed47daa09ae26562bac42d262ba7c4c5320a4' }, h("slot", { key: '48004d92935fa78bd48df08a9eb3db11662a171b' })))));
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

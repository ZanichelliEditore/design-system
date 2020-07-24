import { Component, Prop, h } from '@stencil/core';
export class ZStepperItem {
    render() {
        if (this.href) {
            return (h("a", { href: !this.disabled && this.href, class: "stepper-item" },
                h("div", { class: "indicator" }, this.index),
                h("span", null,
                    h("slot", null))));
        }
        return (h("button", { class: "stepper-item", disabled: this.disabled },
            h("div", { class: "indicator" }, this.index),
            h("span", null,
                h("slot", null))));
    }
    static get is() { return "z-stepper-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get styleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get properties() { return {
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
    }; }
}

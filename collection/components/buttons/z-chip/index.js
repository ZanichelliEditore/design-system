import { Component, Prop, h } from '@stencil/core';
export class ZChip {
    render() {
        return (h("div", null,
            h("span", { class: "boldtext" }, this.boldtext),
            " ",
            this.regulartext));
    }
    static get is() { return "z-chip"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get styleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get properties() { return {
        "regulartext": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "regulartext",
            "reflect": false
        },
        "boldtext": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "boldtext",
            "reflect": false
        }
    }; }
}

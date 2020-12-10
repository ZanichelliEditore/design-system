import { Component, Prop, h } from "@stencil/core";
export class ZInputLabel {
    constructor() {
        /** the label is disabled */
        this.disabled = false;
    }
    render() {
        return h("label", { class: this.disabled ? "disabled" : "" }, this.value);
    }
    static get is() { return "z-input-label"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get styleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get properties() { return {
        "value": {
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
                "text": "the label value"
            },
            "attribute": "value",
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
            "optional": true,
            "docs": {
                "tags": [],
                "text": "the label is disabled"
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}

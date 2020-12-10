import { Component, Prop, h } from "@stencil/core";
export class ZInputMessage {
    constructor() {
        this.statusIcons = {
            success: "checkmark-circle",
            error: "multiply-circled",
            warning: "exclamation-circle"
        };
    }
    renderMsgClassName() {
        return this.status ? `msg_${this.status}` : '';
    }
    render() {
        return (h("span", { class: `statusMsg ${this.renderMsgClassName()}` },
            this.status && this.statusIcons[this.status] && this.message ? (h("z-icon", { name: this.statusIcons[this.status], width: 14, height: 14 })) : null,
            h("span", { innerHTML: this.message })));
    }
    static get is() { return "z-input-message"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get styleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get properties() { return {
        "message": {
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
                "text": "input helper message"
            },
            "attribute": "message",
            "reflect": false
        },
        "status": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "InputStatusBean",
                "resolved": "InputStatusEnum.error | InputStatusEnum.selecting | InputStatusEnum.success | InputStatusEnum.warning",
                "references": {
                    "InputStatusBean": {
                        "location": "import",
                        "path": "../../../beans"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "input status (optional)"
            },
            "attribute": "status",
            "reflect": false
        }
    }; }
}

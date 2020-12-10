import { Component, Prop, h, State, Event } from "@stencil/core";
export class ZToggleButton {
    constructor() {
        /** disabled status flag (optional) */
        this.isdisabled = false;
        this.isOpen = false;
    }
    emitToggleClick() {
        if (this.isdisabled)
            return;
        this.isOpen = !this.isOpen;
        this.toggleClick.emit(this.isOpen);
    }
    retrieveButtonClass() {
        let className = this.isOpen && "isopen";
        if (this.avoidclick)
            className = className + " avoid-clicks";
        return className;
    }
    render() {
        return (h("button", { tabindex: this.avoidclick ? "-1" : "0", class: this.retrieveButtonClass(), disabled: this.isdisabled, onClick: () => this.emitToggleClick() },
            h("z-icon", { name: this.isOpen ? "chevron-down" : "chevron-up", width: 16, height: 16 }),
            this.label));
    }
    static get is() { return "z-toggle-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get styleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get properties() { return {
        "label": {
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
                "text": "label text"
            },
            "attribute": "label",
            "reflect": false
        },
        "isdisabled": {
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
                "text": "disabled status flag (optional)"
            },
            "attribute": "isdisabled",
            "reflect": false,
            "defaultValue": "false"
        },
        "avoidclick": {
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
                "text": "avoidclick status flag"
            },
            "attribute": "avoidclick",
            "reflect": false
        }
    }; }
    static get states() { return {
        "isOpen": {}
    }; }
    static get events() { return [{
            "method": "toggleClick",
            "name": "toggleClick",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "emitted on toggle button click, returns isOpen"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}

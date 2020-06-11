import { Component, Prop, h } from '@stencil/core';
import { icons } from './icons';
export class ZIcon {
    constructor() {
        /** icon height (optional) */
        this.height = 18;
        /** icon width (optional) */
        this.width = 18;
    }
    selectPathOrPolygon(iconName) {
        if (iconName && iconName.startsWith('M')) {
            return h("path", { d: icons[this.name] });
        }
        else {
            return h("polygon", { points: icons[this.name] });
        }
    }
    render() {
        return (h("svg", { viewBox: "0 0 18 18", width: this.width, height: this.height, id: this.iconid }, this.selectPathOrPolygon(icons[this.name])));
    }
    static get is() { return "z-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get styleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get properties() { return {
        "name": {
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
                "text": "icon name (choice between available icons)"
            },
            "attribute": "name",
            "reflect": false
        },
        "height": {
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
                "text": "icon height (optional)"
            },
            "attribute": "height",
            "reflect": false,
            "defaultValue": "18"
        },
        "width": {
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
                "text": "icon width (optional)"
            },
            "attribute": "width",
            "reflect": false,
            "defaultValue": "18"
        },
        "iconid": {
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
                "text": "icon id (optional)"
            },
            "attribute": "iconid",
            "reflect": false
        }
    }; }
}

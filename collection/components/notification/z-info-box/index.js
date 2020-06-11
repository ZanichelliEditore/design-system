import { Component, Prop, h, Event } from '@stencil/core';
/**
 * @slot content - set the info box content
 */
export class ZInfoBox {
    constructor() {
        /** render close icon flag */
        this.isclosable = true;
    }
    emitInfoBoxClose() {
        this.infoBoxClose.emit({ boxid: this.boxid });
    }
    render() {
        return (h("div", { id: this.boxid },
            h("slot", { name: "content" }),
            this.isclosable && h("z-icon", { name: "close", "data-action": "infoBoxClose", onClick: () => this.emitInfoBoxClose() })));
    }
    static get is() { return "z-info-box"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get styleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get properties() { return {
        "boxid": {
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
                "text": "info box unique id"
            },
            "attribute": "boxid",
            "reflect": false
        },
        "isclosable": {
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
                "text": "render close icon flag"
            },
            "attribute": "isclosable",
            "reflect": false,
            "defaultValue": "true"
        }
    }; }
    static get events() { return [{
            "method": "infoBoxClose",
            "name": "infoBoxClose",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "emitted on close icon click"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}

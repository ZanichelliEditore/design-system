import { Component, Prop, h, Event } from "@stencil/core";
import { handleKeyboardSubmit } from "../../../utils/utils";
/**
 * @slot modalContent - set the content of the modal
 */
export class ZModal {
    constructor() {
        this.emitModalClose = this.emitModalClose.bind(this);
        this.emitModalHeaderActive = this.emitModalHeaderActive.bind(this);
    }
    emitModalClose() {
        this.modalClose.emit({ modalid: this.modalid });
    }
    emitModalHeaderActive() {
        this.modalHeaderActive.emit({ modalid: this.modalid });
    }
    render() {
        return (h("div", { "data-action": "modalBackground", "data-modal": this.modalid },
            h("div", { id: this.modalid },
                h("header", { onClick: this.emitModalHeaderActive },
                    h("div", null,
                        this.modaltitle && h("h1", null, this.modaltitle),
                        this.modalsubtitle && h("h2", null, this.modalsubtitle)),
                    h("z-icon", { name: "circle-cross-fill", width: 24, height: 24, onClick: () => this.emitModalClose(), "data-action": "modalClose", "data-modal": this.modalid, onKeyPress: (ev) => handleKeyboardSubmit(ev, this.emitModalClose), tabindex: "0" })),
                h("main", null,
                    h("slot", { name: "modalContent" })),
                h("div", { class: "bottomBackground", "data-action": "modalBackground", "data-modal": this.modalid }))));
    }
    static get is() { return "z-modal"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get styleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get properties() { return {
        "modalid": {
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
                "text": "unique id"
            },
            "attribute": "modalid",
            "reflect": false
        },
        "modaltitle": {
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
                "text": "title text (optional)"
            },
            "attribute": "modaltitle",
            "reflect": false
        },
        "modalsubtitle": {
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
                "text": "subtitle (optional)"
            },
            "attribute": "modalsubtitle",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "modalClose",
            "name": "modalClose",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "emitted on close icon click, returns modalid"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "modalHeaderActive",
            "name": "modalHeaderActive",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "emitted on modal header click, returns modalid"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}

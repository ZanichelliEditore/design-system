import { Component, Prop, h, State, Listen } from "@stencil/core";
import { LicenseTypeEnum } from "../../../beans/index";
/**
 * @slot toggle - toggle button slot
 * @slot list - card resources list slot
 */
export class ZCardFooter {
    constructor() {
        /** authors label text */
        this.autorilabel = "Autore";
        this.isOpen = false;
    }
    handleToggle() {
        this.isOpen = !this.isOpen;
    }
    retrieveClass() {
        return {
            isopen: this.isOpen,
            real: this.cardtype === LicenseTypeEnum.real,
            trial: this.cardtype === LicenseTypeEnum.trial,
        };
    }
    render() {
        return (h("div", { class: this.faded && "faded" },
            h("footer", { class: this.retrieveClass() },
                h("span", { class: "toggle" },
                    h("slot", { name: "toggle" })),
                h("h2", null, this.titolo),
                h("div", null,
                    h("p", { class: "authors" },
                        this.autorilabel,
                        ": ",
                        h("b", null, this.autori)),
                    h("p", { class: "year_isbn" },
                        h("span", { class: "isbn" },
                            "ISBN (ed. cartacea): ",
                            h("b", null, this.isbn)))),
                this.isOpen && h("slot", { name: "list" }))));
    }
    static get is() { return "z-card-footer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get styleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get properties() { return {
        "titolo": {
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
                "text": "volume title"
            },
            "attribute": "titolo",
            "reflect": false
        },
        "autorilabel": {
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
                "text": "authors label text"
            },
            "attribute": "autorilabel",
            "reflect": false,
            "defaultValue": "\"Autore\""
        },
        "autori": {
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
                "text": "authors name text"
            },
            "attribute": "autori",
            "reflect": false
        },
        "isbn": {
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
                "text": "volume isbn"
            },
            "attribute": "isbn",
            "reflect": false
        },
        "faded": {
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
                "text": "faded status"
            },
            "attribute": "faded",
            "reflect": false
        },
        "cardtype": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "LicenseTypeEnum",
                "resolved": "LicenseTypeEnum.real | LicenseTypeEnum.trial | LicenseTypeEnum.virtual",
                "references": {
                    "LicenseTypeEnum": {
                        "location": "import",
                        "path": "../../../beans/index"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "card graphic variant (optional)"
            },
            "attribute": "cardtype",
            "reflect": false
        }
    }; }
    static get states() { return {
        "isOpen": {}
    }; }
    static get listeners() { return [{
            "name": "toggleClick",
            "method": "handleToggle",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}

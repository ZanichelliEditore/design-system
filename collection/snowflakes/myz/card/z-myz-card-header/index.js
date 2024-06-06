import { h } from "@stencil/core";
import { LicenseType } from "../../../../beans/index";
/**
 * @slot icon - card header icon slot
 */
export class ZMyzCardHeader {
    constructor() {
        this.titolo = undefined;
        this.faded = undefined;
        this.cardtype = undefined;
        this.allowTooltip = false;
    }
    getTitle() {
        return this.allowTooltip ? this.titolo : "";
    }
    componentDidLoad() {
        if (this.elementHasEllipsis()) {
            this.allowTooltip = true;
        }
    }
    elementHasEllipsis() {
        return this.ellipsis.offsetWidth < this.ellipsis.scrollWidth;
    }
    retrieveClass() {
        return {
            real: this.cardtype === LicenseType.REAL,
            trial: this.cardtype === LicenseType.TRIAL,
            temp: this.cardtype === LicenseType.TEMP,
            faded: this.faded,
        };
    }
    render() {
        return (h("header", { key: '2899cd14120a644cd410c8e3ecbf5dc8057741aa', class: this.retrieveClass() }, h("slot", { key: '9fc6922f5caae746f28dd045662791755a12e531', name: "aria-heading" }), h("span", { key: 'c9e10b400ec78bbecb3c2f4620e3a4934dfed3f4', class: "card-title", ref: (el) => (this.ellipsis = el), title: this.getTitle() }, this.titolo), h("slot", { key: '71828a2ea10c63e807951f1a5e71725a8779cd9e', name: "icon" })));
    }
    static get is() { return "z-myz-card-header"; }
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
                    "original": "LicenseType",
                    "resolved": "LicenseType.REAL | LicenseType.TEMP | LicenseType.TRIAL | LicenseType.VIRTUAL",
                    "references": {
                        "LicenseType": {
                            "location": "import",
                            "path": "../../../../beans/index",
                            "id": "src/beans/index.tsx::LicenseType"
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
        };
    }
    static get states() {
        return {
            "allowTooltip": {}
        };
    }
}
//# sourceMappingURL=index.js.map

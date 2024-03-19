import { h } from "@stencil/core";
/**
 * @slot - alert content
 */
export class ZAlert {
    constructor() {
        this.type = undefined;
    }
    render() {
        return (h("div", { key: '0e8d6f5868bf26d42ced73efef2393b2d0729543', class: this.type }, h("slot", { key: '104f5e9e5f2b5cd5ed34a7e3f0ba56e14243a47b' })));
    }
    static get is() { return "z-alert"; }
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
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AlertType",
                    "resolved": "AlertType.ERROR | AlertType.SUCCESS | AlertType.WARNING",
                    "references": {
                        "AlertType": {
                            "location": "import",
                            "path": "../../../beans/index",
                            "id": "src/beans/index.tsx::AlertType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "alert variant type"
                },
                "attribute": "type",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=index.js.map

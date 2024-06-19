import { h } from "@stencil/core";
/**
 * @slot - alert content
 */
export class ZAlert {
    constructor() {
        this.type = undefined;
    }
    render() {
        return (h("div", { key: 'a04290b826aa50ecac798ad9126d93ee1d7e883e', class: this.type }, h("slot", { key: 'bc0f26d27fe3a68484f3079f11fb1c767fe255c4' })));
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

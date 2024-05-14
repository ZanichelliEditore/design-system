import { h } from "@stencil/core";
/**
 * @slot - alert content
 */
export class ZAlert {
    constructor() {
        this.type = undefined;
    }
    render() {
        return (h("div", { key: '824f9b9f4ee2d4212ad28a561b03c2bb8e2dbb0c', class: this.type }, h("slot", { key: '276f05d0bbb4a1f0e6ef9391d66a07ed875890b9' })));
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

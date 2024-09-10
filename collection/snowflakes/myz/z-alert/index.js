import { h } from "@stencil/core";
/**
 * @slot - alert content
 */
export class ZAlert {
    constructor() {
        this.type = undefined;
    }
    render() {
        return (h("div", { key: '33ecefa9cfd798c0a07fa04213af4db07fb6efa8', class: this.type }, h("slot", { key: 'b7ce84185f868aac8c7bde7d838d2bba84fb2352' })));
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

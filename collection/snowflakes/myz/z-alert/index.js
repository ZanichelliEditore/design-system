import { h } from "@stencil/core";
/**
 * @slot - alert content
 */
export class ZAlert {
    constructor() {
        this.type = undefined;
    }
    render() {
        return (h("div", { key: '6c3d7eaa274e4115e3e5e06465b61ba17a262970', class: this.type }, h("slot", { key: '0f7e2e160f86417d7ed910e105f55af1cfad2824' })));
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

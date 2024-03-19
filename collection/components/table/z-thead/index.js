import { Host, h } from "@stencil/core";
/**
 * ZThead component.
 * @slot - ZThead content (`z-tr`).
 */
export class ZThead {
    constructor() {
        this.sticky = false;
    }
    render() {
        return (h(Host, { key: 'ad4f78d64587c716f2b873a02a2473426d0c1d3f', role: "rowgroup" }, h("slot", { key: '5606cc9d05f711573a130def219cb4d44c5a74a0' })));
    }
    static get is() { return "z-thead"; }
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
            "sticky": {
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
                    "text": "If true, the header will be stuck to the top of the table."
                },
                "attribute": "sticky",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=index.js.map

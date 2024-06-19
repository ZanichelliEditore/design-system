import { Host, h } from "@stencil/core";
/**
 * ZTFoot component.
 * @slot - ZTFoot content (`z-tr`).
 */
export class ZTfoot {
    constructor() {
        this.sticky = false;
    }
    render() {
        return (h(Host, { key: 'c56c6c8f9f3eda99f7eaed147ef2df8c99d43cda', role: "rowgroup" }, h("slot", { key: '03eeb74397f395723a8a649bb7213ac9fdbcf4f0' })));
    }
    static get is() { return "z-tfoot"; }
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
                    "text": "If true, the footer will be stuck to the bottom of the table."
                },
                "attribute": "sticky",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=index.js.map

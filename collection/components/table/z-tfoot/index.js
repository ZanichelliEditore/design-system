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
        return (h(Host, { key: '441a3e0656da274193c4a12681b9e9d641690982', role: "rowgroup" }, h("slot", { key: '5e80207cbf1238b2141fcd657cb10fc18be7bccb' })));
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

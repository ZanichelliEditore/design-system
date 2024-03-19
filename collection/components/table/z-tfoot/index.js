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
        return (h(Host, { key: '1ebaa2ba1dca561a52963708d05c8e3e5f0940ac', role: "rowgroup" }, h("slot", { key: '06826f87e1ffdcf4b54cbf3b13d779dcb77f8c9a' })));
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

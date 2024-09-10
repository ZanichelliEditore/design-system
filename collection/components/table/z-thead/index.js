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
        return (h(Host, { key: '44bbf57a110328328c65171e6463a5128d0be2e7', role: "rowgroup" }, h("slot", { key: '1953f6a0c9d96f3cbf66ed0e856391d19e985e20' })));
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

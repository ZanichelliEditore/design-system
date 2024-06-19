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
        return (h(Host, { key: 'e1e45a7e6e5325a7c0b82cf490d7896f233b35fa', role: "rowgroup" }, h("slot", { key: '8e2f327fc3e2721b1a7755024b9eb43ab87ac2d3' })));
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

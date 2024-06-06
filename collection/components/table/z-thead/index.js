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
        return (h(Host, { key: 'fd1e0dced377fcfcd3b531c063ac36937eaf6904', role: "rowgroup" }, h("slot", { key: '1d75abf2f9b0f1c109eec083ebfaf3e07de81dca' })));
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

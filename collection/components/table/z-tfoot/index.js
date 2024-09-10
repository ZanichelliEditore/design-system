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
        return (h(Host, { key: 'b872f68fd9e643528d02adb7bd76f8377a59fcdc', role: "rowgroup" }, h("slot", { key: '6ebdc491ee2459d415a53fb96e5f27405704a99f' })));
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

import { h } from "@stencil/core";
/**
 * @deprecated
 */
export class ZTableExpandedRow {
    constructor() {
        this.colSpan = undefined;
    }
    render() {
        return (h("td", { key: '3f662b4a7d38b2eca3db3a67176991bc4c538edb', colSpan: this.colSpan }, h("div", { key: 'cff535acab16a19f7475b115649c1ca936990c76', class: "content-container" }, h("slot", { key: '742b4fbffd8a5330424432a1145796b71e86bfa8' }))));
    }
    static get is() { return "z-table-expanded-row"; }
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
            "colSpan": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Number table column plus 1 for the expand button"
                },
                "attribute": "col-span",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=index.js.map

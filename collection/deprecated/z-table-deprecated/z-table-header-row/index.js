import { Host, h } from "@stencil/core";
/**
 * @deprecated
 */
export class ZTableHeaderRow {
    constructor() {
        this.expandable = undefined;
    }
    renderExpandHeader() {
        return h("z-table-header", null);
    }
    render() {
        return (h(Host, { key: '640d060798684dee3641fef5c3778e263acfbd8d', role: "row" }, this.expandable && this.renderExpandHeader(), h("slot", { key: '42d15bfd63e021a96c2394d5bc91c185bcee55b8' })));
    }
    static get is() { return "z-table-header-row"; }
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
            "expandable": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Row expandable flag"
                },
                "attribute": "expandable",
                "reflect": true
            }
        };
    }
}
//# sourceMappingURL=index.js.map

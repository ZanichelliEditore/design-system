import { Host, h } from "@stencil/core";
import "../z-tbody/index";
import "../z-tfoot/index";
import "../z-thead/index";
import "../z-tr/index";
/**
 * ZTable component.
 * @slot - Table content (`z-thead`, `z-tbody`, `z-tfoot`, `z-tr`).
 * @cssprop --z-table--cells-padding - Padding of the cells.
 */
export class ZTable {
    constructor() {
        this.bordered = false;
        this.expandable = false;
    }
    updateExpandable() {
        this.expandable = this.host.querySelectorAll("z-tr[expandable]").length > 0;
    }
    /**
     * Setup the table creating a mutation observer for the expandable attribute.
     */
    componentWillLoad() {
        this.expandableMutationObserver = new MutationObserver(() => {
            this.updateExpandable();
        });
        this.expandableMutationObserver.observe(this.host, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ["expandable"],
            attributeOldValue: false,
        });
    }
    disconnectedCallback() {
        var _a;
        (_a = this.expandableMutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    render() {
        return (h(Host, { key: '2d8e50a74ff7ccf3c6dc4f5324a512177ad52f45', expandable: this.expandable }, h("div", { key: '5e1d9d44dc90ac06683bf5306f7eecadffe807fe', class: "table", role: "table" }, h("slot", { key: '12a615e336a4ad50390a2ab0b12b2d20b3503f06' }))));
    }
    static get is() { return "z-table"; }
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
            "bordered": {
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
                    "text": "Whether the table cells should show a border between them."
                },
                "attribute": "bordered",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "expandable": {}
        };
    }
    static get elementRef() { return "host"; }
}
//# sourceMappingURL=index.js.map

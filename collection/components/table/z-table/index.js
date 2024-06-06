import { Host, h } from "@stencil/core";
import "../z-thead/index";
import "../z-tbody/index";
import "../z-tr/index";
import "../z-tfoot/index";
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
        return (h(Host, { key: '7df0f17c2a8af3ffc26afb0eac92ff80201ea65a', expandable: this.expandable }, h("div", { key: '44d334758702e852bbafe3845c6904c13670c355', class: "table", role: "table" }, h("slot", { key: 'e53145cc9d7b07fc0a2384df635ca5adc5e47b91' }))));
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

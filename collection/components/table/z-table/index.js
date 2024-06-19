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
        return (h(Host, { key: '5f7370afd7912583561ac67baf5b70921c49eea2', expandable: this.expandable }, h("div", { key: '8cbf774ffe599cf49ed9377c2ff3c1e0e8d14e85', class: "table", role: "table" }, h("slot", { key: '318eceb0c4e486a49faab1fe7027acfa76456352' }))));
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

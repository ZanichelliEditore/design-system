import { r as registerInstance, h, a as Host, g as getElement } from './index-f16bc2ca.js';
import './index-e85f0ed8.js';
import './index-d80abc78.js';
import './index-ccc8c049.js';
import './index-216fb076.js';
import './utils-7983d02c.js';
import './index-2255c6c8.js';
import './breakpoints-680e0e56.js';
import './index-55fccdc1.js';
import './index-87669314.js';

const stylesCss = ":host{--z-table--cells-padding:calc(var(--space-unit) * 2);position:relative;display:block;overflow:auto;max-width:100%;box-sizing:border-box;background-color:var(--color-surface01)}:host([expandable]){--z-table--expand-button-size:40px}:host([bordered]){--z-table--cell-left-border:1px solid var(--color-surface03)}.table{min-width:max-content}";
const ZTableStyle0 = stylesCss;

const ZTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'd404e04cce15f5c9c01d1d90477b0b073ce4fb18', expandable: this.expandable }, h("div", { key: '093877b6d4f94257a4178c2d0647107a91cd782b', class: "table", role: "table" }, h("slot", { key: '19e147c5cb2e20287208e39085e816cfc62f3f5e' }))));
    }
    get host() { return getElement(this); }
};
ZTable.style = ZTableStyle0;

export { ZTable as z_table };

//# sourceMappingURL=z-table.entry.js.map
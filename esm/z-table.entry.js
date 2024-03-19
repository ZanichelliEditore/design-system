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
        this.expandableMutationObserver.disconnect();
    }
    render() {
        return (h(Host, { key: '4c33beca2ea12f899450df4a244ea271ea30c018', expandable: this.expandable }, h("div", { key: 'e5f6e45535e0251091d58b9784cfbe0b9bfc8f7e', class: "table", role: "table" }, h("slot", { key: 'd244f077dd25df7f2189f5b5f4b6f89e69db4768' }))));
    }
    get host() { return getElement(this); }
};
ZTable.style = ZTableStyle0;

export { ZTable as z_table };

//# sourceMappingURL=z-table.entry.js.map
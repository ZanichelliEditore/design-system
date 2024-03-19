'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dc60bee7.js');
require('./index-66168a3e.js');
require('./index-bb02ef1e.js');
require('./index-17ebc3c9.js');
require('./index-866774f0.js');
require('./utils-d0b10736.js');
require('./index-39ce4edf.js');
require('./breakpoints-5c22092a.js');
require('./index-e61ccca6.js');
require('./index-fe277fa1.js');

const stylesCss = ":host{--z-table--cells-padding:calc(var(--space-unit) * 2);position:relative;display:block;overflow:auto;max-width:100%;box-sizing:border-box;background-color:var(--color-surface01)}:host([expandable]){--z-table--expand-button-size:40px}:host([bordered]){--z-table--cell-left-border:1px solid var(--color-surface03)}.table{min-width:max-content}";
const ZTableStyle0 = stylesCss;

const ZTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: '4c33beca2ea12f899450df4a244ea271ea30c018', expandable: this.expandable }, index.h("div", { key: 'e5f6e45535e0251091d58b9784cfbe0b9bfc8f7e', class: "table", role: "table" }, index.h("slot", { key: 'd244f077dd25df7f2189f5b5f4b6f89e69db4768' }))));
    }
    get host() { return index.getElement(this); }
};
ZTable.style = ZTableStyle0;

exports.z_table = ZTable;

//# sourceMappingURL=z-table.cjs.entry.js.map
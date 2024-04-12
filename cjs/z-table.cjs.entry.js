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
        var _a;
        (_a = this.expandableMutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    render() {
        return (index.h(index.Host, { key: 'd404e04cce15f5c9c01d1d90477b0b073ce4fb18', expandable: this.expandable }, index.h("div", { key: '093877b6d4f94257a4178c2d0647107a91cd782b', class: "table", role: "table" }, index.h("slot", { key: '19e147c5cb2e20287208e39085e816cfc62f3f5e' }))));
    }
    get host() { return index.getElement(this); }
};
ZTable.style = ZTableStyle0;

exports.z_table = ZTable;

//# sourceMappingURL=z-table.cjs.entry.js.map
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dc60bee7.js');
require('./index-8eae84b7.js');
require('./index-178a9413.js');
require('./index-7c62141b.js');
require('./index-79559e1d.js');
require('./utils-d0b10736.js');
require('./index-39ce4edf.js');
require('./breakpoints-5c22092a.js');
require('./index-3836ecee.js');
require('./index-e5ff8fd3.js');

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
        return (index.h(index.Host, { key: '7df0f17c2a8af3ffc26afb0eac92ff80201ea65a', expandable: this.expandable }, index.h("div", { key: '44d334758702e852bbafe3845c6904c13670c355', class: "table", role: "table" }, index.h("slot", { key: 'e53145cc9d7b07fc0a2384df635ca5adc5e47b91' }))));
    }
    get host() { return index.getElement(this); }
};
ZTable.style = ZTableStyle0;

exports.z_table = ZTable;

//# sourceMappingURL=z-table.cjs.entry.js.map
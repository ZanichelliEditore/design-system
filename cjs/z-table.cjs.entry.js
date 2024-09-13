'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e801ae96.js');
require('./index-1f9f28df.js');
require('./index-b361709b.js');
require('./index-1890445d.js');
require('./index-f0159789.js');
require('./utils-6bd8c55e.js');
require('./index-bab7a651.js');
require('./breakpoints-5c22092a.js');
require('./index-3a070c6b.js');
require('./index-597156d1.js');

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
        return (index.h(index.Host, { key: '2d8e50a74ff7ccf3c6dc4f5324a512177ad52f45', expandable: this.expandable }, index.h("div", { key: '5e1d9d44dc90ac06683bf5306f7eecadffe807fe', class: "table", role: "table" }, index.h("slot", { key: '12a615e336a4ad50390a2ab0b12b2d20b3503f06' }))));
    }
    get host() { return index.getElement(this); }
};
ZTable.style = ZTableStyle0;

exports.z_table = ZTable;

//# sourceMappingURL=z-table.cjs.entry.js.map
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5dc4a8de.js');
require('./index-8eb6b556.js');
require('./index-593b4622.js');
require('./index-1d6878f3.js');
require('./index-39e1f0e8.js');
require('./utils-1a8655c7.js');
require('./index-e3835c94.js');
require('./breakpoints-5c22092a.js');
require('./index-c7392aa5.js');
require('./index-a335ba65.js');

const stylesCss = ":host{--z-table--cells-padding:calc(var(--space-unit) * 2);position:relative;display:block;overflow:auto;max-width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--color-surface01)}:host([expandable]){--z-table--expand-button-size:40px}:host([bordered]){--z-table--cell-left-border:1px solid var(--color-surface03)}.table{min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content}";
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
        return (index.h(index.Host, { key: '5f7370afd7912583561ac67baf5b70921c49eea2', expandable: this.expandable }, index.h("div", { key: '8cbf774ffe599cf49ed9377c2ff3c1e0e8d14e85', class: "table", role: "table" }, index.h("slot", { key: '318eceb0c4e486a49faab1fe7027acfa76456352' }))));
    }
    get host() { return index.getElement(this); }
};
ZTable.style = ZTableStyle0;

exports.z_table = ZTable;

//# sourceMappingURL=z-table.cjs.entry.js.map
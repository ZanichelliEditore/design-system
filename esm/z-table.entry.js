import { r as registerInstance, h, a as Host, g as getElement } from './index-ab5f1eaa.js';
import './index-62dc7ee8.js';
import './index-b5bcd90e.js';
import './index-dc52118c.js';
import './index-a4f1946a.js';
import './utils-7983d02c.js';
import './index-2255c6c8.js';
import './breakpoints-680e0e56.js';
import './index-5f6d3ef8.js';
import './index-2501b2b5.js';

const stylesCss = ":host{--z-table--cells-padding:calc(var(--space-unit) * 2);position:relative;display:block;overflow:auto;max-width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--color-surface01)}:host([expandable]){--z-table--expand-button-size:40px}:host([bordered]){--z-table--cell-left-border:1px solid var(--color-surface03)}.table{min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content}";
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
        return (h(Host, { key: '5f7370afd7912583561ac67baf5b70921c49eea2', expandable: this.expandable }, h("div", { key: '8cbf774ffe599cf49ed9377c2ff3c1e0e8d14e85', class: "table", role: "table" }, h("slot", { key: '318eceb0c4e486a49faab1fe7027acfa76456352' }))));
    }
    get host() { return getElement(this); }
};
ZTable.style = ZTableStyle0;

export { ZTable as z_table };

//# sourceMappingURL=z-table.entry.js.map
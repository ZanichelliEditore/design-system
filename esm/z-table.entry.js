import { r as registerInstance, h, a as Host, g as getElement } from './index-f16bc2ca.js';
import './index-2ee978fb.js';
import './index-076dde65.js';
import './index-14aee9cb.js';
import './index-2d440333.js';
import './utils-7983d02c.js';
import './index-2255c6c8.js';
import './breakpoints-680e0e56.js';
import './index-a3d19e3a.js';
import './index-8db8e65f.js';

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
        return (h(Host, { key: '7df0f17c2a8af3ffc26afb0eac92ff80201ea65a', expandable: this.expandable }, h("div", { key: '44d334758702e852bbafe3845c6904c13670c355', class: "table", role: "table" }, h("slot", { key: 'e53145cc9d7b07fc0a2384df635ca5adc5e47b91' }))));
    }
    get host() { return getElement(this); }
};
ZTable.style = ZTableStyle0;

export { ZTable as z_table };

//# sourceMappingURL=z-table.entry.js.map
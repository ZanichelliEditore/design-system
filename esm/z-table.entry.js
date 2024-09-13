import { r as registerInstance, h, a as Host, g as getElement } from './index-a2130b6a.js';
import './index-175661e6.js';
import './index-b556b384.js';
import './index-a81f1558.js';
import './index-fd7edd22.js';
import './utils-8ade9e2d.js';
import './index-b7dbacb4.js';
import './breakpoints-680e0e56.js';
import './index-230d44a5.js';
import './index-7a28ff39.js';

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
        return (h(Host, { key: '2d8e50a74ff7ccf3c6dc4f5324a512177ad52f45', expandable: this.expandable }, h("div", { key: '5e1d9d44dc90ac06683bf5306f7eecadffe807fe', class: "table", role: "table" }, h("slot", { key: '12a615e336a4ad50390a2ab0b12b2d20b3503f06' }))));
    }
    get host() { return getElement(this); }
};
ZTable.style = ZTableStyle0;

export { ZTable as z_table };

//# sourceMappingURL=z-table.entry.js.map
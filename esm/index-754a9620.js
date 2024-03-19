import { r as registerInstance, h, a as Host } from './index-f16bc2ca.js';

const stylesCss = "z-table-header-row{display:table-row}z-table-header-row[expandable]>z-table-header:first-child{width:40px;box-sizing:border-box;user-select:none}z-table-header-row[expandable]>z-table-header:nth-child(2){padding-left:8px}";
const ZTableHeaderRowStyle0 = stylesCss;

const ZTableHeaderRow = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.expandable = undefined;
    }
    renderExpandHeader() {
        return h("z-table-header", null);
    }
    render() {
        return (h(Host, { key: '640d060798684dee3641fef5c3778e263acfbd8d', role: "row" }, this.expandable && this.renderExpandHeader(), h("slot", { key: '42d15bfd63e021a96c2394d5bc91c185bcee55b8' })));
    }
};
ZTableHeaderRow.style = ZTableHeaderRowStyle0;

export { ZTableHeaderRow as Z };

//# sourceMappingURL=index-754a9620.js.map
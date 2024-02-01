import { r as registerInstance, h, H as Host } from './index-4968ce56.js';

const stylesCss = "z-table-header-row{display:table-row}z-table-header-row[expandable]>z-table-header:first-child{width:40px;box-sizing:border-box;user-select:none}z-table-header-row[expandable]>z-table-header:nth-child(2){padding-left:8px}";

const ZTableHeaderRow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  renderExpandHeader() {
    return h("z-table-header", null);
  }
  render() {
    return (h(Host, { role: "row" }, this.expandable && this.renderExpandHeader(), h("slot", null)));
  }
};
ZTableHeaderRow.style = stylesCss;

export { ZTableHeaderRow as Z };

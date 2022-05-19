import { r as registerInstance, h, H as Host } from './index-90e18641.js';

const stylesCss = "z-table-header-row{display:table-row}z-table-header-row[expandable]>z-table-header:first-child{width:40px;user-select:none;box-sizing:border-box}z-table-header-row[expandable]>z-table-header:nth-child(2){padding-left:8px}";

const ZTableHeaderRow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  _renderExpandHeader() {
    return h("z-table-header", null);
  }
  render() {
    return (h(Host, { role: "row" }, this.expandable && this._renderExpandHeader(), h("slot", null)));
  }
};
ZTableHeaderRow.style = stylesCss;

export { ZTableHeaderRow as z_table_header_row };

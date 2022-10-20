'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');

const stylesCss = "z-table-header-row{display:table-row}z-table-header-row[expandable]>z-table-header:first-child{width:40px;box-sizing:border-box;user-select:none}z-table-header-row[expandable]>z-table-header:nth-child(2){padding-left:8px}";

const ZTableHeaderRow = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  renderExpandHeader() {
    return index.h("z-table-header", null);
  }
  render() {
    return (index.h(index.Host, { role: "row" }, this.expandable && this.renderExpandHeader(), index.h("slot", null)));
  }
};
ZTableHeaderRow.style = stylesCss;

exports.z_table_header_row = ZTableHeaderRow;

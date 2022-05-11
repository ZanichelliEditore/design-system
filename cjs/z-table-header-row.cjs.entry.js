'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dee3e21d.js');

const stylesCss = "z-table-header-row{display:table-row}z-table-header-row[expandable]>z-table-header:first-child{width:40px;user-select:none;box-sizing:border-box}z-table-header-row[expandable]>z-table-header:nth-child(2){padding-left:8px}";

const ZTableHeaderRow = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  _renderExpandHeader() {
    return index.h("z-table-header", null);
  }
  render() {
    return (index.h(index.Host, { role: "row" }, this.expandable && this._renderExpandHeader(), index.h("slot", null)));
  }
};
ZTableHeaderRow.style = stylesCss;

exports.z_table_header_row = ZTableHeaderRow;

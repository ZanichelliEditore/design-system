'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');

const stylesCss = ":host{background-color:var(--gray50);display:none}:host>td>div.content-container{box-shadow:var(--shadow-2);margin-bottom:calc(var(--space-unit) / 2)}";

const ZTableExpandedRow = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("td", { colSpan: this.colSpan }, index.h("div", { class: "content-container" }, index.h("slot", null))));
  }
};
ZTableExpandedRow.style = stylesCss;

exports.z_table_expanded_row = ZTableExpandedRow;

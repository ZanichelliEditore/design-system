'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');

const stylesCss = ".sc-z-table-head-h{display:table-header-group;font-family:var(--dashboard-font);font-weight:var(--font-rg)}";

const ZTableHead = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentWillRender() {
    this.host.setAttribute("role", "rowgroup");
  }
  render() {
    return index.h("slot", null);
  }
  get host() { return index.getElement(this); }
};
ZTableHead.style = stylesCss;

exports.z_table_head = ZTableHead;

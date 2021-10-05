'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-31e5f406.js');

const stylesCss = ".sc-z-registro-table-footer-h{display:table-footer-group;font-family:var(--dashboard-font);font-weight:var(--font-rg)}";

const ZRegistroTableFooter = class {
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
ZRegistroTableFooter.style = stylesCss;

exports.z_registro_table_footer = ZRegistroTableFooter;

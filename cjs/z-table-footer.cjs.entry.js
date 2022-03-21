'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dee3e21d.js');

const stylesCss = ".sc-z-table-footer-h{display:table-footer-group;font-family:var(--dashboard-font);font-weight:var(--font-rg)}";

const ZTableFooter = class {
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
ZTableFooter.style = stylesCss;

exports.z_table_footer = ZTableFooter;

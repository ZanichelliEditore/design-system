'use strict';

const index = require('./index-e3299e0a.js');

const stylesCss = ".sc-z-table-footer-h{display:table-footer-group;font-family:var(--font-family-sans);font-weight:var(--font-rg)}";

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

exports.ZTableFooter = ZTableFooter;

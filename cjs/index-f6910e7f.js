'use strict';

const index = require('./index-195ca522.js');

const stylesCss = ".sc-z-table-head-h{display:table-header-group;font-family:var(--font-family-sans);font-weight:var(--font-rg)}";

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

exports.ZTableHead = ZTableHead;

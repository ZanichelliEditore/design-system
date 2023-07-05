'use strict';

const index = require('./index-e3299e0a.js');

const stylesCss = ".sc-z-table-sticky-footer-h{position:sticky;left:0;display:block;padding:var(--basex2);border-width:var(--border-size-small) 0 var(--border-base);border-style:solid;border-color:var(--gray200);background-color:var(--bg-white);font-weight:var(--font-rg)}";

const ZTableStickyFooter = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return index.h("slot", null);
  }
};
ZTableStickyFooter.style = stylesCss;

exports.ZTableStickyFooter = ZTableStickyFooter;

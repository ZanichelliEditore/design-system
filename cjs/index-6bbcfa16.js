'use strict';

const index = require('./index-e3299e0a.js');

const stylesCss = ".sc-z-table-sticky-footer-h{position:sticky;left:0;display:block;padding:calc(var(--space-unit) * 2);border-width:var(--border-size-small) 0 var(--border-size-medium);border-style:solid;border-color:var(--color-surface03);background-color:var(--color-surface01);font-weight:var(--font-rg)}";

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

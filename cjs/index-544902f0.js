'use strict';

const index = require('./index-195ca522.js');

const stylesCss = ":host{display:block;box-sizing:border-box;border-top:1px solid var(--color-surface03);border-bottom:1px solid var(--color-surface03)}:host([sticky]){position:sticky;z-index:1;bottom:0;background-color:var(--color-surface01)}";

const ZTfoot = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * If true, the footer will be stuck to the bottom of the table.
     */
    this.sticky = false;
  }
  render() {
    return (index.h(index.Host, { role: "rowgroup" }, index.h("slot", null)));
  }
};
ZTfoot.style = stylesCss;

exports.ZTfoot = ZTfoot;

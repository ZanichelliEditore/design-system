import { r as registerInstance, h } from './index-fa9e549c.js';

const stylesCss = ".sc-z-table-sticky-footer-h{display:block;position:sticky;left:0;padding:var(--basex2);background-color:var(--bg-white);border-style:solid;border-color:var(--gray200);border-width:var(--border-size-small) 0 var(--border-base);font-weight:var(--font-rg)}";

const ZTableStickyFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("slot", null));
  }
};
ZTableStickyFooter.style = stylesCss;

export { ZTableStickyFooter as z_table_sticky_footer };

import { r as registerInstance, h } from './index-a2ca4b97.js';

const stylesCss = ".sc-z-table-sticky-footer-h{position:sticky;left:0;display:block;padding:var(--basex2);border-width:var(--border-size-small) 0 var(--border-base);border-style:solid;border-color:var(--gray200);background-color:var(--bg-white);font-weight:var(--font-rg)}";

const ZTableStickyFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("slot", null);
  }
};
ZTableStickyFooter.style = stylesCss;

export { ZTableStickyFooter as Z };

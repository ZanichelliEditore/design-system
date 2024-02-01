import { r as registerInstance, h } from './index-4968ce56.js';

const stylesCss = ".sc-z-table-sticky-footer-h{position:sticky;left:0;display:block;padding:calc(var(--space-unit) * 2);border-width:var(--border-size-small) 0 var(--border-size-medium);border-style:solid;border-color:var(--color-surface03);background-color:var(--color-surface01);font-weight:var(--font-rg)}";

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

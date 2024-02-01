import { r as registerInstance, h, H as Host } from './index-4968ce56.js';

const stylesCss = ":host{display:block;box-sizing:border-box;border-top:1px solid var(--color-surface03);border-bottom:1px solid var(--color-surface03)}:host([sticky]){position:sticky;z-index:1;bottom:0;background-color:var(--color-surface01)}";

const ZTfoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * If true, the footer will be stuck to the bottom of the table.
     */
    this.sticky = false;
  }
  render() {
    return (h(Host, { role: "rowgroup" }, h("slot", null)));
  }
};
ZTfoot.style = stylesCss;

export { ZTfoot as Z };

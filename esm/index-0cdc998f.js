import { r as registerInstance, h, H as Host } from './index-4968ce56.js';

const stylesCss = ":host{--z-table--cells-bottom-border-size:var(\n    --border-size-medium\n  );--z-table--cells-background:var(\n    --color-surface02\n  );display:block;box-sizing:border-box}:host([sticky]){position:sticky;z-index:2;top:0;box-shadow:0 2px 4px -2px var(--shadow-color-base)}";

const ZThead = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * If true, the header will be stuck to the top of the table.
     */
    this.sticky = false;
  }
  render() {
    return (h(Host, { role: "rowgroup" }, h("slot", null)));
  }
};
ZThead.style = stylesCss;

export { ZThead as Z };

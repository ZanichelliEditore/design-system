import { r as registerInstance, h, g as getElement } from './index-90e18641.js';

const stylesCss = ".sc-z-table-head-h{display:table-header-group;font-family:var(--dashboard-font);font-weight:var(--font-rg)}";

const ZTableHead = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillRender() {
    this.host.setAttribute("role", "rowgroup");
  }
  render() {
    return h("slot", null);
  }
  get host() { return getElement(this); }
};
ZTableHead.style = stylesCss;

export { ZTableHead as z_table_head };

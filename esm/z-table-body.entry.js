import { r as registerInstance, h, g as getElement } from './index-a2ca4b97.js';

const stylesCss = ".sc-z-table-body-h{display:table-row-group;font-family:var(--dashboard-font);font-weight:var(--font-rg)}.sc-z-table-body-h>z-table-row[expanded].sc-z-table-body+z-table-expanded-row.sc-z-table-body{display:table-row}";

const ZTableBody = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillRender() {
    this.host.setAttribute("role", "rowgroup");
    Array.from(this.host.children).forEach((child, index) => child.setAttribute("aria-rowindex", `${index}`));
  }
  render() {
    return h("slot", null);
  }
  get host() { return getElement(this); }
};
ZTableBody.style = stylesCss;

export { ZTableBody as z_table_body };
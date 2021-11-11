import { r as registerInstance, h, g as getElement } from './index-fa9e549c.js';

const stylesCss = ".sc-z-registro-table-footer-h{display:table-footer-group;font-family:var(--dashboard-font);font-weight:var(--font-rg)}";

const ZRegistroTableFooter = class {
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
ZRegistroTableFooter.style = stylesCss;

export { ZRegistroTableFooter as z_registro_table_footer };

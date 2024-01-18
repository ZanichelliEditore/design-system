import { r as registerInstance, h, g as getElement } from './index-a2ca4b97.js';

const stylesCss = ".sc-z-table-footer-h{display:table-footer-group;font-family:var(--font-family-sans);font-weight:var(--font-rg)}";

const ZTableFooter = class {
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
ZTableFooter.style = stylesCss;

export { ZTableFooter as Z };

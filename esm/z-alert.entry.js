import { r as registerInstance, h } from './index-a2ca4b97.js';

const stylesCss = ":host{display:block;box-sizing:border-box;color:var(--color-surface05);font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-rg);line-height:calc(var(--space-unit) * 2)}:host>div{padding:calc(var(--space-unit) * 2)}:host>.success{background:var(--color-success-inverse);fill:var(--color-success01)}:host>.warning{background:var(--color-warning-inverse);fill:var(--color-warning01)}:host>.error{background:var(--color-error-inverse);fill:var(--color-error01)}";

const ZAlert = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: this.type }, h("slot", null)));
  }
};
ZAlert.style = stylesCss;

export { ZAlert as z_alert };

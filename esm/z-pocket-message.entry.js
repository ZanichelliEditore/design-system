import { r as registerInstance, h } from './index-fa9e549c.js';

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div{color:var(--color-surface05);fill:var(--color-surface05);font-size:14px;border-bottom:var(--border-size-small) solid var(--color-surface03);padding-top:calc(var(--space-unit) * 1.5);display:grid;grid-template-rows:auto auto;grid-template-columns:36px auto}:host>div>z-icon{grid-row:1 / 2;grid-column:1 / 2}:host>div>div.content{grid-row:1 / 2;grid-column:2 / 3;margin-bottom:var(--space-unit)}:host>div>div.ctaWrapper{grid-row:2 / 3;grid-column:1 / 3;display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:flex-start;align-items:center;margin-bottom:var(--space-unit)}@media only screen and (min-width: 768px){:host>div>div.ctaWrapper{flex-direction:row;grid-column:2 / 3}}";

const ZPocketMessage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("z-icon", { name: "exclamation-circle" }), h("div", { class: "content" }, h("slot", null)), h("div", { class: "ctaWrapper" }, h("slot", { name: "cta" }))));
  }
};
ZPocketMessage.style = stylesCss;

export { ZPocketMessage as z_pocket_message };

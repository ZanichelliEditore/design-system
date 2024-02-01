import { r as registerInstance, h } from './index-4968ce56.js';

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div{display:grid;padding-top:calc(var(--space-unit) * 1.5);border-bottom:var(--border-size-small) solid var(--color-surface03);color:var(--color-surface05);fill:var(--color-surface05);font-size:14px;grid-template-columns:36px auto;grid-template-rows:auto auto}:host>div>z-icon{grid-column:1 / 2;grid-row:1 / 2}:host>div>div.content{margin-bottom:var(--space-unit);grid-column:2 / 3;grid-row:1 / 2}:host>div>div.cta-wrapper{display:flex;flex-flow:column nowrap;align-items:center;justify-content:flex-start;margin-bottom:var(--space-unit);grid-column:1 / 3;grid-row:2 / 3}@media only screen and (min-width: 768px){:host>div>div.cta-wrapper{flex-direction:row;grid-column:2 / 3}}";

const ZPocketMessage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("z-icon", { name: "exclamation-circle" }), h("div", { class: "content" }, h("slot", null)), h("div", { class: "cta-wrapper" }, h("slot", { name: "cta" }))));
  }
};
ZPocketMessage.style = stylesCss;

export { ZPocketMessage as z_pocket_message };

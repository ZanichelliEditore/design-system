import { r as registerInstance, h } from './index-4968ce56.js';

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div>footer{height:128px;box-sizing:border-box;padding:var(--space-unit) calc(var(--space-unit) * 2) 0;border-top:var(--border-size-medium) solid var(--color-surface03);border-radius:0 0 var(--border-radius) var(--border-radius);color:var(--color-surface05);font-size:16px;line-height:24px}:host>div>footer>div.top,:host>div>footer>div.bottom{height:60px}";

const ZMyzCardFooterSections = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("footer", null, h("div", { class: "top" }, h("slot", { name: "top" })), h("div", { class: "bottom" }, h("slot", { name: "bottom" })))));
  }
};
ZMyzCardFooterSections.style = stylesCss;

export { ZMyzCardFooterSections as z_myz_card_footer_sections };

import { r as registerInstance, h } from './index-0148109c.js';

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div>footer{box-sizing:border-box;border-radius:0px 0px var(--radius-base) var(--radius-base);border-top:var(--border-base) solid var(--color-surface03);padding:var(--space-unit) calc(var(--space-unit) * 2) 0;height:128px;color:var(--color-surface05);font-size:16px;line-height:24px}:host>div>footer>div.top,:host>div>footer>div.bottom{height:60px}";

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

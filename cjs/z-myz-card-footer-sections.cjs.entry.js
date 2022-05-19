'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div>footer{box-sizing:border-box;border-radius:0px 0px var(--radius-base) var(--radius-base);border-top:var(--border-base) solid var(--color-surface03);padding:var(--space-unit) calc(var(--space-unit) * 2) 0;height:128px;color:var(--color-surface05);font-size:16px;line-height:24px}:host>div>footer>div.top,:host>div>footer>div.bottom{height:60px}";

const ZMyzCardFooterSections = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", null, index.h("footer", null, index.h("div", { class: "top" }, index.h("slot", { name: "top" })), index.h("div", { class: "bottom" }, index.h("slot", { name: "bottom" })))));
  }
};
ZMyzCardFooterSections.style = stylesCss;

exports.z_myz_card_footer_sections = ZMyzCardFooterSections;

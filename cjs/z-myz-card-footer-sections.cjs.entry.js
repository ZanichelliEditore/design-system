'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-195ca522.js');

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div>footer{height:128px;box-sizing:border-box;padding:var(--space-unit) calc(var(--space-unit) * 2) 0;border-top:var(--border-size-medium) solid var(--color-surface03);border-radius:0 0 var(--border-radius) var(--border-radius);color:var(--color-surface05);font-size:16px;line-height:24px}:host>div>footer>div.top,:host>div>footer>div.bottom{height:60px}";

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

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dc60bee7.js');

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div>footer{height:128px;box-sizing:border-box;padding:var(--space-unit) calc(var(--space-unit) * 2) 0;border-top:var(--border-size-medium) solid var(--color-surface03);border-radius:0 0 var(--border-radius) var(--border-radius);color:var(--color-surface05);font-size:16px;line-height:24px}:host>div>footer>div.top,:host>div>footer>div.bottom{height:60px}";
const ZMyzCardFooterSectionsStyle0 = stylesCss;

const ZMyzCardFooterSections = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '62c6d04f17701a66638885f241c6cee08411eb45' }, index.h("footer", { key: '935193a38295ec3b700b3c30a32aca8ed310b3ad' }, index.h("div", { key: '8c7af9e6f32e4353942a7831dea7f9875455e868', class: "top" }, index.h("slot", { key: '3a93460244816042d5a46a37909fe150b7dad333', name: "top" })), index.h("div", { key: '3bc02862cb0fcebbc1a763ba6f40e909cf39dbf1', class: "bottom" }, index.h("slot", { key: '600288fe385b411013722ca70809a8f841236563', name: "bottom" })))));
    }
};
ZMyzCardFooterSections.style = ZMyzCardFooterSectionsStyle0;

exports.z_myz_card_footer_sections = ZMyzCardFooterSections;

//# sourceMappingURL=z-myz-card-footer-sections.cjs.entry.js.map
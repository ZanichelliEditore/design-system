'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5dc4a8de.js');

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div>footer{height:128px;box-sizing:border-box;padding:var(--space-unit) calc(var(--space-unit) * 2) 0;border-top:var(--border-size-medium) solid var(--color-surface03);border-radius:0 0 var(--border-radius) var(--border-radius);color:var(--color-surface05);font-size:16px;line-height:24px}:host>div>footer>div.top,:host>div>footer>div.bottom{height:60px}";
const ZMyzCardFooterSectionsStyle0 = stylesCss;

const ZMyzCardFooterSections = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: 'c293773e2f737912b63345f9524e03a374f0c536' }, index.h("footer", { key: '1a8148b580eef438c1a68d5a134bf3b224846946' }, index.h("div", { key: '49863a18b930dcd3edb2a049c9e77c858be1dc76', class: "top" }, index.h("slot", { key: '00bdadaa655b1018e42ed72fefd4d21b1a0529fb', name: "top" })), index.h("div", { key: '24e4dfb5e2eaac5ef6c61dd2303e9cd9e8832b68', class: "bottom" }, index.h("slot", { key: 'b8791e5c065a9ce4b4701444c137295123f99d3d', name: "bottom" })))));
    }
};
ZMyzCardFooterSections.style = ZMyzCardFooterSectionsStyle0;

exports.z_myz_card_footer_sections = ZMyzCardFooterSections;

//# sourceMappingURL=z-myz-card-footer-sections.cjs.entry.js.map
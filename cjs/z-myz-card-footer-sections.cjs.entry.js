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
        return (index.h("div", { key: '4ba6b97d65b6e6356411680b1b0d954c3b2ef2a6' }, index.h("footer", { key: '9b29ba240c9420c8aa6c3757f99e60e0806e403e' }, index.h("div", { key: '13d5c349f14a9de7b172ec1c4e45784eae1ab845', class: "top" }, index.h("slot", { key: '74af633d2e01f97b9487e10baaa44e2b6aebdaed', name: "top" })), index.h("div", { key: 'c2adb665b29ce04cea0f6d8d4f6dc76a7c801582', class: "bottom" }, index.h("slot", { key: 'fb5967cd696d33d1dc46aa75d3f65526254f8330', name: "bottom" })))));
    }
};
ZMyzCardFooterSections.style = ZMyzCardFooterSectionsStyle0;

exports.z_myz_card_footer_sections = ZMyzCardFooterSections;

//# sourceMappingURL=z-myz-card-footer-sections.cjs.entry.js.map
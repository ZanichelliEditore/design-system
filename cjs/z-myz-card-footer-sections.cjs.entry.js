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
        return (index.h("div", { key: 'ad5a5b4ce763cd24f68d02ec7b6e29b2545b94be' }, index.h("footer", { key: '85252bc9e7ac49dd5250160f31eda28d0cd9b56c' }, index.h("div", { key: '43fdf6d47836f0c6cddb8e6a2a807837642a46b6', class: "top" }, index.h("slot", { key: 'ec8b4121c2c3aa2975f19c8ba846689f5a0e0dea', name: "top" })), index.h("div", { key: 'a76056af1fba864d1dd3dbc7c4c6a109ee1e5e9d', class: "bottom" }, index.h("slot", { key: 'b1f51897fe2f8bac34c21b409c74003651bc641a', name: "bottom" })))));
    }
};
ZMyzCardFooterSections.style = ZMyzCardFooterSectionsStyle0;

exports.z_myz_card_footer_sections = ZMyzCardFooterSections;

//# sourceMappingURL=z-myz-card-footer-sections.cjs.entry.js.map
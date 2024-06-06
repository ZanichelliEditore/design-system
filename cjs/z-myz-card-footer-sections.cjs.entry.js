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
        return (index.h("div", { key: 'e41dd2e7a9bed167d3901b276858c4dfc94c9a69' }, index.h("footer", { key: '522e3b1ea9c7ba56184a9140b6edbaefbf20a17d' }, index.h("div", { key: '5329ba46f5f04f20769781b0ed9400237d726952', class: "top" }, index.h("slot", { key: 'ea36f7398f980f255e396b3044d00ff77f42cad0', name: "top" })), index.h("div", { key: '726628df2d0df9c25c7103e7b56afe69a4ed8c2d', class: "bottom" }, index.h("slot", { key: '645f27ef4a5bfd15a021737512b8de2970f18b84', name: "bottom" })))));
    }
};
ZMyzCardFooterSections.style = ZMyzCardFooterSectionsStyle0;

exports.z_myz_card_footer_sections = ZMyzCardFooterSections;

//# sourceMappingURL=z-myz-card-footer-sections.cjs.entry.js.map
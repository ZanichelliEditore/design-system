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
        return (index.h("div", { key: 'a293f04dca9996921d120faad7a7338afdab0205' }, index.h("footer", { key: 'e7fc7b09f264943f559723900a225f6c5201b9d1' }, index.h("div", { key: '782863c61b3b92c3735db24a3f2ec66ee195e72b', class: "top" }, index.h("slot", { key: '940eae81a4f44cf95f6f2175f91e1b734dd7bc9f', name: "top" })), index.h("div", { key: 'eb385964446becb65d044b5143ee7bc534f9b16b', class: "bottom" }, index.h("slot", { key: '2c3be22878583359845307dd704d102dc006fc97', name: "bottom" })))));
    }
};
ZMyzCardFooterSections.style = ZMyzCardFooterSectionsStyle0;

exports.z_myz_card_footer_sections = ZMyzCardFooterSections;

//# sourceMappingURL=z-myz-card-footer-sections.cjs.entry.js.map
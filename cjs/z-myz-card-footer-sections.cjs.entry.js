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
        return (index.h("div", { key: 'cd0ca2ae69e18cb2d8858619fa7271bab9ec0572' }, index.h("footer", { key: 'c223fb26d9e4a508727d31ed098260137c29c810' }, index.h("div", { key: '78f08bb02791f86423ec79d7d51f75fca04c48b3', class: "top" }, index.h("slot", { key: 'f0868ee663b0e051d2b1f9fdc3b46b2e3bf0764b', name: "top" })), index.h("div", { key: 'b94b1018a936912658f5cdc803d813740afbefd2', class: "bottom" }, index.h("slot", { key: 'c46cadb51728ab6fb3337794814abc4c2bf18434', name: "bottom" })))));
    }
};
ZMyzCardFooterSections.style = ZMyzCardFooterSectionsStyle0;

exports.z_myz_card_footer_sections = ZMyzCardFooterSections;

//# sourceMappingURL=z-myz-card-footer-sections.cjs.entry.js.map
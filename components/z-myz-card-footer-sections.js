import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div>footer{height:128px;box-sizing:border-box;padding:var(--space-unit) calc(var(--space-unit) * 2) 0;border-top:var(--border-size-medium) solid var(--color-surface03);border-radius:0 0 var(--border-radius) var(--border-radius);color:var(--color-surface05);font-size:16px;line-height:24px}:host>div>footer>div.top,:host>div>footer>div.bottom{height:60px}";
const ZMyzCardFooterSectionsStyle0 = stylesCss;

const ZMyzCardFooterSections$1 = /*@__PURE__*/ proxyCustomElement(class ZMyzCardFooterSections extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h("div", { key: 'c293773e2f737912b63345f9524e03a374f0c536' }, h("footer", { key: '1a8148b580eef438c1a68d5a134bf3b224846946' }, h("div", { key: '49863a18b930dcd3edb2a049c9e77c858be1dc76', class: "top" }, h("slot", { key: '00bdadaa655b1018e42ed72fefd4d21b1a0529fb', name: "top" })), h("div", { key: '24e4dfb5e2eaac5ef6c61dd2303e9cd9e8832b68', class: "bottom" }, h("slot", { key: 'b8791e5c065a9ce4b4701444c137295123f99d3d', name: "bottom" })))));
    }
    static get style() { return ZMyzCardFooterSectionsStyle0; }
}, [1, "z-myz-card-footer-sections"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-myz-card-footer-sections"];
    components.forEach(tagName => { switch (tagName) {
        case "z-myz-card-footer-sections":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZMyzCardFooterSections$1);
            }
            break;
    } });
}

const ZMyzCardFooterSections = ZMyzCardFooterSections$1;
const defineCustomElement = defineCustomElement$1;

export { ZMyzCardFooterSections, defineCustomElement };

//# sourceMappingURL=z-myz-card-footer-sections.js.map
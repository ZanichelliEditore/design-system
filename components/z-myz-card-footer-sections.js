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
        return (h("div", { key: '460ccb7066c598d7712f468b8b77850190fd6088' }, h("footer", { key: '14789b182cd02636149dd501d8963e23bf9893ff' }, h("div", { key: 'f618c2e4c24c9488aa6090c6629d846c72b9868c', class: "top" }, h("slot", { key: '9fdbc5aeb537308c6a0a1197de2490749d8710a8', name: "top" })), h("div", { key: '900ff46313ca3d71e7e501f6c7d9e531ec41cdfb', class: "bottom" }, h("slot", { key: 'abac3671bea6c55bb0e18d6c05899e4ae9be3895', name: "bottom" })))));
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
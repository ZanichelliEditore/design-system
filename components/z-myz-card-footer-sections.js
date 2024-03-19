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
        return (h("div", { key: '62c6d04f17701a66638885f241c6cee08411eb45' }, h("footer", { key: '935193a38295ec3b700b3c30a32aca8ed310b3ad' }, h("div", { key: '8c7af9e6f32e4353942a7831dea7f9875455e868', class: "top" }, h("slot", { key: '3a93460244816042d5a46a37909fe150b7dad333', name: "top" })), h("div", { key: '3bc02862cb0fcebbc1a763ba6f40e909cf39dbf1', class: "bottom" }, h("slot", { key: '600288fe385b411013722ca70809a8f841236563', name: "bottom" })))));
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
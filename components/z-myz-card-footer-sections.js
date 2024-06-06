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
        return (h("div", { key: 'e41dd2e7a9bed167d3901b276858c4dfc94c9a69' }, h("footer", { key: '522e3b1ea9c7ba56184a9140b6edbaefbf20a17d' }, h("div", { key: '5329ba46f5f04f20769781b0ed9400237d726952', class: "top" }, h("slot", { key: 'ea36f7398f980f255e396b3044d00ff77f42cad0', name: "top" })), h("div", { key: '726628df2d0df9c25c7103e7b56afe69a4ed8c2d', class: "bottom" }, h("slot", { key: '645f27ef4a5bfd15a021737512b8de2970f18b84', name: "bottom" })))));
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
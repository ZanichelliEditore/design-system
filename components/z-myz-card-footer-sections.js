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
        return (h("div", { key: 'a293f04dca9996921d120faad7a7338afdab0205' }, h("footer", { key: 'e7fc7b09f264943f559723900a225f6c5201b9d1' }, h("div", { key: '782863c61b3b92c3735db24a3f2ec66ee195e72b', class: "top" }, h("slot", { key: '940eae81a4f44cf95f6f2175f91e1b734dd7bc9f', name: "top" })), h("div", { key: 'eb385964446becb65d044b5143ee7bc534f9b16b', class: "bottom" }, h("slot", { key: '2c3be22878583359845307dd704d102dc006fc97', name: "bottom" })))));
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
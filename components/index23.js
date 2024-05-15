import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { q as PocketStatus } from './index2.js';

const stylesCss = ":host{display:block;width:100%;box-sizing:border-box;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>main{overflow:auto;border-right:var(--border-size-small) solid var(--color-surface03);border-left:var(--border-size-small) solid var(--color-surface03);background:var(--color-surface01);scrollbar-width:none}:host>main.preview{max-height:225px;transition:all 200ms ease-in-out, top 200ms ease-in-out}:host>main.open{max-height:calc(100vh - 48px);transition:all 200ms ease-in-out, top 200ms ease-in-out}:host>main.closed{height:0;transition:all 200ms ease-in-out, top 200ms ease-in-out}:host ::-webkit-scrollbar{width:0}@media only screen and (min-width: 768px){:host>main.preview{max-height:157px}}";
const ZPocketBodyStyle0 = stylesCss;

const ZPocketBody = /*@__PURE__*/ proxyCustomElement(class ZPocketBody extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.pocketid = undefined;
        this.status = PocketStatus.PREVIEW;
    }
    handlePocketToggle(e) {
        if (e.detail.id && e.detail.id === this.pocketid) {
            this.status = e.detail.status;
        }
    }
    render() {
        return (h("main", { key: '9440ba5927ca7fd3ef12656dacc0bb9ea8312b51', class: this.status }, h("slot", { key: '66d68d48f04ae4496d2f73a466f0f5878bdfdde8' })));
    }
    static get style() { return ZPocketBodyStyle0; }
}, [1, "z-pocket-body", {
        "pocketid": [1],
        "status": [1025]
    }, [[16, "pocketToggle", "handlePocketToggle"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-pocket-body"];
    components.forEach(tagName => { switch (tagName) {
        case "z-pocket-body":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZPocketBody);
            }
            break;
    } });
}

export { ZPocketBody as Z, defineCustomElement as d };

//# sourceMappingURL=index23.js.map
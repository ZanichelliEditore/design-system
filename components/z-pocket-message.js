import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './index9.js';

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div{display:grid;padding-top:calc(var(--space-unit) * 1.5);border-bottom:var(--border-size-small) solid var(--color-surface03);color:var(--color-surface05);fill:var(--color-surface05);font-size:14px;grid-template-columns:36px auto;grid-template-rows:auto auto}:host>div>z-icon{grid-column:1 / 2;grid-row:1 / 2}:host>div>div.content{margin-bottom:var(--space-unit);grid-column:2 / 3;grid-row:1 / 2}:host>div>div.cta-wrapper{display:flex;flex-flow:column nowrap;align-items:center;justify-content:flex-start;margin-bottom:var(--space-unit);grid-column:1 / 3;grid-row:2 / 3}@media only screen and (min-width: 768px){:host>div>div.cta-wrapper{flex-direction:row;grid-column:2 / 3}}";
const ZPocketMessageStyle0 = stylesCss;

const ZPocketMessage$1 = /*@__PURE__*/ proxyCustomElement(class ZPocketMessage extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h("div", { key: 'db10fcdf23fbd0da7833e01f8d72a6302f6cadba' }, h("z-icon", { key: '7c241ba1a147f71db15162c5ee6d84738536430e', name: "exclamation-circle" }), h("div", { key: '7ec8936f539f19047c644be7b9ec1dd985d3d42e', class: "content" }, h("slot", { key: 'a6cd9ab932dcac28058640df1a08da9f174e1a2b' })), h("div", { key: '376e912ec9d49a7148b620b54ce26d9e8a278f1f', class: "cta-wrapper" }, h("slot", { key: '3ccbb7a2cd41d211ab76734fb73e7b23aa100d9b', name: "cta" }))));
    }
    static get style() { return ZPocketMessageStyle0; }
}, [1, "z-pocket-message"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-pocket-message", "z-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "z-pocket-message":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZPocketMessage$1);
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const ZPocketMessage = ZPocketMessage$1;
const defineCustomElement = defineCustomElement$1;

export { ZPocketMessage, defineCustomElement };

//# sourceMappingURL=z-pocket-message.js.map
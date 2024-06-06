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
        return (h("div", { key: '77c4ac87fc391b13dea88c69e71165692075170e' }, h("z-icon", { key: '12387df9bfe2fb8fa3cc0e5cfc2f1515e8ddf322', name: "exclamation-circle" }), h("div", { key: '4ae85314b4c54d9de77f5cc2e789fcfa2516cfac', class: "content" }, h("slot", { key: '7dcf450d21455d6796faa2cfb1222aab546a94d6' })), h("div", { key: 'a51ae4748bb1c29223d35fb10633e51fc17506ec', class: "cta-wrapper" }, h("slot", { key: '2641720771473f5ce8cd207731273f82810dc428', name: "cta" }))));
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
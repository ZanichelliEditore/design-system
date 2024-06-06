import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const stylesCss = ":host{width:auto;height:340px}:host>div{position:relative;display:flex;width:auto;height:340px;align-items:center;justify-content:center}";
const ZMyzCardBodyStyle0 = stylesCss;

const ZMyzCardBody = /*@__PURE__*/ proxyCustomElement(class ZMyzCardBody extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h("div", { key: 'cf1d5f3496d5d26fc8af29aaadb102fb6d05fc01' }, h("slot", { key: 'c0e3125ceecc33606e9644c514643de2ff59be1b', name: "alert" }), h("slot", { key: 'fbac52128264cd4a5637a7acbe3f57670efb5d50', name: "cover" })));
    }
    static get style() { return ZMyzCardBodyStyle0; }
}, [1, "z-myz-card-body"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-myz-card-body"];
    components.forEach(tagName => { switch (tagName) {
        case "z-myz-card-body":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZMyzCardBody);
            }
            break;
    } });
}

export { ZMyzCardBody as Z, defineCustomElement as d };

//# sourceMappingURL=index17.js.map
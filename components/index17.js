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
        return (h("div", { key: '6eaaf5ff0351e8844d3aa616e473712dafcff7fd' }, h("slot", { key: '2984020a0568593cf9dd47aac83c4890c53d7460', name: "alert" }), h("slot", { key: '85e70e9dcd8068d00bdb40e71acaffae88326225', name: "cover" })));
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
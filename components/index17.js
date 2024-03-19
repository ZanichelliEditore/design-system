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
        return (h("div", { key: '445a0d9463e21e7e51df000bbd32b892d16db6f7' }, h("slot", { key: 'aff7823ed27e2055d2803a1a55a0be35cfbcebf5', name: "alert" }), h("slot", { key: '0f435dc867e63caadc313043006a97156ebe2dc3', name: "cover" })));
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
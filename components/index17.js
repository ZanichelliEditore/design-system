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
        return (h("div", { key: '7d193913aaee1ce18633cb39f322bde63dd0f636' }, h("slot", { key: '59b557d02f579f35c15ac0ac03a084a3f43a00c0', name: "alert" }), h("slot", { key: 'bcd8832a6c010f6dbc6a6d5579efe7801ff6a60c', name: "cover" })));
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
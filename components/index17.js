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
        return (h("div", { key: '29910997b3d57c8ed4694ae81e3f8e62b86908df' }, h("slot", { key: 'da76b95d6eb9c8d36bb6a09f79d277dd5f6924e4', name: "alert" }), h("slot", { key: 'cc694615936aa77e99090e627eb4623c6feac31d', name: "cover" })));
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
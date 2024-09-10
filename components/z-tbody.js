import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const stylesCss = ":host{display:block;box-sizing:border-box}";
const ZTbodyStyle0 = stylesCss;

const ZTbody$1 = /*@__PURE__*/ proxyCustomElement(class ZTbody extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'f3e13d724ae83c0117eafa2bd141a1b9319f0331', role: "rowgroup" }, h("slot", { key: 'f84d2b79230cb6b8305c0b01f4a48f8811634421' })));
    }
    static get style() { return ZTbodyStyle0; }
}, [1, "z-tbody"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-tbody"];
    components.forEach(tagName => { switch (tagName) {
        case "z-tbody":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZTbody$1);
            }
            break;
    } });
}

const ZTbody = ZTbody$1;
const defineCustomElement = defineCustomElement$1;

export { ZTbody, defineCustomElement };

//# sourceMappingURL=z-tbody.js.map
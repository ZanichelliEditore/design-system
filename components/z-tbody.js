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
        return (h(Host, { key: '5053f27544fc018342c190f6365808a7dd5680bd', role: "rowgroup" }, h("slot", { key: '14a7c9dfd3e65dbb6fe1c36012de193e9b734a68' })));
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
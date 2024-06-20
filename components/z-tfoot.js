import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const stylesCss = ":host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;border-top:1px solid var(--color-surface03);border-bottom:1px solid var(--color-surface03)}:host([sticky]){position:-webkit-sticky;position:sticky;z-index:1;bottom:0;background-color:var(--color-surface01)}";
const ZTfootStyle0 = stylesCss;

const ZTfoot$1 = /*@__PURE__*/ proxyCustomElement(class ZTfoot extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.sticky = false;
    }
    render() {
        return (h(Host, { key: 'c56c6c8f9f3eda99f7eaed147ef2df8c99d43cda', role: "rowgroup" }, h("slot", { key: '03eeb74397f395723a8a649bb7213ac9fdbcf4f0' })));
    }
    static get style() { return ZTfootStyle0; }
}, [1, "z-tfoot", {
        "sticky": [516]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-tfoot"];
    components.forEach(tagName => { switch (tagName) {
        case "z-tfoot":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZTfoot$1);
            }
            break;
    } });
}

const ZTfoot = ZTfoot$1;
const defineCustomElement = defineCustomElement$1;

export { ZTfoot, defineCustomElement };

//# sourceMappingURL=z-tfoot.js.map
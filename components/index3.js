import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const stylesCss = ":host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--color-surface05);font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-rg);line-height:calc(var(--space-unit) * 2)}:host>div{padding:calc(var(--space-unit) * 2)}:host>.success{background:var(--color-success-inverse);fill:var(--color-success01)}:host>.warning{background:var(--color-warning-inverse);fill:var(--color-warning01)}:host>.error{background:var(--color-error-inverse);fill:var(--color-error01)}";
const ZAlertStyle0 = stylesCss;

const ZAlert = /*@__PURE__*/ proxyCustomElement(class ZAlert extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.type = undefined;
    }
    render() {
        return (h("div", { key: 'a04290b826aa50ecac798ad9126d93ee1d7e883e', class: this.type }, h("slot", { key: 'bc0f26d27fe3a68484f3079f11fb1c767fe255c4' })));
    }
    static get style() { return ZAlertStyle0; }
}, [1, "z-alert", {
        "type": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-alert"];
    components.forEach(tagName => { switch (tagName) {
        case "z-alert":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZAlert);
            }
            break;
    } });
}

export { ZAlert as Z, defineCustomElement as d };

//# sourceMappingURL=index3.js.map
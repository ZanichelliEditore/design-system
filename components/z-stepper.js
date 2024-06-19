import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const stylesCss = ":host{position:relative;display:flex;width:100%;max-width:100%;box-sizing:border-box;flex-direction:row;padding:0;margin:0;font-family:var(--font-family-sans);font-weight:var(--font-rg);list-style:none}@media only screen and (min-width: 768px){:host{padding:0 calc(var(--space-unit) * 2)}}";
const ZStepperStyle0 = stylesCss;

const ZStepper$1 = /*@__PURE__*/ proxyCustomElement(class ZStepper extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'c1069a6d199240aa1e8eb9fe30be9a75b2dabecb', role: "list" }, h("slot", { key: '283f1f42d5f73259b7c04e965bf592e4ba543fc8' })));
    }
    static get style() { return ZStepperStyle0; }
}, [1, "z-stepper"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-stepper"];
    components.forEach(tagName => { switch (tagName) {
        case "z-stepper":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZStepper$1);
            }
            break;
    } });
}

const ZStepper = ZStepper$1;
const defineCustomElement = defineCustomElement$1;

export { ZStepper, defineCustomElement };

//# sourceMappingURL=z-stepper.js.map
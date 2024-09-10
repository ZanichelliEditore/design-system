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
        return (h(Host, { key: '5fbfa9cc1b0e6f672f054427828d56560059c160', role: "list" }, h("slot", { key: 'd2c5abd53c5c9e8569696aafb6101b7878e1a10c' })));
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
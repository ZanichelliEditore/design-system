import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { u as ZAriaAlertMode } from './index2.js';

const ZAriaAlert$1 = /*@__PURE__*/ proxyCustomElement(class ZAriaAlert extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.mode = ZAriaAlertMode.POLITE;
    }
    render() {
        return (h(Host, { key: '3dc09efdfb273cbb3700c75f6e83112d6d158fb0', "aria-live": this.mode, "aria-atomic": "true", "aria-relevant": "additions" }, h("slot", { key: '109c1e5fa0fa0bd7fa990c7fdb23c0f65dd6811e' })));
    }
}, [4, "z-aria-alert", {
        "mode": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-aria-alert"];
    components.forEach(tagName => { switch (tagName) {
        case "z-aria-alert":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZAriaAlert$1);
            }
            break;
    } });
}

const ZAriaAlert = ZAriaAlert$1;
const defineCustomElement = defineCustomElement$1;

export { ZAriaAlert, defineCustomElement };

//# sourceMappingURL=z-aria-alert.js.map
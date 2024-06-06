import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { u as ZAriaAlertMode } from './index2.js';

const ZAriaAlert$1 = /*@__PURE__*/ proxyCustomElement(class ZAriaAlert extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.mode = ZAriaAlertMode.POLITE;
    }
    render() {
        return (h(Host, { key: '88e0d50e7f29c2e80aaa047a32902bc6347ad8d9', "aria-live": this.mode, "aria-atomic": "true", "aria-relevant": "additions" }, h("slot", { key: 'c76710250968f02393f69652d148ddf22eb1839e' })));
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
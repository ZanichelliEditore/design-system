import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { t as ZAriaAlertMode } from './index2.js';

const ZAriaAlert$1 = /*@__PURE__*/ proxyCustomElement(class ZAriaAlert extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.mode = ZAriaAlertMode.POLITE;
    }
    render() {
        return (h(Host, { key: '851bdac7b9b7c2dd4a5042a78cfacfe234051928', "aria-live": this.mode, "aria-atomic": "true", "aria-relevant": "additions" }, h("slot", { key: 'e3217c0633b68f55bd62c26fd1afb6d00dfe2708' })));
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
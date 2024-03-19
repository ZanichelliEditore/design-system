import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { u as ZAriaAlertMode } from './index2.js';

const ZAriaAlert$1 = /*@__PURE__*/ proxyCustomElement(class ZAriaAlert extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.mode = ZAriaAlertMode.POLITE;
    }
    render() {
        return (h(Host, { key: 'a3275876421862b2b2c80c044ca50f50464cfd55', "aria-live": this.mode, "aria-atomic": "true", "aria-relevant": "additions" }, h("slot", { key: '3767d930ccea80abbd79b4f3ee6d1733df29b934' })));
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
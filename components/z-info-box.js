import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './index9.js';

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div{display:flex;width:inherit;padding:calc(var(--space-unit) * 2);background:var(--color-primary03);border-radius:var(--border-radius)}:host>div>slot{color:var(--color-default-text);font-size:14px}:host>div>z-icon{margin-left:calc(var(--space-unit) * 2);cursor:pointer;fill:var(--color-primary01)}";
const ZInfoBoxStyle0 = stylesCss;

const ZInfoBox$1 = /*@__PURE__*/ proxyCustomElement(class ZInfoBox extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.infoBoxClose = createEvent(this, "infoBoxClose", 7);
        this.boxid = undefined;
        this.isclosable = true;
    }
    emitInfoBoxClose() {
        this.infoBoxClose.emit({ boxid: this.boxid });
    }
    render() {
        return (h("div", { key: 'ca557ef255dac8cd5e349193e1a737ebbbc89e67', id: this.boxid }, h("slot", { key: '1be32b81bde96ac8f548a4bd84698ddbbc2485f1', name: "content" }), this.isclosable && (h("z-icon", { name: "multiply", "data-action": "infoBoxClose", onClick: () => this.emitInfoBoxClose() }))));
    }
    static get style() { return ZInfoBoxStyle0; }
}, [1, "z-info-box", {
        "boxid": [1],
        "isclosable": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-info-box", "z-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "z-info-box":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZInfoBox$1);
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const ZInfoBox = ZInfoBox$1;
const defineCustomElement = defineCustomElement$1;

export { ZInfoBox, defineCustomElement };

//# sourceMappingURL=z-info-box.js.map
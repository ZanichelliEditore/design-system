import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const stylesCss = ":host{position:absolute;overflow:hidden;width:1px;height:1px;padding:0;border:0;margin:0 -1px -1px 0;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}";
const ZVisuallyHiddenStyle0 = stylesCss;

const ZVisuallyHidden$1 = /*@__PURE__*/ proxyCustomElement(class ZVisuallyHidden extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return h("slot", { key: 'ae350dcba13aae6abc2f746555896c973baea496' });
    }
    static get style() { return ZVisuallyHiddenStyle0; }
}, [1, "z-visually-hidden"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-visually-hidden"];
    components.forEach(tagName => { switch (tagName) {
        case "z-visually-hidden":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZVisuallyHidden$1);
            }
            break;
    } });
}

const ZVisuallyHidden = ZVisuallyHidden$1;
const defineCustomElement = defineCustomElement$1;

export { ZVisuallyHidden, defineCustomElement };

//# sourceMappingURL=z-visually-hidden.js.map
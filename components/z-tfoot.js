import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const stylesCss = ":host{display:block;box-sizing:border-box;border-top:1px solid var(--color-surface03);border-bottom:1px solid var(--color-surface03)}:host([sticky]){position:sticky;z-index:1;bottom:0;background-color:var(--color-surface01)}";
const ZTfootStyle0 = stylesCss;

const ZTfoot$1 = /*@__PURE__*/ proxyCustomElement(class ZTfoot extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.sticky = false;
    }
    render() {
        return (h(Host, { key: 'b872f68fd9e643528d02adb7bd76f8377a59fcdc', role: "rowgroup" }, h("slot", { key: '6ebdc491ee2459d415a53fb96e5f27405704a99f' })));
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
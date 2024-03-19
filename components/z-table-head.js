import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const stylesCss = ".sc-z-table-head-h{display:table-header-group;font-family:var(--font-family-sans);font-weight:var(--font-rg)}";
const ZTableHeadStyle0 = stylesCss;

const ZTableHead$1 = /*@__PURE__*/ proxyCustomElement(class ZTableHead extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    componentWillRender() {
        this.host.setAttribute("role", "rowgroup");
    }
    render() {
        return h("slot", { key: '98012cd26ee60c370c6ccf6bff47ca5c827f30b6' });
    }
    get host() { return this; }
    static get style() { return ZTableHeadStyle0; }
}, [6, "z-table-head"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-table-head"];
    components.forEach(tagName => { switch (tagName) {
        case "z-table-head":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZTableHead$1);
            }
            break;
    } });
}

const ZTableHead = ZTableHead$1;
const defineCustomElement = defineCustomElement$1;

export { ZTableHead, defineCustomElement };

//# sourceMappingURL=z-table-head.js.map
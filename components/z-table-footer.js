import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const stylesCss = ".sc-z-table-footer-h{display:table-footer-group;font-family:var(--font-family-sans);font-weight:var(--font-rg)}";
const ZTableFooterStyle0 = stylesCss;

const ZTableFooter$1 = /*@__PURE__*/ proxyCustomElement(class ZTableFooter extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    componentWillRender() {
        this.host.setAttribute("role", "rowgroup");
    }
    render() {
        return h("slot", { key: '2c6376eb19a83b077b07d9127ba5cf5441fb5ba1' });
    }
    get host() { return this; }
    static get style() { return ZTableFooterStyle0; }
}, [6, "z-table-footer"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-table-footer"];
    components.forEach(tagName => { switch (tagName) {
        case "z-table-footer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZTableFooter$1);
            }
            break;
    } });
}

const ZTableFooter = ZTableFooter$1;
const defineCustomElement = defineCustomElement$1;

export { ZTableFooter, defineCustomElement };

//# sourceMappingURL=z-table-footer.js.map
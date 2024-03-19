import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const stylesCss = ".sc-z-table-sticky-footer-h{position:sticky;left:0;display:block;padding:calc(var(--space-unit) * 2);border-width:var(--border-size-small) 0 var(--border-size-medium);border-style:solid;border-color:var(--color-surface03);background-color:var(--color-surface01);font-weight:var(--font-rg)}";
const ZTableStickyFooterStyle0 = stylesCss;

const ZTableStickyFooter$1 = /*@__PURE__*/ proxyCustomElement(class ZTableStickyFooter extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return h("slot", { key: '7b27e3b2d212955d97029c2d92df46b4bddb3fb1' });
    }
    static get style() { return ZTableStickyFooterStyle0; }
}, [6, "z-table-sticky-footer"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-table-sticky-footer"];
    components.forEach(tagName => { switch (tagName) {
        case "z-table-sticky-footer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZTableStickyFooter$1);
            }
            break;
    } });
}

const ZTableStickyFooter = ZTableStickyFooter$1;
const defineCustomElement = defineCustomElement$1;

export { ZTableStickyFooter, defineCustomElement };

//# sourceMappingURL=z-table-sticky-footer.js.map
import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const stylesCss = ".sc-z-table-body-h{display:table-row-group;font-family:var(--font-family-sans);font-weight:var(--font-rg)}.sc-z-table-body-h>z-table-row[expanded].sc-z-table-body+z-table-expanded-row.sc-z-table-body{display:table-row}";
const ZTableBodyStyle0 = stylesCss;

const ZTableBody$1 = /*@__PURE__*/ proxyCustomElement(class ZTableBody extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    componentWillRender() {
        this.host.setAttribute("role", "rowgroup");
        Array.from(this.host.children).forEach((child, index) => child.setAttribute("aria-rowindex", `${index}`));
    }
    render() {
        return h("slot", { key: 'd422df9305a81ae9beb6b1a695cf08a944f7b893' });
    }
    get host() { return this; }
    static get style() { return ZTableBodyStyle0; }
}, [6, "z-table-body"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-table-body"];
    components.forEach(tagName => { switch (tagName) {
        case "z-table-body":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZTableBody$1);
            }
            break;
    } });
}

const ZTableBody = ZTableBody$1;
const defineCustomElement = defineCustomElement$1;

export { ZTableBody, defineCustomElement };

//# sourceMappingURL=z-table-body.js.map
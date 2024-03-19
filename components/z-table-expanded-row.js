import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const stylesCss = ":host{display:none;background-color:var(--gray50)}:host>td>div.content-container{margin-bottom:calc(var(--space-unit) / 2);box-shadow:var(--shadow-2)}";
const ZTableExpandedRowStyle0 = stylesCss;

const ZTableExpandedRow$1 = /*@__PURE__*/ proxyCustomElement(class ZTableExpandedRow extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.colSpan = undefined;
    }
    render() {
        return (h("td", { key: '3f662b4a7d38b2eca3db3a67176991bc4c538edb', colSpan: this.colSpan }, h("div", { key: 'cff535acab16a19f7475b115649c1ca936990c76', class: "content-container" }, h("slot", { key: '742b4fbffd8a5330424432a1145796b71e86bfa8' }))));
    }
    static get style() { return ZTableExpandedRowStyle0; }
}, [1, "z-table-expanded-row", {
        "colSpan": [2, "col-span"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-table-expanded-row"];
    components.forEach(tagName => { switch (tagName) {
        case "z-table-expanded-row":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZTableExpandedRow$1);
            }
            break;
    } });
}

const ZTableExpandedRow = ZTableExpandedRow$1;
const defineCustomElement = defineCustomElement$1;

export { ZTableExpandedRow, defineCustomElement };

//# sourceMappingURL=z-table-expanded-row.js.map
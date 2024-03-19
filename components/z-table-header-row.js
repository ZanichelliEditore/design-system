import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './index4.js';
import { d as defineCustomElement$4 } from './index9.js';
import { d as defineCustomElement$3 } from './index25.js';
import { d as defineCustomElement$2 } from './index29.js';

const stylesCss = "z-table-header-row{display:table-row}z-table-header-row[expandable]>z-table-header:first-child{width:40px;box-sizing:border-box;user-select:none}z-table-header-row[expandable]>z-table-header:nth-child(2){padding-left:8px}";
const ZTableHeaderRowStyle0 = stylesCss;

const ZTableHeaderRow$1 = /*@__PURE__*/ proxyCustomElement(class ZTableHeaderRow extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.expandable = undefined;
    }
    renderExpandHeader() {
        return h("z-table-header", null);
    }
    render() {
        return (h(Host, { key: '640d060798684dee3641fef5c3778e263acfbd8d', role: "row" }, this.expandable && this.renderExpandHeader(), h("slot", { key: '42d15bfd63e021a96c2394d5bc91c185bcee55b8' })));
    }
    static get style() { return ZTableHeaderRowStyle0; }
}, [4, "z-table-header-row", {
        "expandable": [516]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-table-header-row", "z-button", "z-icon", "z-popover", "z-table-header"];
    components.forEach(tagName => { switch (tagName) {
        case "z-table-header-row":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZTableHeaderRow$1);
            }
            break;
        case "z-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "z-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "z-table-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const ZTableHeaderRow = ZTableHeaderRow$1;
const defineCustomElement = defineCustomElement$1;

export { ZTableHeaderRow, defineCustomElement };

//# sourceMappingURL=z-table-header-row.js.map
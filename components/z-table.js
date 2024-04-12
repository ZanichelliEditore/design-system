import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import './index2.js';
import './icons.js';

const stylesCss = ":host{--z-table--cells-padding:calc(var(--space-unit) * 2);position:relative;display:block;overflow:auto;max-width:100%;box-sizing:border-box;background-color:var(--color-surface01)}:host([expandable]){--z-table--expand-button-size:40px}:host([bordered]){--z-table--cell-left-border:1px solid var(--color-surface03)}.table{min-width:max-content}";
const ZTableStyle0 = stylesCss;

const ZTable$1 = /*@__PURE__*/ proxyCustomElement(class ZTable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.bordered = false;
        this.expandable = false;
    }
    updateExpandable() {
        this.expandable = this.host.querySelectorAll("z-tr[expandable]").length > 0;
    }
    /**
     * Setup the table creating a mutation observer for the expandable attribute.
     */
    componentWillLoad() {
        this.expandableMutationObserver = new MutationObserver(() => {
            this.updateExpandable();
        });
        this.expandableMutationObserver.observe(this.host, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ["expandable"],
            attributeOldValue: false,
        });
    }
    disconnectedCallback() {
        var _a;
        (_a = this.expandableMutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    render() {
        return (h(Host, { key: 'd404e04cce15f5c9c01d1d90477b0b073ce4fb18', expandable: this.expandable }, h("div", { key: '093877b6d4f94257a4178c2d0647107a91cd782b', class: "table", role: "table" }, h("slot", { key: '19e147c5cb2e20287208e39085e816cfc62f3f5e' }))));
    }
    get host() { return this; }
    static get style() { return ZTableStyle0; }
}, [1, "z-table", {
        "bordered": [516],
        "expandable": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-table"];
    components.forEach(tagName => { switch (tagName) {
        case "z-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZTable$1);
            }
            break;
    } });
}

const ZTable = ZTable$1;
const defineCustomElement = defineCustomElement$1;

export { ZTable, defineCustomElement };

//# sourceMappingURL=z-table.js.map
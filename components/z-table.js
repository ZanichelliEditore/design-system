import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import './index2.js';
import './iconset.js';

const stylesCss = ":host{--z-table--cells-padding:calc(var(--space-unit) * 2);position:relative;display:block;overflow:auto;max-width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--color-surface01)}:host([expandable]){--z-table--expand-button-size:40px}:host([bordered]){--z-table--cell-left-border:1px solid var(--color-surface03)}.table{min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content}";
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
        return (h(Host, { key: '5f7370afd7912583561ac67baf5b70921c49eea2', expandable: this.expandable }, h("div", { key: '8cbf774ffe599cf49ed9377c2ff3c1e0e8d14e85', class: "table", role: "table" }, h("slot", { key: '318eceb0c4e486a49faab1fe7027acfa76456352' }))));
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
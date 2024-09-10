import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import './index2.js';
import './iconset.js';

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
        return (h(Host, { key: '2d8e50a74ff7ccf3c6dc4f5324a512177ad52f45', expandable: this.expandable }, h("div", { key: '5e1d9d44dc90ac06683bf5306f7eecadffe807fe', class: "table", role: "table" }, h("slot", { key: '12a615e336a4ad50390a2ab0b12b2d20b3503f06' }))));
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
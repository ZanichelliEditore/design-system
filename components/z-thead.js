import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const stylesCss = ":host{--z-table--cells-bottom-border-size:var(\n    --border-size-medium\n  );--z-table--cells-background:var(\n    --color-surface02\n  );display:block;box-sizing:border-box}:host([sticky]){position:sticky;z-index:2;top:0;box-shadow:0 2px 4px -2px var(--shadow-color-base)}";
const ZTheadStyle0 = stylesCss;

const ZThead$1 = /*@__PURE__*/ proxyCustomElement(class ZThead extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.sticky = false;
    }
    render() {
        return (h(Host, { key: 'fd1e0dced377fcfcd3b531c063ac36937eaf6904', role: "rowgroup" }, h("slot", { key: '1d75abf2f9b0f1c109eec083ebfaf3e07de81dca' })));
    }
    static get style() { return ZTheadStyle0; }
}, [1, "z-thead", {
        "sticky": [516]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-thead"];
    components.forEach(tagName => { switch (tagName) {
        case "z-thead":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZThead$1);
            }
            break;
    } });
}

const ZThead = ZThead$1;
const defineCustomElement = defineCustomElement$1;

export { ZThead, defineCustomElement };

//# sourceMappingURL=z-thead.js.map
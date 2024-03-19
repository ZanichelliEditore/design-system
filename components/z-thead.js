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
        return (h(Host, { key: 'ad4f78d64587c716f2b873a02a2473426d0c1d3f', role: "rowgroup" }, h("slot", { key: '5606cc9d05f711573a130def219cb4d44c5a74a0' })));
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
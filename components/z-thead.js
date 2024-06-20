import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const stylesCss = ":host{--z-table--cells-bottom-border-size:var(\n    --border-size-medium\n  );--z-table--cells-background:var(\n    --color-surface02\n  );display:block;-webkit-box-sizing:border-box;box-sizing:border-box}:host([sticky]){position:-webkit-sticky;position:sticky;z-index:2;top:0;-webkit-box-shadow:0 2px 4px -2px var(--shadow-color-base);box-shadow:0 2px 4px -2px var(--shadow-color-base)}";
const ZTheadStyle0 = stylesCss;

const ZThead$1 = /*@__PURE__*/ proxyCustomElement(class ZThead extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.sticky = false;
    }
    render() {
        return (h(Host, { key: 'e1e45a7e6e5325a7c0b82cf490d7896f233b35fa', role: "rowgroup" }, h("slot", { key: '8e2f327fc3e2721b1a7755024b9eb43ab87ac2d3' })));
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
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { i as ListSize, m as ListType } from './index2.js';

const stylesCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;font-family:var(--font-family-sans);font-weight:var(--font-rg)}";
const ZListStyle0 = stylesCss;

const ZList = /*@__PURE__*/ proxyCustomElement(class ZList extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.size = ListSize.MEDIUM;
        this.listType = ListType.NONE;
        this.role = "list";
    }
    setChildrenSizeType() {
        const children = this.host.children;
        for (let i = 0; i < children.length; i++) {
            children[i].setAttribute("size", this.size);
            children[i].setAttribute("list-type", this.listType);
            children[i].setAttribute("list-element-position", (i + 1).toString());
        }
    }
    componentDidLoad() {
        this.setChildrenSizeType();
    }
    render() {
        return (h(Host, { key: 'a5269da1127742a7a9e58e8b0e46174c4c990a39' }, h("slot", { key: 'ced862d8fb2e6e4d86212e9dd22ca1c12a184fe3' })));
    }
    get host() { return this; }
    static get style() { return ZListStyle0; }
}, [1, "z-list", {
        "size": [513],
        "listType": [513, "list-type"],
        "role": [513]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-list"];
    components.forEach(tagName => { switch (tagName) {
        case "z-list":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZList);
            }
            break;
    } });
}

export { ZList as Z, defineCustomElement as d };

//# sourceMappingURL=index12.js.map
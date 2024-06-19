import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { i as ListSize, l as ListDividerType, D as DividerSize, m as ListType } from './index2.js';
import { d as defineCustomElement$1 } from './index6.js';

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>.z-list-group-header-container{color:var(--gray700);font-size:var(--font-size-2);font-weight:var(--font-sb) !important;letter-spacing:0.16px;line-height:1.4}:host>.z-list-group-header-container.has-header{padding-top:var(--space-unit);padding-bottom:var(--space-unit)}:host>.z-list-group-header-container.has-header>z-divider{margin-top:var(--space-unit)}";
const ZListGroupStyle0 = stylesCss;

const ZListGroup = /*@__PURE__*/ proxyCustomElement(class ZListGroup extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.size = ListSize.MEDIUM;
        this.dividerType = ListDividerType.NONE;
        this.dividerSize = DividerSize.SMALL;
        this.dividerColor = "gray200";
        this.listType = ListType.NONE;
    }
    componentDidLoad() {
        const children = this.host.children;
        for (let i = 0; i < children.length; i++) {
            if (children.length - 1 > i) {
                children[i].setAttribute("divider-type", this.dividerType);
                children[i].setAttribute("divider-size", this.dividerSize);
                children[i].setAttribute("divider-color", this.dividerColor);
            }
            children[i].setAttribute("size", this.size);
            children[i].setAttribute("list-type", this.listType);
            children[i].setAttribute("list-element-position", i.toString());
        }
    }
    componentWillLoad() {
        this.hasHeader = !!this.host.querySelector('[slot="header-title"]');
    }
    render() {
        return (h(Host, { key: '5732fd0502a40361f81b8896d35b5ecb50f3d405', role: "group" }, h("div", { key: 'd70da2717bc7ba681b0e4a01c9c83404d51ceba9', class: {
                "z-list-group-header-container": true,
                "has-header": this.hasHeader,
            } }, h("slot", { key: '77ed9d0a8baffb09574d5e9a183dbf8fbf3f4a96', name: "header-title" }), this.dividerType === ListDividerType.HEADER && (h("z-divider", { key: '35051ec5919d79249f1bb35a29587b53a1b1da89', color: this.dividerColor, size: this.dividerSize }))), h("slot", { key: '6920f9d885ec1e4a250164a4dc1d5c266246af4c' })));
    }
    get host() { return this; }
    static get style() { return ZListGroupStyle0; }
}, [1, "z-list-group", {
        "size": [513],
        "dividerType": [513, "divider-type"],
        "dividerSize": [513, "divider-size"],
        "dividerColor": [513, "divider-color"],
        "listType": [513, "list-type"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-list-group", "z-divider"];
    components.forEach(tagName => { switch (tagName) {
        case "z-list-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZListGroup);
            }
            break;
        case "z-divider":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { ZListGroup as Z, defineCustomElement as d };

//# sourceMappingURL=index14.js.map
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
        return (h(Host, { key: '5dbf1efc3893dc5f97d0f8ec1b9b7a97f3798b23', role: "group" }, h("div", { key: '2ded7f0b5b2c6554239659c8eaa9ef413e37fead', class: {
                "z-list-group-header-container": true,
                "has-header": this.hasHeader,
            } }, h("slot", { key: '56fe1bfadf2b3aa5dd8f8955789204a49e6bc667', name: "header-title" }), this.dividerType === ListDividerType.HEADER && (h("z-divider", { color: this.dividerColor, size: this.dividerSize }))), h("slot", { key: '641523b4a9f4e0795571127cb509b76e51515b22' })));
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
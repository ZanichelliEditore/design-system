import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const stylesCss = "ul{overflow:hidden;width:auto;height:auto;padding:0;margin:0 calc(var(--space-unit) * 2);color:var(--color-primary01);font-family:var(--font-family-sans);list-style:none}ul>li{padding-left:10px;text-indent:-10px}ul>li>a{display:block;padding-top:calc(var(--space-unit) * 0.5);color:var(--color-primary01);font-size:14px;font-weight:var(--font-sb);letter-spacing:0.16px;line-height:calc(var(--space-unit) * 2.5);text-decoration:none}ul>li>a::before{padding-right:5px;content:\"•\"}ul>li>span{padding:0 calc(var(--space-unit) * 2);color:var(--color-surface04);font-size:14px;font-weight:var(--font-rg);letter-spacing:0.16px;line-height:calc(var(--space-unit) * 2.5);text-decoration:none}";
const ZMyzCardListStyle0 = stylesCss;

const ZMyzCardList$1 = /*@__PURE__*/ proxyCustomElement(class ZMyzCardList extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.listdata = undefined;
        this.renderList = this.renderList.bind(this);
    }
    handleSpaceKeyPress(e, url) {
        if (e.keyCode == 32 || e.keyCode == 13) {
            e.preventDefault();
            window.open(url, "_blank");
        }
    }
    formatListContent(data) {
        const { value, isLink, url } = data;
        if (!isLink) {
            return h("span", null, value);
        }
        return (h("a", { role: "button", onKeyPress: (e) => this.handleSpaceKeyPress(e, url), href: url, target: "_blank" }, value));
    }
    renderList(dataArray) {
        return dataArray.map((data) => {
            return h("li", null, this.formatListContent(data));
        });
    }
    render() {
        return h("ul", { key: 'eabe41902a685c9b541606cd45920f379b6d1362' }, this.renderList(JSON.parse(this.listdata)));
    }
    static get style() { return ZMyzCardListStyle0; }
}, [1, "z-myz-card-list", {
        "listdata": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-myz-card-list"];
    components.forEach(tagName => { switch (tagName) {
        case "z-myz-card-list":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZMyzCardList$1);
            }
            break;
    } });
}

const ZMyzCardList = ZMyzCardList$1;
const defineCustomElement = defineCustomElement$1;

export { ZMyzCardList, defineCustomElement };

//# sourceMappingURL=z-myz-card-list.js.map
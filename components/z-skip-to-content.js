import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { a as getElementTree, h as handleKeyboardSubmit } from './utils.js';
import { T as ThemeVariant } from './index2.js';

const stylesCss = ".sc-z-skip-to-content-h{position:absolute;left:-100%;height:60px;box-sizing:border-box;padding:calc(var(--space-unit) * 1.25) calc(var(--space-unit) * 3);background-color:#24f4ff;font-family:var(--font-family-sans);font-weight:var(--font-rg);text-align:center}.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content{display:inline-flex;height:100%;align-items:center}.skip-to-content-visible.sc-z-skip-to-content-h,.sc-z-skip-to-content-h:focus{position:static;display:block}.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content>a.z-link.link-invisible.sc-z-skip-to-content{overflow:hidden;width:0;height:0}.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content>a.z-link.link-visible.sc-z-skip-to-content{width:initial;height:initial}.dark.sc-z-skip-to-content-h{background-color:var(--color-surface05);color:var(--color-surface01)}.light.sc-z-skip-to-content-h{border:var(--border-size-medium) solid var(--color-surface05);background-color:var(--color-surface01);color:var(--color-default-text)}@media (min-width: 768px){.sc-z-skip-to-content-h{text-align:start}}@media (min-width: 1152px){.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content{padding:0 calc(var(--space-unit) * 3);border-right:var(--border-size-small) solid var(--color-surface05)}.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content>a.z-link.link-invisible.sc-z-skip-to-content{overflow:initial;width:initial;height:initial}.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content:first-child{padding-left:0}.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content:last-child,.dark.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content:last-child,.light.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content:last-child{padding-right:0;border-right:none}.dark.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content{border-right:var(--border-size-small) solid var(--color-surface01)}}";
const ZSkipToContentStyle0 = stylesCss;

const ZSkipToContent$1 = /*@__PURE__*/ proxyCustomElement(class ZSkipToContent extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.variant = undefined;
        this.links = [];
        this.visible = false;
        this.visibleLink = "";
    }
    handleFocusOutSkipToContent(e) {
        if (this.isInSkipToContent(e.target)) {
            this.visible = false;
        }
    }
    handleFocusSkipToContent(e) {
        if (this.isInSkipToContent(e.target)) {
            this.visible = true;
        }
    }
    componentDidLoad() {
        this.showFirstChild();
    }
    componentWillRender() {
        if (this.links) {
            this.links = typeof this.links === "string" ? JSON.parse(this.links) : this.links;
        }
    }
    isInSkipToContent(elem) {
        const tree = getElementTree(elem);
        const menuParent = tree.find((elem) => elem.nodeName.toLowerCase() === "z-skip-to-content");
        return !!menuParent;
    }
    showFirstChild() {
        var _a;
        const firstChild = (_a = this.hostElement.children) === null || _a === void 0 ? void 0 : _a[0];
        if (firstChild) {
            this.visibleLink = firstChild.id;
        }
    }
    handleLinkClick() {
        this.visible = false;
    }
    render() {
        return (h(Host, { key: '4c268f1358c2b8d099b43c8ca3800d460ddb3127', class: {
                [this.variant]: true,
                "skip-to-content-visible": this.visible,
            } }, this.links.map((link, i) => {
            const id = `skip-to-content-${i}`;
            return (h("div", { class: "link-container" }, h("a", { id: id, class: {
                    "body-1-sb": true,
                    "z-link": true,
                    "z-link-underline": true,
                    "z-link-white": this.variant === ThemeVariant.DARK,
                    "z-link-black": this.variant !== ThemeVariant.DARK,
                    "link-visible": id == this.visibleLink,
                    "link-invisible": id != this.visibleLink,
                }, "aria-label": link.ariaLabel || link.label, href: link.href, onFocus: () => (this.visibleLink = id), onClick: () => this.handleLinkClick(), onKeyUp: (e) => handleKeyboardSubmit(e, this.handleLinkClick.bind(this)) }, link.label)));
        })));
    }
    get hostElement() { return this; }
    static get style() { return ZSkipToContentStyle0; }
}, [2, "z-skip-to-content", {
        "variant": [513],
        "links": [1025],
        "visible": [32],
        "visibleLink": [32]
    }, [[4, "focusout", "handleFocusOutSkipToContent"], [4, "focusin", "handleFocusSkipToContent"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-skip-to-content"];
    components.forEach(tagName => { switch (tagName) {
        case "z-skip-to-content":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZSkipToContent$1);
            }
            break;
    } });
}

const ZSkipToContent = ZSkipToContent$1;
const defineCustomElement = defineCustomElement$1;

export { ZSkipToContent, defineCustomElement };

//# sourceMappingURL=z-skip-to-content.js.map
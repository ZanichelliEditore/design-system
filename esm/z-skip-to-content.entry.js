import { r as registerInstance, h, a as Host, g as getElement } from './index-ab5f1eaa.js';
import { T as ThemeVariant } from './index-2255c6c8.js';
import { d as getElementTree, a as handleKeyboardSubmit } from './utils-7983d02c.js';
import './breakpoints-680e0e56.js';

const stylesCss = ".sc-z-skip-to-content-h{position:absolute;left:-100%;height:60px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:calc(var(--space-unit) * 1.25) calc(var(--space-unit) * 3);background-color:#24f4ff;font-family:var(--font-family-sans);font-weight:var(--font-rg);text-align:center}.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content{display:-ms-inline-flexbox;display:inline-flex;height:100%;-ms-flex-align:center;align-items:center}.skip-to-content-visible.sc-z-skip-to-content-h,.sc-z-skip-to-content-h:focus{position:static;display:block}.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content>a.z-link.link-invisible.sc-z-skip-to-content{overflow:hidden;width:0;height:0}.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content>a.z-link.link-visible.sc-z-skip-to-content{width:initial;height:initial}.dark.sc-z-skip-to-content-h{background-color:var(--color-surface05);color:var(--color-surface01)}.light.sc-z-skip-to-content-h{border:var(--border-size-medium) solid var(--color-surface05);background-color:var(--color-surface01);color:var(--color-default-text)}@media (min-width: 768px){.sc-z-skip-to-content-h{text-align:start}}@media (min-width: 1152px){.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content{padding:0 calc(var(--space-unit) * 3);border-right:var(--border-size-small) solid var(--color-surface05)}.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content>a.z-link.link-invisible.sc-z-skip-to-content{overflow:initial;width:initial;height:initial}.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content:first-child{padding-left:0}.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content:last-child,.dark.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content:last-child,.light.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content:last-child{padding-right:0;border-right:none}.dark.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content{border-right:var(--border-size-small) solid var(--color-surface01)}}";
const ZSkipToContentStyle0 = stylesCss;

const ZSkipToContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'ae03554e1bb63eebca8f51d3cae23b885ee79428', class: {
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
    get hostElement() { return getElement(this); }
};
ZSkipToContent.style = ZSkipToContentStyle0;

export { ZSkipToContent as z_skip_to_content };

//# sourceMappingURL=z-skip-to-content.entry.js.map
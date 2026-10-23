import { r as registerInstance, h, H as Host, d as getElement } from './index-DafJ7_Il.js';
import { T as ThemeVariant } from './index-DdetsoIY.js';
import { i as getElementTree, h as handleKeyboardSubmit } from './utils-CJc3A9NX.js';
import './breakpoints-Q-tWjk7P.js';

const stylesCss = () => `.sc-z-skip-to-content-h{position:absolute;left:-100%;height:60px;box-sizing:border-box;padding:calc(var(--space-unit) * 1.25) calc(var(--space-unit) * 3);background-color:#24f4ff;font-family:var(--font-family-sans);font-weight:var(--font-rg);text-align:center}.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content{display:inline-flex;height:100%;align-items:center}.skip-to-content-visible.sc-z-skip-to-content-h,.sc-z-skip-to-content-h:focus{position:static;display:block}.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content>a.z-link.link-invisible.sc-z-skip-to-content{overflow:hidden;width:0;height:0}.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content>a.z-link.link-visible.sc-z-skip-to-content{width:initial;height:initial}.dark.sc-z-skip-to-content-h{background-color:var(--color-surface05);color:var(--color-surface01)}.light.sc-z-skip-to-content-h{border:var(--border-size-medium) solid var(--color-surface05);background-color:var(--color-surface01);color:var(--color-default-text)}@media (min-width: 768px){.sc-z-skip-to-content-h{text-align:start}}@media (min-width: 1152px){.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content{padding:0 calc(var(--space-unit) * 3);border-right:var(--border-size-small) solid var(--color-surface05)}.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content>a.z-link.link-invisible.sc-z-skip-to-content{overflow:initial;width:initial;height:initial}.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content:first-child{padding-left:0}.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content:last-child,.dark.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content:last-child,.light.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content:last-child{padding-right:0;border-right:none}.dark.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content{border-right:var(--border-size-small) solid var(--color-surface01)}}`;

const ZSkipToContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Array to fill link into skip-content */
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
        return (h(Host, { key: 'b19cbb70b81b7446322876b9308ce475934c2c30', class: {
                [this.variant]: true,
                "skip-to-content-visible": this.visible,
            } }, this.links.map((link, i) => {
            const id = `skip-to-content-${i}`;
            return (h("div", { class: "link-container" }, h("a", { id: id, class: {
                    "body-1-sb": true,
                    "z-link": true,
                    "z-link-underline": true,
                    "z-link-inverse": this.variant === ThemeVariant.DARK,
                    "link-visible": id == this.visibleLink,
                    "link-invisible": id != this.visibleLink,
                }, "aria-label": link.ariaLabel || link.label, href: link.href, onFocus: () => (this.visibleLink = id), onClick: () => this.handleLinkClick(), onKeyUp: (e) => handleKeyboardSubmit(e, this.handleLinkClick.bind(this)) }, link.label)));
        })));
    }
    get hostElement() { return getElement(this); }
};
ZSkipToContent.style = stylesCss();

export { ZSkipToContent as z_skip_to_content };

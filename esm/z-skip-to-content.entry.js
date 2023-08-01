import { r as registerInstance, h, H as Host, g as getElement } from './index-a2ca4b97.js';
import { d as getElementTree, a as handleKeyboardSubmit } from './utils-4d2d99d9.js';
import { T as ThemeVariant } from './index-03c8b0f0.js';
import './breakpoints-9b81eb1b.js';

const stylesCss = ".sc-z-skip-to-content-h{position:absolute;left:-100%;height:60px;box-sizing:border-box;padding:calc(var(--space-unit) * 1.25) calc(var(--space-unit) * 3);background-color:#24f4ff;font-family:var(--font-family-sans);font-weight:var(--font-rg)}.skip-to-content-visible.sc-z-skip-to-content-h,.sc-z-skip-to-content-h:focus{position:static;display:block}.sc-z-skip-to-content-h>z-link.sc-z-skip-to-content{display:block;text-align:center}.sc-z-skip-to-content-h>z-link.link-invisible.sc-z-skip-to-content{overflow:hidden;width:0;height:0}.sc-z-skip-to-content-h>z-link.link-visible.sc-z-skip-to-content{width:initial;height:initial}.dark.sc-z-skip-to-content-h{background-color:var(--bg-grey-800);color:var(--color-white)}.light.sc-z-skip-to-content-h{border:2px solid var(--text-grey-800);background-color:var(--bg-white);color:var(--text-grey-800)}@media (min-width: 768px){.sc-z-skip-to-content-h>z-link.sc-z-skip-to-content{text-align:left}}@media (min-width: 1152px){.sc-z-skip-to-content-h>z-link.sc-z-skip-to-content{display:inline-block;padding:0 calc(var(--space-unit) * 3);border-right:1px solid var(--bg-grey-800)}.sc-z-skip-to-content-h>z-link.link-invisible.sc-z-skip-to-content{overflow:initial;width:initial;height:initial}.sc-z-skip-to-content-h>z-link.sc-z-skip-to-content:first-child{padding-left:0}.sc-z-skip-to-content-h>z-link.sc-z-skip-to-content:last-child,.dark.sc-z-skip-to-content-h>z-link.sc-z-skip-to-content:last-child,.light.sc-z-skip-to-content-h>z-link.sc-z-skip-to-content:last-child{padding-right:0;border-right:none}.dark.sc-z-skip-to-content-h>z-link.sc-z-skip-to-content{border-right:1px solid var(--bg-white)}}";

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
    return (h(Host, { class: {
        [this.variant]: true,
        "skip-to-content-visible": this.visible,
      } }, this.links.map((link, i) => {
      const id = `skip-to-content-${i}`;
      return (h("z-link", { id: id, underline: true, "aria-label": link.ariaLabel || link.label, class: `body-1-sb ${id == this.visibleLink ? "link-visible" : "link-invisible"}`, href: link.href, textcolor: this.variant === ThemeVariant.DARK ? "white" : "black", onFocus: () => (this.visibleLink = id), onClick: () => this.handleLinkClick(), onKeyUp: (e) => handleKeyboardSubmit(e, this.handleLinkClick.bind(this)) }, link.label));
    })));
  }
  get hostElement() { return getElement(this); }
};
ZSkipToContent.style = stylesCss;

export { ZSkipToContent as z_skip_to_content };

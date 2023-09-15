'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const utils = require('./utils-4ac02425.js');
const index$1 = require('./index-e8ce94a1.js');
require('./breakpoints-ebe1a437.js');

const stylesCss = ".sc-z-skip-to-content-h{position:absolute;left:-100%;height:60px;box-sizing:border-box;padding:calc(var(--space-unit) * 1.25) calc(var(--space-unit) * 3);background-color:#24f4ff;font-family:var(--font-family-sans);font-weight:var(--font-rg);text-align:center}.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content{display:inline-flex;height:100%;align-items:center}.skip-to-content-visible.sc-z-skip-to-content-h,.sc-z-skip-to-content-h:focus{position:static;display:block}.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content>a.z-link.link-invisible.sc-z-skip-to-content{overflow:hidden;width:0;height:0}.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content>a.z-link.link-visible.sc-z-skip-to-content{width:initial;height:initial}.dark.sc-z-skip-to-content-h{background-color:var(--bg-grey-800);color:var(--color-white)}.light.sc-z-skip-to-content-h{border:2px solid var(--text-grey-800);background-color:var(--bg-white);color:var(--text-grey-800)}@media (min-width: 768px){.sc-z-skip-to-content-h{text-align:start}}@media (min-width: 1152px){.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content{padding:0 calc(var(--space-unit) * 3);border-right:1px solid var(--bg-grey-800)}.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content>a.z-link.link-invisible.sc-z-skip-to-content{overflow:initial;width:initial;height:initial}.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content:first-child{padding-left:0}.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content:last-child,.dark.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content:last-child,.light.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content:last-child{padding-right:0;border-right:none}.dark.sc-z-skip-to-content-h>.link-container.sc-z-skip-to-content{border-right:1px solid var(--bg-white)}}";

const ZSkipToContent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    const tree = utils.getElementTree(elem);
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
    return (index.h(index.Host, { class: {
        [this.variant]: true,
        "skip-to-content-visible": this.visible,
      } }, this.links.map((link, i) => {
      const id = `skip-to-content-${i}`;
      return (index.h("div", { class: "link-container" }, index.h("a", { id: id, class: {
          "body-1-sb": true,
          "z-link": true,
          "z-link-underline": true,
          "z-link-white": this.variant === index$1.ThemeVariant.DARK,
          "z-link-black": this.variant !== index$1.ThemeVariant.DARK,
          "link-visible": id == this.visibleLink,
          "link-invisible": id != this.visibleLink,
        }, "aria-label": link.ariaLabel || link.label, href: link.href, onFocus: () => (this.visibleLink = id), onClick: () => this.handleLinkClick(), onKeyUp: (e) => utils.handleKeyboardSubmit(e, this.handleLinkClick.bind(this)) }, link.label)));
    })));
  }
  get hostElement() { return index.getElement(this); }
};
ZSkipToContent.style = stylesCss;

exports.z_skip_to_content = ZSkipToContent;

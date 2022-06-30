'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');
const utils = require('./utils-33df2456.js');
const index$1 = require('./index-b1289f95.js');
require('./breakpoints-88c4fd6c.js');

const stylesCss = ".sc-z-skip-to-content-h{font-family:var(--font-family-sans);font-weight:var(--font-rg);position:absolute;left:-100%;background-color:#24f4ff;padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 3);height:60px;box-sizing:border-box}.skip-to-content-visible.sc-z-skip-to-content-h,.sc-z-skip-to-content-h:focus{position:static;display:block}.sc-z-skip-to-content-h>z-link.sc-z-skip-to-content{display:block;text-align:center}.sc-z-skip-to-content-h>z-link.link-invisible.sc-z-skip-to-content{height:0;width:0;overflow:hidden}.sc-z-skip-to-content-h>z-link.link-visible.sc-z-skip-to-content{height:initial;width:initial}.dark.sc-z-skip-to-content-h{background-color:var(--bg-grey-800);color:var(--color-white)}.light.sc-z-skip-to-content-h{background-color:var(--bg-white);color:var(--text-grey-800);border:2px solid var(--text-grey-800)}@media (min-width: 768px){.sc-z-skip-to-content-h>z-link.sc-z-skip-to-content{text-align:left}}@media (min-width: 1152px){.sc-z-skip-to-content-h>z-link.sc-z-skip-to-content{display:inline-block;padding:0 calc(var(--space-unit) * 3);border-right:1px solid var(--bg-grey-800)}.sc-z-skip-to-content-h>z-link.link-invisible.sc-z-skip-to-content{height:initial;width:initial;overflow:initial}.sc-z-skip-to-content-h>z-link.sc-z-skip-to-content:first-child{padding-left:0}.sc-z-skip-to-content-h>z-link.sc-z-skip-to-content:last-child,.dark.sc-z-skip-to-content-h>z-link.sc-z-skip-to-content:last-child,.light.sc-z-skip-to-content-h>z-link.sc-z-skip-to-content:last-child{border-right:none;padding-right:0}.dark.sc-z-skip-to-content-h>z-link.sc-z-skip-to-content{border-right:1px solid var(--bg-white)}}";

const ZSkipToContent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** Array to fill link into skip-content */
    this.links = [];
    this.visible = false;
    this.visibleLink = "";
  }
  handleFocusOutSkipToContent(e) {
    if (this.isInSkipToContent(e.target))
      this.visible = false;
  }
  handleFocusSkipToContent(e) {
    if (this.isInSkipToContent(e.target))
      this.visible = true;
  }
  componentDidLoad() {
    this.showFirstChild();
  }
  componentWillRender() {
    if (this.links) {
      this.links =
        typeof this.links === "string" ? JSON.parse(this.links) : this.links;
    }
  }
  isInSkipToContent(elem) {
    const tree = utils.getElementTree(elem);
    const menuParent = tree.find((elem) => elem.nodeName.toLowerCase() === "z-skip-to-content");
    if (menuParent)
      return true;
    return false;
  }
  getFirstChild() {
    const children = this.hostElement.children;
    if (children.length)
      return children[0];
    return false;
  }
  showFirstChild() {
    const firstChild = this.getFirstChild();
    if (firstChild)
      this.visibleLink = firstChild.id;
  }
  handleLinkClick() {
    this.visible = false;
  }
  render() {
    return (index.h(index.Host, { class: `${this.variant} ${this.visible && "skip-to-content-visible"} `, ref: (el) => el }, this.links.map((link, i) => {
      const id = `skip-to-content-${i}`;
      return (index.h("z-link", { id: id, underline: true, "aria-label": link.ariaLabel || link.label, class: `t-weight-sb ${id == this.visibleLink ? "link-visible" : "link-invisible"}`, href: link.href, textcolor: this.variant === index$1.ThemeVariant.dark ? "white" : "black", onFocus: () => (this.visibleLink = id), onClick: () => this.handleLinkClick(), onKeyUp: (e) => utils.handleKeyboardSubmit(e, this.handleLinkClick.bind(this)) }, link.label));
    })));
  }
  get hostElement() { return index.getElement(this); }
};
ZSkipToContent.style = stylesCss;

exports.z_skip_to_content = ZSkipToContent;

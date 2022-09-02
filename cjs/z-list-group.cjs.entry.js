'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');
const index$1 = require('./index-a8bdcb9c.js');

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>.z-list-group-header-container{color:var(--gray700);font-size:var(--font-size-2);font-weight:var(--font-sb) !important;line-height:1.4;letter-spacing:0.16px}:host>.z-list-group-header-container.has-header{padding-top:var(--space-unit);padding-bottom:var(--space-unit)}:host>.z-list-group-header-container.has-header>z-divider{margin-top:var(--space-unit)}";

const ZListGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * [optional] Sets size of inside elements.
     */
    this.size = index$1.ListSize.medium;
    /**
     * [optional] Sets the position where to insert the divider.
     */
    this.dividerType = index$1.ListDividerType.none;
    /**
     * [optional] Sets the divider size.
     */
    this.dividerSize = index$1.DividerSize.small;
    /**
     * [optional] Sets the divider color.
     */
    this.dividerColor = "gray200";
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
    }
  }
  componentWillLoad() {
    this.hasHeader = !!this.host.querySelector('[slot="header-title"]');
  }
  render() {
    return (index.h(index.Host, { role: "group" }, index.h("div", { class: {
        "z-list-group-header-container": true,
        "has-header": this.hasHeader,
      } }, index.h("slot", { name: "header-title" }), this.dividerType === index$1.ListDividerType.header && (index.h("z-divider", { color: this.dividerColor, size: this.dividerSize }))), index.h("slot", null)));
  }
  get host() { return index.getElement(this); }
};
ZListGroup.style = stylesCss;

exports.z_list_group = ZListGroup;

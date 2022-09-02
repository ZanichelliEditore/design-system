'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');
const index$1 = require('./index-69339d64.js');
const index$2 = require('./index-1fda0714.js');
require('./_commonjsHelpers-537d719a.js');

const stylesCss = ":host{display:table-cell;background-color:var(--color-white);border-bottom:var(--border-size-small) solid var(--bg-grey-200);font-family:var(--dashboard-font);font-weight:var(--font-rg)}:host>.button-container{display:none}:host:hover>.button-container{display:initial}.button-container{position:absolute;right:8px;top:8px;z-index:5}.button-content{position:relative}.contextual-menu-container{display:none;position:absolute;top:calc(100% - var(--space-unit));right:0}.button-container.visible,.contextual-menu-container.visible{display:initial}:host([padding=\"x-small\"]){padding:calc(var(--space-unit) * 0.5)}:host([padding=\"small\"]){padding:calc(var(--space-unit))}:host([padding=\"medium\"]){padding:calc(var(--space-unit) * 2)}:host([padding=\"large\"]){padding:calc(var(--space-unit) * 2.5)}:host([padding=\"special\"]){padding:0}";

const ZTableCell = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** Set padding size of cell, if special 0px padding will be set */
    this.padding = index$1.Size.medium;
    this.isMenuOpened = false;
  }
  handleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }
  componentWillRender() {
    this.host.setAttribute("role", "cell");
  }
  render() {
    return (index.h(index.Host, null, this.showButton && (index.h("div", { class: index$2.classnames("button-container", {
        visible: this.isMenuOpened,
      }) }, index.h("div", { class: "button-content" }, index.h("z-button", { icon: "contextual-menu", variant: index$1.ButtonVariantEnum.tertiary, size: index$1.ButtonSizeEnum["x-small"], onClick: () => this.handleMenu() }), index.h("div", { class: index$2.classnames("contextual-menu-container", {
        visible: this.isMenuOpened,
      }) }, index.h("slot", { name: "contextual-menu" }))))), index.h("slot", null)));
  }
  get host() { return index.getElement(this); }
};
ZTableCell.style = stylesCss;

exports.z_table_cell = ZTableCell;

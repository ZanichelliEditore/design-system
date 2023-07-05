'use strict';

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-4e1850d7.js');

const stylesCss = ":host{display:table-cell;border-bottom:var(--border-size-small) solid var(--bg-grey-200);background-color:var(--color-white);font-family:var(--dashboard-font);font-weight:var(--font-rg)}:host>.button-container{display:none}:host:hover>.button-container{display:initial}.button-container{position:absolute;z-index:5;top:8px;right:8px}.button-content{position:relative}.contextual-menu-container{position:absolute;top:calc(100% - var(--space-unit));right:0;display:none}.button-container.visible,.contextual-menu-container.visible{display:initial}:host([padding=\"x-small\"]){padding:calc(var(--space-unit) * 0.5)}:host([padding=\"small\"]){padding:calc(var(--space-unit))}:host([padding=\"medium\"]){padding:calc(var(--space-unit) * 2)}:host([padding=\"large\"]){padding:calc(var(--space-unit) * 2.5)}:host([padding=\"special\"]){padding:0}";

const ZTableCell = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** Set padding size of cell, if special 0px padding will be set */
    this.padding = "medium";
    this.isMenuOpened = false;
  }
  handleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }
  componentWillRender() {
    this.host.setAttribute("role", "cell");
  }
  render() {
    return (index.h(index.Host, null, this.showButton && (index.h("div", { class: {
        "button-container": true,
        "visible": this.isMenuOpened,
      } }, index.h("div", { class: "button-content" }, index.h("z-button", { icon: "contextual-menu", variant: index$1.ButtonVariant.TERTIARY, size: index$1.ButtonSize.X_SMALL, onClick: () => this.handleMenu() }), index.h("div", { class: {
        "contextual-menu-container": true,
        "visible": this.isMenuOpened,
      } }, index.h("slot", { name: "contextual-menu" }))))), index.h("slot", null)));
  }
  get host() { return index.getElement(this); }
};
ZTableCell.style = stylesCss;

exports.ZTableCell = ZTableCell;

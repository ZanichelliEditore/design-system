import { r as registerInstance, h, H as Host, g as getElement } from './index-90e18641.js';
import { x as Size, f as ButtonVariantEnum, g as ButtonSizeEnum } from './index-c1ce8cab.js';
import { c as classnames } from './index-abb47b30.js';
import './_commonjsHelpers-9943807e.js';

const stylesCss = ":host{display:table-cell;background-color:var(--color-white);border-bottom:var(--border-size-small) solid var(--bg-grey-200);font-family:var(--dashboard-font);font-weight:var(--font-rg)}:host>.button-container{display:none}:host:hover>.button-container{display:initial}.button-container{position:absolute;right:8px;top:8px;z-index:5}.button-content{position:relative}.contextual-menu-container{display:none;position:absolute;top:calc(100% - var(--space-unit));right:0}.button-container.visible,.contextual-menu-container.visible{display:initial}:host([padding=\"x-small\"]){padding:calc(var(--space-unit) * 0.5)}:host([padding=\"small\"]){padding:calc(var(--space-unit))}:host([padding=\"medium\"]){padding:calc(var(--space-unit) * 2)}:host([padding=\"large\"]){padding:calc(var(--space-unit) * 2.5)}:host([padding=\"special\"]){padding:0}";

const ZTableCell = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** Set padding size of cell, if special 0px padding will be set */
    this.padding = Size.medium;
    this.isMenuOpened = false;
  }
  handleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }
  componentWillRender() {
    this.host.setAttribute("role", "cell");
  }
  render() {
    return (h(Host, null, this.showButton && (h("div", { class: classnames("button-container", {
        visible: this.isMenuOpened,
      }) }, h("div", { class: "button-content" }, h("z-button", { icon: "contextual-menu", variant: ButtonVariantEnum.tertiary, size: ButtonSizeEnum["x-small"], onClick: () => this.handleMenu() }), h("div", { class: classnames("contextual-menu-container", {
        visible: this.isMenuOpened,
      }) }, h("slot", { name: "contextual-menu" }))))), h("slot", null)));
  }
  get host() { return getElement(this); }
};
ZTableCell.style = stylesCss;

export { ZTableCell as z_table_cell };

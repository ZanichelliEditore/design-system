import { r as registerInstance, h, H as Host, g as getElement } from './index-a2ca4b97.js';
import { B as ButtonVariant, d as ButtonSize } from './index-fd62a73e.js';

const stylesCss = ":host{display:table-cell;border-bottom:var(--border-size-small) solid var(--bg-grey-200);background-color:var(--color-white);font-family:var(--dashboard-font);font-weight:var(--font-rg)}:host>.button-container{display:none}:host:hover>.button-container{display:initial}.button-container{position:absolute;z-index:5;top:8px;right:8px}.button-content{position:relative}.contextual-menu-container{position:absolute;top:calc(100% - var(--space-unit));right:0;display:none}.button-container.visible,.contextual-menu-container.visible{display:initial}:host([padding=\"x-small\"]){padding:calc(var(--space-unit) * 0.5)}:host([padding=\"small\"]){padding:calc(var(--space-unit))}:host([padding=\"medium\"]){padding:calc(var(--space-unit) * 2)}:host([padding=\"large\"]){padding:calc(var(--space-unit) * 2.5)}:host([padding=\"special\"]){padding:0}";

const ZTableCell = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, null, this.showButton && (h("div", { class: {
        "button-container": true,
        "visible": this.isMenuOpened,
      } }, h("div", { class: "button-content" }, h("z-button", { icon: "contextual-menu", variant: ButtonVariant.TERTIARY, size: ButtonSize.X_SMALL, onClick: () => this.handleMenu() }), h("div", { class: {
        "contextual-menu-container": true,
        "visible": this.isMenuOpened,
      } }, h("slot", { name: "contextual-menu" }))))), h("slot", null)));
  }
  get host() { return getElement(this); }
};
ZTableCell.style = stylesCss;

export { ZTableCell as Z };

import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a2ca4b97.js';
import { B as ButtonVariant, d as ButtonSize } from './index-03c8b0f0.js';
import { m as mobileBreakpoint } from './breakpoints-9b81eb1b.js';
import './index-2c800f19.js';
import './index-d117d464.js';
import './index-2cdac489.js';
import './index-83736b34.js';
import './index-f98f4ad3.js';
import './index-0e0fa88d.js';
import './index-d3dfe710.js';
import './index-e2c8b8b5.js';
import './index-c84fca22.js';
import './index-1ae1c122.js';
import './utils-4d2d99d9.js';

const stylesCss = "z-table-deprecated{display:block;width:100%;background-color:var(--color-white);font-family:var(--dashboard-font);font-weight:var(--font-rg);overflow-x:auto}z-table-deprecated>div.table{display:table;width:100%;border-collapse:separate}z-table-deprecated>div.table-bordered>z-table-body>z-table-row>z-table-cell:not(:last-child),z-table-deprecated>div.table-bordered>z-table-head>z-table-header-row>z-table-header:not(:last-child){border-right:var(--border-size-small) solid var(--bg-grey-200)}z-table-deprecated>div>z-table-body>z-table-row[expandable]>z-table-cell:first-child,z-table-deprecated>div>z-table-head>z-table-header-row[expandable]>z-table-header:first-child{border-right:none}z-table-deprecated>div>z-table-body>z-table-row[expanded]>z-table-cell{background-color:var(--gray50)}z-table-deprecated>div>z-table-body>z-table-row[expanded]+z-table-expanded-row{border-bottom:1px solid var(--gray200)}z-table-deprecated>div.table-column-sticky>z-table-body>z-table-row>z-table-cell:first-child,z-table-deprecated>div.table-column-sticky>z-table-head>z-table-header-row>z-table-header:first-child{position:sticky;z-index:1;left:0;box-shadow:1px 0 4px -1px rgb(66 69 72 / 40%)}z-table-deprecated>div.table-header-sticky>z-table-head>z-table-header-row>z-table-header{position:sticky;z-index:2;top:0;box-shadow:0 2px 3px -3px rgb(66 69 72 / 40%)}z-table-deprecated>div.table-header-sticky>z-table-head>z-table-header-row>z-table-header:first-child,z-table-deprecated>div.table-column-sticky>z-table-head>z-table-header-row>z-table-header:first-child{z-index:5}z-table-body{width:auto;background-color:var(--color-white)}z-table-empty-box{display:flex;flex-direction:column;flex-grow:1;border-bottom:var(--border-size-small) solid var(--bg-grey-200)}z-table-empty-box.bordered{border-left:var(--border-size-small) solid var(--bg-grey-200)}.error-message{margin-top:calc(var(--space-unit) * 2)}.table-content{display:flex;width:100%;flex-direction:row}.error-content{display:flex;padding:calc(var(--space-unit) * 3);font-family:var(--dashboard-font)}.error-content>img{width:244px;height:188px;margin-right:calc(var(--space-unit) * 3)}@media only screen and (max-width: 768px){z-table-deprecated>div.table-empty{display:none}.error-content{display:flex;flex-direction:column}.error-content>img{width:auto;height:auto}.text{padding:calc(var(--space-unit) * 3) 0}}";

const ZTableDeprecated = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.callToAction = createEvent(this, "callToAction", 7);
    this.callToActionTwo = createEvent(this, "callToActionTwo", 7);
    /** Error message */
    this.errorMessage = "Siamo spiacenti, non siamo riusciti a caricare il contenuto richiesto";
    /** Sets table with border */
    this.bordered = false;
    /** Sets first column sticky */
    this.columnSticky = false;
    /** Sets empty table */
    this.empty = false;
    /** Set error status */
    this.error = false;
    /** Sets header sticky */
    this.headerSticky = false;
    /** Set message */
    this.message = "Siamo spiacenti, al momento non sono presenti dati da visualizzare";
    /** Set subtitle */
    this.subtitle = "";
  }
  handleResize() {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
  }
  handleOrientationChange() {
    this.isMobile = screen.width <= mobileBreakpoint;
  }
  componentWillLoad() {
    var _a;
    this.isMobile = window.innerWidth <= mobileBreakpoint;
    const tableBody = this.host.querySelector('[slot="table-body"]');
    this.hasTableBody = !!((_a = tableBody === null || tableBody === void 0 ? void 0 : tableBody.children) === null || _a === void 0 ? void 0 : _a.length);
    if (!!tableBody && !this.hasTableBody) {
      tableBody.remove();
    }
  }
  componentWillRender() {
    this.host.setAttribute("role", "table");
  }
  renderError(tableClass) {
    const minHeight = this.lines ? `calc(40px * ${this.lines})` : "auto";
    return (h(Host, null, h("div", { class: tableClass }, h("slot", { name: "table-header" })), h("z-table-error", null, h("div", { class: "error-content", style: { minHeight } }, h("slot", { name: "error-image" }), h("div", { class: "text" }, h("span", { class: "body-3-sb error-message" }, this.errorMessage), h("slot", { name: "error-action" }))))));
  }
  renderEmpty(tableClass) {
    const buttonSize = this.isMobile ? ButtonSize.SMALL : ButtonSize.BIG;
    const tableContentClass = `${this.hasTableBody ? "table-content" : ""}`;
    if (this.hasTableBody) {
      return (h(Host, null, h("div", { class: tableClass }, h("slot", { name: "table-header" }), h("div", { class: tableContentClass }, h("slot", { name: "table-body" }), h("z-table-empty-box", { class: this.bordered && "bordered", message: this.message, subtitle: this.subtitle }, !!this.callToActionLabel && (h("z-button", { slot: "cta1", variant: ButtonVariant.TERTIARY, onClick: () => this.callToAction.emit(), size: buttonSize }, this.callToActionLabel)), !!this.callToActionTwoLabel && (h("z-button", { slot: "cta2", variant: ButtonVariant.TERTIARY, onClick: () => this.callToActionTwo.emit(), size: buttonSize }, this.callToActionTwoLabel)))))));
    }
    return (h(Host, null, h("div", { class: tableClass }, h("slot", { name: "table-header" })), h("z-table-empty-box", { class: this.bordered && "bordered", message: this.message, subtitle: this.subtitle }, !!this.callToActionLabel && (h("z-button", { slot: "cta1", variant: ButtonVariant.TERTIARY, onClick: () => this.callToAction.emit(), size: buttonSize }, this.callToActionLabel)), !!this.callToActionTwoLabel && (h("z-button", { slot: "cta2", variant: ButtonVariant.TERTIARY, onClick: () => this.callToActionTwo.emit(), size: buttonSize }, this.callToActionTwoLabel)))));
  }
  render() {
    const tableClass = `table ${this.empty ? "table-empty" : ""} ${this.bordered ? "table-bordered" : ""}
    ${this.columnSticky ? "table-column-sticky" : ""}
    ${this.headerSticky ? "table-header-sticky" : ""}`;
    if (this.error) {
      return this.renderError(tableClass);
    }
    if (this.empty) {
      return this.renderEmpty(tableClass);
    }
    return (h(Host, null, h("div", { class: tableClass }, h("slot", null)), h("slot", { name: "sticky-footer" })));
  }
  static get assetsDirs() { return ["assets"]; }
  get host() { return getElement(this); }
};
ZTableDeprecated.style = stylesCss;

export { ZTableDeprecated as z_table_deprecated };
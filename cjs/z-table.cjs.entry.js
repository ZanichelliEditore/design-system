'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');
const index$1 = require('./index-93c4c577.js');
const breakpoints = require('./breakpoints-88c4fd6c.js');

const stylesCss = "z-table{overflow-x:auto;display:block;width:100%;font-family:var(--dashboard-font);font-weight:var(--font-rg);background-color:var(--color-white)}z-table>div.table{display:table;width:100%;border-collapse:separate}z-table>div.table-bordered>z-table-body>z-table-row>z-table-cell:not(:last-child),z-table>div.table-bordered>z-table-head>z-table-header-row>z-table-header:not(:last-child){border-right:var(--border-size-small) solid var(--bg-grey-200)}z-table>div>z-table-body>z-table-row[expandable]>z-table-cell:first-child,z-table>div>z-table-head>z-table-header-row[expandable]>z-table-header:first-child{border-right:none}z-table>div>z-table-body>z-table-row[expanded]>z-table-cell{background-color:var(--gray50)}z-table>div>z-table-body>z-table-row[expanded]+z-table-expanded-row{border-bottom:1px solid var(--gray200)}z-table>div.table-column-sticky>z-table-body>z-table-row>z-table-cell:first-child,z-table>div.table-column-sticky>z-table-head>z-table-header-row>z-table-header:first-child{position:sticky;left:0;box-shadow:1px 0 4px -1px rgba(66, 69, 72, 0.4);z-index:1}z-table>div.table-header-sticky>z-table-head>z-table-header-row>z-table-header{position:sticky;top:0;box-shadow:0 2px 3px -3px rgba(66, 69, 72, 0.4)}z-table>div.table-header-sticky>z-table-head>z-table-header-row>z-table-header{z-index:2}z-table>div.table-header-sticky>z-table-head>z-table-header-row>z-table-header:first-child,z-table>div.table-column-sticky>z-table-head>z-table-header-row>z-table-header:first-child{z-index:5}z-table-body{width:auto;background-color:var(--color-white)}z-table-empty-box{display:flex;flex-direction:column;flex-grow:1;border-bottom:var(--border-size-small) solid var(--bg-grey-200)}z-table-empty-box.bordered{border-left:var(--border-size-small) solid var(--bg-grey-200)}.error-message{margin-top:calc(var(--space-unit) * 2)}.table-content{display:flex;flex-direction:row;width:100%}.error-content{font-family:var(--dashboard-font);padding:calc(var(--space-unit) * 3);display:flex}.error-content>img{width:244px;height:188px;margin-right:calc(var(--space-unit) * 3)}@media only screen and (max-width: 768px){z-table>div.table-empty{display:none}.error-content{display:flex;flex-direction:column}.error-content>img{width:auto;height:auto}.text{padding:calc(var(--space-unit) * 3) 0}}";

const ZTable = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.callToAction = index.createEvent(this, "callToAction", 7);
    this.callToActionTwo = index.createEvent(this, "callToActionTwo", 7);
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
    this.isMobile = window.innerWidth <= breakpoints.mobileBreakpoint;
  }
  handleOrientationChange() {
    this.isMobile = screen.width <= breakpoints.mobileBreakpoint;
  }
  componentWillLoad() {
    var _a;
    this.isMobile = window.innerWidth <= breakpoints.mobileBreakpoint;
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
    return (index.h(index.Host, null, index.h("div", { class: tableClass }, index.h("slot", { name: "table-header" })), index.h("z-table-error", null, index.h("div", { class: "error-content", style: { minHeight } }, index.h("slot", { name: "error-image" }), index.h("div", { class: "text" }, index.h("z-body", { class: "error-message", level: 3, variant: "semibold" }, this.errorMessage), index.h("slot", { name: "error-action" }))))));
  }
  renderEmpty(tableClass) {
    const buttonSize = this.isMobile
      ? index$1.ButtonSizeEnum.small
      : index$1.ButtonSizeEnum.big;
    const tableContentClass = `${!!this.hasTableBody ? "table-content" : ""}`;
    if (this.hasTableBody) {
      return (index.h(index.Host, null, index.h("div", { class: tableClass }, index.h("slot", { name: "table-header" }), index.h("div", { class: tableContentClass }, index.h("slot", { name: "table-body" }), index.h("z-table-empty-box", { class: this.bordered && "bordered", message: this.message, subtitle: this.subtitle }, !!this.callToActionLabel && (index.h("z-button", { slot: "cta1", variant: index$1.ButtonVariantEnum.tertiary, onClick: () => this.callToAction.emit(), size: buttonSize }, this.callToActionLabel)), !!this.callToActionTwoLabel && (index.h("z-button", { slot: "cta2", variant: index$1.ButtonVariantEnum.tertiary, onClick: () => this.callToActionTwo.emit(), size: buttonSize }, this.callToActionTwoLabel)))))));
    }
    return (index.h(index.Host, null, index.h("div", { class: tableClass }, index.h("slot", { name: "table-header" })), index.h("z-table-empty-box", { class: this.bordered && "bordered", message: this.message, subtitle: this.subtitle }, !!this.callToActionLabel && (index.h("z-button", { slot: "cta1", variant: index$1.ButtonVariantEnum.tertiary, onClick: () => this.callToAction.emit(), size: buttonSize }, this.callToActionLabel)), !!this.callToActionTwoLabel && (index.h("z-button", { slot: "cta2", variant: index$1.ButtonVariantEnum.tertiary, onClick: () => this.callToActionTwo.emit(), size: buttonSize }, this.callToActionTwoLabel)))));
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
    return (index.h(index.Host, null, index.h("div", { class: tableClass }, index.h("slot", null)), index.h("slot", { name: "sticky-footer" })));
  }
  static get assetsDirs() { return ["assets"]; }
  get host() { return index.getElement(this); }
};
ZTable.style = stylesCss;

exports.z_table = ZTable;

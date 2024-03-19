'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dc60bee7.js');
const index$1 = require('./index-39ce4edf.js');
const breakpoints = require('./breakpoints-5c22092a.js');
require('./index-96c2bc8f.js');
require('./index-a30259f3.js');
require('./index-7a1c32d4.js');
require('./index-715aa3be.js');
require('./index-0a7baee3.js');
require('./index-37180b8d.js');
require('./index-7f3e61f0.js');
require('./index-4468a6b7.js');
require('./index-d669dfd0.js');
require('./index-a7aedd7c.js');
require('./utils-d0b10736.js');

const stylesCss = "z-table-deprecated{display:block;width:100%;background-color:var(--color-white);font-family:var(--font-family-sans);font-weight:var(--font-rg);overflow-x:auto}z-table-deprecated>div.table{display:table;width:100%;border-collapse:separate}z-table-deprecated>div.table-bordered>z-table-body>z-table-row>z-table-cell:not(:last-child),z-table-deprecated>div.table-bordered>z-table-head>z-table-header-row>z-table-header:not(:last-child){border-right:var(--border-size-small) solid var(--color-surface03)}z-table-deprecated>div>z-table-body>z-table-row[expandable]>z-table-cell:first-child,z-table-deprecated>div>z-table-head>z-table-header-row[expandable]>z-table-header:first-child{border-right:none}z-table-deprecated>div>z-table-body>z-table-row[expanded]>z-table-cell{background-color:var(--gray50)}z-table-deprecated>div>z-table-body>z-table-row[expanded]+z-table-expanded-row{border-bottom:1px solid var(--gray200)}z-table-deprecated>div.table-column-sticky>z-table-body>z-table-row>z-table-cell:first-child,z-table-deprecated>div.table-column-sticky>z-table-head>z-table-header-row>z-table-header:first-child{position:sticky;z-index:1;left:0;box-shadow:1px 0 4px -1px rgb(66 69 72 / 40%)}z-table-deprecated>div.table-header-sticky>z-table-head>z-table-header-row>z-table-header{position:sticky;z-index:2;top:0;box-shadow:0 2px 3px -3px rgb(66 69 72 / 40%)}z-table-deprecated>div.table-header-sticky>z-table-head>z-table-header-row>z-table-header:first-child,z-table-deprecated>div.table-column-sticky>z-table-head>z-table-header-row>z-table-header:first-child{z-index:5}z-table-body{width:auto;background-color:var(--color-white)}z-table-empty-box{display:flex;flex-direction:column;flex-grow:1;border-bottom:var(--border-size-small) solid var(--color-surface03)}z-table-empty-box.bordered{border-left:var(--border-size-small) solid var(--color-surface03)}.error-message{margin-top:calc(var(--space-unit) * 2)}.table-content{display:flex;width:100%;flex-direction:row}.error-content{display:flex;padding:calc(var(--space-unit) * 3);font-family:var(--font-family-sans)}.error-content>img{width:244px;height:188px;margin-right:calc(var(--space-unit) * 3)}@media only screen and (max-width: 768px){z-table-deprecated>div.table-empty{display:none}.error-content{display:flex;flex-direction:column}.error-content>img{width:auto;height:auto}.text{padding:calc(var(--space-unit) * 3) 0}}";
const ZTableDeprecatedStyle0 = stylesCss;

const ZTableDeprecated = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.callToAction = index.createEvent(this, "callToAction", 7);
        this.callToActionTwo = index.createEvent(this, "callToActionTwo", 7);
        this.lines = undefined;
        this.errorMessage = "Siamo spiacenti, non siamo riusciti a caricare il contenuto richiesto";
        this.bordered = false;
        this.callToActionLabel = undefined;
        this.callToActionTwoLabel = undefined;
        this.columnSticky = false;
        this.empty = false;
        this.error = false;
        this.errorLink = undefined;
        this.headerSticky = false;
        this.message = "Siamo spiacenti, al momento non sono presenti dati da visualizzare";
        this.subtitle = "";
        this.hasTableBody = undefined;
        this.isMobile = undefined;
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
        return (index.h(index.Host, null, index.h("div", { class: tableClass }, index.h("slot", { name: "table-header" })), index.h("z-table-error", null, index.h("div", { class: "error-content", style: { minHeight } }, index.h("slot", { name: "error-image" }), index.h("div", { class: "text" }, index.h("span", { class: "body-3-sb error-message" }, this.errorMessage), index.h("slot", { name: "error-action" }))))));
    }
    renderEmpty(tableClass) {
        const buttonSize = this.isMobile ? index$1.ButtonSize.SMALL : index$1.ButtonSize.BIG;
        const tableContentClass = `${this.hasTableBody ? "table-content" : ""}`;
        if (this.hasTableBody) {
            return (index.h(index.Host, null, index.h("div", { class: tableClass }, index.h("slot", { name: "table-header" }), index.h("div", { class: tableContentClass }, index.h("slot", { name: "table-body" }), index.h("z-table-empty-box", { class: this.bordered && "bordered", message: this.message, subtitle: this.subtitle }, !!this.callToActionLabel && (index.h("z-button", { slot: "cta1", variant: index$1.ButtonVariant.TERTIARY, onClick: () => this.callToAction.emit(), size: buttonSize }, this.callToActionLabel)), !!this.callToActionTwoLabel && (index.h("z-button", { slot: "cta2", variant: index$1.ButtonVariant.TERTIARY, onClick: () => this.callToActionTwo.emit(), size: buttonSize }, this.callToActionTwoLabel)))))));
        }
        return (index.h(index.Host, null, index.h("div", { class: tableClass }, index.h("slot", { name: "table-header" })), index.h("z-table-empty-box", { class: this.bordered && "bordered", message: this.message, subtitle: this.subtitle }, !!this.callToActionLabel && (index.h("z-button", { slot: "cta1", variant: index$1.ButtonVariant.TERTIARY, onClick: () => this.callToAction.emit(), size: buttonSize }, this.callToActionLabel)), !!this.callToActionTwoLabel && (index.h("z-button", { slot: "cta2", variant: index$1.ButtonVariant.TERTIARY, onClick: () => this.callToActionTwo.emit(), size: buttonSize }, this.callToActionTwoLabel)))));
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
ZTableDeprecated.style = ZTableDeprecatedStyle0;

exports.z_table_deprecated = ZTableDeprecated;

//# sourceMappingURL=z-table-deprecated.cjs.entry.js.map
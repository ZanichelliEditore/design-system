'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-f08f7171.js');
const utils = require('./utils-73ead59e.js');
require('./breakpoints-88c4fd6c.js');

const stylesCss = ":host{display:block}:host>div.fixed{position:relative}:host>div>.header{position:relative;z-index:10;display:flex;min-height:42px;align-items:center;justify-content:space-between;padding:0 calc(var(--space-unit) * 2);border:var(--border-size-small) solid var(--bg-grey-700);margin:0;background-color:var(--bg-white);border-radius:var(--border-radius-small);cursor:pointer}:host>div>.header:focus:focus-visible{border:var(--border-size-small) solid var(--blue500);box-shadow:var(--shadow-focus-primary);outline:none}:host>div>.header>z-body{padding:var(--space-unit) 0;margin:0;color:var(--text-grey-800)}:host>div>.header>z-body>span{font-weight:var(--font-sb)}:host>div>.header>z-icon{fill:var(--text-grey-800);transform:rotate(360deg);transition:all 200ms linear}:host>div.open>.header{border:var(--border-size-small) solid var(--blue500);border-radius:var(border-radius-small) var(border-radius-small) 0 0}:host>div.open>.header>z-icon{fill:var(--text-grey-800);transform:rotate(180deg);transition:all 200ms linear}:host>div.open>div.open-combo-data{position:relative;z-index:12;padding:var(--space-unit) calc(var(--space-unit) * 2);border:var(--border-size-small) solid var(--gray200);border-top:0;background-color:var(--bg-white);border-radius:0}:host>div.open>div.open-combo-data>div{overflow:auto;max-height:235px;padding:0;scrollbar-color:var(--myz-blue) var(--gray200);scrollbar-width:thin}:host>div.open>div.open-combo-data>z-input{width:100%;margin-bottom:calc(var(--space-unit) * 2)}:host>div.open>div.open-combo-data>div>ul{max-height:235px;padding:0 3px;margin:0}::-webkit-scrollbar{width:10px;background:linear-gradient(90deg, var(--bg-white) 2px, var(--bg-grey-200) 4px, var(--bg-white) 8px);border-radius:var(--border-radius)}::-webkit-scrollbar-thumb{width:10px;background-color:var(--myz-blue);border-radius:var(--border-radius)}:host>div.open>z-input{position:relative;z-index:1;width:238px;margin:0 calc(var(--space-unit) * 2);color:var(--myz-blue)}:host>div.open>div.open-combo-data>div.search{overflow:hidden;max-height:auto;margin-top:0;box-shadow:1px 1px 4px 2px rgb(217 222 227 / 50%)}:host>div.open>div.open-combo-data>div.search>ul{overflow:auto;max-height:180px;padding:var(--space-unit) calc(var(--space-unit) * 2);scrollbar-color:var(--myz-blue) var(--bg-grey-200);scrollbar-width:thin}:host>div.open>div.open-combo-data>div.search>div{display:flex;justify-content:center}:host>div.open>div.open-combo-data>div.search>div>a{display:inline-block;height:44px;color:var(--myz-blue);cursor:pointer;font-family:var(--dashboard-font);font-size:14px;font-weight:var(--font-sb);line-height:44px;text-align:center;text-transform:uppercase}:host>div.open>div.open-combo-data>div.check-all-wrapper{padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 0.5);text-align:left}";

const ZCombobox = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.comboboxChange = index.createEvent(this, "comboboxChange", 7);
    /** show search input flag (optional) */
    this.hassearch = false;
    /** no result text message */
    this.noresultslabel = "Nessun risultato";
    /** toggle combo list opening flag */
    this.isopen = false;
    /** fixed style flag */
    this.isfixed = false;
    /** close combobox list text */
    this.closesearchtext = "Chiudi";
    /** show "check all" checkbox (optional) */
    this.hascheckall = false;
    /** check all label (optional) */
    this.checkalltext = "Seleziona tutti";
    /** uncheck all label (optional) */
    this.uncheckalltext = "Deseleziona tutti";
    /** max number of checkable items (0 = unlimited) */
    this.maxcheckableitems = 0;
    this.renderItemsList = []; // used for render only
    this.itemsList = [];
    this.inputType = index$1.InputType.TEXT;
    this.toggleComboBox = this.toggleComboBox.bind(this);
    this.closeFilterItems = this.closeFilterItems.bind(this);
  }
  watchItems() {
    this.itemsList = typeof this.items === "string" ? JSON.parse(this.items) : this.items;
    this.selectedCounter = this.itemsList.filter((item) => item.checked).length;
    if (this.searchValue) {
      this.filterItems(this.searchValue);
    }
    else {
      this.resetRenderItemsList();
    }
  }
  inputCheckListener(e) {
    const id = e.detail.id.replace(`combo-checkbox-${this.inputid}-`, "");
    if (id === "check-all" && (!this.maxcheckableitems || this.maxcheckableitems >= this.itemsList.length)) {
      return this.checkAll(e.detail.checked);
    }
    this.itemsList = this.itemsList.map((item) => {
      if (item.id === id) {
        item.checked = e.detail.checked;
      }
      return item;
    });
    this.resetRenderItemsList();
    this.emitComboboxChange();
  }
  emitComboboxChange() {
    this.comboboxChange.emit({ id: this.inputid, items: this.itemsList });
  }
  componentWillLoad() {
    this.watchItems();
  }
  componentWillRender() {
    this.selectedCounter = this.itemsList.filter((item) => item.checked).length;
    if (this.searchValue) {
      this.filterItems(this.searchValue);
    }
  }
  resetRenderItemsList() {
    const renderItemsList = [];
    this.itemsList.forEach((item) => {
      renderItemsList.push(Object.assign({}, item));
    });
    this.renderItemsList = renderItemsList;
  }
  filterItems(value) {
    if (!value) {
      return this.closeFilterItems();
    }
    this.searchValue = value;
    this.resetRenderItemsList();
    this.renderItemsList = this.renderItemsList.filter((item) => {
      const start = item.name.toUpperCase().indexOf(value.toUpperCase());
      const end = start + value.length;
      const newName = item.name.substring(0, start) +
        item.name.substring(start, end).bold() +
        item.name.substring(end, item.name.length);
      item.name = newName;
      return start >= 0;
    });
  }
  checkAll(checked = true) {
    this.itemsList = this.itemsList.map((item) => (Object.assign(Object.assign({}, item), { checked: checked })));
    this.resetRenderItemsList();
    this.emitComboboxChange();
  }
  closeFilterItems() {
    this.searchValue = "";
    this.resetRenderItemsList();
  }
  toggleComboBox() {
    this.isopen = !this.isopen;
  }
  renderHeader() {
    return (index.h("div", { class: "header", onClick: () => this.toggleComboBox(), onKeyDown: (ev) => {
        if (ev.keyCode === index$1.KeyboardKeyCode.SPACE) {
          ev.preventDefault();
        }
      }, onKeyUp: (ev) => utils.handleKeyboardSubmit(ev, this.toggleComboBox), role: "button", tabindex: 0 }, index.h("z-body", { level: 3, component: "p" }, this.label, index.h("span", null, this.selectedCounter > 0 && ` (${this.selectedCounter})`)), index.h("z-icon", { name: "caret-down", width: 18, height: 18 })));
  }
  renderContent() {
    if (!this.isopen) {
      return;
    }
    return (index.h("div", { class: "open-combo-data" }, this.hassearch && this.renderSearchInput(), this.hascheckall && this.renderCheckAll(), this.renderItems()));
  }
  renderItems() {
    if (!this.isopen) {
      return;
    }
    return (index.h("div", { class: this.searchValue && "search", tabindex: -1 }, this.renderList(this.renderItemsList), this.searchValue && this.renderCloseButton()));
  }
  renderList(items) {
    if (!items) {
      return;
    }
    if (!items.length && this.searchValue) {
      return this.renderNoSearchResults();
    }
    return (index.h("ul", null, items.map((item, i) => {
      return (index.h("z-myz-list-item", { id: item.id, listitemid: item.id, action: `combo-li-${this.inputid}`, underlined: i !== items.length - 1 }, index.h("z-input", { type: index$1.InputType.CHECKBOX, checked: item.checked, htmlid: `combo-checkbox-${this.inputid}-${item.id}`, label: item.name, disabled: !item.checked && this.maxcheckableitems && this.maxcheckableitems === this.selectedCounter })));
    })));
  }
  renderNoSearchResults() {
    return (index.h("ul", null, index.h("z-myz-list-item", { id: "no-results", text: this.noresultslabel, listitemid: "no-results", icon: "multiply-circle" })));
  }
  renderCloseButton() {
    return (index.h("div", null, index.h("a", { onClick: () => this.closeFilterItems(), onKeyUp: (e) => utils.handleKeyboardSubmit(e, this.closeFilterItems), role: "button", tabindex: 0 }, this.closesearchtext)));
  }
  renderSearchInput() {
    if (!this.isopen) {
      return;
    }
    return (index.h("z-input", { htmlid: `${this.inputid}_search`, label: this.searchlabel, placeholder: this.searchplaceholder, htmltitle: this.searchtitle, type: this.inputType, value: this.searchValue, message: false, onInputChange: (e) => {
        if (e.detail.keycode === 27) {
          return this.closeFilterItems();
        }
        this.filterItems(e.detail.value);
      } }));
  }
  renderCheckAll() {
    if (this.searchValue) {
      return;
    }
    const allChecked = this.selectedCounter === this.itemsList.length;
    return (index.h("div", { class: "check-all-wrapper" }, index.h("z-input", { type: index$1.InputType.CHECKBOX, checked: allChecked, htmlid: `combo-checkbox-${this.inputid}-check-all`, label: allChecked ? this.uncheckalltext : this.checkalltext, disabled: this.maxcheckableitems && this.maxcheckableitems < this.itemsList.length })));
  }
  render() {
    return (index.h("div", { "data-action": `combo-${this.inputid}`, class: { open: this.isopen, fixed: this.isfixed }, id: this.inputid }, this.renderHeader(), this.renderContent()));
  }
  static get watchers() { return {
    "items": ["watchItems"]
  }; }
};
ZCombobox.style = stylesCss;

exports.z_combobox = ZCombobox;
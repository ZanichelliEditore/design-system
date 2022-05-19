'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');
const index$1 = require('./index-ef6dc2ee.js');
const utils = require('./utils-d3a23e75.js');
require('./breakpoints-88c4fd6c.js');

const stylesCss = ":host{display:block}:host>div.fixed{position:relative;height:42px}:host>div>.header{background-color:var(--bg-white);border-radius:var(--border-radius-small);border:var(--border-size-small) solid var(--bg-grey-700);position:relative;z-index:10;min-height:42px;margin:0;padding:0 calc(var(--space-unit) * 2);display:flex;justify-content:space-between;align-items:center;cursor:pointer}:host>div>.header:focus:focus-visible{border:var(--border-size-small) solid var(--blue500);box-shadow:var(--shadow-focus-primary);outline:none}:host>div>.header>z-body{margin:0;padding:var(--space-unit) 0;color:var(--text-grey-800)}:host>div>.header>z-body>span{font-weight:var(--font-sb)}:host>div>.header>z-icon{fill:var(--text-grey-800);transform:rotate(360deg);transition:all 200ms linear}:host>div.open>.header{border-radius:var(border-radius-small) var(border-radius-small) 0 0;border:var(--border-size-small) solid var(--blue500)}:host>div.open>.header>z-icon{fill:var(--text-grey-800);transform:rotate(180deg);transition:all 200ms linear}:host>div.open>div.openComboData{background-color:var(--bg-white);border-radius:0;border:var(--border-size-small) solid var(--gray200);border-top:0px;position:relative;z-index:12;padding:var(--space-unit) calc(var(--space-unit) * 2)}:host>div.open>div.openComboData>div{padding:0;max-height:235px;overflow:auto;scrollbar-width:thin;scrollbar-color:var(--myz-blue) var(--gray200)}:host>div.open>div.openComboData>z-input{margin-bottom:calc(var(--space-unit) * 2);width:100%}:host>div.open>div.openComboData>div>ul{margin:0;padding:0 3px;max-height:235px}::-webkit-scrollbar{background:linear-gradient(\n    90deg,\n    var(--bg-white) 2px,\n    var(--bg-grey-200) 4px,\n    var(--bg-white) 8px\n  );border-radius:var(--border-radius);width:10px}::-webkit-scrollbar-thumb{background-color:var(--myz-blue);border-radius:var(--border-radius);width:10px}:host>div.open>z-input{color:var(--myz-blue);margin:0 calc(var(--space-unit) * 2);width:238px;position:relative;z-index:1}:host>div.open>div.openComboData>div.search{box-shadow:1px 1px 4px 2px rgba(217, 222, 227, 0.5);margin-top:0;max-height:auto;overflow:hidden}:host>div.open>div.openComboData>div.search>ul{padding:var(--space-unit) calc(var(--space-unit) * 2);max-height:180px;overflow:auto;scrollbar-width:thin;scrollbar-color:var(--myz-blue) var(--bg-grey-200)}:host>div.open>div.openComboData>div.search>div{display:flex;justify-content:center}:host>div.open>div.openComboData>div.search>div>a{display:inline-block;cursor:pointer;color:var(--myz-blue);font-family:var(--dashboard-font);font-weight:var(--font-sb);font-size:14px;height:44px;line-height:44px;text-align:center;text-transform:uppercase}:host>div.open>div.openComboData>div.checkAllWrapper{padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * .5);text-align:left}";

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
    this.inputType = index$1.InputTypeEnum.text;
    this.toggleComboBox = this.toggleComboBox.bind(this);
    this.closeFilterItems = this.closeFilterItems.bind(this);
  }
  watchItems() {
    this.itemsList =
      typeof this.items === "string" ? JSON.parse(this.items) : this.items;
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
    if (id === "check-all" &&
      (!this.maxcheckableitems ||
        this.maxcheckableitems >= this.itemsList.length)) {
      return this.checkAll(e.detail.checked);
    }
    this.itemsList = this.itemsList.map((item) => {
      if (item.id === id)
        item.checked = e.detail.checked;
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
    if (!value)
      return this.closeFilterItems();
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
        if (ev.keyCode === index$1.keybordKeyCodeEnum.SPACE)
          ev.preventDefault();
      }, onKeyUp: (ev) => utils.handleKeyboardSubmit(ev, this.toggleComboBox), role: "button", tabindex: 0 }, index.h("z-body", { level: 3, component: "p" }, this.label, index.h("span", null, this.selectedCounter > 0 && ` (${this.selectedCounter})`)), index.h("z-icon", { name: "caret-down", width: 18, height: 18 })));
  }
  renderContent() {
    if (!this.isopen)
      return;
    return (index.h("div", { class: "openComboData" }, this.hassearch && this.renderSearchInput(), this.hascheckall && this.renderCheckAll(), this.renderItems()));
  }
  renderItems() {
    if (!this.isopen)
      return;
    return (index.h("div", { class: this.searchValue && "search", tabindex: -1 }, this.renderList(this.renderItemsList), this.searchValue && this.renderCloseButton()));
  }
  renderList(items) {
    if (!items)
      return;
    if (!items.length && this.searchValue)
      return this.renderNoSearchResults();
    return (index.h("ul", null, items.map((item, i) => {
      return (index.h("z-myz-list-item", { id: item.id, listitemid: item.id, action: `combo-li-${this.inputid}`, underlined: i !== items.length - 1 }, index.h("z-input", { type: index$1.InputTypeEnum.checkbox, checked: item.checked, htmlid: `combo-checkbox-${this.inputid}-${item.id}`, label: item.name, disabled: !item.checked &&
          this.maxcheckableitems &&
          this.maxcheckableitems === this.selectedCounter })));
    })));
  }
  renderNoSearchResults() {
    return (index.h("ul", null, index.h("z-myz-list-item", { id: "no-results", text: this.noresultslabel, listitemid: "no-results", icon: "multiply-circle" })));
  }
  renderCloseButton() {
    return (index.h("div", null, index.h("a", { onClick: () => this.closeFilterItems(), onKeyUp: (e) => utils.handleKeyboardSubmit(e, this.closeFilterItems), role: "button", tabindex: 0 }, this.closesearchtext)));
  }
  renderSearchInput() {
    if (!this.isopen)
      return;
    return (index.h("z-input", { htmlid: `${this.inputid}_search`, label: this.searchlabel, placeholder: this.searchplaceholder, htmltitle: this.searchtitle, type: this.inputType, value: this.searchValue, hasmessage: false, onInputChange: (e) => {
        if (e.detail.keycode === 27)
          return this.closeFilterItems();
        this.filterItems(e.detail.value);
      } }));
  }
  renderCheckAll() {
    if (this.searchValue)
      return;
    const allChecked = this.selectedCounter === this.itemsList.length;
    return (index.h("div", { class: "checkAllWrapper" }, index.h("z-input", { type: index$1.InputTypeEnum.checkbox, checked: allChecked, htmlid: `combo-checkbox-${this.inputid}-check-all`, label: allChecked ? this.uncheckalltext : this.checkalltext, disabled: this.maxcheckableitems &&
        this.maxcheckableitems < this.itemsList.length })));
  }
  render() {
    return (index.h("div", { "data-action": `combo-${this.inputid}`, class: `${this.isopen ? "open" : ""} ${this.isfixed ? "fixed" : ""}`, id: this.inputid }, this.renderHeader(), this.renderContent()));
  }
  static get watchers() { return {
    "items": ["watchItems"]
  }; }
};
ZCombobox.style = stylesCss;

exports.z_combobox = ZCombobox;

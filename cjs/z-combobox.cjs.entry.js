'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-195ca522.js');
const index$1 = require('./index-cf9497bc.js');
const utils = require('./utils-ee86db4f.js');
require('./breakpoints-ebe1a437.js');

const stylesCss = ":host{display:block}:host>div.fixed{position:relative}:host>div>.header{position:relative;z-index:10;display:flex;min-height:42px;align-items:center;justify-content:space-between;padding:0 calc(var(--space-unit) * 1.5);border:var(--border-size-small) solid var(--color-surface04);margin:0;background-color:var(--color-input-field01);border-radius:var(--border-radius-small);cursor:pointer}:host([size=\"small\"])>div>.header{min-height:34px;font-size:var(--font-size-2)}:host([size=\"x-small\"])>div>.header{min-height:30px;font-size:var(--font-size-2)}:host([size=\"x-small\"])>div>.header p.body-3{padding:calc(var(--space-unit) * 0.5) 0}:host>div>.header:hover{outline:var(--border-size-medium) solid var(--color-surface04);outline-offset:-2px}:host>div.open>div.header:focus:focus-visible{box-shadow:none}:host>div>div.header:focus:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}:host>div>.header>p.body-3{padding:var(--space-unit) 0;margin:0;color:var(--color-text01)}:host>div>.header>p.body-3>span{font-weight:var(--font-sb)}:host>div>.header>z-icon{fill:var(--color-icon02);transform:rotate(360deg);transition:all 200ms linear}:host>div>.header>z-icon.small,:host>div>.header>z-icon.x-small{--z-icon-width:16px;--z-icon-height:16px}:host>div.open>.header{border:var(--border-size-small) solid var(--color-primary01);border-radius:var(--border-radius-small) var(--border-radius-small) 0 0}:host>div.disabled{pointer-events:none}:host>div.disabled .header{border-color:var(--color-disabled01);fill:var(--color-disabled01)}:host>div.disabled .header>p.body-3{color:var(--color-disabled02)}:host>div.disabled .header>z-icon:last-child{fill:var(--color-disabled01)}:host>div.open>.header>z-icon{fill:var(--color-icon02);transform:rotate(180deg);transition:all 200ms linear}:host>div.open>div.open-combo-data{position:relative;z-index:12;padding:var(--space-unit) calc(var(--space-unit) * 2);border:var(--border-size-small) solid var(--gray200);border-top:0;background-color:var(--color-input-field01);border-radius:0}:host>div.open>div.open-combo-data>div{overflow:auto;max-height:235px;padding:0;scrollbar-color:var(--color-primary01) transparent}:host>div.open>div.open-combo-data>z-input{width:100%;margin-bottom:calc(var(--space-unit) * 2)}:host>div.open>div.open-combo-data>div>ul{max-height:235px;padding:0 3px;margin:0}::-webkit-scrollbar{width:10px;background:linear-gradient(to right, transparent 0 3px, var(--gray200) 3px 7px, transparent 7px 10px);border-radius:var(--border-radius)}::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01)}:host>div.open>z-input{position:relative;z-index:1;width:238px;margin:0 calc(var(--space-unit) * 2);color:var(--color-primary01)}:host>div.open>div.open-combo-data>div.search{overflow:hidden;max-height:auto;margin-top:0;box-shadow:1px 1px 4px 2px rgb(217 222 227 / 50%)}:host>div.open>div.open-combo-data>div.search>ul{overflow:auto;max-height:180px;padding:var(--space-unit) calc(var(--space-unit) * 2);scrollbar-color:var(--color-primary01) transparent}:host>div.open>div.open-combo-data>div.search>div{display:flex;justify-content:center}:host>div.open>div.open-combo-data>div.search>div>a{display:inline-block;height:44px;color:var(--color-primary01);cursor:pointer;font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-sb);line-height:44px;text-align:center;text-transform:uppercase}:host>div.open>div.open-combo-data>div.check-all-wrapper{padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 0.5);border-bottom:var(--border-size-small) solid var(--gray800);margin-bottom:var(--space-unit);text-align:left}:host([size=\"small\"])>div.open>div.open-combo-data>div.check-all-wrapper{padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 0.5)}:host([size=\"x-small\"])>div.open>div.open-combo-data>div.check-all-wrapper{padding:var(--space-unit) calc(var(--space-unit) * 0.5)}";

const ZCombobox = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.comboboxChange = index.createEvent(this, "comboboxChange", 7);
    /** the combobox is disabled */
    this.disabled = false;
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
    /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
    this.size = index$1.ControlSize.BIG;
    this.renderItemsList = []; // used for render only
    this.itemsList = [];
    this.inputType = index$1.InputType.TEXT;
    this.toggleComboBox = this.toggleComboBox.bind(this);
    this.closeFilterItems = this.closeFilterItems.bind(this);
  }
  watchItems() {
    this.itemsList = typeof this.items === "string" ? JSON.parse(this.items) : this.items;
    this.selectedCounter = this.itemsList.filter((item) => item.checked).length;
    this.updateRenderItemsList();
  }
  watchSearchValue() {
    this.filterItems(this.searchValue);
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
    this.updateRenderItemsList();
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
  }
  updateRenderItemsList() {
    if (this.searchValue) {
      this.filterItems(this.searchValue);
    }
    else {
      this.resetRenderItemsList();
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
      }, onKeyUp: (ev) => utils.handleKeyboardSubmit(ev, this.toggleComboBox), role: "button", tabindex: 0 }, index.h("p", { class: "body-3" }, this.label, index.h("span", null, this.selectedCounter > 0 && ` (${this.selectedCounter})`)), index.h("z-icon", { name: "caret-down", class: this.size })));
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
  renderItem(item, index$2, length) {
    return (index.h("z-myz-list-item", { id: item.id, listitemid: item.id, action: `combo-li-${this.inputid}`, underlined: index$2 !== length - 1, class: this.size }, index.h("z-input", { type: index$1.InputType.CHECKBOX, checked: item.checked, htmlid: `combo-checkbox-${this.inputid}-${item.id}`, label: item.name, disabled: !item.checked && this.maxcheckableitems && this.maxcheckableitems === this.selectedCounter, size: this.size === index$1.ControlSize.X_SMALL ? index$1.ControlSize.SMALL : this.size })));
  }
  renderList(items) {
    if (!items) {
      return;
    }
    if (!items.length && this.searchValue) {
      return this.renderNoSearchResults();
    }
    if (this.hasgroupitems) {
      return this.renderGroups(this.itemsList);
    }
    return (index.h("ul", null, items.map((item, i) => {
      return this.renderItem(item, i, items.length);
    })));
  }
  renderGroups(items) {
    const newData = items.reduce((group, item, index) => {
      var _a;
      const { category } = item;
      const zListItem = this.renderItem(item, index, items.length);
      group[category] = (_a = group[category]) !== null && _a !== void 0 ? _a : [];
      group[category].push(zListItem);
      return group;
    }, {});
    const listGroups = Object.entries(newData).map(([key, value]) => {
      return (index.h("z-list-group", { "divider-type": index$1.ListDividerType.ELEMENT }, index.h("span", { class: "body-3-sb z-list-group-title", slot: "header-title" }, key), value.map((item) => item)));
    });
    return index.h("ul", null, listGroups);
  }
  renderNoSearchResults() {
    return (index.h("ul", null, index.h("z-myz-list-item", { id: "no-results", text: this.noresultslabel, listitemid: "no-results", icon: "multiply-circle", class: this.size })));
  }
  renderCloseButton() {
    return (index.h("div", null, index.h("a", { onClick: () => this.closeFilterItems(), onKeyUp: (e) => utils.handleKeyboardSubmit(e, this.closeFilterItems), role: "button", tabindex: 0 }, this.closesearchtext)));
  }
  renderSearchInput() {
    if (!this.isopen) {
      return;
    }
    return (index.h("z-input", { htmlid: `${this.inputid}_search`, label: this.searchlabel, placeholder: this.searchplaceholder, htmltitle: this.searchtitle, type: this.inputType, value: this.searchValue, message: false, size: this.size, onInputChange: (e) => {
        if (e.detail.keycode === 27) {
          return this.closeFilterItems();
        }
        this.searchValue = e.detail.value;
      } }));
  }
  renderCheckAll() {
    if (this.searchValue) {
      return;
    }
    const allChecked = this.selectedCounter === this.itemsList.length;
    return (index.h("div", { class: "check-all-wrapper" }, index.h("z-input", { type: index$1.InputType.CHECKBOX, checked: allChecked, htmlid: `combo-checkbox-${this.inputid}-check-all`, label: allChecked ? this.uncheckalltext : this.checkalltext, disabled: this.maxcheckableitems && this.maxcheckableitems < this.itemsList.length, size: this.size === index$1.ControlSize.X_SMALL ? index$1.ControlSize.SMALL : this.size })));
  }
  render() {
    return (index.h("div", { "data-action": `combo-${this.inputid}`, class: { open: this.isopen, fixed: this.isfixed, disabled: this.disabled }, id: this.inputid }, this.renderHeader(), !this.disabled && this.renderContent()));
  }
  static get watchers() { return {
    "items": ["watchItems"],
    "searchValue": ["watchSearchValue"]
  }; }
};
ZCombobox.style = stylesCss;

exports.z_combobox = ZCombobox;

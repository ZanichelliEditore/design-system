import { r as registerInstance, c as createEvent, h } from './index-a2ca4b97.js';
import { e as ControlSize, I as InputType, K as KeyboardKeyCode, l as ListDividerType } from './index-fd62a73e.js';
import { a as handleKeyboardSubmit } from './utils-456f447b.js';
import './breakpoints-9b81eb1b.js';

const stylesCss = ":host{display:block}:host>div.fixed{position:relative}:host>div>.header{position:relative;z-index:10;display:flex;min-height:42px;align-items:center;justify-content:space-between;padding:0 calc(var(--space-unit) * 1.5);border:var(--border-size-small) solid var(--bg-grey-700);margin:0;background-color:var(--bg-white);border-radius:var(--border-radius-small);cursor:pointer}:host([size=\"small\"])>div>.header{min-height:34px;font-size:var(--font-size-2)}:host([size=\"x-small\"])>div>.header{min-height:30px;font-size:var(--font-size-2)}:host([size=\"x-small\"])>div>.header p.body-3{padding:calc(var(--space-unit) * 0.5) 0}:host>div>.header:hover{outline:var(--border-size-medium) solid var(--gray700);outline-offset:-2px}:host>div.open>div.header:focus:focus-visible{box-shadow:none}:host>div>div.header:focus:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}:host>div>.header>p.body-3{padding:var(--space-unit) 0;margin:0;color:var(--text-grey-800)}:host>div>.header>p.body-3>span{font-weight:var(--font-sb)}:host>div>.header>z-icon{fill:var(--text-grey-800);transform:rotate(360deg);transition:all 200ms linear}:host>div>.header>z-icon.small,:host>div>.header>z-icon.x-small{--z-icon-width:16px;--z-icon-height:16px}:host>div.open>.header{border:var(--border-size-small) solid var(--blue500);border-radius:var(--border-radius-small) var(--border-radius-small) 0 0}:host>div.disabled{pointer-events:none}:host>div.disabled .header{border-color:var(--color-disabled01);fill:var(--color-disabled01)}:host>div.disabled .header>p.body-3{color:var(--text-grey-700)}:host>div.disabled .header>z-icon:last-child{fill:var(--color-disabled01)}:host>div.open>.header>z-icon{fill:var(--text-grey-800);transform:rotate(180deg);transition:all 200ms linear}:host>div.open>div.open-combo-data{position:relative;z-index:12;padding:var(--space-unit) calc(var(--space-unit) * 2);border:var(--border-size-small) solid var(--gray200);border-top:0;background-color:var(--bg-white);border-radius:0}:host>div.open>div.open-combo-data>div{overflow:auto;max-height:235px;padding:0;scrollbar-color:var(--myz-blue) var(--gray200);scrollbar-width:thin}:host>div.open>div.open-combo-data>z-input{width:100%;margin-bottom:calc(var(--space-unit) * 2)}:host>div.open>div.open-combo-data>div>ul{max-height:235px;padding:0 3px;margin:0}::-webkit-scrollbar{width:10px;background:linear-gradient(90deg, var(--bg-white) 2px, var(--bg-grey-200) 4px, var(--bg-white) 8px);border-radius:var(--border-radius)}::-webkit-scrollbar-thumb{width:10px;background-color:var(--myz-blue);border-radius:var(--border-radius)}:host>div.open>z-input{position:relative;z-index:1;width:238px;margin:0 calc(var(--space-unit) * 2);color:var(--myz-blue)}:host>div.open>div.open-combo-data>div.search{overflow:hidden;max-height:auto;margin-top:0;box-shadow:1px 1px 4px 2px rgb(217 222 227 / 50%)}:host>div.open>div.open-combo-data>div.search>ul{overflow:auto;max-height:180px;padding:var(--space-unit) calc(var(--space-unit) * 2);scrollbar-color:var(--myz-blue) var(--bg-grey-200);scrollbar-width:thin}:host>div.open>div.open-combo-data>div.search>div{display:flex;justify-content:center}:host>div.open>div.open-combo-data>div.search>div>a{display:inline-block;height:44px;color:var(--myz-blue);cursor:pointer;font-family:var(--dashboard-font);font-size:14px;font-weight:var(--font-sb);line-height:44px;text-align:center;text-transform:uppercase}:host>div.open>div.open-combo-data>div.check-all-wrapper{padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 0.5);border-bottom:var(--border-size-small) solid var(--gray800);margin-bottom:var(--space-unit);text-align:left}:host([size=\"small\"])>div.open>div.open-combo-data>div.check-all-wrapper{padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 0.5)}:host([size=\"x-small\"])>div.open>div.open-combo-data>div.check-all-wrapper{padding:var(--space-unit) calc(var(--space-unit) * 0.5)}";

const ZCombobox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.comboboxChange = createEvent(this, "comboboxChange", 7);
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
    this.size = ControlSize.BIG;
    this.renderItemsList = []; // used for render only
    this.itemsList = [];
    this.inputType = InputType.TEXT;
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
    return (h("div", { class: "header", onClick: () => this.toggleComboBox(), onKeyDown: (ev) => {
        if (ev.keyCode === KeyboardKeyCode.SPACE) {
          ev.preventDefault();
        }
      }, onKeyUp: (ev) => handleKeyboardSubmit(ev, this.toggleComboBox), role: "button", tabindex: 0 }, h("p", { class: "body-3" }, this.label, h("span", null, this.selectedCounter > 0 && ` (${this.selectedCounter})`)), h("z-icon", { name: "caret-down", class: this.size })));
  }
  renderContent() {
    if (!this.isopen) {
      return;
    }
    return (h("div", { class: "open-combo-data" }, this.hassearch && this.renderSearchInput(), this.hascheckall && this.renderCheckAll(), this.renderItems()));
  }
  renderItems() {
    if (!this.isopen) {
      return;
    }
    return (h("div", { class: this.searchValue && "search", tabindex: -1 }, this.renderList(this.renderItemsList), this.searchValue && this.renderCloseButton()));
  }
  renderItem(item, index, length) {
    return (h("z-myz-list-item", { id: item.id, listitemid: item.id, action: `combo-li-${this.inputid}`, underlined: index !== length - 1, class: this.size }, h("z-input", { type: InputType.CHECKBOX, checked: item.checked, htmlid: `combo-checkbox-${this.inputid}-${item.id}`, label: item.name, disabled: !item.checked && this.maxcheckableitems && this.maxcheckableitems === this.selectedCounter, size: this.size === ControlSize.X_SMALL ? ControlSize.SMALL : this.size })));
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
    return (h("ul", null, items.map((item, i) => {
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
      return (h("z-list-group", { "divider-type": ListDividerType.ELEMENT }, h("span", { class: "body-3-sb z-list-group-title", slot: "header-title" }, key), value.map((item) => item)));
    });
    return h("ul", null, listGroups);
  }
  renderNoSearchResults() {
    return (h("ul", null, h("z-myz-list-item", { id: "no-results", text: this.noresultslabel, listitemid: "no-results", icon: "multiply-circle", class: this.size })));
  }
  renderCloseButton() {
    return (h("div", null, h("a", { onClick: () => this.closeFilterItems(), onKeyUp: (e) => handleKeyboardSubmit(e, this.closeFilterItems), role: "button", tabindex: 0 }, this.closesearchtext)));
  }
  renderSearchInput() {
    if (!this.isopen) {
      return;
    }
    return (h("z-input", { htmlid: `${this.inputid}_search`, label: this.searchlabel, placeholder: this.searchplaceholder, htmltitle: this.searchtitle, type: this.inputType, value: this.searchValue, message: false, size: this.size, onInputChange: (e) => {
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
    return (h("div", { class: "check-all-wrapper" }, h("z-input", { type: InputType.CHECKBOX, checked: allChecked, htmlid: `combo-checkbox-${this.inputid}-check-all`, label: allChecked ? this.uncheckalltext : this.checkalltext, disabled: this.maxcheckableitems && this.maxcheckableitems < this.itemsList.length, size: this.size === ControlSize.X_SMALL ? ControlSize.SMALL : this.size })));
  }
  render() {
    return (h("div", { "data-action": `combo-${this.inputid}`, class: { open: this.isopen, fixed: this.isfixed, disabled: this.disabled }, id: this.inputid }, this.renderHeader(), !this.disabled && this.renderContent()));
  }
  static get watchers() { return {
    "items": ["watchItems"],
    "searchValue": ["watchSearchValue"]
  }; }
};
ZCombobox.style = stylesCss;

export { ZCombobox as z_combobox };

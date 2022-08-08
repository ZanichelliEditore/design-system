'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');
const index$1 = require('./index-5c16dc2b.js');
const utils = require('./utils-15c8b978.js');
require('./breakpoints-88c4fd6c.js');

const stylesCss$1 = "label{display:block;margin:var(--space-unit) 0;color:var(--color-text02);font-family:var(--font-family-sans);font-size:var(--font-size-1);font-weight:var(--font-sb);line-height:1.33;letter-spacing:0.32px;text-transform:uppercase;text-align:left}label.disabled{color:var(--color-disabled02)}";

const ZInputLabel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** the label is disabled */
    this.disabled = false;
  }
  render() {
    return index.h("label", { htmlFor: this.htmlfor, class: { disabled: this.disabled } }, this.value);
  }
};
ZInputLabel.style = stylesCss$1;

const stylesCss = ".sc-z-select-h{display:inline-block;width:inherit;font-family:var(--font-family-sans);font-weight:var(--font-rg);font-size:var(--font-size-3);color:var(--color-text02)}.selectWrapper.sc-z-select>z-input.sc-z-select{width:100%}.selectWrapper.sc-z-select>div.sc-z-select{position:relative}.selectWrapper.sc-z-select>div.closed.sc-z-select{height:0;overflow:hidden}.selectWrapper.sc-z-select .ulScrollWrapper.sc-z-select{background:var(--color-surface01);position:absolute;padding:calc(var(--space-unit) * 0.5) var(--space-unit);border:var(--border-size-small) solid var(--gray200);border-top:none;width:100%;box-sizing:border-box;outline:none}.selectWrapper.sc-z-select .closed.sc-z-select .ulScrollWrapper.sc-z-select{z-index:10}.selectWrapper.sc-z-select .open.sc-z-select .ulScrollWrapper.sc-z-select{z-index:20}.selectWrapper.sc-z-select .ulScrollWrapper.sc-z-select>z-list.sc-z-select{position:relative;padding:calc(var(--space-unit) * 0.5);max-height:240px;overflow:auto;outline:none;scrollbar-color:var(--color-primary01) transparent}.selectWrapper.sc-z-select .ulScrollWrapper.sc-z-select>z-list.sc-z-select::-webkit-scrollbar{background:linear-gradient(\n    to right,\n    transparent 0 3px,\n    var(--gray200) 3px 7px,\n    transparent 7px 10px\n  );width:10px;border-radius:var(--border-radius)}.selectWrapper.sc-z-select .ulScrollWrapper.sc-z-select>z-list.sc-z-select::-webkit-scrollbar-track{background-color:transparent}.selectWrapper.sc-z-select .ulScrollWrapper.sc-z-select>z-list.sc-z-select::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}.selectWrapper.sc-z-select .ulScrollWrapper.sc-z-select>z-list.sc-z-select::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}.selectWrapper.sc-z-select .ulScrollWrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select span.sc-z-select{display:block;padding:0 calc(var(--space-unit) * 1.5)}.selectWrapper.sc-z-select .ulScrollWrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select span.selected.sc-z-select{font-weight:bold}.selectWrapper.sc-z-select .ulScrollWrapper.sc-z-select .noResults.sc-z-select z-icon.sc-z-select{margin-right:var(--space-unit)}";

const ZSelect = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.optionSelect = index.createEvent(this, "optionSelect", 7);
    /** the id of the input element */
    this.htmlid = `id-${utils.randomId()}`;
    /** the input is disabled */
    this.disabled = false;
    /** the input is readonly */
    this.readonly = false;
    /** input helper message (optional) - if set to `false` message won't be displayed */
    this.message = true;
    /** the input has autocomplete option */
    this.autocomplete = false;
    /** no result text message */
    this.noresultslabel = "Nessun risultato";
    this.isOpen = false;
    this.selectedItem = null;
    this.itemsList = [];
    this.toggleSelectUl = this.toggleSelectUl.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.handleSelectFocus = this.handleSelectFocus.bind(this);
  }
  watchItems() {
    this.itemsList = this.getInitialItemsArray();
    this.selectedItem = this.itemsList.find((item) => item.selected);
  }
  /** get the input selected options */
  async getSelectedItem() {
    return this.selectedItem;
  }
  /** get the input value */
  async getValue() {
    return this.getSelectedValue();
  }
  /** set the input value */
  async setValue(value) {
    let values = [];
    if (typeof value === "string") {
      values.push(value);
    }
    else {
      values = value;
    }
    this.selectedItem = this.itemsList.find((item) => values.includes(item.id));
  }
  emitOptionSelect() {
    this.optionSelect.emit({
      id: this.htmlid,
      selected: this.getSelectedValue(),
    });
  }
  componentWillLoad() {
    this.watchItems();
  }
  componentWillRender() {
    this.filterItems(this.searchString);
  }
  getInitialItemsArray() {
    return typeof this.items === "string" ? JSON.parse(this.items) : this.items;
  }
  mapSelectedItemToItemsArray() {
    const initialItemsList = this.getInitialItemsArray();
    return initialItemsList.map((item) => {
      var _a;
      item.selected = item.id === ((_a = this.selectedItem) === null || _a === void 0 ? void 0 : _a.id);
      return item;
    });
  }
  getSelectedValue() {
    var _a;
    return (_a = this.selectedItem) === null || _a === void 0 ? void 0 : _a.id;
  }
  filterItems(searchString) {
    const prevList = this.mapSelectedItemToItemsArray();
    if (!(searchString === null || searchString === void 0 ? void 0 : searchString.length)) {
      this.itemsList = prevList;
    }
    else {
      this.itemsList = prevList
        .filter((item) => {
        return item.name.toUpperCase().includes(searchString.toUpperCase());
      })
        .map((item) => {
        const start = item.name
          .toUpperCase()
          .indexOf(searchString.toUpperCase());
        const end = start + searchString.length;
        const newName = item.name.substring(0, start) +
          `<strong>${item.name.substring(start, end)}</strong>` +
          item.name.substring(end, item.name.length);
        item.name = newName;
        return item;
      });
    }
  }
  hasAutocomplete() {
    return utils.boolean(this.autocomplete) === true;
  }
  handleInputChange(e) {
    this.searchString = e.detail.value;
    if (!this.isOpen)
      this.toggleSelectUl();
  }
  selectItem(item, selected) {
    if (item && item.disabled)
      return;
    this.itemsList = this.mapSelectedItemToItemsArray();
    this.itemsList = this.itemsList.map((i) => {
      i.selected = false;
      if (i.id === (item ? item.id : null))
        i.selected = selected;
      return i;
    });
    this.selectedItem = this.itemsList.find((item) => item.selected);
    this.emitOptionSelect();
    if (this.searchString)
      this.searchString = null;
  }
  arrowsSelectNav(e, key) {
    const arrows = [index$1.KeyboardCodeEnum.ARROW_DOWN, index$1.KeyboardCodeEnum.ARROW_UP];
    if (!arrows.includes(e.key))
      return;
    e.preventDefault();
    e.stopPropagation();
    if (!this.isOpen)
      this.toggleSelectUl();
    let index;
    if (e.key === index$1.KeyboardCodeEnum.ARROW_DOWN) {
      index = key + 1 === this.itemsList.length ? 0 : key + 1;
    }
    else if (e.key === index$1.KeyboardCodeEnum.ARROW_UP) {
      index = key <= 0 ? this.itemsList.length - 1 : key - 1;
    }
    this.focusSelectItem(index);
  }
  focusSelectItem(index) {
    const focusElem = this.element.querySelector(`#${this.htmlid}_${index}`);
    if (focusElem)
      focusElem.focus();
  }
  toggleSelectUl(selfFocusOnClose = false) {
    if (this.disabled || this.readonly)
      return;
    if (!this.isOpen) {
      document.addEventListener("click", this.handleSelectFocus);
      document.addEventListener("keyup", this.handleSelectFocus);
    }
    else {
      document.removeEventListener("click", this.handleSelectFocus);
      document.removeEventListener("keyup", this.handleSelectFocus);
      if (selfFocusOnClose) {
        this.element.querySelector(`#${this.htmlid}_input`).focus();
      }
    }
    this.isOpen = !this.isOpen;
  }
  handleInputClick(e) {
    const cp = e.composedPath();
    const clearIcon = cp.find((item) => item.classList && item.classList.contains("resetIcon"));
    if (clearIcon) {
      e.stopPropagation();
      return;
    }
    this.toggleSelectUl();
  }
  handleSelectFocus(e) {
    if (e instanceof KeyboardEvent && e.key === index$1.KeyboardCodeEnum.ESC) {
      e.stopPropagation();
      return this.toggleSelectUl(true);
    }
    if (e instanceof KeyboardEvent &&
      e.key !== index$1.KeyboardCodeEnum.TAB &&
      e.key !== index$1.KeyboardCodeEnum.ENTER) {
      return;
    }
    const tree = utils.getElementTree(utils.getClickedElement());
    const parent = tree.find((elem) => {
      return (elem.nodeName.toLowerCase() === "z-input" &&
        elem.id === `${this.htmlid}_input`);
    });
    if (!parent) {
      this.toggleSelectUl(e instanceof MouseEvent ? true : false);
    }
  }
  scrollToLetter(letter) {
    const foundItem = this.itemsList.find((item) => item.name.charAt(0) === letter);
    if (foundItem)
      this.focusSelectItem(this.itemsList.indexOf(foundItem));
  }
  renderInput() {
    return (index.h("z-input", { id: `${this.htmlid}_input`, htmlid: `${this.htmlid}_input`, placeholder: this.placeholder, value: !this.isOpen && this.selectedItem
        ? this.selectedItem.name.replace(/<[^>]+>/g, "")
        : null, label: this.label, "aria-label": this.ariaLabel, icon: this.isOpen ? "caret-up" : "caret-down", hasclearicon: this.hasAutocomplete(), message: false, disabled: this.disabled, readonly: this.readonly || (!this.hasAutocomplete() && this.isOpen), status: this.isOpen ? undefined : this.status, onClick: (e) => {
        this.handleInputClick(e);
      }, onKeyUp: (e) => {
        if (e.keyCode !== 13)
          e.preventDefault();
        utils.handleKeyboardSubmit(e, this.toggleSelectUl);
      }, onKeyDown: (e) => {
        return this.arrowsSelectNav(e, this.selectedItem ? this.itemsList.indexOf(this.selectedItem) : -1);
      }, onInputChange: (e) => {
        this.handleInputChange(e);
      }, onKeyPress: (e) => {
        if (!this.hasAutocomplete()) {
          e.preventDefault();
          this.scrollToLetter(String.fromCharCode(e.keyCode));
        }
      } }));
  }
  renderSelectUl() {
    var _a;
    return (index.h("div", { class: this.isOpen ? "open" : "closed", tabindex: "-1" }, index.h("div", { class: "ulScrollWrapper", tabindex: "-1" }, index.h("z-list", { role: "listbox", tabindex: this.disabled || this.readonly || !this.isOpen ? -1 : 0, id: this.htmlid, "aria-activedescendant": (_a = this.selectedItem) === null || _a === void 0 ? void 0 : _a.id, "aria-multiselectable": false, class: {
        disabled: this.disabled,
        readonly: this.readonly,
        filled: !!this.selectedItem,
        [`input_${this.status}`]: !this.isOpen && !!this.status,
        input_default: this.isOpen || !this.status,
      } }, this.renderSelectUlItems()))));
  }
  renderSelectUlItems() {
    if (!this.itemsList.length)
      return this.renderNoSearchResults();
    return this.itemsList.map((item, key) => {
      return (index.h("z-list-element", { clickable: !item.disabled, disabled: item.disabled, dividerType: index$1.ListDividerType.element, role: "option", tabindex: item.disabled || !this.isOpen ? -1 : 0, "aria-selected": !!item.selected, id: `${this.htmlid}_${key}`, onClickItem: () => this.selectItem(item, true), onKeyDown: (e) => this.arrowsSelectNav(e, key) }, index.h("span", { class: { selected: !!item.selected }, innerHTML: item.name })));
    });
  }
  renderNoSearchResults() {
    return (index.h("z-list-element", { color: "blue500", class: "noResults" }, index.h("z-icon", { name: "multiply-circle", fill: "blue500" }), this.noresultslabel));
  }
  renderMessage() {
    if (utils.boolean(this.message) === false)
      return;
    return (index.h("z-input-message", { message: utils.boolean(this.message) === true ? undefined : this.message, status: this.status }));
  }
  render() {
    return (index.h("div", { class: "selectWrapper" }, this.renderInput(), this.renderSelectUl(), this.renderMessage()));
  }
  get element() { return index.getElement(this); }
  static get watchers() { return {
    "items": ["watchItems"]
  }; }
};
ZSelect.style = stylesCss;

exports.z_input_label = ZInputLabel;
exports.z_select = ZSelect;

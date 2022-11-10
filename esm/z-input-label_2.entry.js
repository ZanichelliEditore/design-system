import { r as registerInstance, h, c as createEvent, g as getElement } from './index-a2ca4b97.js';
import { h as KeyboardCode, n as ListDividerType } from './index-9d028352.js';
import { r as randomId, d as boolean, a as getElementTree, h as handleKeyboardSubmit, e as getClickedElement } from './utils-9e81727a.js';
import './breakpoints-c386984e.js';

const stylesCss$1 = "label{display:block;margin:var(--space-unit) 0;color:var(--color-text02);font-family:var(--font-family-sans);font-size:var(--font-size-1);font-weight:var(--font-sb);letter-spacing:0.32px;line-height:1.33;text-align:left;text-transform:uppercase}label.disabled{color:var(--color-disabled02)}";

const ZInputLabel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** the label is disabled */
    this.disabled = false;
  }
  render() {
    return (h("label", { htmlFor: this.htmlfor, class: { disabled: this.disabled } }, this.value));
  }
};
ZInputLabel.style = stylesCss$1;

const stylesCss = ".sc-z-select-h{display:inline-block;width:inherit;color:var(--color-text02);font-family:var(--font-family-sans);font-size:var(--font-size-3);font-weight:var(--font-rg)}.select-wrapper.sc-z-select>z-input.sc-z-select{width:100%}.select-wrapper.sc-z-select>div.sc-z-select{position:relative}.select-wrapper.sc-z-select>div.closed.sc-z-select{overflow:hidden;height:0}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select{position:absolute;width:100%;box-sizing:border-box;padding:calc(var(--space-unit) * 0.5) var(--space-unit);border:var(--border-size-small) solid var(--gray200);border-top:none;background:var(--color-surface01);outline:none}.select-wrapper.sc-z-select .closed.sc-z-select .ul-scroll-wrapper.sc-z-select{z-index:10}.select-wrapper.sc-z-select .open.sc-z-select .ul-scroll-wrapper.sc-z-select{z-index:20}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select>z-list.sc-z-select{position:relative;overflow:auto;max-height:240px;padding:calc(var(--space-unit) * 0.5);outline:none;scrollbar-color:var(--color-primary01) transparent}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select>z-list.sc-z-select::-webkit-scrollbar{width:10px;background:linear-gradient(to right, transparent 0 3px, var(--gray200) 3px 7px, transparent 7px 10px);border-radius:var(--border-radius)}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select>z-list.sc-z-select::-webkit-scrollbar-track{background-color:transparent}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select>z-list.sc-z-select::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select>z-list.sc-z-select::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select span.sc-z-select{display:block;padding:0 calc(var(--space-unit) * 1.5)}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select span.selected.sc-z-select{font-weight:bold}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select .no-results.sc-z-select z-icon.sc-z-select{margin-right:var(--space-unit)}.z-list-group-title.sc-z-select{color:var(--gray800)}";

const ZSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.optionSelect = createEvent(this, "optionSelect", 7);
    /** the id of the input element */
    this.htmlid = `id-${randomId()}`;
    /** the input aria-label */
    this.ariaLabel = "";
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
        const start = item.name.toUpperCase().indexOf(searchString.toUpperCase());
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
    return boolean(this.autocomplete) === true;
  }
  handleInputChange(e) {
    this.searchString = e.detail.value;
    if (!this.isOpen) {
      this.toggleSelectUl();
    }
  }
  selectItem(item, selected) {
    if (item && item.disabled) {
      return;
    }
    this.itemsList = this.mapSelectedItemToItemsArray();
    this.itemsList = this.itemsList.map((i) => {
      i.selected = false;
      if (i.id === (item === null || item === void 0 ? void 0 : item.id)) {
        i.selected = selected;
      }
      return i;
    });
    this.selectedItem = this.itemsList.find((item) => item.selected);
    this.emitOptionSelect();
    if (this.searchString) {
      this.searchString = null;
    }
  }
  arrowsSelectNav(e, key) {
    const arrows = [KeyboardCode.ARROW_DOWN, KeyboardCode.ARROW_UP];
    if (!arrows.includes(e.key)) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    if (!this.isOpen) {
      this.toggleSelectUl();
    }
    let index;
    if (e.key === KeyboardCode.ARROW_DOWN) {
      index = key + 1 === this.itemsList.length ? 0 : key + 1;
    }
    else if (e.key === KeyboardCode.ARROW_UP) {
      index = key <= 0 ? this.itemsList.length - 1 : key - 1;
    }
    this.focusSelectItem(index);
  }
  focusSelectItem(index) {
    const focusElem = this.element.querySelector(`#${this.htmlid}_${index}`);
    if (focusElem) {
      focusElem.focus();
    }
  }
  toggleSelectUl(selfFocusOnClose = false) {
    if (this.disabled || this.readonly) {
      return;
    }
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
    const clearIcon = cp.find((item) => item.classList && item.classList.contains("reset-icon"));
    if (clearIcon) {
      e.stopPropagation();
      return;
    }
    this.toggleSelectUl();
  }
  handleSelectFocus(e) {
    if (e instanceof KeyboardEvent && e.key === KeyboardCode.ESC) {
      e.stopPropagation();
      return this.toggleSelectUl(true);
    }
    if (e instanceof KeyboardEvent && e.key !== KeyboardCode.TAB && e.key !== KeyboardCode.ENTER) {
      return;
    }
    const tree = getElementTree(getClickedElement());
    const parent = tree.find((elem) => {
      return elem.nodeName.toLowerCase() === "z-input" && elem.id === `${this.htmlid}_input`;
    });
    if (!parent) {
      this.toggleSelectUl(e instanceof MouseEvent ? true : false);
    }
  }
  scrollToLetter(letter) {
    const foundItem = this.itemsList.find((item) => item.name.charAt(0) === letter);
    if (foundItem) {
      this.focusSelectItem(this.itemsList.indexOf(foundItem));
    }
  }
  renderInput() {
    return (h("z-input", { id: `${this.htmlid}_input`, htmlid: `${this.htmlid}_input`, placeholder: this.placeholder, value: !this.isOpen && this.selectedItem ? this.selectedItem.name.replace(/<[^>]+>/g, "") : null, label: this.label, "aria-label": this.ariaLabel, icon: this.isOpen ? "caret-up" : "caret-down", hasclearicon: this.hasAutocomplete(), message: false, disabled: this.disabled, readonly: this.readonly || (!this.hasAutocomplete() && this.isOpen), status: this.isOpen ? undefined : this.status, autocomplete: "off", onClick: (e) => {
        this.handleInputClick(e);
      }, onKeyUp: (e) => {
        if (e.keyCode !== 13) {
          e.preventDefault();
        }
        handleKeyboardSubmit(e, this.toggleSelectUl);
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
    return (h("div", { class: this.isOpen ? "open" : "closed", tabindex: "-1" }, h("div", { class: "ul-scroll-wrapper", tabindex: "-1" }, h("z-list", { role: "listbox", tabindex: this.disabled || this.readonly || !this.isOpen ? -1 : 0, id: this.htmlid, "aria-activedescendant": (_a = this.selectedItem) === null || _a === void 0 ? void 0 : _a.id, "aria-multiselectable": false, class: {
        disabled: this.disabled,
        readonly: this.readonly,
        filled: !!this.selectedItem,
        [`input-${this.status}`]: !this.isOpen && !!this.status,
      } }, this.hasGroupItems ? this.renderSelectGroupItems() : this.renderSelectUlItems()))));
  }
  renderSelectUlItems() {
    if (!this.itemsList.length) {
      return this.renderNoSearchResults();
    }
    return this.itemsList.map((item, key) => {
      return (h("z-list-element", { clickable: !item.disabled, disabled: item.disabled, dividerType: ListDividerType.ELEMENT, role: "option", tabindex: item.disabled || !this.isOpen ? -1 : 0, "aria-selected": !!item.selected, id: `${this.htmlid}_${key}`, onClickItem: () => this.selectItem(item, true), onKeyDown: (e) => this.arrowsSelectNav(e, key) }, h("span", { class: { selected: !!item.selected }, innerHTML: item.name })));
    });
  }
  renderSelectGroupItems() {
    if (!this.itemsList.length) {
      return this.renderNoSearchResults();
    }
    const newData = this.itemsList.reduce((group, item, index) => {
      var _a;
      const { category } = item;
      const zListItem = (h("z-list-element", { clickable: !item.disabled, disabled: item.disabled, dividerType: ListDividerType.HEADER, role: "option", tabindex: item.disabled || !this.isOpen ? -1 : 0, "aria-selected": !!item.selected, id: `${this.htmlid}_${index}`, onClickItem: () => this.selectItem(item, true), onKeyDown: (e) => this.arrowsSelectNav(e, index) }, h("span", { class: { selected: !!item.selected }, innerHTML: item.name })));
      group[category] = (_a = group[category]) !== null && _a !== void 0 ? _a : [];
      group[category].push(zListItem);
      return group;
    }, {});
    return Object.entries(newData).map(([key, value]) => {
      return (h("z-list-group", { "divider-type": ListDividerType.ELEMENT }, h("z-body", { class: "z-list-group-title", level: 3, slot: "header-title", variant: "semibold" }, key), value.map((item) => item)));
    });
  }
  renderNoSearchResults() {
    return (h("z-list-element", { color: "blue500", class: "no-results" }, h("z-icon", { name: "multiply-circle", fill: "blue500" }), this.noresultslabel));
  }
  renderMessage() {
    if (boolean(this.message) === false) {
      return;
    }
    return (h("z-input-message", { message: boolean(this.message) === true ? undefined : this.message, status: this.status }));
  }
  render() {
    return (h("div", { class: "select-wrapper" }, this.renderInput(), this.renderSelectUl(), this.renderMessage()));
  }
  get element() { return getElement(this); }
  static get watchers() { return {
    "items": ["watchItems"]
  }; }
};
ZSelect.style = stylesCss;

export { ZInputLabel as z_input_label, ZSelect as z_select };

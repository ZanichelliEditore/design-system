import { r as registerInstance, c as createEvent, h, H as Host } from './index-a2ca4b97.js';
import { k as ListDividerType, B as ButtonVariant } from './index-968a240f.js';
import { r as randomId, a as handleEnterKeydSubmit } from './utils-f2a0dac2.js';
import './breakpoints-c386984e.js';

const stylesCss = ":host{position:relative;z-index:5;display:block;width:inherit;height:44px;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div{position:absolute;z-index:10;display:grid;width:100%;gap:0 calc(var(--space-unit) * 2);grid-template-columns:auto;grid-template-rows:auto}:host>div.has-submit{grid-template-columns:auto min-content}:host>div.has-results{grid-template-rows:auto auto}:host>div>z-input{width:100%;grid-column:1;grid-row:1}:host>div>z-button{grid-column:2;grid-row:1}:host>div>div.results-wrapper{overflow:auto;padding:calc(var(--space-unit) / 4);padding-bottom:calc(var(--space-unit) / 4);border:var(--border-size-small) solid var(--color-surface03);border-top:none;margin-top:-1px;background:var(--color-surface01);grid-column:1;grid-row:2}:host>div>div.results-wrapper>div.results{overflow:auto;max-height:var(--z-searchbar-results-height, 540px);padding:var(--space-unit) calc(var(--space-unit) * 1.5);padding-bottom:calc(var(--space-unit) / 2);scrollbar-color:var(--color-primary01) transparent}:host>div>div.results-wrapper>div.results::-webkit-scrollbar{width:10px;background:linear-gradient(to right, transparent 0 3px, var(--gray200) 3px 7px, transparent 7px 10px);border-radius:var(--border-radius)}:host>div>div.results-wrapper>div.results::-webkit-scrollbar-track{background-color:transparent}:host>div>div.results-wrapper>div.results::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}:host>div>div.results-wrapper>div.results .category-heading{display:block;font-size:var(--font-size-2);font-weight:var(--font-rg);line-height:var(--font-size-3)}:host>div>div.results-wrapper>div.results .category-heading>*{display:block}:host>div>div.results-wrapper>div.results span.category-heading>span.category{color:var(--color-text05);font-style:italic}:host>div>div.results-wrapper>div.results span.category-heading>span.subcategory{margin-top:8px;color:var(--color-text01);text-transform:uppercase}:host>div>div.results-wrapper>div.results z-list-element{display:block}:host>div>div.results-wrapper>div.results z-list-element:focus{box-shadow:var(--shadow-focus-primary)}:host>div>div.results-wrapper>div.results .item{--z-icon-height:12px;--z-icon-width:12px;display:flex;flex-flow:row nowrap;align-content:stretch;align-items:flex-start;justify-content:flex-start;color:var(--color-text01);fill:var(--color-icon02);font-size:var(--font-size-2);line-height:var(--font-size-3)}:host>div>div.results-wrapper>div.results .item.ellipsis>span.item-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host>div>div.results-wrapper>div.results .item>span.item-label>mark,:host>div>div.results-wrapper>div.results .item>span.item-label>*>mark{background:var(--color-primary03)}:host>div>div.results-wrapper>div.results .item.has-category{padding-left:calc(var(--space-unit) * 3)}:host>div>div.results-wrapper>div.results .item>z-icon.item-icon{padding:2px 0;margin-right:calc(var(--space-unit) * 1.5)}:host>div>div.results-wrapper>div.results .item.item-search{--z-icon-height:16px;--z-icon-width:16px}:host>div>div.results-wrapper>div.results .item.item-search>z-icon{margin-right:var(--space-unit)}:host>div>div.results-wrapper>div.results .item-show-all{display:block;text-align:center}:host>div>div.results-wrapper>div.results .item-no-results{display:block;font-size:var(--font-size-2);font-style:italic;line-height:var(--font-size-5)}:host>div>div.results-wrapper>div.results .item-no-results>ul{padding-left:calc(var(--space-unit) * 2);margin:var(--space-unit)}@media (min-width: 768px){:host>div>div.results-wrapper>div.results .category-heading{font-size:var(--font-size-3);line-height:var(--font-size-6)}:host>div>div.results-wrapper>div.results .item{--z-icon-height:12px;--z-icon-width:12px;font-size:var(--font-size-3);line-height:var(--font-size-6)}:host>div>div.results-wrapper>div.results .item.item-search{--z-icon-height:18px;--z-icon-width:18px}:host>div>div.results-wrapper>div.results .item.item-search>z-icon{margin-top:calc(var(--space-unit) / 4)}:host>div>div.results-wrapper>div.results .item.ellipsis>span.item-label{height:24px}:host>div>div.results-wrapper>div.results .item>z-icon.item-icon{padding:6px 0}}@media (min-width: 1152px){:host>div>div.results-wrapper>div.results .item{cursor:pointer}:host>div>div.results-wrapper>div.results .item-no-results{cursor:default;font-size:var(--font-size-3);line-height:var(--font-size-6)}}";

const ZSearchbar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.searchSubmit = createEvent(this, "searchSubmit", 7);
    this.searchTyping = createEvent(this, "searchTyping", 7);
    this.searchItemClick = createEvent(this, "searchItemClick", 7);
    /** the id of the searchbar element */
    this.htmlid = `searchbar-${randomId()}`;
    /** Prevent submit action */
    this.preventSubmit = false;
    /** Show autocomplete results */
    this.autocomplete = false;
    /** Minimun number of characters to dispatch typing event */
    this.autocompleteMinChars = 3;
    /** Truncate results to single row */
    this.resultsEllipsis = true;
    /** Search helper text */
    this.searchHelperLabel = "Cerca {searchString}";
    /** Sort autocomplete results items */
    this.sortResultsItems = false;
    /** Show submit button */
    this.showSearchButton = false;
    this.searchString = "";
    this.currResultsCount = 0;
    this.showResults = false;
    this.resultsItemsList = null;
  }
  emitSearchSubmit() {
    this.searchSubmit.emit(this.inputRef.value);
  }
  emitSearchTyping(search) {
    this.searchTyping.emit(search);
  }
  emitSearchItemClick(item) {
    this.searchItemClick.emit(item);
  }
  watchItems() {
    this.resultsItemsList = this.getResultsItemsList();
  }
  watchResultsCount() {
    this.currResultsCount = this.resultsCount;
  }
  watchValue() {
    this.handleInput(this.value);
  }
  watchSearchString() {
    this.emitSearchTyping(this.searchString);
    if (!this.searchString) {
      this.currResultsCount = this.resultsCount;
    }
  }
  clickListener(e) {
    this.handleOutsideClick(e);
  }
  componentWillLoad() {
    this.resultsItemsList = this.getResultsItemsList();
    this.currResultsCount = this.resultsCount;
    this.handleInput(this.value);
  }
  getResultsItemsList() {
    return typeof this.resultsItems === "string" ? JSON.parse(this.resultsItems) : this.resultsItems;
  }
  getGroupedItems(items) {
    const groupedItems = {};
    items.forEach((item) => {
      var _a;
      const key = `${item === null || item === void 0 ? void 0 : item.category}${item === null || item === void 0 ? void 0 : item.subcategory}`;
      groupedItems[key] = (_a = groupedItems[key]) !== null && _a !== void 0 ? _a : {
        category: item === null || item === void 0 ? void 0 : item.category,
        subcategory: item === null || item === void 0 ? void 0 : item.subcategory,
        items: [],
      };
      groupedItems[key]["items"].push(item);
    });
    if (this.sortResultsItems) {
      return Object.keys(groupedItems)
        .sort()
        .reduce((obj, key) => {
        obj[key] = Object.assign(Object.assign({}, groupedItems[key]), { items: groupedItems[key]["items"].sort((a, b) => {
            const nameA = a.label.toUpperCase();
            const nameB = b.label.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          }) });
        return obj;
      }, {});
    }
    return groupedItems;
  }
  checkResultsCount(counter) {
    if (!this.currResultsCount || counter < this.currResultsCount) {
      return true;
    }
    return false;
  }
  handleStopTyping(e) {
    e.stopPropagation();
    this.handleInput(e.detail.value);
  }
  handleInput(value) {
    if ((value === null || value === void 0 ? void 0 : value.length) >= this.autocompleteMinChars) {
      this.searchString = value;
    }
    else if (this.searchString) {
      this.searchString = "";
    }
  }
  handleSubmit() {
    if (this.preventSubmit) {
      return;
    }
    this.emitSearchSubmit();
  }
  handleOutsideClick(e) {
    const cp = e.composedPath();
    const searchbar = cp.find((elem) => elem.nodeName === "Z-SEARCHBAR");
    if (!searchbar || searchbar.htmlid !== this.htmlid) {
      this.showResults = false;
      return;
    }
    if (cp.find((elem) => { var _a; return (elem === null || elem === void 0 ? void 0 : elem.nodeName) === "Z-INPUT" || ((_a = elem === null || elem === void 0 ? void 0 : elem.classList) === null || _a === void 0 ? void 0 : _a.contains("results")); })) {
      this.showResults = true;
      return;
    }
    this.showResults = false;
  }
  renderInput() {
    return (h("z-input", { ref: (val) => {
        this.inputRef = val;
      }, message: false, placeholder: this.placeholder, onStopTyping: (e) => this.handleStopTyping(e), onKeyUp: (e) => handleEnterKeydSubmit(e, () => this.handleSubmit()), value: this.value }));
  }
  renderButton() {
    if (!this.showSearchButton) {
      return null;
    }
    return (h("z-button", { disabled: this.preventSubmit, variant: ButtonVariant.PRIMARY, onClick: () => this.handleSubmit() }, "CERCA"));
  }
  renderResults() {
    if (!this.showResults ||
      !this.autocomplete ||
      !this.searchString ||
      this.searchString.length < this.autocompleteMinChars ||
      !this.resultsItemsList) {
      return null;
    }
    return (h("div", { class: "results-wrapper" }, h("div", { class: "results" }, this.renderResultsList())));
  }
  renderResultsList() {
    var _a, _b;
    if (this.preventSubmit && !((_a = this.resultsItemsList) === null || _a === void 0 ? void 0 : _a.length)) {
      return (h("span", { class: "item item-no-results" }, "Non abbiamo trovato risultati per ", h("b", null, this.searchString), h("br", null), h("br", null), "Cosa puoi fare?", h("ul", null, h("li", null, "Verificare di aver scritto bene"), h("li", null, "Provare a cercare un'altra parola"), h("li", null, "Provare a cercare qualcosa di pi\u00F9 generico"))));
    }
    return (h("z-list", { role: "listbox", id: `list-${this.htmlid}` }, this.renderSearchHelper(!!((_b = this.resultsItemsList) === null || _b === void 0 ? void 0 : _b.length)), this.renderItems(), this.renderShowAllResults()));
  }
  renderItems() {
    var _a;
    if (!((_a = this.resultsItemsList) === null || _a === void 0 ? void 0 : _a.length)) {
      return [];
    }
    const groupedItems = this.getGroupedItems(this.resultsItemsList);
    const listGroups = [];
    let counter = 0;
    Object.values(groupedItems).forEach((groupItem, index, array) => {
      if (this.checkResultsCount(counter)) {
        const listGroupsElements = [];
        groupItem.items.forEach((item, subindex, subarray) => {
          if (this.checkResultsCount(counter)) {
            const isLast = index === array.length - 1 && subindex === subarray.length - 1;
            listGroupsElements.push(this.renderItem(item, subindex, !isLast));
          }
          counter++;
        });
        if (listGroupsElements.length) {
          listGroups.push(h("z-list-group", { "divider-type": ListDividerType.ELEMENT }, this.renderItemCategory(groupItem), listGroupsElements));
        }
      }
    });
    return listGroups;
  }
  renderItem(item, key, divider) {
    return (h("z-list-element", { id: `list-item-${this.htmlid}-${key}`, role: "option", tabindex: 0, dividerType: divider ? ListDividerType.ELEMENT : undefined, clickable: true, onClickItem: () => this.emitSearchItemClick(item) }, h("span", { class: { "item": true, "ellipsis": this.resultsEllipsis, "has-category": !!item.category } }, (item === null || item === void 0 ? void 0 : item.icon) && (h("z-icon", { class: "item-icon", name: item.icon })), h("span", { class: "item-label", title: item.label, innerHTML: this.renderItemLabel(item.label) }))));
  }
  renderItemLabel(label) {
    if (!this.searchString) {
      return label;
    }
    return label.replace(new RegExp(this.searchString.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gmi"), (found) => `<mark>${found}</mark>`);
  }
  renderItemCategory(groupItem) {
    if (!(groupItem === null || groupItem === void 0 ? void 0 : groupItem.category)) {
      return null;
    }
    return (h("span", { class: "category-heading", slot: "header-title" }, h("span", { class: "category" }, groupItem.category), (groupItem === null || groupItem === void 0 ? void 0 : groupItem.subcategory) && h("span", { class: "subcategory" }, groupItem.subcategory)));
  }
  renderSearchHelper(hasDivider = true) {
    if (!this.autocomplete || this.preventSubmit || !this.searchString) {
      return null;
    }
    return (h("z-list-element", { role: "option", tabindex: 0, dividerType: hasDivider ? ListDividerType.ELEMENT : undefined, clickable: true, id: `list-item-${this.htmlid}-search`, onClickItem: () => this.emitSearchSubmit() }, h("span", { class: "item item-search" }, h("z-icon", { class: "search-icon", name: "left-magnifying-glass" }), h("span", { class: "item-label", innerHTML: this.searchHelperLabel.replace("{searchString}", `<mark>${this.searchString}</mark>`) }))));
  }
  renderShowAllResults() {
    var _a, _b;
    if (!this.currResultsCount ||
      !this.searchString ||
      !((_a = this.resultsItemsList) === null || _a === void 0 ? void 0 : _a.length) ||
      this.currResultsCount >= ((_b = this.resultsItemsList) === null || _b === void 0 ? void 0 : _b.length)) {
      return null;
    }
    return (h("z-list-element", { role: "option", tabindex: 0, clickable: true, id: `list-item-${this.htmlid}-show-all`, onClickItem: () => (this.currResultsCount = 0) }, h("span", { class: "item-show-all" }, h("z-link", null, "Vedi tutti i risultati"))));
  }
  render() {
    return (h(Host, { onFocus: () => (this.showResults = true), onClick: (e) => this.handleOutsideClick(e) }, h("div", { class: { "has-submit": this.showSearchButton, "has-results": this.autocomplete } }, this.renderInput(), this.renderResults(), this.renderButton())));
  }
  static get watchers() { return {
    "resultsItems": ["watchItems"],
    "resultsCount": ["watchResultsCount"],
    "value": ["watchValue"],
    "searchString": ["watchSearchString"]
  }; }
};
ZSearchbar.style = stylesCss;

export { ZSearchbar as z_searchbar };

import { h, Host } from "@stencil/core";
import { ButtonVariant, ListDividerType } from "../../../beans";
import { handleKeyboardSubmit, randomId } from "../../../utils/utils";
/**
 * @cssprop --z-searchbar-results-height - Max height of the results container (default: 540px)
 */
export class ZSearchbar {
  constructor() {
    /** the id of the searchbar element */
    this.htmlid = `searchbar-${randomId()}`;
    /** Show simple input without submit button */
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
    this.searchString = "";
    this.currResultsCount = 0;
    this.showResults = false;
    this.resultsItemsList = null;
  }
  emitSearchSubmit() {
    this.searchSubmit.emit(this.searchString);
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
    return (h("z-input", { message: false, placeholder: this.placeholder, onStopTyping: (e) => this.handleStopTyping(e), onKeyUp: (e) => handleKeyboardSubmit(e, () => this.handleSubmit()), value: this.value }));
  }
  renderButton() {
    if (this.preventSubmit) {
      return null;
    }
    return (h("z-button", { variant: ButtonVariant.PRIMARY, onClick: () => this.handleSubmit() }, "CERCA"));
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
      return (h("span", { class: "item item-no-results" }, "La tua ricerca ", h("b", null, this.searchString), " non ha generato risultati.", h("br", null), h("br", null), "Alcuni suggerimenti:", h("ul", null, h("li", null, "Verifica di aver scritto correttamente"), h("li", null, "Prova una diversa chiave di ricerca"), h("li", null, "Prova una ricerca pi\u00F9 generica"))));
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
    return label.replace(new RegExp(this.searchString, "gmi"), (found) => `<mark>${found}</mark>`);
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
    return (h(Host, { onFocus: () => (this.showResults = true), onClick: (e) => this.handleOutsideClick(e) }, h("div", { class: { "has-submit": !this.preventSubmit, "has-results": this.autocomplete } }, this.renderInput(), this.renderResults(), this.renderButton())));
  }
  static get is() { return "z-searchbar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["styles.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["styles.css"]
    };
  }
  static get properties() {
    return {
      "htmlid": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "the id of the searchbar element"
        },
        "attribute": "htmlid",
        "reflect": true,
        "defaultValue": "`searchbar-${randomId()}`"
      },
      "preventSubmit": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Show simple input without submit button"
        },
        "attribute": "prevent-submit",
        "reflect": false,
        "defaultValue": "false"
      },
      "value": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Input search string"
        },
        "attribute": "value",
        "reflect": false
      },
      "placeholder": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Search input placeholder"
        },
        "attribute": "placeholder",
        "reflect": false
      },
      "autocomplete": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Show autocomplete results"
        },
        "attribute": "autocomplete",
        "reflect": false,
        "defaultValue": "false"
      },
      "autocompleteMinChars": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Minimun number of characters to dispatch typing event"
        },
        "attribute": "autocomplete-min-chars",
        "reflect": false,
        "defaultValue": "3"
      },
      "resultsCount": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Number of results shown - default all"
        },
        "attribute": "results-count",
        "reflect": false
      },
      "resultsEllipsis": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Truncate results to single row"
        },
        "attribute": "results-ellipsis",
        "reflect": false,
        "defaultValue": "true"
      },
      "searchHelperLabel": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Search helper text"
        },
        "attribute": "search-helper-label",
        "reflect": false,
        "defaultValue": "\"Cerca {searchString}\""
      },
      "resultsItems": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "SearchbarItem[] | string",
          "resolved": "SearchbarItem[] | string",
          "references": {
            "SearchbarItem": {
              "location": "import",
              "path": "../../../beans"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Autocomplete results items"
        },
        "attribute": "results-items",
        "reflect": false
      },
      "sortResultsItems": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Sort autocomplete results items"
        },
        "attribute": "sort-results-items",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "searchString": {},
      "currResultsCount": {},
      "showResults": {}
    };
  }
  static get events() {
    return [{
        "method": "searchSubmit",
        "name": "searchSubmit",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted on search submit, return search string"
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }, {
        "method": "searchTyping",
        "name": "searchTyping",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted on search typing, return search string"
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }, {
        "method": "searchItemClick",
        "name": "searchItemClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted on search result click, return item"
        },
        "complexType": {
          "original": "SearchbarItem",
          "resolved": "{ label: string; id?: string; icon?: string; category?: string; subcategory?: string; }",
          "references": {
            "SearchbarItem": {
              "location": "import",
              "path": "../../../beans"
            }
          }
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "resultsItems",
        "methodName": "watchItems"
      }, {
        "propName": "resultsCount",
        "methodName": "watchResultsCount"
      }, {
        "propName": "value",
        "methodName": "watchValue"
      }, {
        "propName": "searchString",
        "methodName": "watchSearchString"
      }];
  }
  static get listeners() {
    return [{
        "name": "click",
        "method": "clickListener",
        "target": "document",
        "capture": false,
        "passive": false
      }];
  }
}

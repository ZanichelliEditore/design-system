import { h } from "@stencil/core";
import { ListDividerType, KeyboardCode } from "../../../beans";
import { randomId, handleKeyboardSubmit, getClickedElement, getElementTree, boolean } from "../../../utils/utils";
export class ZSelect {
  constructor() {
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
    /** When fixed, it occupies space and pushes down next elements. */
    this.isfixed = false;
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
  emitResetSelect() {
    this.resetSelect.emit({
      id: this.htmlid,
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
    const showResetIcon = this.resetItem && !!this.selectedItem;
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
    if (this.resetItem) {
      if (e.key === KeyboardCode.ARROW_DOWN) {
        index = key + 1 === this.itemsList.length + 1 ? +!showResetIcon : key + 1;
      }
      else if (e.key === KeyboardCode.ARROW_UP) {
        index = key <= +!showResetIcon ? this.itemsList.length : key - 1;
      }
    }
    if (!this.resetItem) {
      if (e.key === KeyboardCode.ARROW_DOWN) {
        index = key + 1 === this.itemsList.length ? 0 : key + 1;
      }
      else if (e.key === KeyboardCode.ARROW_UP) {
        index = key <= 0 ? this.itemsList.length - 1 : key - 1;
      }
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
    return (h("z-input", { class: {
        "active-select": this.isOpen,
        "cursor-select": !this.autocomplete,
      }, id: `${this.htmlid}_input`, htmlid: `${this.htmlid}_input`, placeholder: this.placeholder, value: !this.isOpen && this.selectedItem ? this.selectedItem.name.replace(/<[^>]+>/g, "") : null, label: this.label, "aria-label": this.ariaLabel, icon: this.isOpen ? "caret-up" : "caret-down", hasclearicon: this.hasAutocomplete(), message: false, disabled: this.disabled, readonly: this.readonly || (!this.hasAutocomplete() && this.isOpen), status: this.isOpen ? undefined : this.status, autocomplete: "off", onClick: (e) => {
        this.handleInputClick(e);
      }, onKeyUp: (e) => {
        if (e.keyCode !== 13) {
          e.preventDefault();
        }
        handleKeyboardSubmit(e, this.toggleSelectUl);
      }, onKeyDown: (e) => {
        return this.arrowsSelectNav(e, this.selectedItem ? this.itemsList.indexOf(this.selectedItem) : this.resetItem ? 0 : -1);
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
    return (h("div", { class: this.isOpen ? "open" : "closed", tabindex: "-1" }, h("div", { class: {
        "ul-scroll-wrapper": true,
        "fixed": this.isfixed,
      }, tabindex: "-1" }, h("z-list", { role: "listbox", tabindex: this.disabled || this.readonly || !this.isOpen ? -1 : 0, id: this.htmlid, "aria-activedescendant": (_a = this.selectedItem) === null || _a === void 0 ? void 0 : _a.id, "aria-multiselectable": false, class: {
        disabled: this.disabled,
        readonly: this.readonly,
        filled: !!this.selectedItem,
        [`input-${this.status}`]: !this.isOpen && !!this.status,
      } }, this.resetItem && this.renderResetItem(), this.renderSelectUlItems()))));
  }
  renderResetItem() {
    return (h("z-list-element", { class: {
        "hide": !this.selectedItem || !this.resetItem,
        "reset-item": true,
        "reset-item-margin": !this.hasGroupItems,
      }, clickable: true, disabled: false, dividerType: ListDividerType.ELEMENT, role: "option", tabindex: "0", "aria-selected": "false", id: `${this.htmlid}_${this.resetItem ? "0" : "none"}`, onClickItem: () => {
        this.selectedItem = null;
        this.searchString = null;
        this.emitResetSelect();
      }, onKeyDown: (e) => this.arrowsSelectNav(e, 0) }, h("div", { class: "reset-item-content" }, h("z-icon", { name: "multiply-circled" }), h("span", null, this.resetItem))));
  }
  renderItem(item, key, lastItem) {
    return (h("z-list-element", { clickable: !item.disabled, disabled: item.disabled, dividerType: lastItem ? ListDividerType.HEADER : ListDividerType.ELEMENT, role: "option", tabindex: item.disabled || !this.isOpen ? -1 : 0, "aria-selected": !!item.selected, id: `${this.htmlid}_${key}`, onClickItem: () => this.selectItem(item, true), onKeyDown: (e) => this.arrowsSelectNav(e, key) }, h("span", { class: {
        "selected": !!item.selected,
        "list-element-content": true,
      }, innerHTML: item.name })));
  }
  renderSelectUlItems() {
    if (!this.itemsList.length) {
      return this.renderNoSearchResults();
    }
    if (this.hasGroupItems) {
      return this.renderSelectGroupItems();
    }
    return this.itemsList.map((item, key, array) => {
      const lastItem = array.length === key + 1;
      const itemKey = this.resetItem ? key + 1 : key;
      return this.renderItem(item, itemKey, lastItem);
    });
  }
  renderSelectGroupItems() {
    const newData = this.itemsList.reduce((group, item, index, array) => {
      var _a;
      const { category } = item;
      const lastItem = array.length === index + 1;
      const itemKey = this.resetItem ? index + 1 : index;
      const zListItem = this.renderItem(item, itemKey, lastItem);
      group[category] = (_a = group[category]) !== null && _a !== void 0 ? _a : [];
      group[category].push(zListItem);
      return group;
    }, {});
    return Object.entries(newData).map(([key, value]) => {
      return (h("z-list-group", { "divider-type": ListDividerType.ELEMENT }, h("span", { class: "body-3-sb z-list-group-title", slot: "header-title" }, key), value.map((item) => item)));
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
  static get is() { return "z-select"; }
  static get encapsulation() { return "scoped"; }
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
          "text": "the id of the input element"
        },
        "attribute": "htmlid",
        "reflect": false,
        "defaultValue": "`id-${randomId()}`"
      },
      "items": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "SelectItem[] | string",
          "resolved": "SelectItem[] | string",
          "references": {
            "SelectItem": {
              "location": "import",
              "path": "../../../beans"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "the input select options"
        },
        "attribute": "items",
        "reflect": false
      },
      "name": {
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
          "text": "the input name"
        },
        "attribute": "name",
        "reflect": false
      },
      "label": {
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
          "text": "the input label"
        },
        "attribute": "label",
        "reflect": false
      },
      "ariaLabel": {
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
          "text": "the input aria-label"
        },
        "attribute": "aria-label",
        "reflect": false,
        "defaultValue": "\"\""
      },
      "disabled": {
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
          "text": "the input is disabled"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "readonly": {
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
          "text": "the input is readonly"
        },
        "attribute": "readonly",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "the input placeholder (optional)"
        },
        "attribute": "placeholder",
        "reflect": false
      },
      "htmltitle": {
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
          "text": "the input html title (optional)"
        },
        "attribute": "htmltitle",
        "reflect": false
      },
      "status": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "InputStatus",
          "resolved": "InputStatus.ERROR | InputStatus.SUCCESS | InputStatus.WARNING",
          "references": {
            "InputStatus": {
              "location": "import",
              "path": "../../../beans"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "the input status (optional)"
        },
        "attribute": "status",
        "reflect": false
      },
      "message": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "string | boolean",
          "resolved": "boolean | string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "input helper message (optional) - if set to `false` message won't be displayed"
        },
        "attribute": "message",
        "reflect": false,
        "defaultValue": "true"
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
          "text": "the input has autocomplete option"
        },
        "attribute": "autocomplete",
        "reflect": false,
        "defaultValue": "false"
      },
      "noresultslabel": {
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
          "text": "no result text message"
        },
        "attribute": "noresultslabel",
        "reflect": false,
        "defaultValue": "\"Nessun risultato\""
      },
      "hasGroupItems": {
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
          "text": ""
        },
        "attribute": "has-group-items",
        "reflect": false
      },
      "isfixed": {
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
          "text": "When fixed, it occupies space and pushes down next elements."
        },
        "attribute": "isfixed",
        "reflect": false,
        "defaultValue": "false"
      },
      "resetItem": {
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
          "text": ""
        },
        "attribute": "reset-item",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "isOpen": {},
      "selectedItem": {},
      "searchString": {}
    };
  }
  static get events() {
    return [{
        "method": "optionSelect",
        "name": "optionSelect",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted on select option selection, returns select id, selected item id"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "resetSelect",
        "name": "resetSelect",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted on reset selected item, returns select id, selected item id"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "getSelectedItem": {
        "complexType": {
          "signature": "() => Promise<SelectItem>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "SelectItem": {
              "location": "import",
              "path": "../../../beans"
            }
          },
          "return": "Promise<SelectItem>"
        },
        "docs": {
          "text": "get the input selected options",
          "tags": []
        }
      },
      "getValue": {
        "complexType": {
          "signature": "() => Promise<string>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<string>"
        },
        "docs": {
          "text": "get the input value",
          "tags": []
        }
      },
      "setValue": {
        "complexType": {
          "signature": "(value: string | string[]) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "SelectItem": {
              "location": "import",
              "path": "../../../beans"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "set the input value",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "element"; }
  static get watchers() {
    return [{
        "propName": "items",
        "methodName": "watchItems"
      }];
  }
}

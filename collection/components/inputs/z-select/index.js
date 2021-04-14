import { Component, Prop, State, h, Event, Watch, Element, Method } from "@stencil/core";
import { keybordKeyCodeEnum, InputStatusEnum } from "../../../beans";
import { randomId, handleKeyboardSubmit, getClickedElement, getElementTree } from "../../../utils/utils";
export class ZSelect {
  constructor() {
    /** the id of the input element */
    this.htmlid = randomId();
    /** the input is disabled */
    this.disabled = false;
    /** the input is readonly */
    this.readonly = false;
    /** show input helper message (optional): available for text, password, number, email, textarea, select */
    this.hasmessage = true;
    /** the input has autocomplete option */
    this.autocomplete = false;
    /** multiple options can be selected */
    this.multiple = false;
    /** no result text message */
    this.noresultslabel = "Nessun risultato";
    this.isOpen = false;
    this.itemsList = [];
    this.toggleSelectUl = this.toggleSelectUl.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.handleSelectFocus = this.handleSelectFocus.bind(this);
  }
  watchItems() {
    this.itemsList = this.getInitialItemsArray();
    typeof this.items === "string" ? JSON.parse(this.items) : this.items;
    this.selectedItems = this.itemsList.filter((item) => item.selected);
  }
  /** get the input selected options */
  async getSelectedItems() {
    return this.selectedItems;
  }
  /** get the input value */
  async getValue() {
    return this.getSelectedValues();
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
    this.selectedItems = this.itemsList.filter((item) => values.includes(item.id));
  }
  emitOptionSelect() {
    this.optionSelect.emit({
      id: this.htmlid,
      selected: this.getSelectedValues()
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
  mapSelectedItemsToItemsArray() {
    const initialItemsList = this.getInitialItemsArray();
    return initialItemsList.map((item) => {
      const found = this.selectedItems.find((selected) => selected.id === item.id);
      item.selected = !!found;
      return item;
    });
  }
  getSelectedValues() {
    if (this.multiple) {
      return this.selectedItems.map((item) => item.id);
    }
    if (!this.multiple && this.selectedItems.length) {
      return this.selectedItems[0].id;
    }
    return null;
  }
  filterItems(searchString) {
    const prevList = this.mapSelectedItemsToItemsArray();
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
          item.name.substring(start, end).bold() +
          item.name.substring(end, item.name.length);
        item.name = newName;
        return item;
      });
    }
  }
  handleInputChange(e) {
    this.searchString = e.detail.value;
    if (!this.isOpen)
      this.toggleSelectUl();
  }
  selectItem(item, selected) {
    if (item && item.disabled)
      return;
    this.itemsList = this.mapSelectedItemsToItemsArray();
    this.itemsList = this.itemsList.map((i) => {
      if (!this.multiple)
        i.selected = false;
      if (i.id === (item ? item.id : null))
        i.selected = selected;
      return i;
    });
    this.selectedItems = this.itemsList.filter((item) => item.selected);
    this.emitOptionSelect();
    if (this.searchString)
      this.searchString = null;
  }
  arrowsSelectNav(e, key) {
    const arrows = [keybordKeyCodeEnum.ARROW_DOWN, keybordKeyCodeEnum.ARROW_UP];
    if (!arrows.includes(e.keyCode))
      return;
    e.preventDefault();
    e.stopPropagation();
    if (!this.isOpen)
      this.toggleSelectUl();
    let index;
    if (e.keyCode === keybordKeyCodeEnum.ARROW_DOWN) {
      index = key + 1 === this.itemsList.length ? 0 : key + 1;
    }
    else if (e.keyCode === keybordKeyCodeEnum.ARROW_UP) {
      index = key <= 0 ? this.itemsList.length - 1 : key - 1;
    }
    this.focusSelectItem(index);
  }
  focusSelectItem(index) {
    const focusElem = this.hostElement.shadowRoot.getElementById(`${this.htmlid}_${index}`);
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
        this.hostElement.shadowRoot
          .getElementById(`${this.htmlid}_input`)
          .focus();
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
    if (e instanceof KeyboardEvent && e.keyCode === keybordKeyCodeEnum.ESC) {
      e.stopPropagation();
      return this.toggleSelectUl(true);
    }
    if (e instanceof KeyboardEvent &&
      e.keyCode !== keybordKeyCodeEnum.TAB &&
      e.keyCode !== keybordKeyCodeEnum.ENTER) {
      return;
    }
    const tree = getElementTree(getClickedElement());
    const parent = tree.find((elem) => {
      return ((elem.nodeName.toLowerCase() === "z-input" &&
        elem.id === `${this.htmlid}_input`) ||
        (this.multiple &&
          elem.nodeName.toLowerCase() === "ul" &&
          elem.id === this.htmlid));
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
  renderLabel() {
    if (!this.label)
      return;
    return (h("z-input-label", { value: this.label, disabled: this.disabled, "aria-label": this.label, id: `${this.htmlid}_input_label` }));
  }
  renderInput() {
    return (h("z-input", { id: `${this.htmlid}_input`, htmlid: `${this.htmlid}_input`, placeholder: this.placeholder, value: !this.isOpen && !this.multiple && this.selectedItems.length
        ? this.selectedItems[0].name.replace(/<[^>]+>/g, "")
        : null, icon: this.isOpen ? "caret-up" : "caret-down", hasclearicon: this.autocomplete, hasmessage: false, disabled: this.disabled, readonly: this.readonly || (!this.autocomplete && this.isOpen), status: this.isOpen ? InputStatusEnum.selecting : this.status, onClick: (e) => {
        this.handleInputClick(e);
      }, onKeyUp: (e) => {
        if (e.keyCode !== 13)
          e.preventDefault();
        handleKeyboardSubmit(e, this.toggleSelectUl);
      }, onKeyDown: (e) => this.arrowsSelectNav(e, this.selectedItems.length
        ? this.itemsList.indexOf(this.selectedItems[0])
        : -1), onInputChange: (e) => {
        this.handleInputChange(e);
      }, onKeyPress: (e) => {
        if (!this.autocomplete) {
          e.preventDefault();
          this.scrollToLetter(String.fromCharCode(e.keyCode));
        }
      } }));
  }
  renderChips() {
    if (!this.multiple || !this.selectedItems.length)
      return;
    return (h("div", { class: `chipsWrapper ${this.isOpen ? "open" : ""}` }, this.selectedItems.map((item) => (h("z-button-filter", { filterid: item.id, filtername: item.name.replace(/<[^>]+>/g, ""), issmall: true, onRemovefilter: () => this.selectItem(item, false) })))));
  }
  renderSelectUl() {
    return (h("div", { class: this.isOpen ? "open" : "closed" },
      h("div", { class: "ulScrollWrapper" },
        h("ul", { role: "listbox", tabindex: this.disabled || this.readonly || !this.isOpen ? -1 : 0, id: this.htmlid, "aria-activedescendant": !this.multiple && this.selectedItems.length
            ? this.selectedItems[0].id
            : null, "aria-multiselectable": !!this.multiple, class: `
            ${this.disabled ? " disabled" : ""}
            ${this.readonly ? " readonly" : ""}
            ${!this.isOpen && this.status
            ? " input_" + this.status
            : " input_default"}
            ${this.selectedItems.length ? " filled" : ""}
          ` }, this.renderSelectUlItems()))));
  }
  renderSelectUlItems() {
    if (!this.itemsList.length)
      return this.renderNoSearchResults();
    return this.itemsList.map((item, key) => {
      return (h("li", { role: "option", tabindex: item.disabled || !this.isOpen ? -1 : 0, "aria-selected": !!item.selected, class: item.disabled && "disabled", id: `${this.htmlid}_${key}`, onClick: () => this.selectItem(item, true), onKeyUp: (e) => handleKeyboardSubmit(e, this.selectItem, item, true), onKeyDown: (e) => this.arrowsSelectNav(e, key) },
        h("span", { innerHTML: item.name })));
    });
  }
  renderNoSearchResults() {
    return (h("li", { class: "noResults" },
      h("z-icon", { name: "circle-cross-stroke" }),
      this.noresultslabel));
  }
  renderMessage() {
    if (!this.hasmessage)
      return;
    return h("z-input-message", { message: this.message, status: this.status });
  }
  render() {
    return (h("div", { class: "selectWrapper" },
      this.renderLabel(),
      this.renderChips(),
      this.renderInput(),
      this.renderSelectUl(),
      this.renderMessage()));
  }
  static get is() { return "z-select"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
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
      "defaultValue": "randomId()"
    },
    "items": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "SelectItemBean[] | string",
        "resolved": "SelectItemBean[] | string",
        "references": {
          "SelectItemBean": {
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
        "original": "InputStatusBean",
        "resolved": "\"error\" | \"selecting\" | \"success\" | \"warning\"",
        "references": {
          "InputStatusBean": {
            "location": "import",
            "path": "../../../beans"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "the input status (optional): available for text, password, number, email, textarea, select"
      },
      "attribute": "status",
      "reflect": false
    },
    "hasmessage": {
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
        "text": "show input helper message (optional): available for text, password, number, email, textarea, select"
      },
      "attribute": "hasmessage",
      "reflect": false,
      "defaultValue": "true"
    },
    "message": {
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
        "text": "input helper message (optional): available for text, password, number, email, textarea, select"
      },
      "attribute": "message",
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
        "text": "the input has autocomplete option"
      },
      "attribute": "autocomplete",
      "reflect": false,
      "defaultValue": "false"
    },
    "multiple": {
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
        "text": "multiple options can be selected"
      },
      "attribute": "multiple",
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
    }
  }; }
  static get states() { return {
    "isOpen": {},
    "selectedItems": {},
    "searchString": {}
  }; }
  static get events() { return [{
      "method": "optionSelect",
      "name": "optionSelect",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted on select option selection, returns select id, selected item id (or array of selected items ids if multiple)"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "getSelectedItems": {
      "complexType": {
        "signature": "() => Promise<SelectItemBean[]>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "SelectItemBean": {
            "location": "import",
            "path": "../../../beans"
          }
        },
        "return": "Promise<SelectItemBean[]>"
      },
      "docs": {
        "text": "get the input selected options",
        "tags": []
      }
    },
    "getValue": {
      "complexType": {
        "signature": "() => Promise<string | string[]>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<string | string[]>"
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
          "SelectItemBean": {
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
  }; }
  static get elementRef() { return "hostElement"; }
  static get watchers() { return [{
      "propName": "items",
      "methodName": "watchItems"
    }]; }
}

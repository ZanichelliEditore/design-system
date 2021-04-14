import { Component, Prop, h, State, Listen, Watch, Event } from "@stencil/core";
import { InputTypeEnum, keybordKeyCodeEnum } from "../../../beans";
import { handleKeyboardSubmit } from "../../../utils/utils";
export class ZCombobox {
  constructor() {
    /** show search input flag (optional) */
    this.hassearch = false;
    /** no result text message */
    this.noresultslabel = "Nessun risultato";
    /** toggle combo list opening flag */
    this.isopen = true;
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
    this.inputType = InputTypeEnum.text;
    this.closeComboBox = this.closeComboBox.bind(this);
    this.closeFilterItems = this.closeFilterItems.bind(this);
  }
  watchItems() {
    this.itemsList =
      typeof this.items === "string" ? JSON.parse(this.items) : this.items;
    this.selectedCounter = this.itemsList.filter(item => item.checked).length;
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
    this.selectedCounter = this.itemsList.filter(item => item.checked).length;
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
    this.renderItemsList = this.renderItemsList.filter(item => {
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
  closeComboBox() {
    this.isopen = !this.isopen;
  }
  renderHeader() {
    return (h("div", { class: "header", onClick: () => this.closeComboBox(), onKeyDown: (ev) => {
        if (ev.keyCode === keybordKeyCodeEnum.SPACE)
          ev.preventDefault();
      }, onKeyUp: (ev) => handleKeyboardSubmit(ev, this.closeComboBox), role: "button", tabindex: 0 },
      h("h2", null,
        this.label,
        h("span", null, this.selectedCounter > 0 && ` (${this.selectedCounter})`)),
      h("z-icon", { name: "caret-down", width: 18, height: 18 })));
  }
  renderContent() {
    if (!this.isopen)
      return;
    return (h("div", { class: "openComboData" },
      this.hassearch && this.renderSearchInput(),
      this.hascheckall && this.renderCheckAll(),
      this.renderItems()));
  }
  renderItems() {
    if (!this.isopen)
      return;
    return (h("div", { class: this.searchValue && "search", tabindex: -1 },
      this.renderList(this.renderItemsList),
      this.searchValue && this.renderCloseButton()));
  }
  renderList(items) {
    if (!items)
      return;
    if (!items.length && this.searchValue)
      return this.renderNoSearchResults();
    return (h("ul", null, items.map((item, i) => {
      return (h("z-list-item", { id: item.id, listitemid: item.id, action: `combo-li-${this.inputid}`, underlined: i === items.length - 1 ? false : true },
        h("z-input", { type: InputTypeEnum.checkbox, checked: item.checked, htmlid: `combo-checkbox-${this.inputid}-${item.id}`, label: item.name, disabled: !item.checked &&
            this.maxcheckableitems &&
            this.maxcheckableitems === this.selectedCounter })));
    })));
  }
  renderNoSearchResults() {
    return (h("ul", null,
      h("z-list-item", { id: "no-results", text: this.noresultslabel, listitemid: "no-results", icon: "multiply-circle" })));
  }
  renderCloseButton() {
    return (h("div", null,
      h("a", { onClick: () => this.closeFilterItems(), onKeyUp: (e) => handleKeyboardSubmit(e, this.closeFilterItems), role: "button", tabindex: 0 }, this.closesearchtext)));
  }
  renderSearchInput() {
    if (!this.isopen)
      return;
    return (h("z-input", { htmlid: `${this.inputid}_search`, label: this.searchlabel, placeholder: this.searchplaceholder, htmltitle: this.searchtitle, type: this.inputType, value: this.searchValue, hasmessage: false, onInputChange: (e) => {
        if (e.detail.keycode === 27)
          return this.closeFilterItems();
        this.filterItems(e.detail.value);
      } }));
  }
  renderCheckAll() {
    if (this.searchValue)
      return;
    const allChecked = this.selectedCounter === this.itemsList.length;
    return (h("div", { class: "checkAllWrapper" },
      h("z-input", { type: InputTypeEnum.checkbox, checked: allChecked, htmlid: `combo-checkbox-${this.inputid}-check-all`, label: allChecked ? this.uncheckalltext : this.checkalltext, disabled: this.maxcheckableitems &&
          this.maxcheckableitems < this.itemsList.length })));
  }
  render() {
    return (h("div", { "data-action": `combo-${this.inputid}`, class: `${this.isopen && "open"} ${this.isfixed && "fixed"}`, id: this.inputid },
      this.renderHeader(),
      this.renderContent()));
  }
  static get is() { return "z-combobox"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "inputid": {
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
        "text": "input unique id"
      },
      "attribute": "inputid",
      "reflect": false
    },
    "items": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ComboItemBean[] | string",
        "resolved": "ComboItemBean[] | string",
        "references": {
          "ComboItemBean": {
            "location": "import",
            "path": "../../../beans"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "list items array"
      },
      "attribute": "items",
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": "label text"
      },
      "attribute": "label",
      "reflect": false
    },
    "hassearch": {
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
        "text": "show search input flag (optional)"
      },
      "attribute": "hassearch",
      "reflect": false,
      "defaultValue": "false"
    },
    "searchlabel": {
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
        "text": "search input label text (optional)"
      },
      "attribute": "searchlabel",
      "reflect": false
    },
    "searchplaceholder": {
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
        "text": "search input placeholder text (optional)"
      },
      "attribute": "searchplaceholder",
      "reflect": false
    },
    "searchtitle": {
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
        "text": "search input title text (optional)"
      },
      "attribute": "searchtitle",
      "reflect": false
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
    "isopen": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "toggle combo list opening flag"
      },
      "attribute": "isopen",
      "reflect": false,
      "defaultValue": "true"
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": "fixed style flag"
      },
      "attribute": "isfixed",
      "reflect": false,
      "defaultValue": "false"
    },
    "closesearchtext": {
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
        "text": "close combobox list text"
      },
      "attribute": "closesearchtext",
      "reflect": false,
      "defaultValue": "\"Chiudi\""
    },
    "hascheckall": {
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
        "text": "show \"check all\" checkbox (optional)"
      },
      "attribute": "hascheckall",
      "reflect": false,
      "defaultValue": "false"
    },
    "checkalltext": {
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
        "text": "check all label (optional)"
      },
      "attribute": "checkalltext",
      "reflect": false,
      "defaultValue": "\"Seleziona tutti\""
    },
    "uncheckalltext": {
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
        "text": "uncheck all label (optional)"
      },
      "attribute": "uncheckalltext",
      "reflect": false,
      "defaultValue": "\"Deseleziona tutti\""
    },
    "maxcheckableitems": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "max number of checkable items (0 = unlimited)"
      },
      "attribute": "maxcheckableitems",
      "reflect": false,
      "defaultValue": "0"
    }
  }; }
  static get states() { return {
    "searchValue": {},
    "selectedCounter": {},
    "renderItemsList": {}
  }; }
  static get events() { return [{
      "method": "comboboxChange",
      "name": "comboboxChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when value is checked/unchecked. Returns id, items."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get watchers() { return [{
      "propName": "items",
      "methodName": "watchItems"
    }]; }
  static get listeners() { return [{
      "name": "inputCheck",
      "method": "inputCheckListener",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}

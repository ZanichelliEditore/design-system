import { h } from "@stencil/core";
import { InputType, KeyboardKeyCode, ListDividerType } from "../../../beans";
import { handleKeyboardSubmit } from "../../../utils/utils";
export class ZCombobox {
  constructor() {
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
      }, onKeyUp: (ev) => handleKeyboardSubmit(ev, this.toggleComboBox), role: "button", tabindex: 0 }, h("p", { class: "body-3" }, this.label, h("span", null, this.selectedCounter > 0 && ` (${this.selectedCounter})`)), h("z-icon", { name: "caret-down", width: 18, height: 18 })));
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
    return (h("z-myz-list-item", { id: item.id, listitemid: item.id, action: `combo-li-${this.inputid}`, underlined: index !== length - 1 }, h("z-input", { type: InputType.CHECKBOX, checked: item.checked, htmlid: `combo-checkbox-${this.inputid}-${item.id}`, label: item.name, disabled: !item.checked && this.maxcheckableitems && this.maxcheckableitems === this.selectedCounter })));
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
    return (h("ul", null, h("z-myz-list-item", { id: "no-results", text: this.noresultslabel, listitemid: "no-results", icon: "multiply-circle" })));
  }
  renderCloseButton() {
    return (h("div", null, h("a", { onClick: () => this.closeFilterItems(), onKeyUp: (e) => handleKeyboardSubmit(e, this.closeFilterItems), role: "button", tabindex: 0 }, this.closesearchtext)));
  }
  renderSearchInput() {
    if (!this.isopen) {
      return;
    }
    return (h("z-input", { htmlid: `${this.inputid}_search`, label: this.searchlabel, placeholder: this.searchplaceholder, htmltitle: this.searchtitle, type: this.inputType, value: this.searchValue, message: false, onInputChange: (e) => {
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
    return (h("div", { class: "check-all-wrapper" }, h("z-input", { type: InputType.CHECKBOX, checked: allChecked, htmlid: `combo-checkbox-${this.inputid}-check-all`, label: allChecked ? this.uncheckalltext : this.checkalltext, disabled: this.maxcheckableitems && this.maxcheckableitems < this.itemsList.length })));
  }
  render() {
    return (h("div", { "data-action": `combo-${this.inputid}`, class: { open: this.isopen, fixed: this.isfixed, disabled: this.disabled }, id: this.inputid }, this.renderHeader(), !this.disabled && this.renderContent()));
  }
  static get is() { return "z-combobox"; }
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
          "original": "ComboItem[] | string",
          "resolved": "ComboItem[] | string",
          "references": {
            "ComboItem": {
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
          "text": "the combobox is disabled"
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
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
        "defaultValue": "false"
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
      },
      "hasgroupitems": {
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
          "text": "group items by category"
        },
        "attribute": "hasgroupitems",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "searchValue": {},
      "selectedCounter": {},
      "renderItemsList": {}
    };
  }
  static get events() {
    return [{
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
      }];
  }
  static get watchers() {
    return [{
        "propName": "items",
        "methodName": "watchItems"
      }, {
        "propName": "searchValue",
        "methodName": "watchSearchValue"
      }];
  }
  static get listeners() {
    return [{
        "name": "inputCheck",
        "method": "inputCheckListener",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}

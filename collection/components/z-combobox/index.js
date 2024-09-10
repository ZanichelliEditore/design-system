import { h } from "@stencil/core";
import { ControlSize, InputType, KeyboardCode, ListDividerType, ListSize } from "../../beans";
import { handleKeyboardSubmit, randomId } from "../../utils/utils";
export class ZCombobox {
    watchItems() {
        this.itemsList = typeof this.items === "string" ? JSON.parse(this.items) : this.items;
        this.selectedCounter = this.itemsList.filter((item) => item.checked).length;
        this.updateRenderItemsList();
    }
    watchSearchValue() {
        this.filterItems(this.searchValue);
    }
    watchCheckboxes() {
        this.checkboxes.forEach((item, index) => item.setAttribute("tabindex", index === 0 ? "0" : "-1"));
    }
    emitComboboxChange() {
        this.comboboxChange.emit({ id: this.inputid, items: this.itemsList });
    }
    constructor() {
        this.itemsList = [];
        this.inputType = InputType.TEXT;
        this.inputid = `combo-${randomId()}`;
        this.items = undefined;
        this.label = undefined;
        this.disabled = false;
        this.hassearch = false;
        this.searchlabel = undefined;
        this.searchplaceholder = undefined;
        this.searchtitle = undefined;
        this.noresultslabel = "Nessun risultato";
        this.isopen = false;
        this.isfixed = false;
        this.closesearchtext = "Chiudi";
        this.hascheckall = false;
        this.checkalltext = "Seleziona tutti";
        this.uncheckalltext = "Deseleziona tutti";
        this.maxcheckableitems = 0;
        this.hasgroupitems = undefined;
        this.size = ControlSize.BIG;
        this.searchValue = undefined;
        this.selectedCounter = undefined;
        this.renderItemsList = [];
        this.focusedItemId = undefined;
        this.checkboxes = [];
        this.toggleComboBox = this.toggleComboBox.bind(this);
        this.closeFilterItems = this.closeFilterItems.bind(this);
    }
    componentWillLoad() {
        this.watchItems();
    }
    componentWillRender() {
        this.selectedCounter = this.itemsList.filter((item) => item.checked).length;
    }
    componentDidRender() {
        const checkboxes = this.getAllCheckboxes();
        if (JSON.stringify(checkboxes) !== JSON.stringify(this.checkboxes)) {
            this.checkboxes = checkboxes;
        }
    }
    getItemId(item) {
        return `combo-checkbox-${this.inputid}-${item.id}`;
    }
    getCheckboxClass() {
        return `combo-item-checkbox-input-${this.inputid}`;
    }
    getAllCheckboxes() {
        return Array.from(this.element.shadowRoot.querySelectorAll(`.${this.getCheckboxClass()} input:not([disabled])`));
    }
    getControlToListSize() {
        switch (this.size) {
            case ControlSize.X_SMALL:
                return ListSize.SMALL;
            case ControlSize.SMALL:
                return ListSize.MEDIUM;
            default:
                return ListSize.LARGE;
        }
    }
    handleSelectArrowsNavigation(e, currId) {
        if (![KeyboardCode.ARROW_DOWN, KeyboardCode.ARROW_UP].includes(e.key) || !this.isopen) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        const currElem = this.element.shadowRoot.querySelector(`#${currId}`);
        if (!currElem) {
            return;
        }
        const checkboxes = this.checkboxes;
        if (!checkboxes.length) {
            return;
        }
        const currElemIndex = checkboxes.indexOf(currElem);
        const firstElemIndex = 0;
        const lastElemIndex = checkboxes.length - 1;
        let nextElem = null;
        if (e.key === KeyboardCode.ARROW_DOWN) {
            nextElem = currElemIndex === lastElemIndex ? checkboxes[firstElemIndex] : checkboxes[currElemIndex + 1];
        }
        else if (e.key === KeyboardCode.ARROW_UP) {
            nextElem = currElemIndex === firstElemIndex ? checkboxes[lastElemIndex] : checkboxes[currElemIndex - 1];
        }
        this.focusComboboxItem(nextElem);
    }
    handleHeaderKeyboardEvent(ev) {
        if (ev.key === KeyboardCode.SPACE) {
            ev.preventDefault();
        }
        if ((ev.key === KeyboardCode.ARROW_DOWN && !this.isopen) || (ev.key === KeyboardCode.ARROW_UP && this.isopen)) {
            this.toggleComboBox();
        }
    }
    handleCheckboxFocus(id) {
        this.focusedItemId = id;
    }
    focusComboboxItem(elem) {
        this.checkboxes.forEach(function (item) {
            item.setAttribute("tabindex", "-1");
        });
        elem.setAttribute("tabindex", "0");
        elem.focus();
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
                "<strong>" +
                item.name.substring(start, end) +
                "</strong>" +
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
    getComboboxA11yAttributes() {
        return {
            "role": "combobox",
            "aria-label": this.label,
            "aria-expanded": this.isopen ? "true" : "false",
            "aria-activedescendant": this.isopen ? this.focusedItemId : "",
            "aria-controls": `${this.inputid}_list`,
        };
    }
    renderHeader() {
        return (h("div", { class: "header", onClick: () => this.toggleComboBox(), onKeyDown: (ev) => {
                this.handleHeaderKeyboardEvent(ev);
            }, onKeyUp: (ev) => handleKeyboardSubmit(ev, this.toggleComboBox), role: "button", tabindex: 0, "aria-expanded": this.isopen ? "true" : "false" }, h("p", { class: "body-3" }, this.label, h("span", null, this.selectedCounter > 0 && ` (${this.selectedCounter})`)), h("z-icon", { name: "caret-down", class: this.size })));
    }
    renderContent() {
        if (!this.isopen) {
            return;
        }
        return (h("div", { class: "open-combo-data" }, this.hassearch && this.renderSearchInput(), !this.hassearch ? h("span", Object.assign({}, this.getComboboxA11yAttributes())) : null, h("div", { role: "listbox", "aria-label": this.label, "aria-multiselectable": true, id: `${this.inputid}_list`, "aria-owns": `${this.checkboxes.map((item) => item.id).join(" ")}` }, this.hascheckall && this.renderCheckAll(), this.renderItems())));
    }
    renderItems() {
        return (h("div", { class: this.searchValue && "search" }, this.renderList(this.renderItemsList), this.searchValue && this.renderCloseButton()));
    }
    renderItem(item, index, length) {
        return (h("z-list-element", { id: item.id, htmlTabindex: null, dividerType: index !== length - 1 ? ListDividerType.ELEMENT : ListDividerType.NONE, size: this.getControlToListSize() }, h("z-input", { type: InputType.CHECKBOX, checked: item.checked, htmlid: this.getItemId(item), label: item.name, class: this.getCheckboxClass(), disabled: !item.checked && this.maxcheckableitems && this.selectedCounter >= this.maxcheckableitems, size: this.size === ControlSize.X_SMALL ? ControlSize.SMALL : this.size, role: "option", "aria-selected": item.checked ? "true" : "false", onKeyDown: (e) => this.handleSelectArrowsNavigation(e, this.getItemId(item)), onInputCheck: (e) => {
                this.itemsList = this.itemsList.map((i) => {
                    if (item.id === i.id) {
                        i.checked = e.detail.checked;
                    }
                    return i;
                });
                this.updateRenderItemsList();
                this.emitComboboxChange();
            }, onInputFocus: (e) => this.handleCheckboxFocus(e.detail.id) })));
    }
    renderList(items) {
        if (!items) {
            return;
        }
        if (!items.length && this.searchValue) {
            return this.renderNoSearchResults();
        }
        if (this.hasgroupitems) {
            return this.renderGroups(items);
        }
        return (h("ul", { role: "none" }, items.map((item, i) => {
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
        return h("ul", { role: "none" }, listGroups);
    }
    renderNoSearchResults() {
        return (h("ul", { role: "none" }, h("z-myz-list-item", { id: "no-results", text: this.noresultslabel, listitemid: "no-results", icon: "multiply-circle", class: this.size })));
    }
    renderCloseButton() {
        return (h("div", null, h("a", { onClick: () => this.closeFilterItems(), onKeyUp: (e) => handleKeyboardSubmit(e, this.closeFilterItems), role: "button", tabindex: 0 }, this.closesearchtext)));
    }
    renderSearchInput() {
        return (h("z-input", Object.assign({ htmlid: `${this.inputid}_search`, label: this.searchlabel, placeholder: this.searchplaceholder, htmltitle: this.searchtitle, type: this.inputType, value: this.searchValue, message: false, size: this.size, "aria-autocomplete": "list" }, this.getComboboxA11yAttributes(), { onKeyUp: (e) => {
                if (e.key === KeyboardCode.ESC) {
                    this.closeFilterItems();
                }
            }, onInputChange: (e) => {
                this.searchValue = e.detail.value;
            } })));
    }
    renderCheckAll() {
        if (this.searchValue) {
            return;
        }
        const checkAllId = `combo-checkbox-${this.inputid}-check-all`;
        const allChecked = this.selectedCounter === this.itemsList.length;
        return (h("div", { class: "check-all-wrapper" }, h("z-input", { type: InputType.CHECKBOX, checked: allChecked, htmlid: checkAllId, class: this.getCheckboxClass(), label: allChecked ? this.uncheckalltext : this.checkalltext, disabled: this.maxcheckableitems && this.maxcheckableitems < this.itemsList.length, size: this.size === ControlSize.X_SMALL ? ControlSize.SMALL : this.size, role: "option", "aria-selected": allChecked ? "true" : "false", onKeyDown: (e) => this.handleSelectArrowsNavigation(e, checkAllId), onInputCheck: (e) => this.checkAll(e.detail.checked), onInputFocus: (e) => this.handleCheckboxFocus(e.detail.id) })));
    }
    render() {
        return (h("div", { key: '4d1d99f8d0f180054a363b17d478098380677de2', "data-action": `combo-${this.inputid}`, class: { open: this.isopen, fixed: this.isfixed, disabled: this.disabled }, id: this.inputid }, this.renderHeader(), !this.disabled && this.renderContent()));
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
                "reflect": false,
                "defaultValue": "`combo-${randomId()}`"
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
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::ComboItem"
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
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ControlSize",
                    "resolved": "ControlSize.BIG | ControlSize.SMALL | ControlSize.X_SMALL",
                    "references": {
                        "ControlSize": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::ControlSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Available sizes: `big`, `small` and `x-small`. Defaults to `big`."
                },
                "attribute": "size",
                "reflect": false,
                "defaultValue": "ControlSize.BIG"
            }
        };
    }
    static get states() {
        return {
            "searchValue": {},
            "selectedCounter": {},
            "renderItemsList": {},
            "focusedItemId": {},
            "checkboxes": {}
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
    static get elementRef() { return "element"; }
    static get watchers() {
        return [{
                "propName": "items",
                "methodName": "watchItems"
            }, {
                "propName": "searchValue",
                "methodName": "watchSearchValue"
            }, {
                "propName": "checkboxes",
                "methodName": "watchCheckboxes"
            }];
    }
}
//# sourceMappingURL=index.js.map

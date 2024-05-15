'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dc60bee7.js');
const index$1 = require('./index-39ce4edf.js');
const utils = require('./utils-d0b10736.js');
require('./breakpoints-5c22092a.js');

const stylesCss = ".sc-z-select-h{display:inline-block;width:inherit;color:var(--color-default-text);font-family:var(--font-family-sans);font-size:var(--font-size-3);font-weight:var(--font-rg)}[size=\"small\"].sc-z-select-h,[size=\"x-small\"].sc-z-select-h{font-size:var(--font-size-2)}.select-wrapper.sc-z-select>z-input.sc-z-select{width:100%}.select-wrapper.sc-z-select>div.sc-z-select{position:relative}.select-wrapper.sc-z-select>div.closed.sc-z-select{overflow:hidden;height:0}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select{position:absolute;width:100%;box-sizing:border-box;padding:calc(var(--space-unit) * 0.5) var(--space-unit);border:var(--border-size-small) solid var(--gray200);border-top:none;background:var(--color-surface01);outline:none}.select-wrapper.sc-z-select .closed.sc-z-select .ul-scroll-wrapper.sc-z-select{z-index:10}.select-wrapper.sc-z-select .open.sc-z-select .ul-scroll-wrapper.sc-z-select{z-index:20}.select-wrapper.sc-z-select .ul-scroll-wrapper.fixed.sc-z-select{position:static}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select>z-list.sc-z-select{position:relative;overflow:auto;max-height:240px;padding:calc(var(--space-unit) * 0.5);outline:none;scrollbar-color:var(--color-primary01) transparent}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select>z-list.sc-z-select::-webkit-scrollbar{width:10px;background:linear-gradient(to right, transparent 0 3px, var(--gray200) 3px 7px, transparent 7px 10px);border-radius:var(--border-radius)}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select>z-list.sc-z-select::-webkit-scrollbar-track{background-color:transparent}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select>z-list.sc-z-select::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select>z-list.sc-z-select::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select .list-element-container.sc-z-select{display:flex;align-items:center;padding-left:calc(var(--space-unit) * 1.5)}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select .list-element-container.sc-z-select .list-element-content.sc-z-select{display:block;padding:calc(var(--space-unit) * 0.5) 0}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select .list-element-container.sc-z-select>z-icon.sc-z-select+.list-element-content.sc-z-select{display:block;padding:calc(var(--space-unit) * 0.5) var(--space-unit)}[size=\"x-small\"].sc-z-select-h .select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select .list-element-container.sc-z-select .list-element-content.sc-z-select{padding:0}[size=\"small\"].sc-z-select-h .select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select .list-element-container.sc-z-select>z-icon.sc-z-select{--z-icon-width:16px;--z-icon-height:16px}[size=\"x-small\"].sc-z-select-h .select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select .list-element-container.sc-z-select>z-icon.sc-z-select{--z-icon-width:14px;--z-icon-height:14px}[size=\"x-small\"].sc-z-select-h .select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select .list-element-container.sc-z-select>z-icon.sc-z-select+.list-element-content.sc-z-select{padding:0 var(--space-unit)}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select .list-element-container.sc-z-select .list-element-content.selected.sc-z-select{font-weight:bold}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select .no-results.sc-z-select z-icon.sc-z-select{margin-right:var(--space-unit)}.z-list-group-title.sc-z-select{color:var(--gray800)}.reset-item.sc-z-select{color:var(--color-primary01);fill:var(--color-primary01)}.reset-item-content.sc-z-select{display:flex;align-items:center}.reset-item.reset-item-margin.sc-z-select .reset-item-content.sc-z-select{margin-left:calc(var(--space-unit))}.reset-item.sc-z-select .reset-item-content.sc-z-select>z-icon.sc-z-select{margin-right:var(--space-unit)}.reset-item.hide.sc-z-select{display:none}";
const ZSelectStyle0 = stylesCss;

const ZSelect = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.optionSelect = index.createEvent(this, "optionSelect", 7);
        this.resetSelect = index.createEvent(this, "resetSelect", 7);
        this.itemsList = [];
        this.htmlid = `id-${utils.randomId()}`;
        this.items = undefined;
        this.name = undefined;
        this.label = undefined;
        this.ariaLabel = "";
        this.disabled = false;
        this.readonly = false;
        this.placeholder = undefined;
        this.htmltitle = undefined;
        this.status = undefined;
        this.message = true;
        this.autocomplete = false;
        this.noresultslabel = "Nessun risultato";
        this.hasGroupItems = undefined;
        this.isfixed = false;
        this.resetItem = undefined;
        this.size = index$1.ControlSize.BIG;
        this.isOpen = false;
        this.selectedItem = null;
        this.focusedItemId = undefined;
        this.searchString = undefined;
        this.toggleSelectUl = this.toggleSelectUl.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.handleSelectFocus = this.handleSelectFocus.bind(this);
    }
    watchItems() {
        this.itemsList = this.getInitialItemsArray();
        this.selectedItem = this.itemsList.find((item) => item.selected);
    }
    getFocusedItemHandler(e) {
        this.focusedItemId = e.target.id;
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
        return utils.boolean(this.autocomplete) === true;
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
        const arrows = [index$1.KeyboardCode.ARROW_DOWN, index$1.KeyboardCode.ARROW_UP];
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
            if (e.key === index$1.KeyboardCode.ARROW_DOWN) {
                index = key + 1 === this.itemsList.length + 1 ? +!showResetIcon : key + 1;
            }
            else if (e.key === index$1.KeyboardCode.ARROW_UP) {
                index = key <= +!showResetIcon ? this.itemsList.length : key - 1;
            }
        }
        if (!this.resetItem) {
            if (e.key === index$1.KeyboardCode.ARROW_DOWN) {
                index = key + 1 === this.itemsList.length ? 0 : key + 1;
            }
            else if (e.key === index$1.KeyboardCode.ARROW_UP) {
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
        this.focusedItemId = "";
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
        if (e instanceof KeyboardEvent && e.key === index$1.KeyboardCode.ESC) {
            e.stopPropagation();
            return this.toggleSelectUl(true);
        }
        if (e instanceof KeyboardEvent && e.key !== index$1.KeyboardCode.TAB && e.key !== index$1.KeyboardCode.ENTER) {
            return;
        }
        const tree = utils.getElementTree(utils.getClickedElement());
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
        return (index.h("z-input", { class: {
                "active-select": this.isOpen,
                "cursor-select": !this.autocomplete,
            }, id: `${this.htmlid}_input`, htmlid: `${this.htmlid}_select_input`, placeholder: this.placeholder, value: !this.isOpen && this.selectedItem ? this.selectedItem.name.replace(/<[^>]+>/g, "") : null, label: this.label, "aria-expanded": this.isOpen ? "true" : "false", "aria-label": this.ariaLabel, "aria-controls": `${this.htmlid}_list`, "aria-autocomplete": this.hasAutocomplete() ? "list" : "none", "aria-activedescendant": this.isOpen ? this.focusedItemId : "", icon: this.isOpen ? "caret-up" : "caret-down", hasclearicon: this.hasAutocomplete(), message: false, disabled: this.disabled, readonly: this.readonly || (!this.hasAutocomplete() && this.isOpen), status: this.isOpen ? undefined : this.status, role: "combobox", size: this.size, onClick: (e) => {
                this.handleInputClick(e);
            }, onKeyUp: (e) => {
                if (e.keyCode !== 13) {
                    e.preventDefault();
                }
                utils.handleKeyboardSubmit(e, this.toggleSelectUl);
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
        return (index.h("div", { class: this.isOpen ? "open" : "closed", tabindex: "-1" }, index.h("div", { class: {
                "ul-scroll-wrapper": true,
                "fixed": this.isfixed,
            }, tabindex: "-1" }, index.h("z-list", { role: "listbox", "aria-label": this.ariaLabel || this.label, tabindex: this.disabled || this.readonly || !this.isOpen ? -1 : 0, id: `${this.htmlid}_list`, "aria-multiselectable": false, size: this.listSizeType(), class: {
                disabled: this.disabled,
                readonly: this.readonly,
                filled: !!this.selectedItem,
                [`input-${this.status}`]: !this.isOpen && !!this.status,
            } }, this.resetItem && this.renderResetItem(), this.renderSelectUlItems()))));
    }
    renderResetItem() {
        return (index.h("z-list-element", { class: {
                "hide": !this.selectedItem || !this.resetItem,
                "reset-item": true,
                "reset-item-margin": !this.hasGroupItems,
            }, clickable: true, disabled: false, dividerType: index$1.ListDividerType.ELEMENT, role: "option", tabindex: "0", "aria-selected": "false", id: `${this.htmlid}_${this.resetItem ? "0" : "none"}`, size: this.listSizeType(), onClickItem: () => {
                this.selectedItem = null;
                this.searchString = null;
                this.emitResetSelect();
            }, onKeyDown: (e) => this.arrowsSelectNav(e, 0) }, index.h("div", { class: "reset-item-content" }, index.h("z-icon", { name: "multiply-circled" }), index.h("span", null, this.resetItem))));
    }
    renderItem(item, key, lastItem) {
        return (index.h("z-list-element", { clickable: !item.disabled, disabled: item.disabled, dividerType: lastItem ? index$1.ListDividerType.HEADER : index$1.ListDividerType.ELEMENT, role: "option", tabindex: item.disabled || !this.isOpen ? -1 : 0, "aria-selected": item.selected ? "true" : "false", id: `${this.htmlid}_${key}`, size: this.listSizeType(), onClickItem: () => this.selectItem(item, true), onKeyDown: (e) => this.arrowsSelectNav(e, key) }, index.h("div", { class: "list-element-container" }, item.icon && index.h("z-icon", { name: item.icon }), index.h("span", { class: {
                "selected": !!item.selected,
                "list-element-content": true,
            }, innerHTML: item.name }))));
    }
    listSizeType() {
        if (this.size === index$1.ControlSize.SMALL || this.size === index$1.ControlSize.X_SMALL) {
            return index$1.ListSize.SMALL;
        }
        return index$1.ListSize.MEDIUM;
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
            return (index.h("z-list-group", { "divider-type": index$1.ListDividerType.ELEMENT }, index.h("span", { class: "body-3-sb z-list-group-title", slot: "header-title" }, key), value.map((item) => item)));
        });
    }
    renderNoSearchResults() {
        return (index.h("z-list-element", { color: "blue500", class: "no-results", size: this.listSizeType() }, index.h("z-icon", { name: "multiply-circle", fill: "blue500" }), this.noresultslabel));
    }
    renderMessage() {
        if (utils.boolean(this.message) === false) {
            return;
        }
        return (index.h("z-input-message", { message: utils.boolean(this.message) === true ? undefined : this.message, status: this.status, class: this.size }));
    }
    render() {
        return (index.h("div", { key: '5566ddc949ae9fee8724ebd22bb2ae21dfc0d19e', class: "select-wrapper" }, this.renderInput(), this.renderSelectUl(), this.renderMessage()));
    }
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "items": ["watchItems"]
    }; }
};
ZSelect.style = ZSelectStyle0;

exports.z_select = ZSelect;

//# sourceMappingURL=z-select.cjs.entry.js.map
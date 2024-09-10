import { r as registerInstance, c as createEvent, h, g as getElement } from './index-a2130b6a.js';
import { e as ControlSize, g as KeyboardCode, l as ListDividerType, i as ListSize } from './index-b7dbacb4.js';
import { r as randomId, b as boolean, d as getElementTree, a as handleKeyboardSubmit, e as getClickedElement } from './utils-8ade9e2d.js';
import './breakpoints-680e0e56.js';

const stylesCss = ".sc-z-select-h{display:inline-block;width:inherit;color:var(--color-default-text);font-family:var(--font-family-sans);font-size:var(--font-size-3);font-weight:var(--font-rg)}[size=\"small\"].sc-z-select-h,[size=\"x-small\"].sc-z-select-h{font-size:var(--font-size-2)}.select-wrapper.sc-z-select>z-input.sc-z-select{width:100%}.select-wrapper.sc-z-select>div.sc-z-select{position:relative}.select-wrapper.sc-z-select>div.closed.sc-z-select{overflow:hidden;height:0}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select{position:absolute;width:100%;box-sizing:border-box;padding:calc(var(--space-unit) * 0.5) var(--space-unit);border:var(--border-size-small) solid var(--gray200);border-top:none;background:var(--color-surface01);outline:none}.select-wrapper.sc-z-select .closed.sc-z-select .ul-scroll-wrapper.sc-z-select{z-index:10}.select-wrapper.sc-z-select .open.sc-z-select .ul-scroll-wrapper.sc-z-select{z-index:20}.select-wrapper.sc-z-select .ul-scroll-wrapper.fixed.sc-z-select{position:static}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select>z-list.sc-z-select{position:relative;overflow:auto;max-height:240px;padding:calc(var(--space-unit) * 0.5);outline:none;scrollbar-color:var(--color-primary01) transparent}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select>z-list.sc-z-select::-webkit-scrollbar{width:10px;background:linear-gradient(to right, transparent 0 3px, var(--gray200) 3px 7px, transparent 7px 10px);border-radius:var(--border-radius)}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select>z-list.sc-z-select::-webkit-scrollbar-track{background-color:transparent}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select>z-list.sc-z-select::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select>z-list.sc-z-select::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select .list-element-container.sc-z-select{display:flex;align-items:center;padding-left:calc(var(--space-unit) * 1.5)}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select .list-element-container.sc-z-select .list-element-content.sc-z-select{display:block;padding:calc(var(--space-unit) * 0.5) 0}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select .list-element-container.sc-z-select>z-icon.sc-z-select+.list-element-content.sc-z-select{display:block;padding:calc(var(--space-unit) * 0.5) var(--space-unit)}[size=\"x-small\"].sc-z-select-h .select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select .list-element-container.sc-z-select .list-element-content.sc-z-select{padding:0}[size=\"small\"].sc-z-select-h .select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select .list-element-container.sc-z-select>z-icon.sc-z-select{--z-icon-width:16px;--z-icon-height:16px}[size=\"x-small\"].sc-z-select-h .select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select .list-element-container.sc-z-select>z-icon.sc-z-select{--z-icon-width:14px;--z-icon-height:14px}[size=\"x-small\"].sc-z-select-h .select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select .list-element-container.sc-z-select>z-icon.sc-z-select+.list-element-content.sc-z-select{padding:0 var(--space-unit)}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select .list-element-container.sc-z-select .list-element-content.selected.sc-z-select{font-weight:bold}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select .no-results.sc-z-select z-icon.sc-z-select{margin-right:var(--space-unit)}.z-list-group-title.sc-z-select{color:var(--gray800)}.reset-item.sc-z-select{color:var(--color-primary01);fill:var(--color-primary01)}.reset-item-content.sc-z-select{display:flex;align-items:center}.reset-item.reset-item-margin.sc-z-select .reset-item-content.sc-z-select{margin-left:calc(var(--space-unit))}.reset-item.sc-z-select .reset-item-content.sc-z-select>z-icon.sc-z-select{margin-right:var(--space-unit)}.reset-item.hide.sc-z-select{display:none}";
const ZSelectStyle0 = stylesCss;

const ZSelect = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.optionSelect = createEvent(this, "optionSelect", 7);
        this.resetSelect = createEvent(this, "resetSelect", 7);
        this.itemsList = [];
        this.htmlid = `id-${randomId()}`;
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
        this.size = ControlSize.BIG;
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
            }, id: `${this.htmlid}_input`, htmlid: `${this.htmlid}_select_input`, placeholder: this.placeholder, value: !this.isOpen && this.selectedItem ? this.selectedItem.name.replace(/<[^>]+>/g, "") : null, label: this.label, "aria-expanded": this.isOpen ? "true" : "false", "aria-label": this.ariaLabel, "aria-controls": `${this.htmlid}_list`, "aria-autocomplete": this.hasAutocomplete() ? "list" : "none", "aria-activedescendant": this.isOpen ? this.focusedItemId : "", icon: this.isOpen ? "caret-up" : "caret-down", hasclearicon: this.hasAutocomplete(), message: false, disabled: this.disabled, readonly: this.readonly || (!this.hasAutocomplete() && this.isOpen), status: this.isOpen ? undefined : this.status, role: "combobox", size: this.size, onClick: (e) => {
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
        return (h("div", { class: this.isOpen ? "open" : "closed", tabindex: "-1" }, h("div", { class: {
                "ul-scroll-wrapper": true,
                "fixed": this.isfixed,
            }, tabindex: "-1" }, h("z-list", { role: "listbox", "aria-label": this.ariaLabel || this.label, tabindex: this.disabled || this.readonly || !this.isOpen ? -1 : 0, id: `${this.htmlid}_list`, "aria-multiselectable": false, size: this.listSizeType(), class: {
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
            }, clickable: true, disabled: false, dividerType: ListDividerType.ELEMENT, role: "option", tabindex: "0", "aria-selected": "false", id: `${this.htmlid}_${this.resetItem ? "0" : "none"}`, size: this.listSizeType(), onClickItem: () => {
                this.selectedItem = null;
                this.searchString = null;
                this.emitResetSelect();
            }, onKeyDown: (e) => this.arrowsSelectNav(e, 0) }, h("div", { class: "reset-item-content" }, h("z-icon", { name: "multiply-circled" }), h("span", null, this.resetItem))));
    }
    renderItem(item, key, lastItem) {
        return (h("z-list-element", { clickable: !item.disabled, disabled: item.disabled, dividerType: lastItem ? ListDividerType.HEADER : ListDividerType.ELEMENT, role: "option", tabindex: item.disabled || !this.isOpen ? -1 : 0, "aria-selected": item.selected ? "true" : "false", id: `${this.htmlid}_${key}`, size: this.listSizeType(), onClickItem: () => this.selectItem(item, true), onKeyDown: (e) => this.arrowsSelectNav(e, key) }, h("div", { class: "list-element-container" }, item.icon && h("z-icon", { name: item.icon }), h("span", { class: {
                "selected": !!item.selected,
                "list-element-content": true,
            }, innerHTML: item.name }))));
    }
    listSizeType() {
        if (this.size === ControlSize.SMALL || this.size === ControlSize.X_SMALL) {
            return ListSize.SMALL;
        }
        return ListSize.MEDIUM;
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
        return (h("z-list-element", { color: "blue500", class: "no-results", size: this.listSizeType() }, h("z-icon", { name: "multiply-circle", fill: "blue500" }), this.noresultslabel));
    }
    renderMessage() {
        if (boolean(this.message) === false) {
            return;
        }
        return (h("z-input-message", { message: boolean(this.message) === true ? undefined : this.message, status: this.status, class: this.size }));
    }
    render() {
        return (h("div", { key: '7cff5f68badfbedf3c8f6e9a5d8bbdaa89ed8a98', class: "select-wrapper" }, this.renderInput(), this.renderSelectUl(), this.renderMessage()));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "items": ["watchItems"]
    }; }
};
ZSelect.style = ZSelectStyle0;

export { ZSelect as z_select };

//# sourceMappingURL=z-select.entry.js.map
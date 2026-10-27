import { r as registerInstance, c as createEvent, h, d as getElement } from './index-SFwvdS4t.js';
import { e as ControlSize, g as KeyboardCode, i as ListSize, l as ListDividerType } from './index-DdetsoIY.js';
import { r as randomId, e as encodeString, b as getPlainText, d as boolean, f as getClickedElement, i as getElementTree } from './utils-CJc3A9NX.js';
import './breakpoints-Q-tWjk7P.js';

const stylesCss = () => `.sc-z-select-h{display:inline-block;width:inherit;color:var(--color-form-default-text);font-family:var(--font-family-sans);font-size:var(--font-size-3);font-weight:var(--font-rg)}[size="small"].sc-z-select-h,[size="x-small"].sc-z-select-h{font-size:var(--font-size-2)}.select-wrapper.sc-z-select>z-input.sc-z-select{width:100%}.select-wrapper.sc-z-select>z-input.sc-z-select .input-icon.sc-z-select{cursor:pointer}.select-wrapper.sc-z-select>div.sc-z-select{position:relative}.select-wrapper.sc-z-select>div.closed.sc-z-select{overflow:hidden;height:0}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select{position:absolute;width:100%;box-sizing:border-box;border-top:none;background:var(--color-form-background);border-radius:0 0 var(--border-radius) var(--border-radius);box-shadow:var(--shadow-2);outline:none}.select-wrapper.sc-z-select .closed.sc-z-select .ul-scroll-wrapper.sc-z-select{z-index:10}.select-wrapper.sc-z-select .open.sc-z-select .ul-scroll-wrapper.sc-z-select{z-index:20}.select-wrapper.sc-z-select .ul-scroll-wrapper.fixed.sc-z-select{position:static}.select-wrapper.sc-z-select z-list.sc-z-select{--background-color-list-element:var(--color-form-background);--background-hover-color-list-element:var(--gray100);--background-active-color-list-element:var(--gray100)}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select>z-list.sc-z-select{position:relative;overflow:auto;max-height:240px;padding:var(--space-unit) calc(var(--space-unit) * 1.5);margin:0;outline:none}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element[disabled].sc-z-select{color:var(--color-form-disabled03)}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select .list-element-container.sc-z-select{display:flex;align-items:center;padding:calc(var(--space-unit) / 2) var(--space-unit);column-gap:var(--space-unit)}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select .list-element-container.active.sc-z-select{border-radius:var(--border-radius-small);box-shadow:var(--shadow-focus-primary)}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select .list-element-container.sc-z-select .list-element-content.sc-z-select{margin-right:auto}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select .list-element-container.sc-z-select>z-icon.sc-z-select+.list-element-content.sc-z-select{padding:calc(var(--space-unit) * 0.5) var(--space-unit)}[size="x-small"].sc-z-select-h .select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select .list-element-container.sc-z-select .list-element-content.sc-z-select{padding:0}[size="small"].sc-z-select-h .select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select .list-element-container.sc-z-select>z-icon.sc-z-select{--z-icon-width:16px;--z-icon-height:16px}[size="x-small"].sc-z-select-h .select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select .list-element-container.sc-z-select>z-icon.sc-z-select{--z-icon-width:14px;--z-icon-height:14px}[size="x-small"].sc-z-select-h .select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select .list-element-container.sc-z-select>z-icon.sc-z-select+.list-element-content.sc-z-select{padding:0 var(--space-unit)}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select .list-element-container.sc-z-select .list-element-content.selected.sc-z-select{font-weight:var(--font-sb)}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select .no-results.sc-z-select z-icon.sc-z-select{margin-right:var(--space-unit)}.z-list-group-title.sc-z-select{color:var(--color-form-default-text)}.reset-item.sc-z-select{color:var(--color-form-active-primary);fill:var(--color-form-active-primary)}.reset-item-content.sc-z-select{display:flex;align-items:center}.reset-item.sc-z-select .reset-item-content.active.sc-z-select{box-shadow:var(--shadow-focus-primary)}.reset-item.reset-item-margin.sc-z-select .reset-item-content.sc-z-select{margin-left:var(--space-unit)}.reset-item.sc-z-select .reset-item-content.sc-z-select>z-icon.sc-z-select{margin-right:var(--space-unit)}.reset-item.hide.sc-z-select{display:none}.tree-list-reset-item.sc-z-select{padding:var(--space-unit) 0}z-list-element.sc-z-select{position:relative;display:block}z-list.sc-z-select z-list-element.sc-z-select::before{position:absolute;z-index:100;top:3px;left:-8px;width:8px;height:1em;border-bottom:1px solid var(--color-form-disabled01-icon);border-left:1px solid var(--color-form-disabled01-icon);content:"";cursor:pointer}z-list.sc-z-select z-list-element.sc-z-select::after{position:absolute;z-index:100;top:5px;left:-8px;width:8px;height:100%;border-left:1px solid var(--color-form-disabled01-icon);content:"";cursor:pointer}z-list.sc-z-select z-list-element.sc-z-select:last-child::after{display:none}z-list.sc-z-select>z-list-element.sc-z-select::before,z-list.sc-z-select>z-list-element.sc-z-select::after,z-list.sc-z-select>z-list-group.sc-z-select>z-list-element.sc-z-select::before,z-list.sc-z-select>z-list-group.sc-z-select>z-list-element.sc-z-select::after{display:none}z-list.sc-z-select>div.children-node.sc-z-select{padding-left:calc(var(--space-unit) * 2)}z-list-element.sc-z-select>.list-element.sc-z-select{display:flex;justify-content:space-between;padding:calc(var(--space-unit) * 1.5) var(--space-unit);cursor:pointer}z-list-element.sc-z-select>.list-element.active.sc-z-select{box-shadow:var(--shadow-focus-primary)}z-list-element.sc-z-select:not([disabled])>.list-element.sc-z-select:hover,z-list-element.sc-z-select:not([disabled])>.list-element.sc-z-select:hover::after{background-color:var(--background-hover-color-list-element, var(--color-background))}z-list-element.sc-z-select>.list-element.sc-z-select .item.ellipsis.sc-z-select{overflow:hidden}z-list-element.sc-z-select .list-element.sc-z-select::after{position:absolute;top:0;right:-1px;display:block;width:100%;height:45px;content:"";transform:translateX(-100%)}z-list-element.tree-search-item.sc-z-select{padding-top:0}z-list-element.tree-search-item.sc-z-select .list-element.sc-z-select::after{position:absolute;right:-25px;display:block;width:100%;height:45px;content:"";transform:translateX(-100%)}z-list-element.grouped-tree-parent-node.sc-z-select .list-element.sc-z-select::after{position:absolute;right:-25px;display:block;width:100%;height:45px;content:"";transform:translateX(-100%)}.item-label.selected.sc-z-select{font-weight:bold}.item.ellipsis.sc-z-select{display:inline-block;overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap}z-list.sc-z-select>z-list-element.grouped-tree-parent-node.sc-z-select>.list-element.sc-z-select:hover::after,z-list-element.tree-search-item.sc-z-select .list-element.sc-z-select:hover::after,z-list.sc-z-select>z-list-group.sc-z-select>z-list-element.grouped-tree-parent-node.sc-z-select>.list-element.sc-z-select:hover::after{position:absolute;z-index:-1;right:-18px;display:block;width:100%;height:45px;content:"";transform:translateX(-100%)}z-list-element.sc-z-select>.list-element.sc-z-select:hover::after{position:absolute;z-index:-1;top:0;right:0;display:block;width:100%;height:45px;content:"";transform:translateX(-100%)}.children-node.sc-z-select z-list-element.sc-z-select::before,.children-node.sc-z-select z-list-element.sc-z-select::after{left:-8px}.children-node.sc-z-select .children-node.sc-z-select z-list-element.sc-z-select::before,.children-node.sc-z-select .children-node.sc-z-select z-list-element.sc-z-select::after{left:-8px}.children-node.sc-z-select>z-list-element.sc-z-select{padding:0}`;

const ZSelect = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.optionSelect = createEvent(this, "optionSelect", 7);
        this.resetSelect = createEvent(this, "resetSelect", 7);
        /** the id of the input element */
        this.htmlid = `id-${randomId()}`;
        /** the input is disabled */
        this.disabled = false;
        /** the input is readonly */
        this.readonly = false;
        /** the input is required */
        this.required = false;
        /** input helper message (optional) - if set to `false` message won't be displayed */
        this.message = true;
        /** the input has autocomplete option */
        this.autocomplete = false;
        /** no result text message */
        this.noresultslabel = "Nessun risultato";
        /** When fixed, it occupies space and pushes down next elements. */
        this.isfixed = false;
        /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
        this.size = ControlSize.BIG;
        this.isOpen = false;
        this.selectedItem = null;
        this.itemsList = [];
        this.toggleSelectUl = this.toggleSelectUl.bind(this);
        this.handleSelectFocus = this.handleSelectFocus.bind(this);
    }
    watchItems() {
        this.itemsList = this.getInitialItemsArray();
        this.selectedItem = this.findSelectedItem(this.itemsList);
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
        this.itemsList = this.getInitialItemsArray();
        if (values.length) {
            this.updateSelection(this.itemsList, values[0]);
        }
        this.selectedItem = this.findSelectedItem(this.itemsList);
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
        var _a;
        const initialItemsList = this.getInitialItemsArray();
        this.updateSelection(initialItemsList, (_a = this.selectedItem) === null || _a === void 0 ? void 0 : _a.id);
        return initialItemsList;
    }
    getSelectedValue() {
        var _a;
        return (_a = this.selectedItem) === null || _a === void 0 ? void 0 : _a.id;
    }
    getOptionId(item) {
        return `${this.htmlid}_key_${item.id ? encodeString(`${item.id}`) : encodeString(`${item.name}`)}`;
    }
    getResetOptionId() {
        return `${this.htmlid}_key_reset`;
    }
    getMessageId() {
        return `${this.htmlid}_message`;
    }
    getGroupedItems() {
        if (!this.itemsList.length) {
            return [];
        }
        return Object.entries(this.itemsList.reduce((group, item) => {
            const category = item.category || "Altra categoria";
            group[category] = group[category] || [];
            group[category].push(item);
            return group;
        }, {}));
    }
    filterItems(searchString) {
        let prevList = this.mapSelectedItemToItemsArray();
        if (!(searchString === null || searchString === void 0 ? void 0 : searchString.length)) {
            this.itemsList = prevList;
            return;
        }
        prevList = prevList.map((item) => (Object.assign(Object.assign({}, item), { name: getPlainText(item.name) })));
        if (this.hasTreeItems) {
            this.itemsList = this.filterTree(prevList, searchString, false);
        }
        else {
            this.itemsList = prevList
                .filter((item) => item.name.toUpperCase().includes(searchString.toUpperCase()))
                .map((item) => {
                item.name = this.getHighlightedText(item.name, searchString);
                return item;
            });
        }
    }
    filterTree(items, searchString, matchingParent) {
        if (!items) {
            return [];
        }
        return items
            .map((item) => {
            const match = item.name.toUpperCase().includes(searchString.toUpperCase());
            const newItem = Object.assign({}, item);
            if (newItem.children && newItem.children.length > 0) {
                newItem.children = this.filterTree(newItem.children.map((item) => (Object.assign(Object.assign({}, item), { name: getPlainText(item.name) }))), searchString, match);
            }
            if (match) {
                newItem.name = this.getHighlightedText(newItem.name, searchString);
            }
            if (match ||
                (newItem.children && newItem.children.length > 0) ||
                (this.showChildrenOfMatchingParent && matchingParent)) {
                return newItem;
            }
            return null;
        })
            .filter((item) => item !== null);
    }
    getHighlightedText(text, search) {
        const upperText = text.toUpperCase();
        const upperSearch = search.toUpperCase();
        const start = upperText.indexOf(upperSearch);
        if (start === -1) {
            return text;
        }
        const end = start + search.length;
        return text.substring(0, start) + `<strong>${text.substring(start, end)}</strong>` + text.substring(end);
    }
    hasAutocomplete() {
        return boolean(this.autocomplete) === true;
    }
    hasMessage() {
        return boolean(this.message) !== false;
    }
    handleInputChange(e) {
        this.searchString = e.detail.value;
        if (!this.isOpen) {
            this.toggleSelectUl();
        }
    }
    updateSelection(items, selectedId) {
        if (items) {
            items.forEach((item) => {
                item.selected = item.id === selectedId;
                if (item.children && item.children.length > 0) {
                    this.updateSelection(item.children, selectedId);
                }
            });
        }
    }
    findSelectedItem(items) {
        if (items) {
            for (const item of items) {
                if (item.selected) {
                    return item;
                }
                if (item.children && item.children.length > 0) {
                    const found = this.findSelectedItem(item.children);
                    if (found) {
                        return found;
                    }
                }
            }
        }
        return null;
    }
    selectItem(selected) {
        if (selected === null || selected === void 0 ? void 0 : selected.disabled) {
            return;
        }
        this.itemsList = this.getInitialItemsArray();
        if (selected) {
            this.updateSelection(this.itemsList, selected.id);
        }
        this.selectedItem = this.findSelectedItem(this.itemsList);
        this.emitOptionSelect();
        this.toggleSelectUl();
        if (this.searchString) {
            this.searchString = null;
        }
    }
    handleResetClick() {
        this.selectedItem = null;
        this.searchString = null;
        this.focusedItemId = "";
        this.emitResetSelect();
        this.toggleSelectUl();
    }
    handleInputKeyDown(e) {
        switch (e.code) {
            case KeyboardCode.ENTER:
            case KeyboardCode.SPACE:
                if (this.focusedItemId) {
                    if (this.focusedItemId === this.getResetOptionId()) {
                        this.handleResetClick();
                    }
                    else {
                        const item = this.itemsList.find((e) => this.getOptionId(e) === this.focusedItemId) || null;
                        if (item) {
                            this.selectedItem = item;
                            this.emitOptionSelect();
                            this.toggleSelectUl();
                        }
                    }
                }
                else if (!this.hasAutocomplete()) {
                    e.preventDefault();
                    this.toggleSelectUl();
                }
                break;
            case KeyboardCode.ARROW_DOWN:
            case KeyboardCode.ARROW_UP:
                this.arrowsSelectNav(e);
                break;
        }
    }
    arrowsSelectNav(e) {
        const arrows = [KeyboardCode.ARROW_DOWN, KeyboardCode.ARROW_UP];
        if (!arrows.includes(e.key)) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        const currElem = this.focusedItemId ? this.host.querySelector(`#${this.focusedItemId}`) : null;
        const options = Array.from(this.host.querySelectorAll('[role="option"]'));
        if (!options.length) {
            return;
        }
        const currElemIndex = currElem ? options.indexOf(currElem) : null;
        const firstElemIndex = 0;
        const lastElemIndex = options.length - 1;
        if (!this.isOpen) {
            this.toggleSelectUl();
            if (this.selectedItem) {
                this.focusSelectItem(this.getOptionId(this.selectedItem));
                return;
            }
        }
        let nextElem = null;
        if (e.code === KeyboardCode.ARROW_DOWN) {
            nextElem =
                currElemIndex === null ? options[firstElemIndex] : options[currElemIndex + 1] || options[lastElemIndex];
        }
        else if (e.code === KeyboardCode.ARROW_UP) {
            nextElem =
                currElemIndex === null ? options[lastElemIndex] : options[currElemIndex - 1] || options[firstElemIndex];
        }
        this.focusSelectItem(nextElem.id);
    }
    focusSelectItem(optionId) {
        this.focusedItemId = optionId;
        const elem = this.host.querySelector(`#${optionId}`);
        // @ts-expect-error 'container' does not exist in type 'ScrollIntoViewOptions'
        elem.scrollIntoView({ block: "nearest", container: "nearest" });
    }
    toggleSelectUl(selfFocusOnClose = false) {
        var _a;
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
                (_a = this.host.querySelector(`#${this.htmlid}_select_input`)) === null || _a === void 0 ? void 0 : _a.focus();
            }
            if (this.selectedItem && this.searchString) {
                this.searchString = null;
                this.filterItems(this.searchString);
            }
        }
        this.focusedItemId = "";
        this.isOpen = !this.isOpen;
    }
    handleInputClick(e) {
        if (e.target.closest(".reset-icon")) {
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
        if (e instanceof KeyboardEvent && e.key !== KeyboardCode.TAB) {
            return;
        }
        const clickedElement = getClickedElement();
        if (clickedElement === null || clickedElement === void 0 ? void 0 : clickedElement.hasAttribute("disabled")) {
            return;
        }
        if (!getElementTree(clickedElement).find((elem) => elem.nodeName.toLowerCase() === "z-input" && elem.id === `${this.htmlid}_input`)) {
            const zSelect = getElementTree(clickedElement).find((e) => e.nodeName === "Z-SELECT");
            this.toggleSelectUl(zSelect === this.host);
        }
    }
    scrollToLetter(letter) {
        if (!this.itemsList.length) {
            return;
        }
        const foundItem = this.itemsList.find((item) => item.name.toLowerCase().charAt(0) === letter.toLowerCase());
        if (foundItem) {
            if (!this.isOpen) {
                this.toggleSelectUl();
            }
            this.focusSelectItem(this.getOptionId(foundItem));
        }
    }
    renderInput() {
        let value = null;
        if (this.selectedItem) {
            value = getPlainText(this.selectedItem.name);
        }
        if (this.isOpen && this.searchString !== undefined) {
            value = this.searchString;
        }
        return [
            h("z-input", { class: {
                    "active-select": this.isOpen,
                    "cursor-select": !this.autocomplete,
                }, id: `${this.htmlid}_input`, htmlid: `${this.htmlid}_select_input`, placeholder: this.placeholder, value: value, label: this.label, autocomplete: "off", htmlAriaLabel: this.htmlAriaLabel || undefined, icon: this.isOpen ? "caret-up" : "caret-down", hasclearicon: false, message: false, name: this.name, disabled: this.disabled, readonly: this.readonly || (!this.hasAutocomplete() && this.isOpen), required: this.required, status: this.isOpen ? undefined : this.status, size: this.size, role: "combobox", "html-aria-describedby": this.hasMessage() ? this.getMessageId() : undefined, "html-aria-expanded": this.isOpen ? "true" : "false", "html-aria-controls": `${this.htmlid}_list`, "html-aria-activedescendant": this.isOpen ? this.focusedItemId : "", "html-aria-autocomplete": this.hasAutocomplete() ? "list" : undefined, onClick: (e) => this.handleInputClick(e), onKeyDown: (e) => this.handleInputKeyDown(e), onInputChange: (e) => this.handleInputChange(e), onKeyPress: (e) => {
                    if (!this.hasAutocomplete()) {
                        e.preventDefault();
                        this.scrollToLetter(e.key);
                    }
                } }),
        ];
    }
    renderSelectUl() {
        return (h("div", { class: this.isOpen ? "open" : "closed" }, h("div", { class: {
                "ul-scroll-wrapper": true,
                "fixed": this.isfixed,
            } }, h("z-list", { role: "listbox", "aria-label": this.htmlAriaLabel || this.label, tabindex: this.disabled || this.readonly || !this.isOpen ? -1 : 0, id: `${this.htmlid}_list`, "aria-multiselectable": false, size: this.listSizeType(), class: {
                "disabled": this.disabled,
                "readonly": this.readonly,
                [`input-${this.status}`]: !this.isOpen && !!this.status,
                "z-scrollbar": true,
            } }, this.resetItem && this.renderResetItem(), this.renderSelectUlItems()))));
    }
    renderResetItem() {
        const hidden = !this.selectedItem || !this.resetItem;
        return (h("z-list-element", { class: {
                "hide": hidden,
                "reset-item": true,
                "reset-item-margin": !this.hasGroupItems,
            }, clickable: true, disabled: false, dividerType: ListDividerType.ELEMENT, role: hidden ? "presentation" : "option", htmlTabindex: this.isOpen ? 0 : null, "aria-selected": "false", "aria-label": hidden ? undefined : this.resetItem, id: this.getResetOptionId(), size: this.hasTreeItems ? ListSize.MEDIUM : this.listSizeType(), onClickItem: () => this.handleResetClick() }, h("div", { class: {
                "reset-item-content": true,
                "tree-list-reset-item": this.hasTreeItems,
                "active": this.focusedItemId === this.getResetOptionId(),
            }, "aria-hidden": "true" }, h("z-icon", { name: "multiply-circled" }), h("span", null, this.resetItem))));
    }
    renderItem(item, lastItem) {
        return (h("z-list-element", { clickable: !item.disabled, disabled: item.disabled, dividerType: lastItem ? ListDividerType.HEADER : ListDividerType.ELEMENT, role: item.disabled ? "presentation" : "option", htmlTabindex: -1, "aria-selected": item.selected ? "true" : "false", "aria-label": item.disabled ? undefined : getPlainText(item.name), id: this.getOptionId(item), size: this.listSizeType(), onClickItem: () => this.selectItem(item) }, h("div", { class: {
                "list-element-container": true,
                "active": this.focusedItemId === this.getOptionId(item),
            }, "aria-hidden": "true" }, h("div", { class: {
                "selected": !!item.selected,
                "list-element-content": true,
            }, innerHTML: item.name }), item.icon && h("z-tag", { icon: item.icon }))));
    }
    listSizeType() {
        if (this.hasTreeItems) {
            return ListSize.NONE;
        }
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
            if (this.hasTreeItems) {
                return this.renderGroupedTree();
            }
            return this.renderSelectGroupItems();
        }
        return this.itemsList.map((item, index, array) => {
            const isLastItem = index === array.length - 1;
            const parentHasSiblings = array.length > 1;
            if (this.hasTreeItems) {
                return this.renderTreeItems(item, isLastItem, parentHasSiblings, true, item.disabled);
            }
            return this.renderItem(item, isLastItem);
        });
    }
    renderTreeItems(item, isLastChild, parentHasSiblings, isTopLevel, disabledAncestor) {
        var _a, _b;
        const isDisabled = item.disabled || disabledAncestor;
        const hasDivider = this.hasGroupItems
            ? undefined
            : this.hasGroupItems
                ? isLastChild && !parentHasSiblings
                    ? ListDividerType.ELEMENT
                    : undefined
                : isTopLevel && parentHasSiblings && !isLastChild
                    ? ListDividerType.ELEMENT
                    : undefined;
        return (h("z-list-element", { clickable: !item.disabled, disabled: isDisabled, class: {
                "grouped-tree-parent-node": this.hasGroupItems && !!((_a = item.children) === null || _a === void 0 ? void 0 : _a.length),
                "tree-search-item": this.hasGroupItems && isTopLevel && !((_b = item.children) === null || _b === void 0 ? void 0 : _b.length) && !!this.searchString,
            }, size: this.listSizeType(), dividerType: hasDivider, hasTreeItems: this.hasTreeItems, htmlTabindex: null, role: "presentation" }, h("div", { id: this.getOptionId(item), role: isDisabled ? "presentation" : "option", "aria-label": isDisabled ? undefined : getPlainText(item.name), class: { "list-element": true, "active": this.focusedItemId === this.getOptionId(item) }, onClick: () => this.selectItem(item) }, h("span", { class: "item ellipsis", "aria-hidden": "true" }, h("span", { class: {
                "item-label": true,
                "selected": !!item.selected,
            }, title: item.name, innerHTML: item.name })), item.icon && h("z-tag", { icon: item.icon })), item.children && item.children.length > 0 ? (h("z-list", { role: "presentation" }, h("div", { class: "children-node" }, item.children.map((child, index, arr) => this.renderTreeItems(child, index === arr.length - 1, arr.length > 1, false, // isTopLevel = false for children
        isDisabled))))) : null));
    }
    renderGroupedTree() {
        const groupedItems = this.getGroupedItems();
        return groupedItems.map(([category, items], index, entries) => {
            const parentHasSiblings = Object.values(groupedItems).some((groupItems) => groupItems.length > 1);
            return (h("z-list-group", { "divider-type": index === entries.length - 1 ? undefined : ListDividerType.ELEMENT, hasTreeItems: true, "aria-labelledby": `${this.htmlid}_tree_${index}` }, h("span", { class: "body-3-sb z-list-group-title", slot: "header-title", id: `${this.htmlid}_tree_${index}`, "aria-hidden": "true" }, category), h("z-list", { role: "presentation" }, items.map((item, i, arr) => [
                this.renderTreeItems(item, i === arr.length - 1, parentHasSiblings, true, item.disabled),
                i < arr.length - 1 ? (h("z-divider", { key: `divider-${i}`, style: { zIndex: "100", height: "var(--border-size-small)" } })) : null,
            ])), index !== entries.length - 1 && h("z-divider", { style: { zIndex: "100", height: "var(--border-size-small)" } })));
        });
    }
    renderSelectGroupItems() {
        const groupedItems = this.getGroupedItems();
        return groupedItems.map(([key, items], index) => {
            const isLastGroup = groupedItems.length === index + 1;
            return (h("z-list-group", { "divider-type": ListDividerType.ELEMENT, "aria-labelledby": `${this.htmlid}_group_${index}` }, h("span", { class: "body-3-sb z-list-group-title", slot: "header-title", id: `${this.htmlid}_group_${index}`, "aria-hidden": "true" }, key), items.map((item, subindex) => {
                const isLastItem = items.length === subindex + 1;
                return this.renderItem(item, isLastGroup && isLastItem);
            })));
        });
    }
    renderNoSearchResults() {
        return (h("z-list-element", { class: "no-results", size: this.hasTreeItems ? ListSize.MEDIUM : this.listSizeType(), htmlTabindex: null, role: "presentation" }, this.noresultslabel));
    }
    renderMessage() {
        if (!this.hasMessage()) {
            return;
        }
        return (h("z-input-message", { "html-id": this.getMessageId(), message: boolean(this.message) === true ? undefined : this.message, status: this.status, class: this.size, disabled: this.disabled }));
    }
    render() {
        return (h("div", { key: 'fd1afef509078b977d8ca95df6d75e76b36431b6', class: "select-wrapper" }, this.renderInput(), this.renderSelectUl(), this.renderMessage()));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "items": [{
                "watchItems": 0
            }]
    }; }
};
ZSelect.style = stylesCss();

export { ZSelect as z_select };

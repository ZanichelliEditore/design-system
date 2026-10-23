import { r as registerInstance, c as createEvent, h, d as getElement } from './index-DafJ7_Il.js';
import { e as ControlSize, I as InputType, i as ListSize, g as KeyboardCode, l as ListDividerType } from './index-DdetsoIY.js';
import { r as randomId, e as encodeString, b as getPlainText } from './utils-CJc3A9NX.js';
import './breakpoints-Q-tWjk7P.js';

const stylesCss$1 = () => `.z-label{display:block;padding-bottom:var(--space-unit);color:var(--color-default-text);font-family:var(--font-family-sans);font-size:var(--font-size-1);font-weight:var(--font-sb);text-align:left;text-transform:uppercase}`;

const stylesCss = () => `:host{display:block;min-width:290px;color:var(--color-form-default-text);fill:var(--color-form-default-icon);font-family:var(--font-family-sans)}:host>div.fixed{position:relative}:host>div>.header{position:relative;z-index:10;display:flex;min-height:42px;align-items:center;justify-content:space-between;padding:0 calc(var(--space-unit) * 1.5);border:var(--border-size-small) solid var(--color-form-surface04);margin:0;background-color:var(--color-form-background);border-radius:var(--border-radius-small);cursor:pointer}:host([size="small"])>div>.header{min-height:34px;font-size:var(--font-size-2)}:host([size="x-small"])>div>.header{min-height:30px;font-size:var(--font-size-2)}:host>div>.header:hover{outline:var(--border-size-medium) solid var(--color-form-surface04);outline-offset:-2px}:host>div>div.header:focus:focus-visible{z-index:16;box-shadow:var(--shadow-focus-primary);outline:none}:host>div>.header>span.body-3>span{font-weight:var(--font-sb)}:host>div>.header>z-icon{fill:var(--color-form-default-icon)}:host>div>.header>z-icon.small,:host>div>.header>z-icon.x-small{--z-icon-width:16px;--z-icon-height:16px}:host>div.open>.header{border:var(--border-size-small) solid var(--color-form-active-primary);border-radius:var(--border-radius-small) var(--border-radius-small) 0 0}:host>div.disabled{pointer-events:none}:host>div.disabled .header{border-color:var(--color-form-disabled03);fill:var(--color-form-disabled01-icon)}:host>div.disabled .header>span.body-3{color:var(--color-form-disabled03)}:host>div.disabled .header>z-icon:last-child{fill:var(--color-form-disabled01-icon)}:host>div>div.open-combo-data{display:none}:host>div.open>div.open-combo-data{position:relative;z-index:12;display:block;padding:var(--space-unit) calc(var(--space-unit) * 2);border:var(--border-size-small) solid var(--color-form-surface03);border-top:0;background-color:var(--color-form-background);border-radius:0;box-shadow:var(--shadow-2)}:host .open .open-combo-data z-input .z-label{color:var(--color-form-default-text)}:host>div.open>div.open-combo-data>div>div{overflow:auto;max-height:235px;padding:0;padding-left:var(--space-unit);margin-left:calc(var(--space-unit) * -1);}:host>div.open>div.open-combo-data>z-input{width:100%;margin-bottom:calc(var(--space-unit) * 2)}:host>div.open>div.open-combo-data>div>div>ul{max-height:235px;padding:0 calc(var(--space-unit) * 0.5);margin:0}:host .open-combo-data z-list-element{--background-color-list-element:var(--color-form-background);--background-hover-color-list-element:var(--color-form-surface03);--background-active-color-list-element:var(--color-form-surface03)}:host .open-combo-data z-list-element[disabled]{pointer-events:none}:host .open-combo-data z-list-element .option-wrap{display:flex;flex-direction:row;align-items:center;cursor:pointer;gap:var(--space-unit)}:host .open-combo-data z-list-element[size="medium"] .option-wrap,:host .open-combo-data z-list-element[size="small"] .option-wrap{--z-icon-width:16px;--z-icon-height:16px;font-size:var(--font-size-2);gap:calc(var(--space-unit) / 2)}:host .open-combo-data z-list-element .option-wrap>z-icon{fill:var(--color-primary01-icon)}:host .open-combo-data z-list-element[disabled] .option-wrap>z-icon{fill:var(--color-disabled01)}:host .open-combo-data z-list-element .option-wrap>z-icon.focused{border-radius:var(--border-radius-small);box-shadow:var(--shadow-focus-primary);outline:none}:host .open-combo-data z-list-element .option-wrap>[role="option"]:focus,:host .open-combo-data z-list-element .option-wrap>[role="option"]:focus-visible{outline:none}::-webkit-scrollbar{width:6px;background:linear-gradient(to right, transparent 0 1px, var(--gray200) 1px 5px, transparent 5px 6px)}::-webkit-scrollbar-thumb{background-color:var(--color-primary01)}::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}@supports not selector(::-webkit-scrollbar-track){:host{scrollbar-color:var(--color-primary01) transparent}}:host>div.open>z-input{position:relative;z-index:1;width:238px;margin:0 calc(var(--space-unit) * 2);color:var(--color-form-active-primary)}:host>div.open>div.open-combo-data>div>div.search{overflow:hidden;max-height:none;margin-top:0}:host>div.open>div.open-combo-data>div>div.search>ul{overflow:auto;max-height:180px;padding:var(--space-unit) calc(var(--space-unit) * 2)}:host .open .open-combo-data .search .no-results{display:flex;align-items:center;column-gap:var(--space-unit)}:host>.open>.open-combo-data .search .close-search{display:flex;justify-content:center}:host>div.open>div.open-combo-data>div>div.search .close-search>a{display:inline-block;height:44px;color:var(--color-form-active-primary);cursor:pointer;font-size:14px;font-weight:var(--font-sb);line-height:44px;text-align:center;text-transform:uppercase}:host>div.open>div.open-combo-data>div>div.search .close-search>a:focus:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}:host>div.open>div.open-combo-data>div>div.check-all-wrapper{padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 0.5) calc(var(--space-unit) * 2)     calc(var(--space-unit) * 1.5);border-bottom:var(--border-size-small) solid var(--gray800);margin-bottom:var(--space-unit);margin-left:calc(var(--space-unit) * -1);text-align:left}:host([size="small"])>div.open>div.open-combo-data>div>div.check-all-wrapper{padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 0.5)}:host([size="x-small"])>div.open>div.open-combo-data>div>div.check-all-wrapper{padding:var(--space-unit) calc(var(--space-unit) * 0.5)}`;

const ZCombobox = class {
    watchItems() {
        this.itemsList = typeof this.items === "string" ? JSON.parse(this.items) : this.items;
        this.selectedCounter = this.itemsList.filter((item) => item.checked).length;
        this.updateRenderItemsList();
    }
    watchSearchValue() {
        this.filterItems(this.searchValue);
    }
    emitComboboxChange() {
        this.comboboxChange.emit({ id: this.inputid, items: this.itemsList });
    }
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.comboboxChange = createEvent(this, "comboboxChange", 7);
        /** input unique id */
        this.inputid = `combo-${randomId()}`;
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
        /** show "check all" checkbox (optional) */
        this.hascheckall = false;
        /** check all label (optional) */
        this.checkalltext = "Seleziona tutti";
        /** uncheck all label (optional) */
        this.uncheckalltext = "Deseleziona tutti";
        /** max number of checkable items (0 = unlimited) */
        this.maxcheckableitems = 0;
        /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
        this.size = ControlSize.BIG;
        this.renderItemsList = []; // used for render only
        this.focusedItemId = "";
        this.itemsList = [];
        this.inputType = InputType.TEXT;
        this.toggleComboBox = this.toggleComboBox.bind(this);
        this.closeFilterItems = this.closeFilterItems.bind(this);
    }
    componentWillLoad() {
        this.watchItems();
    }
    componentWillRender() {
        this.selectedCounter = this.itemsList.filter((item) => item.checked).length;
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
    getOptionId(item) {
        return `${this.inputid}-option-${item.id ? encodeString(`${item.id}`) : encodeString(`${item.name}`)}`;
    }
    getCheckAllOptionId() {
        return `${this.inputid}-check-all`;
    }
    allOptionsSelected() {
        return this.selectedCounter === this.itemsList.length;
    }
    hasReachedMaxSelections() {
        return !!(this.maxcheckableitems && this.selectedCounter >= this.maxcheckableitems);
    }
    handleHeaderKeyDown(e) {
        if (e.code === KeyboardCode.ENTER && !this.focusedItemId) {
            this.toggleComboBox();
        }
        if (!this.isopen || this.hassearch) {
            return;
        }
        switch (e.code) {
            case KeyboardCode.SPACE:
            case KeyboardCode.ENTER:
                if (this.focusedItemId) {
                    e.preventDefault();
                    this.checkOption(this.focusedItemId);
                }
                break;
            case KeyboardCode.ESC:
                if (this.focusedItemId) {
                    this.focusedItemId = "";
                }
                break;
            case KeyboardCode.ARROW_DOWN:
            case KeyboardCode.ARROW_UP:
                this.handleArrowsNavigation(e);
                break;
        }
    }
    handleInputKeyDown(e) {
        switch (e.code) {
            case KeyboardCode.ENTER:
            case KeyboardCode.SPACE:
                if (this.focusedItemId) {
                    e.preventDefault();
                    this.checkOption(this.focusedItemId);
                    break;
                }
                break;
            case KeyboardCode.ARROW_DOWN:
            case KeyboardCode.ARROW_UP:
                this.handleArrowsNavigation(e);
                break;
            case KeyboardCode.ESC:
                if (this.focusedItemId) {
                    this.focusedItemId = "";
                    break;
                }
                this.closeFilterItems();
                break;
            case KeyboardCode.TAB:
                this.focusedItemId = "";
                break;
        }
    }
    checkOption(optionId) {
        if (optionId === this.getCheckAllOptionId()) {
            this.itemsList = this.itemsList.map((item) => (Object.assign(Object.assign({}, item), { checked: !this.allOptionsSelected() })));
            this.focusedItemId = this.getCheckAllOptionId();
        }
        else {
            this.itemsList = this.itemsList.map((i) => {
                if (optionId === this.getOptionId(i)) {
                    i.checked = !i.checked;
                }
                return i;
            });
        }
        this.updateRenderItemsList();
        this.emitComboboxChange();
    }
    handleArrowsNavigation(e) {
        if (![KeyboardCode.ARROW_DOWN, KeyboardCode.ARROW_UP].includes(e.code) || !this.isopen) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        const currElem = this.focusedItemId ? this.element.shadowRoot.querySelector(`#${this.focusedItemId}`) : null;
        const options = Array.from(this.element.shadowRoot.querySelectorAll('[role="option"]'));
        if (!options.length) {
            return;
        }
        const currElemIndex = currElem ? options.indexOf(currElem) : null;
        const firstElemIndex = 0;
        const lastElemIndex = options.length - 1;
        let nextElem = null;
        if (e.code === KeyboardCode.ARROW_DOWN) {
            nextElem =
                currElemIndex === null ? options[firstElemIndex] : options[currElemIndex + 1] || options[lastElemIndex];
        }
        else if (e.code === KeyboardCode.ARROW_UP) {
            nextElem =
                currElemIndex === null ? options[lastElemIndex] : options[currElemIndex - 1] || options[firstElemIndex];
        }
        this.focusedItemId = nextElem.id;
        nextElem.scrollIntoView({ block: "nearest", container: "nearest" });
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
    closeFilterItems() {
        this.searchValue = "";
        this.resetRenderItemsList();
    }
    toggleComboBox() {
        this.isopen = !this.isopen;
    }
    getHeaderAriaLabel() {
        if (!this.label || this.selectedCounter <= 0) {
            return undefined;
        }
        const suffix = this.selectedCounter === 1 ? "elemento selezionato" : "elementi selezionati";
        return `${this.label}: ${this.selectedCounter} ${suffix}`;
    }
    getComboboxA11yAttributes(isZInput) {
        const role = "combobox";
        const ariaExpanded = this.isopen ? "true" : "false";
        const ariaActivedescendant = this.isopen ? this.focusedItemId : "";
        const ariaControls = `${this.inputid}_list`;
        if (isZInput) {
            return {
                "role": role,
                "aria-label": this.htmlAriaLabel,
                "html-aria-expanded": ariaExpanded,
                "html-aria-activedescendant": ariaActivedescendant,
                "html-aria-controls": ariaControls,
            };
        }
        return {
            "role": role,
            "aria-expanded": ariaExpanded,
            "aria-activedescendant": ariaActivedescendant,
            "aria-controls": ariaControls,
        };
    }
    renderHeader() {
        const comboboxA11yAttributes = !this.hassearch ? this.getComboboxA11yAttributes(false) : {};
        return (h("div", Object.assign({ class: "header", onClick: () => this.toggleComboBox(), onKeyDown: (e) => this.handleHeaderKeyDown(e), role: "button", tabindex: 0, "aria-controls": "open-combo-data", "aria-expanded": this.isopen ? "true" : "false", "aria-label": this.getHeaderAriaLabel() }, comboboxA11yAttributes), h("span", { class: "body-3" }, this.label, h("span", null, this.selectedCounter > 0 && ` (${this.selectedCounter})`)), h("z-icon", { name: this.isopen ? "caret-up" : "caret-down", class: this.size })));
    }
    renderContent() {
        return (h("div", { id: "open-combo-data", class: "open-combo-data" }, this.hassearch && this.renderSearchInput(), h("div", { role: "listbox", "aria-label": this.label, "aria-multiselectable": "true", id: `${this.inputid}_list`, "aria-owns": `${this.hascheckall ? `${this.getCheckAllOptionId()} ` : ``}${this.itemsList.map((item) => this.getOptionId(item)).join(" ")}` }, this.renderItems())));
    }
    renderItems() {
        return (h("div", { class: this.searchValue && "search", tabIndex: -1, role: "presentation" }, this.renderList(this.renderItemsList)));
    }
    renderItem(item, index, length) {
        const optionId = this.getOptionId(item);
        const isDisabled = !item.checked && this.hasReachedMaxSelections();
        return (h("z-list-element", { htmlTabindex: -1, dividerType: index !== length - 1 ? ListDividerType.ELEMENT : ListDividerType.NONE, size: this.getControlToListSize(), role: "presentation", disabled: !!isDisabled }, h("span", { class: "option-wrap", role: "presentation", onClick: () => {
                this.focusedItemId = "";
                this.checkOption(optionId);
            } }, h("z-icon", { name: item.checked ? "checkbox-checked" : "checkbox", class: this.focusedItemId === optionId ? "focused" : "" }), h("span", { id: optionId, role: isDisabled ? "presentation" : "option", "aria-selected": item.checked ? "true" : "false", "aria-label": isDisabled ? undefined : getPlainText(item.name) }, h("span", { "aria-hidden": "true", innerHTML: item.name })))));
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
        return (h("ul", { role: "presentation" }, this.renderCheckAll(), items.map((item, i) => {
            return this.renderItem(item, i, items.length);
        })));
    }
    renderGroups(items) {
        const newData = items.reduce((group, item, index) => {
            var _a;
            const category = item.category || "Altra categoria";
            const zListItem = this.renderItem(item, index, items.length);
            group[category] = (_a = group[category]) !== null && _a !== void 0 ? _a : [];
            group[category].push(zListItem);
            return group;
        }, {});
        const listGroups = Object.entries(newData).map(([key, value], index) => {
            return (h("z-list-group", { size: this.getControlToListSize(), "divider-type": ListDividerType.ELEMENT, "aria-labelledby": `${this.inputid}_list_group_${index}` }, h("span", { class: "body-3-sb z-list-group-title", slot: "header-title", id: `${this.inputid}_list_group_${index}`, "aria-hidden": "true" }, key), value.map((item) => item)));
        });
        return (h("ul", { role: "presentation" }, this.renderCheckAll(), listGroups));
    }
    renderNoSearchResults() {
        return (h("div", { class: "no-results" }, h("span", null, this.noresultslabel)));
    }
    renderSearchInput() {
        return (h("z-input", Object.assign({ htmlid: `${this.inputid}_search`, label: this.searchlabel, placeholder: this.searchplaceholder, htmltitle: this.searchtitle, type: this.inputType, value: this.searchValue, message: false, size: this.size, "html-aria-autocomplete": "list" }, this.getComboboxA11yAttributes(true), { onKeyDown: (e) => this.handleInputKeyDown(e), onInputChange: (e) => {
                this.searchValue = e.detail.value;
                this.focusedItemId = "";
            } })));
    }
    renderCheckAll() {
        if (!this.hascheckall || this.searchValue) {
            return;
        }
        const optionId = this.getCheckAllOptionId();
        const allChecked = this.allOptionsSelected();
        const isPartiallySelected = this.selectedCounter > 0 && !allChecked;
        const isDisabled = !allChecked &&
            (this.hasReachedMaxSelections() || (this.maxcheckableitems && this.maxcheckableitems < this.itemsList.length));
        return (h("z-list-element", { class: "check-all-wrapper", role: "presentation", htmlTabindex: -1, dividerType: ListDividerType.ELEMENT, dividerColor: "gray800", size: this.getControlToListSize(), disabled: !!isDisabled }, h("span", { class: "option-wrap", role: "presentation", onClick: () => this.checkOption(optionId) }, h("z-icon", { name: isPartiallySelected ? "indeterminated-checkbox" : allChecked ? "checkbox-checked" : "checkbox", class: this.focusedItemId === optionId ? "focused" : "" }), h("span", { id: optionId, role: isDisabled ? "presentation" : "option", "aria-selected": allChecked ? "true" : "false" }, allChecked ? this.uncheckalltext : this.checkalltext))));
    }
    render() {
        return (h("div", { key: '9f1468b03c1cbe2c12aec68ab8c096b56651ebe2', "data-action": `combo-${this.inputid}`, class: { open: this.isopen, fixed: this.isfixed, disabled: this.disabled }, id: this.inputid }, this.renderHeader(), !this.disabled && this.renderContent()));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "items": [{
                "watchItems": 0
            }],
        "searchValue": [{
                "watchSearchValue": 0
            }]
    }; }
};
ZCombobox.style = stylesCss$1() + stylesCss();

export { ZCombobox as z_combobox };

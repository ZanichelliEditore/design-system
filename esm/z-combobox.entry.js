import { r as registerInstance, c as createEvent, h, g as getElement } from './index-ab5f1eaa.js';
import { I as InputType, e as ControlSize, i as ListSize, g as KeyboardCode, l as ListDividerType } from './index-2255c6c8.js';
import { r as randomId, a as handleKeyboardSubmit } from './utils-7983d02c.js';
import './breakpoints-680e0e56.js';

const stylesCss = ":host{display:block;font-family:var(--font-family-sans)}:host>div.fixed{position:relative}:host>div>.header{position:relative;z-index:10;display:-ms-flexbox;display:flex;min-height:42px;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:0 calc(var(--space-unit) * 1.5);border:var(--border-size-small) solid var(--color-surface04);margin:0;background-color:var(--color-input-field01);border-radius:var(--border-radius-small);cursor:pointer}:host([size=\"small\"])>div>.header{min-height:34px;font-size:var(--font-size-2)}:host([size=\"x-small\"])>div>.header{min-height:30px;font-size:var(--font-size-2)}:host([size=\"x-small\"])>div>.header p.body-3{padding:calc(var(--space-unit) * 0.5) 0}:host>div>.header:hover{outline:var(--border-size-medium) solid var(--color-surface04);outline-offset:-2px}:host>div.open>div.header:focus:focus-visible{-webkit-box-shadow:none;box-shadow:none}:host>div>div.header:focus:focus-visible{-webkit-box-shadow:var(--shadow-focus-primary);box-shadow:var(--shadow-focus-primary);outline:none}:host>div>.header>p.body-3{padding:var(--space-unit) 0;margin:0;color:var(--color-default-text)}:host>div>.header>p.body-3>span{font-weight:var(--font-sb)}:host>div>.header>z-icon{fill:var(--color-default-icon);-webkit-transform:rotate(360deg);transform:rotate(360deg);-webkit-transition:all 200ms linear;transition:all 200ms linear}:host>div>.header>z-icon.small,:host>div>.header>z-icon.x-small{--z-icon-width:16px;--z-icon-height:16px}:host>div.open>.header{border:var(--border-size-small) solid var(--color-primary01);border-radius:var(--border-radius-small) var(--border-radius-small) 0 0}:host>div.disabled{pointer-events:none}:host>div.disabled .header{border-color:var(--color-disabled01);fill:var(--color-disabled01)}:host>div.disabled .header>p.body-3{color:var(--color-disabled03)}:host>div.disabled .header>z-icon:last-child{fill:var(--color-disabled01)}:host>div.open>.header>z-icon{fill:var(--color-default-icon);-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-transition:all 200ms linear;transition:all 200ms linear}:host>div.open>div.open-combo-data{position:relative;z-index:12;padding:var(--space-unit) calc(var(--space-unit) * 2);border:var(--border-size-small) solid var(--gray200);border-top:0;background-color:var(--color-input-field01);border-radius:0}:host>div.open>div.open-combo-data>div>div{overflow:auto;max-height:235px;padding:0;scrollbar-color:var(--color-primary01) transparent}:host>div.open>div.open-combo-data>z-input{width:100%;margin-bottom:calc(var(--space-unit) * 2)}:host>div.open>div.open-combo-data>div>div>ul{max-height:235px;padding:0 3px;margin:0}::-webkit-scrollbar{width:10px;background:linear-gradient(to right, transparent 0 3px, var(--gray200) 3px 7px, transparent 7px 10px);border-radius:var(--border-radius)}::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01)}:host>div.open>z-input{position:relative;z-index:1;width:238px;margin:0 calc(var(--space-unit) * 2);color:var(--color-primary01)}:host>div.open>div.open-combo-data>div>div.search{overflow:hidden;max-height:auto;margin-top:0;-webkit-box-shadow:1px 1px 4px 2px rgb(217 222 227 / 50%);box-shadow:1px 1px 4px 2px rgb(217 222 227 / 50%)}:host>div.open>div.open-combo-data>div>div.search>ul{overflow:auto;max-height:180px;padding:var(--space-unit) calc(var(--space-unit) * 2);scrollbar-color:var(--color-primary01) transparent}:host>div.open>div.open-combo-data>div>div.search>div{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}:host>div.open>div.open-combo-data>div>div.search>div>a{display:inline-block;height:44px;color:var(--color-primary01);cursor:pointer;font-size:14px;font-weight:var(--font-sb);line-height:44px;text-align:center;text-transform:uppercase}:host>div.open>div.open-combo-data>div>div.check-all-wrapper{padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 0.5);border-bottom:var(--border-size-small) solid var(--gray800);margin-bottom:var(--space-unit);text-align:left}:host([size=\"small\"])>div.open>div.open-combo-data>div>div.check-all-wrapper{padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 0.5)}:host([size=\"x-small\"])>div.open>div.open-combo-data>div>div.check-all-wrapper{padding:var(--space-unit) calc(var(--space-unit) * 0.5)}";
const ZComboboxStyle0 = stylesCss;

const ZCombobox = class {
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
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.comboboxChange = createEvent(this, "comboboxChange", 7);
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
        return (h("div", { key: '118ffd4229b6b7f060d9b28ace7d5a59796620b9', "data-action": `combo-${this.inputid}`, class: { open: this.isopen, fixed: this.isfixed, disabled: this.disabled }, id: this.inputid }, this.renderHeader(), !this.disabled && this.renderContent()));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "items": ["watchItems"],
        "searchValue": ["watchSearchValue"],
        "checkboxes": ["watchCheckboxes"]
    }; }
};
ZCombobox.style = ZComboboxStyle0;

export { ZCombobox as z_combobox };

//# sourceMappingURL=z-combobox.entry.js.map
import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { e as ControlSize, B as ButtonVariant, p as Device, l as ListDividerType, g as KeyboardCode } from './index2.js';
import { r as randomId, g as getDevice, f as handleEnterKeydSubmit } from './utils.js';
import { d as defineCustomElement$9 } from './index4.js';
import { d as defineCustomElement$8 } from './index6.js';
import { d as defineCustomElement$7 } from './index9.js';
import { d as defineCustomElement$6 } from './index10.js';
import { d as defineCustomElement$5 } from './index11.js';
import { d as defineCustomElement$4 } from './index12.js';
import { d as defineCustomElement$3 } from './index13.js';
import { d as defineCustomElement$2 } from './index14.js';
import { d as defineCustomElement$1 } from './index24.js';

const stylesCss = ":host{--z-searchbar-tag-text-color:var(--color-primary03);--z-searchbar-tag-bg:var(--color-hover-primary);--z-searchbar-item-height:44px;z-index:15;display:flex;column-gap:calc(var(--space-unit) * 2);font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host,*{box-sizing:border-box}:host::part(list-item-container){display:block;min-height:unset;padding:0}.input-container{position:relative;display:flex;width:100%;flex-direction:column}.results-wrapper{position:absolute;top:calc(100% - 1px);left:0;width:100%;padding:calc(var(--space-unit) / 4);border:var(--border-size-small) solid var(--color-surface03);border-top:none;background:var(--color-surface01)}.results{overflow:auto;max-height:var(--z-searchbar-results-height, 540px);padding:calc(var(--space-unit) / 2) calc(var(--space-unit) * 1.5);scrollbar-color:var(--color-primary01) transparent}.results::-webkit-scrollbar{width:10px;background:linear-gradient(to right, transparent 0 3px, var(--gray200) 3px 7px, transparent 7px 10px);border-radius:var(--border-radius)}.results::-webkit-scrollbar-track{background-color:transparent}.results::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}.results .category-heading{display:block;font-size:var(--font-size-2);font-weight:var(--font-rg);line-height:var(--font-size-3)}.results .category-heading>*{display:block}.results .category-heading>.category{color:var(--color-text05);font-style:italic}.results .category-heading>.subcategory{margin-top:var(--space-unit);color:var(--color-default-text);text-transform:uppercase}.results z-list-element{position:relative;display:block}z-list-element>.item-search{padding:var(--space-unit) 0}z-list z-list-element::before{position:absolute;z-index:100;top:5px;left:-20px;width:8px;height:1em;border-bottom:1px solid var(--color-disabled01-icon);border-left:1px solid var(--color-disabled01-icon);content:\"\";cursor:pointer}z-list z-list-element::after{position:absolute;z-index:100;top:5px;left:-20px;width:8px;height:100%;border-left:1px solid var(--color-disabled01-icon);content:\"\";cursor:pointer}z-list z-list-element:last-child::after{display:none}z-list>z-list-element::before,z-list>z-list-element::after,z-list>z-list-group>z-list-element::before,z-list>z-list-group>z-list-element::after{display:none}z-list>div.children-node{padding-left:calc(var(--space-unit) * 3)}.results z-list-element>.list-element{display:flex;justify-content:space-between;padding:calc(var(--space-unit) * 1.25) 0;cursor:pointer}.results z-list-element>.list-element:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}.results z-list-element>.list-element .item.ellipsis{overflow:hidden}.results z-list-element .list-element::after{position:absolute;top:0;right:0;display:block;width:100%;height:44px;content:\"\";transform:translateX(-100%)}.results z-list-element .list-element.focused.hovered::after{padding-left:6px}.results z-list-element>.list-element:hover,.results z-list-element>.list-element:hover::after{background-color:var(--color-surface02);cursor:pointer}.results z-list-element>.list-element>z-tag{border:1px solid var(--gray800);font-size:var(--font-size-1);font-weight:var(--font-sb);--z-tag-bg:var(--z-searchbar-tag-bg);--z-tag-text-color:var(--z-searchbar-tag-text-color)}.results .item{--z-icon-height:12px;--z-icon-width:12px;display:flex;flex-flow:row nowrap;align-items:center;justify-content:flex-start;color:var(--color-default-text);column-gap:calc(var(--space-unit) * 1.5);fill:var(--color-default-icon);font-size:var(--font-size-2);line-height:var(--font-size-6)}.results .item.ellipsis>.item-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.results .item>.item-label mark{background:var(--color-primary03)}.results .item.item-search{--z-icon-height:16px;--z-icon-width:16px}.results .item-show-all{text-align:center}.results .item-no-results{display:block;font-size:var(--font-size-2);font-style:italic;line-height:var(--font-size-5)}.results .item-no-results>ul{padding-left:calc(var(--space-unit) * 2);margin:var(--space-unit)}@media (min-width: 768px){.results .category-heading{font-size:var(--font-size-3);line-height:var(--font-size-6)}.results .item{font-size:var(--font-size-3);line-height:var(--font-size-6)}.results .item.item-search{--z-icon-height:18px;--z-icon-width:18px}.results .item.ellipsis>.item-label{height:24px}.results z-list-element>.list-element>z-tag{min-width:max-content}}@media (min-width: 1152px){.results .item{cursor:pointer}.results .item-no-results{cursor:default;font-size:var(--font-size-3);line-height:var(--font-size-6)}}:host([size=\"small\"]) .results :is(.item,.category-heading),:host([size=\"x-small\"]) .results :is(.item,.category-heading){font-size:var(--font-size-2)}:host([size=\"small\"]) .results .item:not(.has-category),:host([size=\"x-small\"]) .results .item:not(.has-category){--z-icon-height:16px;--z-icon-width:16px}:host([size=\"small\"]) z-list-element>.list-element,:host([size=\"small\"]) z-list-element>.item-search{padding:calc(var(--space-unit) * 0.75) 0}:host([size=\"x-small\"]) z-list-element>.list-element,:host([size=\"x-small\"]) z-list-element>.item-search{padding:calc(var(--space-unit) / 2) 0}:host([size=\"small\"]) z-list-element .list-element::after{height:36px}:host([size=\"x-small\"]) z-list-element .list-element::after{height:32px}";
const ZSearchbarStyle0 = stylesCss;

const ZSearchbar = /*@__PURE__*/ proxyCustomElement(class ZSearchbar extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.searchSubmit = createEvent(this, "searchSubmit", 7);
        this.searchTyping = createEvent(this, "searchTyping", 7);
        this.searchItemClick = createEvent(this, "searchItemClick", 7);
        this.resultsItemsList = null;
        this.items = [];
        this.htmlid = `searchbar-${randomId()}`;
        this.preventSubmit = false;
        this.value = undefined;
        this.placeholder = undefined;
        this.autocomplete = false;
        this.autocompleteMinChars = 3;
        this.resultsCount = undefined;
        this.searchHelperLabel = "Cerca {searchString}";
        this.resultsItems = undefined;
        this.sortResultsItems = false;
        this.showSearchButton = false;
        this.searchButtonIconOnly = false;
        this.size = ControlSize.BIG;
        this.variant = ButtonVariant.PRIMARY;
        this.searchString = this.value;
        this.currResultsCount = 0;
        this.showResults = false;
        this.isMobile = false;
    }
    emitSearchSubmit() {
        this.searchSubmit.emit(this.inputRef.value);
    }
    emitSearchTyping(search) {
        this.searchTyping.emit(search);
    }
    emitSearchItemClick(item) {
        this.searchItemClick.emit(item);
    }
    watchItems() {
        this.resultsItemsList = this.getResultsItemsList();
    }
    watchResultsCount() {
        this.currResultsCount = this.resultsCount;
    }
    watchValue() {
        this.searchString = this.value;
    }
    watchSearchString() {
        this.emitSearchTyping(this.searchString);
        this.items = [];
        if (!this.searchString) {
            this.currResultsCount = this.resultsCount;
        }
    }
    watchShowResults() {
        if (!this.showResults) {
            this.items = [];
        }
    }
    disconnectedCallback() {
        this.resizeObserver.disconnect();
    }
    componentDidLoad() {
        this.resizeObserver = new ResizeObserver(() => {
            if (getDevice() === Device.MOBILE && !this.isMobile) {
                this.isMobile = true;
            }
            if (getDevice() !== Device.MOBILE && this.isMobile) {
                this.isMobile = false;
            }
        });
        this.resizeObserver.observe(this.element);
    }
    componentWillLoad() {
        this.resultsItemsList = this.getResultsItemsList();
        this.currResultsCount = this.resultsCount;
    }
    getResultsItemsList() {
        return typeof this.resultsItems === "string" ? JSON.parse(this.resultsItems) : this.resultsItems;
    }
    getGroupedItems(items) {
        const groupedItems = {};
        items.forEach((item) => {
            var _a;
            const key = `${item === null || item === void 0 ? void 0 : item.category}${item === null || item === void 0 ? void 0 : item.subcategory}`;
            groupedItems[key] = (_a = groupedItems[key]) !== null && _a !== void 0 ? _a : {
                category: item === null || item === void 0 ? void 0 : item.category,
                subcategory: item === null || item === void 0 ? void 0 : item.subcategory,
                items: [],
            };
            groupedItems[key]["items"].push(item);
        });
        if (this.sortResultsItems) {
            return Object.keys(groupedItems)
                .sort()
                .reduce((obj, key) => {
                obj[key] = Object.assign(Object.assign({}, groupedItems[key]), { items: groupedItems[key]["items"].sort((a, b) => {
                        const nameA = a.label.toUpperCase();
                        const nameB = b.label.toUpperCase();
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
                        return 0;
                    }) });
                return obj;
            }, {});
        }
        return groupedItems;
    }
    checkResultsCount(counter) {
        if (!this.currResultsCount || counter < this.currResultsCount) {
            return true;
        }
        return false;
    }
    handleStopTyping(e) {
        e.stopPropagation();
        this.searchString = e.detail.value;
    }
    handleSubmit() {
        if (this.preventSubmit) {
            return;
        }
        this.emitSearchSubmit();
    }
    handleOutsideClick(e) {
        const cp = e.composedPath();
        const searchbar = cp.find((elem) => elem.nodeName === "Z-SEARCHBAR");
        if (!searchbar || searchbar.htmlid !== this.htmlid) {
            this.showResults = false;
            return;
        }
        if (cp.find((elem) => { var _a; return (elem === null || elem === void 0 ? void 0 : elem.nodeName) === "Z-INPUT" || ((_a = elem === null || elem === void 0 ? void 0 : elem.classList) === null || _a === void 0 ? void 0 : _a.contains("results")); })) {
            this.showResults = true;
            return;
        }
        this.showResults = false;
    }
    renderInput() {
        return (h("z-input", { ref: (val) => {
                this.inputRef = val;
            }, message: false, placeholder: this.placeholder, onStopTyping: (e) => this.handleStopTyping(e), onKeyUp: (e) => {
                handleEnterKeydSubmit(e, () => this.handleSubmit());
                this.handleArrowsNavigation(e);
            }, value: this.value, ariaLabel: this.placeholder, size: this.size, tabIndex: 0 }));
    }
    renderButton() {
        if (!this.showSearchButton) {
            return null;
        }
        const iconProp = this.searchButtonIconOnly ? { icon: "search" } : null;
        const buttonLabel = this.searchButtonIconOnly ? "" : "CERCA";
        const defaultProps = Object.assign({ disabled: this.preventSubmit, variant: this.variant, size: this.size, onClick: () => this.handleSubmit() }, iconProp);
        return h("z-button", Object.assign({}, defaultProps), buttonLabel);
    }
    renderResults() {
        if (!this.showResults ||
            !this.autocomplete ||
            !this.searchString ||
            this.searchString.length < this.autocompleteMinChars ||
            !this.resultsItemsList) {
            return null;
        }
        return (h("div", { class: "results-wrapper" }, h("div", { class: "results" }, this.renderResultsList())));
    }
    renderResultsList() {
        var _a, _b;
        if (this.preventSubmit && !((_a = this.resultsItemsList) === null || _a === void 0 ? void 0 : _a.length)) {
            return (h("span", { class: "item item-no-results" }, "Non abbiamo trovato risultati per ", h("b", null, this.searchString), h("br", null), h("br", null), "Cosa puoi fare?", h("ul", null, h("li", null, "Verificare di aver scritto bene"), h("li", null, "Provare a cercare un'altra parola"), h("li", null, "Provare a cercare qualcosa di pi\u00F9 generico"))));
        }
        return (h("z-list", { role: "listbox", id: `list-${this.htmlid}` }, this.renderSearchHelper(!!((_b = this.resultsItemsList) === null || _b === void 0 ? void 0 : _b.length)), this.renderItems(), this.renderShowAllResults()));
    }
    renderItems() {
        var _a;
        if (!((_a = this.resultsItemsList) === null || _a === void 0 ? void 0 : _a.length)) {
            return [];
        }
        const groupedItems = this.getGroupedItems(this.resultsItemsList);
        const listGroups = [];
        let counter = 0;
        Object.values(groupedItems).forEach((groupItem, index, array) => {
            if (this.checkResultsCount(counter)) {
                const listGroupsElements = [];
                groupItem.items.forEach((item, subindex, subarray) => {
                    if (this.checkResultsCount(counter)) {
                        const isLast = index === array.length - 1 && subindex === subarray.length - 1;
                        listGroupsElements.push(this.renderItem(item, subindex, !isLast));
                    }
                    counter++;
                });
                if (listGroupsElements.length) {
                    listGroups.push(h("z-list-group", { "divider-type": ListDividerType.ELEMENT }, this.renderItemCategory(groupItem), listGroupsElements));
                }
            }
        });
        return listGroups;
    }
    handleArrowsNavigation(e) {
        const currentElement = e.target;
        const arrows = [KeyboardCode.ARROW_DOWN, KeyboardCode.ARROW_UP];
        if (!arrows.includes(e.key)) {
            e.preventDefault();
            return;
        }
        if (!this.items.length) {
            const list = this.element.shadowRoot.querySelector("z-list");
            if (!list) {
                return;
            }
            this.items = Array.from(list.querySelectorAll(".list-element"));
        }
        this.items.forEach((item) => item.classList.contains("focused") && item.classList.remove("focused"));
        const currentIndex = this.items.indexOf(currentElement);
        if (e.key === KeyboardCode.ARROW_DOWN) {
            e.preventDefault();
            const nextIndex = currentIndex + 1;
            if (nextIndex < this.items.length) {
                this.items[nextIndex].focus();
                this.items[nextIndex].classList.add("focused");
            }
        }
        if (e.key === KeyboardCode.ARROW_UP) {
            e.preventDefault();
            const prevIndex = currentIndex - 1;
            if (prevIndex < 0) {
                this.element.shadowRoot.querySelector("input").focus();
                this.element.shadowRoot
                    .querySelector("input")
                    .setSelectionRange(this.inputRef.value.length, this.inputRef.value.length);
            }
            if (prevIndex >= 0) {
                this.items[prevIndex].focus();
                this.items[prevIndex].classList.add("focused");
            }
        }
    }
    renderItem(item, key, divider) {
        return (h("z-list-element", { id: `list-item-${this.htmlid}-${key}`, tabIndex: 0, role: "option", dividerType: divider ? ListDividerType.ELEMENT : undefined, onKeyDown: (e) => this.handleArrowsNavigation(e) }, h("div", { class: "list-element", tabIndex: 0, onClick: () => this.emitSearchItemClick(item), onKeyDown: (e) => handleEnterKeydSubmit(e, () => this.emitSearchItemClick(item)), onMouseEnter: (e) => {
                const currentElement = e.target;
                currentElement.classList.add("hovered");
            }, onMouseLeave: (e) => {
                const currentElement = e.target;
                currentElement.classList.contains("hovered") && currentElement.classList.remove("hovered");
            } }, h("span", { class: "item ellipsis" }, (item === null || item === void 0 ? void 0 : item.icon) && (h("z-icon", { class: "item-icon", name: item.icon })), h("span", { class: "item-label", title: item.label, innerHTML: this.renderItemLabel(item.label) })), (item === null || item === void 0 ? void 0 : item.tag) && h("z-tag", { icon: item.tag.icon }, !this.isMobile ? item.tag.text : "")), item.children && item.children.length > 0 ? (h("z-list", null, h("div", { class: "children-node" }, item.children.map((child, index) => this.renderItem(child, index, false))))) : null));
    }
    renderItemLabel(label) {
        if (!this.searchString) {
            return label;
        }
        return label.replace(new RegExp(this.searchString.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gmi"), (found) => `<mark>${found}</mark>`);
    }
    renderItemCategory(groupItem) {
        if (!(groupItem === null || groupItem === void 0 ? void 0 : groupItem.category)) {
            return null;
        }
        return (h("span", { class: "category-heading", slot: "header-title" }, h("span", { class: "category" }, groupItem.category), (groupItem === null || groupItem === void 0 ? void 0 : groupItem.subcategory) && h("span", { class: "subcategory" }, groupItem.subcategory)));
    }
    renderSearchHelper(hasDivider = true) {
        if (!this.autocomplete || this.preventSubmit || !this.searchString) {
            return null;
        }
        return (h("z-list-element", { role: "option", dividerType: hasDivider ? ListDividerType.ELEMENT : undefined, id: `list-item-${this.htmlid}-search`, onKeyDown: (e) => this.handleArrowsNavigation(e) }, h("div", { tabindex: 0, onClick: () => this.emitSearchSubmit(), onKeyDown: (e) => handleEnterKeydSubmit(e, () => this.emitSearchSubmit()), class: "list-element" }, h("span", { class: "item item-search" }, h("z-icon", { class: "search-icon", name: "left-magnifying-glass" }), h("span", { class: "item-label", innerHTML: this.searchHelperLabel.replace("{searchString}", `<mark>${this.searchString}</mark>`) })))));
    }
    renderShowAllResults() {
        var _a, _b;
        if (!this.currResultsCount ||
            !this.searchString ||
            !((_a = this.resultsItemsList) === null || _a === void 0 ? void 0 : _a.length) ||
            this.currResultsCount >= ((_b = this.resultsItemsList) === null || _b === void 0 ? void 0 : _b.length)) {
            return null;
        }
        return (h("z-list-element", { role: "option", tabindex: 0, clickable: true, id: `list-item-${this.htmlid}-show-all`, onClickItem: () => (this.currResultsCount = 0), color: "color-primary01" }, h("div", { class: "item-show-all" }, "Vedi tutti i risultati")));
    }
    render() {
        return (h(Host, { key: '24d85cddae24efbb5b46874f9b4b10708942e10e', onFocus: () => (this.showResults = true), onClick: (e) => this.handleOutsideClick(e), class: { "has-submit": this.showSearchButton, "has-results": this.autocomplete } }, h("div", { key: '114d10bf9e947cccc6d69f571cc0de8db8cf3586', class: "input-container" }, this.renderInput(), this.renderResults()), this.renderButton()));
    }
    get element() { return this; }
    static get watchers() { return {
        "resultsItems": ["watchItems"],
        "resultsCount": ["watchResultsCount"],
        "value": ["watchValue"],
        "searchString": ["watchSearchString"],
        "showResults": ["watchShowResults"]
    }; }
    static get style() { return ZSearchbarStyle0; }
}, [1, "z-searchbar", {
        "htmlid": [513],
        "preventSubmit": [4, "prevent-submit"],
        "value": [1],
        "placeholder": [1],
        "autocomplete": [4],
        "autocompleteMinChars": [2, "autocomplete-min-chars"],
        "resultsCount": [2, "results-count"],
        "searchHelperLabel": [1, "search-helper-label"],
        "resultsItems": [1, "results-items"],
        "sortResultsItems": [4, "sort-results-items"],
        "showSearchButton": [4, "show-search-button"],
        "searchButtonIconOnly": [4, "search-button-icon-only"],
        "size": [1],
        "variant": [1],
        "searchString": [32],
        "currResultsCount": [32],
        "showResults": [32],
        "isMobile": [32]
    }, [[4, "click", "handleOutsideClick"]], {
        "resultsItems": ["watchItems"],
        "resultsCount": ["watchResultsCount"],
        "value": ["watchValue"],
        "searchString": ["watchSearchString"],
        "showResults": ["watchShowResults"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-searchbar", "z-button", "z-divider", "z-icon", "z-input", "z-input-message", "z-list", "z-list-element", "z-list-group", "z-tag"];
    components.forEach(tagName => { switch (tagName) {
        case "z-searchbar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZSearchbar);
            }
            break;
        case "z-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "z-divider":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "z-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "z-input-message":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "z-list":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "z-list-element":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "z-list-group":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "z-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { ZSearchbar as Z, defineCustomElement as d };

//# sourceMappingURL=index23.js.map
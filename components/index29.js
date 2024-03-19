import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { B as ButtonVariant, d as ButtonSize, P as PopoverPosition } from './index2.js';
import { a as getElementTree } from './utils.js';
import { d as defineCustomElement$3 } from './index4.js';
import { d as defineCustomElement$2 } from './index9.js';
import { d as defineCustomElement$1 } from './index25.js';

const stylesCss = ":host{position:relative;display:table-cell;border-bottom:var(--border-size-medium) solid var(--gray200);background-color:var(--gray50);font-family:var(--font-family-sans);font-weight:var(--font-sb);text-align:start}.container{display:flex;align-items:flex-end}:host(.sortable){cursor:pointer}:host([padding=\"x-small\"]){padding:calc(var(--space-unit) * 0.5)}:host([padding=\"small\"]){padding:calc(var(--space-unit))}:host([padding=\"medium\"]){padding:calc(var(--space-unit) * 2)}:host([padding=\"large\"]){padding:calc(var(--space-unit) * 2.5)}:host([padding=\"special\"]){padding:0}.arrow{padding-left:var(--space-unit);opacity:1}.popover-container{position:absolute;top:var(--space-unit);right:var(--space-unit);display:none}.popover-container z-popover{--z-popover-theme--surface:var(--gray200);position:relative;z-index:1}.popover-container.visible{display:block}:host(:hover) .popover-container{display:block}";
const ZTableHeaderStyle0 = stylesCss;

const ZTableHeader = /*@__PURE__*/ proxyCustomElement(class ZTableHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.sort = createEvent(this, "sort", 7);
        this.columnId = undefined;
        this.padding = "medium";
        this.sortable = undefined;
        this.showButton = undefined;
        this.defaultSortDirection = "asc";
        this.sortDirection = "none";
        this.emitOnSort = this.emitOnSort.bind(this);
    }
    emitOnSort() {
        this.sort.emit({
            columnId: this.columnId,
            sortDirection: this.sortDirection,
        });
    }
    handleSort() {
        if (!this.sortable) {
            return;
        }
        this.sortDirection = (() => {
            switch (this.sortDirection) {
                case "asc":
                    return "desc";
                case "desc":
                    return "asc";
                case "none":
                    return this.defaultSortDirection;
                default:
                    return "none";
            }
        })();
        this.emitOnSort();
    }
    handleMenuClick() {
        this.popover.open = !this.popover.open;
    }
    handleOutsideClick(e) {
        const tree = getElementTree(e.target);
        const parent = tree.find((elem) => elem.nodeName.toLowerCase() === "z-popover");
        if (!parent && this.popover) {
            this.popover.open = false;
        }
    }
    handleClickHeaders(e) {
        const target = e.target;
        const parent = getElementTree(target).find((elem) => elem.nodeName.toLowerCase() === "z-table-header");
        if (!this.sortable || !parent) {
            return;
        }
        const parentColumnId = parent.attributes.getNamedItem("column-id").value;
        const isSortable = target.parentNode.sortable || target.sortable;
        if (parentColumnId !== this.columnId && isSortable) {
            this.sortDirection = "none";
        }
    }
    componentWillRender() {
        this.host.setAttribute("role", "columnheader");
    }
    render() {
        return (h(Host, { key: 'c67ac7a04f00b5252e3c988a46b80843dc911d2e', class: {
                sortable: this.sortable,
            }, onClick: () => this.handleSort() }, h("div", { key: 'f569e12c8d7ae2bc30884f11bf1b2636cf66e8d9', class: "container" }, h("slot", { key: 'c524c4ec78be5a6aded8bd4e92018fe16147561f' }), this.sortable && this.sortDirection !== "none" && (h("z-icon", { name: this.sortDirection === "asc" ? "arrow-up" : "arrow-down", class: "arrow" }))), this.showButton && (h("div", { class: "popover-container" }, h("z-button", { ref: (el) => (this.triggerButton = el), class: "contextual-popover-button", icon: "contextual-menu", variant: ButtonVariant.TERTIARY, size: ButtonSize.X_SMALL, onClick: () => this.handleMenuClick() }), h("z-popover", { ref: (el) => (this.popover = el), position: PopoverPosition.BOTTOM, center: true, bindTo: this.triggerButton }, h("div", null, h("slot", { name: "contextual-menu" })))))));
    }
    get host() { return this; }
    static get style() { return ZTableHeaderStyle0; }
}, [1, "z-table-header", {
        "columnId": [1, "column-id"],
        "padding": [513],
        "sortable": [4],
        "showButton": [4, "show-button"],
        "defaultSortDirection": [1, "default-sort-direction"],
        "sortDirection": [1025, "sort-direction"]
    }, [[18, "click", "handleOutsideClick"], [18, "click", "handleClickHeaders"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-table-header", "z-button", "z-icon", "z-popover"];
    components.forEach(tagName => { switch (tagName) {
        case "z-table-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZTableHeader);
            }
            break;
        case "z-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "z-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { ZTableHeader as Z, defineCustomElement as d };

//# sourceMappingURL=index29.js.map
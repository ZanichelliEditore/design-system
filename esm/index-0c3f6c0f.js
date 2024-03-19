import { r as registerInstance, c as createEvent, h, a as Host, g as getElement } from './index-f16bc2ca.js';
import { B as ButtonVariant, d as ButtonSize, P as PopoverPosition } from './index-2255c6c8.js';
import { d as getElementTree } from './utils-7983d02c.js';

const stylesCss = ":host{position:relative;display:table-cell;border-bottom:var(--border-size-medium) solid var(--gray200);background-color:var(--gray50);font-family:var(--font-family-sans);font-weight:var(--font-sb);text-align:start}.container{display:flex;align-items:flex-end}:host(.sortable){cursor:pointer}:host([padding=\"x-small\"]){padding:calc(var(--space-unit) * 0.5)}:host([padding=\"small\"]){padding:calc(var(--space-unit))}:host([padding=\"medium\"]){padding:calc(var(--space-unit) * 2)}:host([padding=\"large\"]){padding:calc(var(--space-unit) * 2.5)}:host([padding=\"special\"]){padding:0}.arrow{padding-left:var(--space-unit);opacity:1}.popover-container{position:absolute;top:var(--space-unit);right:var(--space-unit);display:none}.popover-container z-popover{--z-popover-theme--surface:var(--gray200);position:relative;z-index:1}.popover-container.visible{display:block}:host(:hover) .popover-container{display:block}";
const ZTableHeaderStyle0 = stylesCss;

const ZTableHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get host() { return getElement(this); }
};
ZTableHeader.style = ZTableHeaderStyle0;

export { ZTableHeader as Z };

//# sourceMappingURL=index-0c3f6c0f.js.map
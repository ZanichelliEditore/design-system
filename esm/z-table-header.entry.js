import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-90e18641.js';
import { c as classnames } from './index-abb47b30.js';
import { l as Size, S as SortDirectionEnum, B as ButtonVariantEnum, c as ButtonSizeEnum, P as PopoverPositions } from './index-3c2d757b.js';
import { a as getElementTree } from './utils-57be09c8.js';
import './_commonjsHelpers-9943807e.js';
import './breakpoints-c386984e.js';

const stylesCss = ":host{position:relative;display:table-cell;background-color:var(--gray50);border-bottom:var(--border-size-medium) solid var(--gray200);font-family:var(--dashboard-font);font-weight:var(--font-sb);text-align:start}.container{display:flex;align-items:flex-end}:host(.sortable){cursor:pointer}:host([padding=\"x-small\"]){padding:calc(var(--space-unit) * 0.5)}:host([padding=\"small\"]){padding:calc(var(--space-unit))}:host([padding=\"medium\"]){padding:calc(var(--space-unit) * 2)}:host([padding=\"large\"]){padding:calc(var(--space-unit) * 2.5)}:host([padding=\"special\"]){padding:0}.arrow{opacity:1;padding-left:var(--space-unit)}.popover-container{position:absolute;top:var(--space-unit);right:var(--space-unit);display:none}.popover-container z-popover{--z-popover-theme--surface:var(--gray200);position:relative;z-index:1}.popover-container.visible{display:block}:host(:hover) .popover-container{display:block}";

const ZTableHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.sort = createEvent(this, "sort", 7);
    /** Set padding size of cell, if special 0px padding will be set */
    this.padding = Size.medium;
    /** [Optional] Default sort order */
    this.defaultSortDirection = SortDirectionEnum.asc;
    this.sortDirection = SortDirectionEnum.none;
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
        case SortDirectionEnum.asc:
          return SortDirectionEnum.desc;
        case SortDirectionEnum.desc:
          return SortDirectionEnum.asc;
        case SortDirectionEnum.none:
          return this.defaultSortDirection;
        default:
          return SortDirectionEnum.none;
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
    const { target } = e;
    const parent = getElementTree(target).find((elem) => elem.nodeName.toLowerCase() === "z-table-header");
    if (!this.sortable || !parent) {
      return;
    }
    const parentColumnId = parent.attributes.getNamedItem("column-id").value;
    const isSortable = target.parentNode.sortable || target.sortable;
    if (parentColumnId !== this.columnId && isSortable) {
      this.sortDirection = SortDirectionEnum.none;
    }
  }
  componentWillRender() {
    this.host.setAttribute("role", "columnheader");
  }
  render() {
    return (h(Host, { class: classnames({
        sortable: this.sortable,
      }), onClick: () => this.handleSort() }, h("div", { class: 'container' }, h("slot", null), this.sortable && this.sortDirection !== SortDirectionEnum.none && (h("z-icon", { name: this.sortDirection === SortDirectionEnum.asc
        ? "arrow-up"
        : "arrow-down", class: "arrow" }))), this.showButton && (h("div", { class: 'popover-container' }, h("z-button", { ref: (el) => (this.triggerButton = el), class: "contextual-popover-button", icon: "contextual-menu", variant: ButtonVariantEnum["tertiary"], size: ButtonSizeEnum["x-small"], onClick: () => this.handleMenuClick() }), h("z-popover", { ref: (el) => (this.popover = el), position: PopoverPositions.bottom, center: true, bindTo: this.triggerButton }, h("div", null, h("slot", { name: "contextual-menu" })))))));
  }
  get host() { return getElement(this); }
};
ZTableHeader.style = stylesCss;

export { ZTableHeader as z_table_header };
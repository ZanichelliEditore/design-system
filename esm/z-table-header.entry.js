import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-90e18641.js';
import { c as classnames } from './index-abb47b30.js';
import { y as Size, z as SortDirectionEnum, P as PopoverPosition, b as ButtonVariantEnum, c as ButtonSizeEnum } from './index-22f4a844.js';
import { b as getElementTree } from './utils-259e2dd9.js';
import './_commonjsHelpers-9943807e.js';
import './breakpoints-c386984e.js';

const stylesCss = ":host{display:table-cell;background-color:var(--gray50);border-bottom:var(--border-size-medium) solid var(--gray200);font-family:var(--dashboard-font);font-weight:var(--font-sb);text-align:start;position:relative}.container{display:flex;align-items:flex-end}:host(.sortable){cursor:pointer}:host([padding=\"x-small\"]){padding:calc(var(--space-unit) * 0.5)}:host([padding=\"small\"]){padding:calc(var(--space-unit))}:host([padding=\"medium\"]){padding:calc(var(--space-unit) * 2)}:host([padding=\"large\"]){padding:calc(var(--space-unit) * 2.5)}:host([padding=\"special\"]){padding:0}.arrow{opacity:1;padding-left:var(--space-unit)}.popover-container{position:absolute;top:var(--space-unit);right:var(--space-unit);display:none}.popover-container.visible{display:block}:host(:hover) .popover-container{display:block}";

const ZTableHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.sort = createEvent(this, "sort", 7);
    /** Set padding size of cell, if special 0px padding will be set */
    this.padding = Size.medium;
    /** [Optional] Default sort order */
    this.defaultSortDirection = SortDirectionEnum.asc;
    this.sortDirection = SortDirectionEnum.none;
    this.isMenuOpened = false;
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
    this.isMenuOpened = !this.isMenuOpened;
  }
  handleOutsideClick(e) {
    const tree = getElementTree(e.target);
    const parent = tree.find((elem) => elem.nodeName.toLowerCase() === "z-popover");
    if (!parent) {
      this.isMenuOpened = false;
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
      }), onClick: () => this.handleSort() }, h("div", { class: classnames("container") }, h("slot", null), this.sortable && this.sortDirection !== SortDirectionEnum.none && (h("z-icon", { name: this.sortDirection === SortDirectionEnum.asc
        ? "arrow-up"
        : "arrow-down", class: "arrow" }))), this.showButton && (h("div", { class: classnames("popover-container", {
        visible: this.isMenuOpened,
      }) }, h("z-popover", { position: PopoverPosition["below-center"], "background-color": "gray200" }, h("z-button", { icon: "contextual-menu", variant: ButtonVariantEnum["tertiary"], size: ButtonSizeEnum["x-small"], square: true, slot: "trigger", onClick: () => this.handleMenuClick() }), h("div", { slot: "popover" }, h("slot", { name: "contextual-menu" })))))));
  }
  get host() { return getElement(this); }
};
ZTableHeader.style = stylesCss;

export { ZTableHeader as z_table_header };

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-7a9a8430.js');
const utils = require('./utils-305151da.js');
require('./breakpoints-88c4fd6c.js');

const stylesCss = ":host{position:relative;display:table-cell;border-bottom:var(--border-size-medium) solid var(--gray200);background-color:var(--gray50);font-family:var(--dashboard-font);font-weight:var(--font-sb);text-align:start}.container{display:flex;align-items:flex-end}:host(.sortable){cursor:pointer}:host([padding=\"x-small\"]){padding:calc(var(--space-unit) * 0.5)}:host([padding=\"small\"]){padding:calc(var(--space-unit))}:host([padding=\"medium\"]){padding:calc(var(--space-unit) * 2)}:host([padding=\"large\"]){padding:calc(var(--space-unit) * 2.5)}:host([padding=\"special\"]){padding:0}.arrow{padding-left:var(--space-unit);opacity:1}.popover-container{position:absolute;top:var(--space-unit);right:var(--space-unit);display:none}.popover-container z-popover{--z-popover-theme--surface:var(--gray200);position:relative;z-index:1}.popover-container.visible{display:block}:host(:hover) .popover-container{display:block}";

const ZTableHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.sort = index.createEvent(this, "sort", 7);
    /** Set padding size of cell, if special 0px padding will be set */
    this.padding = index$1.Size.MEDIUM;
    /** [Optional] Default sort order */
    this.defaultSortDirection = index$1.SortDirection.ASC;
    /** Sort direction */
    this.sortDirection = index$1.SortDirection.NONE;
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
        case index$1.SortDirection.ASC:
          return index$1.SortDirection.DESC;
        case index$1.SortDirection.DESC:
          return index$1.SortDirection.ASC;
        case index$1.SortDirection.NONE:
          return this.defaultSortDirection;
        default:
          return index$1.SortDirection.NONE;
      }
    })();
    this.emitOnSort();
  }
  handleMenuClick() {
    this.popover.open = !this.popover.open;
  }
  handleOutsideClick(e) {
    const tree = utils.getElementTree(e.target);
    const parent = tree.find((elem) => elem.nodeName.toLowerCase() === "z-popover");
    if (!parent && this.popover) {
      this.popover.open = false;
    }
  }
  handleClickHeaders(e) {
    const target = e.target;
    const parent = utils.getElementTree(target).find((elem) => elem.nodeName.toLowerCase() === "z-table-header");
    if (!this.sortable || !parent) {
      return;
    }
    const parentColumnId = parent.attributes.getNamedItem("column-id").value;
    const isSortable = target.parentNode.sortable || target.sortable;
    if (parentColumnId !== this.columnId && isSortable) {
      this.sortDirection = index$1.SortDirection.NONE;
    }
  }
  componentWillRender() {
    this.host.setAttribute("role", "columnheader");
  }
  render() {
    return (index.h(index.Host, { class: {
        sortable: this.sortable,
      }, onClick: () => this.handleSort() }, index.h("div", { class: "container" }, index.h("slot", null), this.sortable && this.sortDirection !== index$1.SortDirection.NONE && (index.h("z-icon", { name: this.sortDirection === index$1.SortDirection.ASC ? "arrow-up" : "arrow-down", class: "arrow" }))), this.showButton && (index.h("div", { class: "popover-container" }, index.h("z-button", { ref: (el) => (this.triggerButton = el), class: "contextual-popover-button", icon: "contextual-menu", variant: index$1.ButtonVariant.TERTIARY, size: index$1.ButtonSize.X_SMALL, onClick: () => this.handleMenuClick() }), index.h("z-popover", { ref: (el) => (this.popover = el), position: index$1.PopoverPosition.BOTTOM, center: true, bindTo: this.triggerButton }, index.h("div", null, index.h("slot", { name: "contextual-menu" })))))));
  }
  get host() { return index.getElement(this); }
};
ZTableHeader.style = stylesCss;

exports.z_table_header = ZTableHeader;

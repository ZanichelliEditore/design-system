'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');
const index$2 = require('./index-1fda0714.js');
const index$1 = require('./index-155b2ec5.js');
const utils = require('./utils-4bbd782c.js');
require('./_commonjsHelpers-537d719a.js');
require('./breakpoints-88c4fd6c.js');

const stylesCss = ":host{display:table-cell;background-color:var(--gray50);border-bottom:var(--border-size-medium) solid var(--gray200);font-family:var(--dashboard-font);font-weight:var(--font-sb);text-align:start;position:relative}.container{display:flex;align-items:flex-end}:host(.sortable){cursor:pointer}:host([padding=\"x-small\"]){padding:calc(var(--space-unit) * 0.5)}:host([padding=\"small\"]){padding:calc(var(--space-unit))}:host([padding=\"medium\"]){padding:calc(var(--space-unit) * 2)}:host([padding=\"large\"]){padding:calc(var(--space-unit) * 2.5)}:host([padding=\"special\"]){padding:0}.arrow{opacity:1;padding-left:var(--space-unit)}.popover-container{position:absolute;top:var(--space-unit);right:var(--space-unit);display:none}.popover-container.visible{display:block}:host(:hover) .popover-container{display:block}";

const ZTableHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.sort = index.createEvent(this, "sort", 7);
    /** Set padding size of cell, if special 0px padding will be set */
    this.padding = index$1.Size.medium;
    /** [Optional] Default sort order */
    this.defaultSortDirection = index$1.SortDirectionEnum.asc;
    this.sortDirection = index$1.SortDirectionEnum.none;
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
        case index$1.SortDirectionEnum.asc:
          return index$1.SortDirectionEnum.desc;
        case index$1.SortDirectionEnum.desc:
          return index$1.SortDirectionEnum.asc;
        case index$1.SortDirectionEnum.none:
          return this.defaultSortDirection;
        default:
          return index$1.SortDirectionEnum.none;
      }
    })();
    this.emitOnSort();
  }
  handleMenuClick() {
    this.isMenuOpened = !this.isMenuOpened;
  }
  handleOutsideClick(e) {
    const tree = utils.getElementTree(e.target);
    const parent = tree.find((elem) => elem.nodeName.toLowerCase() === "z-popover");
    if (!parent) {
      this.isMenuOpened = false;
    }
  }
  handleClickHeaders(e) {
    const { target } = e;
    const parent = utils.getElementTree(target).find((elem) => elem.nodeName.toLowerCase() === "z-table-header");
    if (!this.sortable || !parent) {
      return;
    }
    const parentColumnId = parent.attributes.getNamedItem("column-id").value;
    const isSortable = target.parentNode.sortable || target.sortable;
    if (parentColumnId !== this.columnId && isSortable) {
      this.sortDirection = index$1.SortDirectionEnum.none;
    }
  }
  componentWillRender() {
    this.host.setAttribute("role", "columnheader");
  }
  render() {
    return (index.h(index.Host, { class: index$2.classnames({
        sortable: this.sortable,
      }), onClick: () => this.handleSort() }, index.h("div", { class: index$2.classnames("container") }, index.h("slot", null), this.sortable && this.sortDirection !== index$1.SortDirectionEnum.none && (index.h("z-icon", { name: this.sortDirection === index$1.SortDirectionEnum.asc
        ? "arrow-up"
        : "arrow-down", class: "arrow" }))), this.showButton && (index.h("div", { class: index$2.classnames("popover-container", {
        visible: this.isMenuOpened,
      }) }, index.h("z-popover", { position: index$1.PopoverPosition["below-center"], "background-color": "gray200" }, index.h("z-button", { icon: "contextual-menu", variant: index$1.ButtonVariantEnum["tertiary"], size: index$1.ButtonSizeEnum["x-small"], square: true, slot: "trigger", onClick: () => this.handleMenuClick() }), index.h("div", { slot: "popover" }, index.h("slot", { name: "contextual-menu" })))))));
  }
  get host() { return index.getElement(this); }
};
ZTableHeader.style = stylesCss;

exports.z_table_header = ZTableHeader;

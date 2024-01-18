'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const breakpoints = require('./breakpoints-ebe1a437.js');

const stylesCss = "button{display:flex;max-width:100%;height:36px;align-items:center;padding:0 var(--space-unit);border:var(--border-size-medium) solid var(--color-primary01);background-color:var(--color-surface01);border-radius:var(--border-radius);color:var(--color-primary01);cursor:pointer;fill:var(--color-primary01);font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-sb);outline:none}button::-moz-focus-inner{border:0}button:hover{border-color:var(--color-hover-primary);color:var(--color-hover-primary);fill:var(--color-hover-primary)}button:focus{border-color:var(--color-primary01);box-shadow:var(--shadow-focus-primary);color:var(--color-primary01);fill:var(--color-primary01)}button:active{border-color:var(--color-pressed-primary);box-shadow:var(--shadow-2);color:var(--color-pressed-primary);fill:var(--color-pressed-primary)}button.selected{border-color:var(--color-active-primary);background-color:var(--color-active-primary);color:var(--color-text-inverse);fill:var(--color-text-inverse)}button>span.ellipsis{overflow:hidden;padding:0;margin:0;text-overflow:ellipsis;white-space:nowrap}button>span.counter{margin-right:calc(var(--space-unit) * 2);margin-left:calc(var(--space-unit) / 2)}button>span.sort{margin-right:calc(var(--space-unit) / 2);white-space:nowrap}button>span{margin-right:calc(var(--space-unit) / 2)}@media (min-width: 768px){button{max-width:325px}}@media (min-width: 1152px){button{max-width:490px}}";

const ZButtonSort = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.buttonSortClick = index.createEvent(this, "buttonSortClick", 7);
    /** sort label content (ascending) (optional) */
    this.sortlabelasc = "A-Z";
    /** sort label content (descending) (optional) */
    this.sortlabeldesc = "Z-A";
    /** selected flag (optional) */
    this.isselected = false;
    /** sortable flag (optional) */
    this.sortasc = true;
    this.allowTooltip = false;
  }
  emitButtonSortClick() {
    if (!this.isselected) {
      this.isselected = true;
    }
    else {
      this.sortasc = !this.sortasc;
    }
    this.buttonSortClick.emit({
      buttonid: this.buttonid,
      sortAsc: this.sortasc,
    });
  }
  componentDidLoad() {
    if (this.elementHasEllipsis() && window.innerWidth > breakpoints.tabletBreakpoint) {
      this.allowTooltip = true;
    }
  }
  setButtonTitle() {
    return this.allowTooltip ? `${this.sortasc ? this.label : this.desclabel}` : "";
  }
  elementHasEllipsis() {
    return this.ellipsis.offsetWidth < this.ellipsis.scrollWidth;
  }
  render() {
    return (index.h("button", { title: this.setButtonTitle(), id: this.buttonid, class: this.isselected && "selected", onClick: () => this.emitButtonSortClick() }, index.h("span", { ref: (el) => (this.ellipsis = el), class: "ellipsis" }, !this.sortasc && this.desclabel ? this.desclabel : this.label), index.h("span", { class: "counter" }, this.counter && ` (${this.counter})`), index.h("span", { class: "sort" }, this.sortasc ? this.sortlabelasc : this.sortlabeldesc), index.h("z-icon", { name: "caret-up-down", width: 16, height: 16 })));
  }
};
ZButtonSort.style = stylesCss;

exports.z_button_sort = ZButtonSort;

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const breakpoints = require('./breakpoints-88c4fd6c.js');

const stylesCss = ":host,button{max-width:100%}button{height:36px;padding:0 var(--space-unit);border:var(--border-size-medium) solid var(--myz-blue);background-color:var(--bg-white);border-radius:var(--border-radius);color:var(--myz-blue);cursor:pointer;fill:var(--myz-blue);outline:none}button::-moz-focus-inner{border:0}button:hover{border-color:var(--myz-blue-dark);color:var(--myz-blue-dark);fill:var(--myz-blue-dark)}button:focus{border-color:var(--myz-blue);box-shadow:0 0 2px 2px var(--accent-dark);color:var(--myz-blue);fill:var(--myz-blue)}button:active{border-color:var(--myz-blue-light);box-shadow:0 2px 4px 0 rgb(0 0 0 / 40%);color:var(--myz-blue-light);fill:var(--myz-blue-light)}button.selected{border-color:var(--myz-blue-dark);background-color:var(--myz-blue-dark);color:var(--bg-white);fill:var(--bg-white)}button>label{display:flex;align-items:center;cursor:pointer;font-family:var(--dashboard-font);font-size:14px;font-weight:var(--font-sb)}button>label>span.ellipsis{overflow:hidden;padding:0;margin:0;text-overflow:ellipsis;white-space:nowrap}button>label>span.counter{margin-right:calc(var(--space-unit) * 2);margin-left:calc(var(--space-unit) / 2)}button>label>span.sort{margin-right:var(--half-x1);white-space:nowrap}button>span{margin-right:calc(var(--space-unit) * 0.5);font-family:var(--dashboard-font);font-size:14px;font-weight:var(--font-rg)}button>z-icon{padding-top:calc(var(--space-unit) * 0.5)}@media only screen and (min-width: 768px){:host,button{max-width:325px}}@media only screen and (min-width: 1025px){:host,button{max-width:490px}}";

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
    return (index.h("button", { title: this.setButtonTitle(), id: this.buttonid, class: this.isselected && "selected", onClick: () => this.emitButtonSortClick() }, index.h("label", null, index.h("span", { ref: (el) => (this.ellipsis = el), class: "ellipsis" }, !this.sortasc && this.desclabel ? this.desclabel : this.label), index.h("span", { class: "counter" }, this.counter && ` (${this.counter})`), index.h("span", { class: "sort" }, this.sortasc ? this.sortlabelasc : this.sortlabeldesc), index.h("z-icon", { name: "caret-up-down", width: 16, height: 16 }))));
  }
};
ZButtonSort.style = stylesCss;

exports.z_button_sort = ZButtonSort;

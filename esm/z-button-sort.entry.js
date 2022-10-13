import { r as registerInstance, c as createEvent, h } from './index-a2ca4b97.js';
import { t as tabletBreakpoint } from './breakpoints-c386984e.js';

const stylesCss = ":host,button{max-width:100%}button{height:36px;border:var(--border-size-medium) solid var(--myz-blue);border-radius:var(--border-radius);color:var(--myz-blue);fill:var(--myz-blue);background-color:var(--bg-white);outline:none;padding:0 var(--space-unit);cursor:pointer}button::-moz-focus-inner{border:0}button:hover{border-color:var(--myz-blue-dark);color:var(--myz-blue-dark);fill:var(--myz-blue-dark)}button:focus{border-color:var(--myz-blue);color:var(--myz-blue);fill:var(--myz-blue);box-shadow:0px 0px 2px 2px var(--accent-dark)}button:active{border-color:var(--myz-blue-light);color:var(--myz-blue-light);fill:var(--myz-blue-light);box-shadow:0px 2px 4px 0px rgba(0, 0, 0, 0.4)}button.selected{border-color:var(--myz-blue-dark);background-color:var(--myz-blue-dark);color:var(--bg-white);fill:var(--bg-white)}button>label{cursor:pointer;font-family:var(--dashboard-font);font-weight:var(--font-sb);font-size:14px;display:flex;align-items:center}button>label>span.ellipsis{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;margin:0;padding:0}button>label>span.counter{margin-left:calc(var(--space-unit) / 2);margin-right:calc(var(--space-unit) * 2)}button>label>span.sort{margin-right:var(--half-x1);white-space:nowrap}button>span{font-family:var(--dashboard-font);font-weight:var(--font-rg);font-size:14px;margin-right:calc(var(--space-unit) * 0.5)}button>z-icon{padding-top:calc(var(--space-unit) * 0.5)}@media only screen and (min-width: 768px){:host,button{max-width:325px}}@media only screen and (min-width: 1025px){:host,button{max-width:490px}}";

const ZButtonSort = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.buttonSortClick = createEvent(this, "buttonSortClick", 7);
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
    if (this.elementHasEllipsis() && window.innerWidth > tabletBreakpoint)
      this.allowTooltip = true;
  }
  setButtonTitle() {
    return this.allowTooltip
      ? `${this.sortasc ? this.label : this.desclabel}`
      : "";
  }
  elementHasEllipsis() {
    return this.ellipsis.offsetWidth < this.ellipsis.scrollWidth;
  }
  render() {
    return (h("button", { title: this.setButtonTitle(), id: this.buttonid, class: this.isselected && "selected", onClick: () => this.emitButtonSortClick() }, h("label", null, h("span", { ref: (el) => (this.ellipsis = el), class: "ellipsis" }, !this.sortasc && this.desclabel ? this.desclabel : this.label), h("span", { class: "counter" }, this.counter && ` (${this.counter})`), h("span", { class: "sort" }, this.sortasc ? this.sortlabelasc : this.sortlabeldesc), h("z-icon", { name: "caret-up-down", width: 16, height: 16 }))));
  }
};
ZButtonSort.style = stylesCss;

export { ZButtonSort as z_button_sort };

import { r as registerInstance, c as createEvent, h } from './index-ab5f1eaa.js';
import { t as tabletBreakpoint } from './breakpoints-680e0e56.js';

const stylesCss = "button{display:-ms-flexbox;display:flex;max-width:100%;height:36px;-ms-flex-align:center;align-items:center;padding:0 var(--space-unit);border:var(--border-size-medium) solid var(--color-primary01);background-color:var(--color-surface01);border-radius:var(--border-radius);color:var(--color-primary01);cursor:pointer;fill:var(--color-primary01);font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-sb);outline:none}button::-moz-focus-inner{border:0}button:hover{border-color:var(--color-hover-primary);color:var(--color-hover-primary);fill:var(--color-hover-primary)}button:focus{border-color:var(--color-primary01);-webkit-box-shadow:var(--shadow-focus-primary);box-shadow:var(--shadow-focus-primary);color:var(--color-primary01);fill:var(--color-primary01)}button:active{border-color:var(--color-pressed-primary);-webkit-box-shadow:var(--shadow-2);box-shadow:var(--shadow-2);color:var(--color-pressed-primary);fill:var(--color-pressed-primary)}button.selected{border-color:var(--color-active-primary);background-color:var(--color-active-primary);color:var(--color-text-inverse);fill:var(--color-text-inverse)}button>span.ellipsis{overflow:hidden;padding:0;margin:0;text-overflow:ellipsis;white-space:nowrap}button>span.counter{margin-right:calc(var(--space-unit) * 2);margin-left:calc(var(--space-unit) / 2)}button>span.sort{margin-right:calc(var(--space-unit) / 2);white-space:nowrap}button>span{margin-right:calc(var(--space-unit) / 2)}@media (min-width: 768px){button{max-width:325px}}@media (min-width: 1152px){button{max-width:490px}}";
const ZButtonSortStyle0 = stylesCss;

const ZButtonSort = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.buttonSortClick = createEvent(this, "buttonSortClick", 7);
        this.buttonid = undefined;
        this.label = undefined;
        this.desclabel = undefined;
        this.counter = undefined;
        this.sortlabelasc = "A-Z";
        this.sortlabeldesc = "Z-A";
        this.isselected = false;
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
        if (this.elementHasEllipsis() && window.innerWidth > tabletBreakpoint) {
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
        return (h("button", { key: 'ec1021febf46cd3a012af1142e74157e16e6b363', title: this.setButtonTitle(), id: this.buttonid, class: { selected: this.isselected }, onClick: () => this.emitButtonSortClick() }, h("span", { key: '84013f6114589408dc62323285a1441c94fc9ddf', ref: (el) => (this.ellipsis = el), class: "ellipsis" }, !this.sortasc && this.desclabel ? this.desclabel : this.label), h("span", { key: 'bc938175d5453e7c59f577b92452d63658417e0a', class: "counter" }, this.counter && ` (${this.counter})`), h("span", { key: '10fba0801dcbc47569e79c81179d7a485dc3582e', class: "sort" }, this.sortasc ? this.sortlabelasc : this.sortlabeldesc), h("z-icon", { key: '51035628c557620d4681db63a6a1b6080b57275a', name: "caret-up-down", width: 16, height: 16 })));
    }
};
ZButtonSort.style = ZButtonSortStyle0;

export { ZButtonSort as z_button_sort };

//# sourceMappingURL=z-button-sort.entry.js.map
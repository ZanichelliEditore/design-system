import { r as registerInstance, c as createEvent, h } from './index-DafJ7_Il.js';
import { B as Breakpoints } from './breakpoints-Q-tWjk7P.js';

const stylesCss = () => `button{display:flex;max-width:100%;height:36px;align-items:center;padding:0 var(--space-unit);border:var(--border-size-medium) solid var(--color-primary01);background-color:var(--color-surface01);border-radius:var(--border-radius);color:var(--color-primary01);cursor:pointer;fill:var(--color-primary01);font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-sb);outline:none}button::-moz-focus-inner{border:0}button:hover{border-color:var(--color-hover-primary);color:var(--color-hover-primary);fill:var(--color-hover-primary-icon)}button:focus{border-color:var(--color-primary01);box-shadow:var(--shadow-focus-primary);color:var(--color-primary01);fill:var(--color-primary01)}button:active{border-color:var(--color-pressed-primary);box-shadow:var(--shadow-2);color:var(--color-pressed-primary);fill:var(--color-active-primary-icon)}button.selected{border-color:var(--color-hover-primary);background-color:var(--color-hover-primary);color:var(--color-text-inverse);fill:var(--color-inverse-icon)}button>span.ellipsis{overflow:hidden;padding:0;margin:0;text-overflow:ellipsis;white-space:nowrap}button>span.counter{margin-right:calc(var(--space-unit) * 2);margin-left:calc(var(--space-unit) / 2)}button>span.sort{margin-right:calc(var(--space-unit) / 2);white-space:nowrap}button>span{margin-right:calc(var(--space-unit) / 2)}@media (min-width: 768px){button{max-width:325px}}@media (min-width: 1152px){button{max-width:490px}}`;

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
        if (this.elementHasEllipsis() && window.innerWidth > Breakpoints.TABLET) {
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
        return (h("button", { key: 'acc7e3fa2e284b9b5b5d8f20f5d2f149c80b7e05', title: this.setButtonTitle(), id: this.buttonid, class: { selected: this.isselected }, onClick: () => this.emitButtonSortClick() }, h("span", { key: 'a50ff5723e5817d724206e0495e1b3f45b5f4c3f', ref: (el) => (this.ellipsis = el), class: "ellipsis" }, !this.sortasc && this.desclabel ? this.desclabel : this.label), h("span", { key: '3962fb15112cb94ea958b607cb915f61f4adaa02', class: "counter" }, this.counter && ` (${this.counter})`), h("span", { key: '23d06d6e51ce292b26e6e4bd7ee07aeb097f843f', class: "sort" }, this.sortasc ? this.sortlabelasc : this.sortlabeldesc), h("z-icon", { key: '35d3bd5bd3f84cf6e008b8c01a3d0dc995dc6f44', name: "caret-up-down", width: 16, height: 16 })));
    }
};
ZButtonSort.style = stylesCss();

export { ZButtonSort as z_button_sort };

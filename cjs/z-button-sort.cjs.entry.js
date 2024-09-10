'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e801ae96.js');
const breakpoints = require('./breakpoints-5c22092a.js');

const stylesCss = "button{display:flex;max-width:100%;height:36px;align-items:center;padding:0 var(--space-unit);border:var(--border-size-medium) solid var(--color-primary01);background-color:var(--color-surface01);border-radius:var(--border-radius);color:var(--color-primary01);cursor:pointer;fill:var(--color-primary01);font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-sb);outline:none}button::-moz-focus-inner{border:0}button:hover{border-color:var(--color-hover-primary);color:var(--color-hover-primary);fill:var(--color-hover-primary)}button:focus{border-color:var(--color-primary01);box-shadow:var(--shadow-focus-primary);color:var(--color-primary01);fill:var(--color-primary01)}button:active{border-color:var(--color-pressed-primary);box-shadow:var(--shadow-2);color:var(--color-pressed-primary);fill:var(--color-pressed-primary)}button.selected{border-color:var(--color-active-primary);background-color:var(--color-active-primary);color:var(--color-text-inverse);fill:var(--color-text-inverse)}button>span.ellipsis{overflow:hidden;padding:0;margin:0;text-overflow:ellipsis;white-space:nowrap}button>span.counter{margin-right:calc(var(--space-unit) * 2);margin-left:calc(var(--space-unit) / 2)}button>span.sort{margin-right:calc(var(--space-unit) / 2);white-space:nowrap}button>span{margin-right:calc(var(--space-unit) / 2)}@media (min-width: 768px){button{max-width:325px}}@media (min-width: 1152px){button{max-width:490px}}";
const ZButtonSortStyle0 = stylesCss;

const ZButtonSort = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.buttonSortClick = index.createEvent(this, "buttonSortClick", 7);
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
        return (index.h("button", { key: 'b6c328214c3d75310976a734cdaff34a47f5822c', title: this.setButtonTitle(), id: this.buttonid, class: { selected: this.isselected }, onClick: () => this.emitButtonSortClick() }, index.h("span", { key: '4bc5edbe60157542dbea6e1cc8d9e7d1da76ab38', ref: (el) => (this.ellipsis = el), class: "ellipsis" }, !this.sortasc && this.desclabel ? this.desclabel : this.label), index.h("span", { key: 'ae64bab422698547fe8767adb0793fa43741b754', class: "counter" }, this.counter && ` (${this.counter})`), index.h("span", { key: 'f109549ca43596ae840703a3444e5a2b6efbc9e6', class: "sort" }, this.sortasc ? this.sortlabelasc : this.sortlabeldesc), index.h("z-icon", { key: '3e81d1762cd1f385d72eb2079a41f13583fa036b', name: "caret-up-down", width: 16, height: 16 })));
    }
};
ZButtonSort.style = ZButtonSortStyle0;

exports.z_button_sort = ZButtonSort;

//# sourceMappingURL=z-button-sort.cjs.entry.js.map
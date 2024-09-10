import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { P as PopoverPosition, w as ZChipType } from './index2.js';
import { t as tabletBreakpoint } from './breakpoints.js';
import { d as defineCustomElement$4 } from './index5.js';
import { d as defineCustomElement$3 } from './index9.js';
import { d as defineCustomElement$2 } from './index22.js';

const stylesCss = ".sc-z-file-h{position:relative;font-family:var(--font-family-sans);font-weight:var(--font-rg)}.sc-z-file-h>z-popover.sc-z-file{z-index:10}.sc-z-file-h>z-popover.sc-z-file>.tooltip-content.sc-z-file{white-space:nowrap}.sc-z-file-h>z-chip.sc-z-file span.sc-z-file{display:block;overflow:hidden;max-width:250px;letter-spacing:0.32px;line-height:1.33;text-overflow:ellipsis;white-space:nowrap}";
const ZFileStyle0 = stylesCss;

const ZFile$1 = /*@__PURE__*/ proxyCustomElement(class ZFile extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.removeFile = createEvent(this, "removeFile", 7);
        this.fileNumber = undefined;
        this.fileName = undefined;
        this.allowPopover = false;
        this.popoverVisible = false;
    }
    removeFileHandler() {
        this.removeFile.emit({ fileName: this.fileName });
        this.el.remove();
    }
    onMouseOver() {
        this.popoverVisible = true;
    }
    onMouseLeave() {
        this.popoverVisible = false;
    }
    onInteractiveIconClick() {
        this.removeFileHandler();
    }
    componentDidLoad() {
        var _a, _b;
        if (this.elementHasEllipsis() && window.innerWidth > tabletBreakpoint) {
            this.allowPopover = true;
        }
        (_b = (_a = this.icon) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
    elementHasEllipsis() {
        return this.ellipsis.offsetWidth < this.ellipsis.scrollWidth;
    }
    render() {
        return (h(Host, { key: 'fd8490c60c3266c39e2b4fa7b3cc4097da8222cf' }, this.allowPopover && (h("z-popover", { key: 'af7c9370bdaa644ecfb50e1ae69fd425b1347b36', open: this.popoverVisible, position: PopoverPosition.AUTO, bindTo: this.chip }, h("span", { key: 'faa8e08ffbae25222396effe24db44e53ccfb892', class: "body-5 tooltip-content" }, this.ellipsis.innerText))), h("z-chip", { key: 'ed790fdb2b1639e4f44cde4da98daa101a44abb0', ref: (el) => (this.chip = el), id: `chip-${this.fileNumber}`, interactiveIcon: "multiply-circled", type: ZChipType.DEFAULT }, h("span", { key: '0bae3bda90db4e3793a22629b30439017e3543a3', ref: (el) => (this.ellipsis = el), tabIndex: -1 }, this.fileName))));
    }
    get el() { return this; }
    static get style() { return ZFileStyle0; }
}, [2, "z-file", {
        "fileNumber": [2, "file-number"],
        "fileName": [1, "file-name"],
        "allowPopover": [32],
        "popoverVisible": [32]
    }, [[1, "mouseover", "onMouseOver"], [1, "mouseleave", "onMouseLeave"], [0, "interactiveIconClick", "onInteractiveIconClick"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-file", "z-chip", "z-icon", "z-popover"];
    components.forEach(tagName => { switch (tagName) {
        case "z-file":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZFile$1);
            }
            break;
        case "z-chip":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "z-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const ZFile = ZFile$1;
const defineCustomElement = defineCustomElement$1;

export { ZFile, defineCustomElement };

//# sourceMappingURL=z-file.js.map
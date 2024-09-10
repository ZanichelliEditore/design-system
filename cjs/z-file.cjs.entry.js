'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e801ae96.js');
const index$1 = require('./index-bab7a651.js');
const breakpoints = require('./breakpoints-5c22092a.js');

const stylesCss = ".sc-z-file-h{position:relative;font-family:var(--font-family-sans);font-weight:var(--font-rg)}.sc-z-file-h>z-popover.sc-z-file{z-index:10}.sc-z-file-h>z-popover.sc-z-file>.tooltip-content.sc-z-file{white-space:nowrap}.sc-z-file-h>z-chip.sc-z-file span.sc-z-file{display:block;overflow:hidden;max-width:250px;letter-spacing:0.32px;line-height:1.33;text-overflow:ellipsis;white-space:nowrap}";
const ZFileStyle0 = stylesCss;

const ZFile = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.removeFile = index.createEvent(this, "removeFile", 7);
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
        if (this.elementHasEllipsis() && window.innerWidth > breakpoints.tabletBreakpoint) {
            this.allowPopover = true;
        }
        (_b = (_a = this.icon) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
    elementHasEllipsis() {
        return this.ellipsis.offsetWidth < this.ellipsis.scrollWidth;
    }
    render() {
        return (index.h(index.Host, { key: 'fd8490c60c3266c39e2b4fa7b3cc4097da8222cf' }, this.allowPopover && (index.h("z-popover", { key: 'af7c9370bdaa644ecfb50e1ae69fd425b1347b36', open: this.popoverVisible, position: index$1.PopoverPosition.AUTO, bindTo: this.chip }, index.h("span", { key: 'faa8e08ffbae25222396effe24db44e53ccfb892', class: "body-5 tooltip-content" }, this.ellipsis.innerText))), index.h("z-chip", { key: 'ed790fdb2b1639e4f44cde4da98daa101a44abb0', ref: (el) => (this.chip = el), id: `chip-${this.fileNumber}`, interactiveIcon: "multiply-circled", type: index$1.ZChipType.DEFAULT }, index.h("span", { key: '0bae3bda90db4e3793a22629b30439017e3543a3', ref: (el) => (this.ellipsis = el), tabIndex: -1 }, this.fileName))));
    }
    get el() { return index.getElement(this); }
};
ZFile.style = ZFileStyle0;

exports.z_file = ZFile;

//# sourceMappingURL=z-file.cjs.entry.js.map
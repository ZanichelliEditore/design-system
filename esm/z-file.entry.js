import { r as registerInstance, c as createEvent, h, a as Host, g as getElement } from './index-ab5f1eaa.js';
import { x as ZChipType, P as PopoverPosition } from './index-2255c6c8.js';
import { t as tabletBreakpoint } from './breakpoints-680e0e56.js';

const stylesCss = ".sc-z-file-h{position:relative;font-family:var(--font-family-sans);font-weight:var(--font-rg)}.sc-z-file-h>z-popover.sc-z-file{z-index:10}.sc-z-file-h>z-popover.sc-z-file>.tooltip-content.sc-z-file{white-space:nowrap}.sc-z-file-h>z-chip.sc-z-file span.sc-z-file{display:block;overflow:hidden;max-width:250px;letter-spacing:0.32px;line-height:1.33;text-overflow:ellipsis;white-space:nowrap}";
const ZFileStyle0 = stylesCss;

const ZFile = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '03c2efd6f2abf7ba920eb9ac47f268ade6ec1404' }, this.allowPopover && (h("z-popover", { key: 'f916e0f4aed0a9c7d2a8ff59ee0a073baff02ad5', open: this.popoverVisible, position: PopoverPosition.AUTO, bindTo: this.chip }, h("span", { key: '1f364c21b8bd45ff52c23a40df45ee1684271122', class: "body-5 tooltip-content" }, this.ellipsis.innerText))), h("z-chip", { key: '0c69ec654a4fb7f251bdd904ffec476c911e545a', ref: (el) => (this.chip = el), id: `chip-${this.fileNumber}`, interactiveIcon: "multiply-circled", type: ZChipType.DEFAULT }, h("span", { key: 'b71ea54ee7156bfb324f7d5f2fa71d9b50c167bf', ref: (el) => (this.ellipsis = el), tabIndex: -1 }, this.fileName))));
    }
    get el() { return getElement(this); }
};
ZFile.style = ZFileStyle0;

export { ZFile as z_file };

//# sourceMappingURL=z-file.entry.js.map
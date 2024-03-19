import { r as registerInstance, c as createEvent, h, a as Host, g as getElement } from './index-f16bc2ca.js';
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
        return (h(Host, { key: 'fc115e09bac93434e5c460602d91d75034156d58' }, this.allowPopover && (h("z-popover", { open: this.popoverVisible, position: PopoverPosition.AUTO, bindTo: this.chip }, h("span", { class: "body-5 tooltip-content" }, this.ellipsis.innerText))), h("z-chip", { key: 'e834fa8689c5164cb51de5353a14d21495d5bfe5', ref: (el) => (this.chip = el), id: `chip-${this.fileNumber}`, interactiveIcon: "multiply-circled", type: ZChipType.DEFAULT }, h("span", { key: '037442876903b11acfa1f65acb3a65ccde8c2161', ref: (el) => (this.ellipsis = el), tabIndex: -1 }, this.fileName))));
    }
    get el() { return getElement(this); }
};
ZFile.style = ZFileStyle0;

export { ZFile as z_file };

//# sourceMappingURL=z-file.entry.js.map
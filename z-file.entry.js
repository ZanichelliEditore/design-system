import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './index-SFwvdS4t.js';
import { x as ZChipType, P as PopoverPosition } from './index-DdetsoIY.js';
import { B as Breakpoints } from './breakpoints-Q-tWjk7P.js';

const stylesCss = () => `.sc-z-file-h{position:relative;font-family:var(--font-family-sans);font-weight:var(--font-rg)}.sc-z-file-h>z-popover.sc-z-file{z-index:10}.sc-z-file-h>z-popover.sc-z-file>.tooltip-content.sc-z-file{white-space:nowrap}.sc-z-file-h>z-chip.sc-z-file span.sc-z-file{display:block;overflow:hidden;max-width:250px;letter-spacing:0.32px;line-height:1.33;text-overflow:ellipsis;white-space:nowrap}`;

const ZFile = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.removeFile = createEvent(this, "removeFile", 7);
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
        if (this.elementHasEllipsis() && window.innerWidth > Breakpoints.TABLET) {
            this.allowPopover = true;
        }
        (_b = (_a = this.icon) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
    elementHasEllipsis() {
        return this.ellipsis.offsetWidth < this.ellipsis.scrollWidth;
    }
    render() {
        return (h(Host, { key: '0ea8fc72fc1e2bb96439e4a3d3074f140fafbdca' }, this.allowPopover && (h("z-popover", { key: '3c1408c93d61d6afaf69ef5b10294beaea3a572f', open: this.popoverVisible, position: PopoverPosition.AUTO, bindTo: this.chip }, h("span", { key: '8a13796d5fdd792fa8da51b81363fd4c11072edd', class: "body-5 tooltip-content" }, this.ellipsis.innerText))), h("z-chip", { key: '76a5d9cdc0932dbf9269e83d6f94950f5a459397', ref: (el) => (this.chip = el), id: `chip-${this.fileNumber}`, interactiveIcon: "multiply-circled", type: ZChipType.DEFAULT }, h("span", { key: '75a118f774dbca2867629be4b437e18c1ebad1ba', ref: (el) => (this.ellipsis = el), tabIndex: -1 }, this.fileName))));
    }
    get el() { return getElement(this); }
};
ZFile.style = stylesCss();

export { ZFile as z_file };

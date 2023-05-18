import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a2ca4b97.js';
import { y as ZChipType, P as PopoverPosition } from './index-7e4df1be.js';
import { t as tabletBreakpoint } from './breakpoints-9b81eb1b.js';

const stylesCss = ".sc-z-file-h{position:relative;font-family:var(--font-family-sans);font-weight:var(--font-rg)}.sc-z-file-h>z-popover.sc-z-file{z-index:10}.sc-z-file-h>z-popover.sc-z-file>.tooltip-content.sc-z-file{white-space:nowrap}.sc-z-file-h>z-chip.sc-z-file span.sc-z-file{display:block;overflow:hidden;max-width:250px;letter-spacing:0.32px;line-height:1.33;text-overflow:ellipsis;white-space:nowrap}";

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
    if (this.elementHasEllipsis() && window.innerWidth > tabletBreakpoint) {
      this.allowPopover = true;
    }
    (_b = (_a = this.icon) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a);
  }
  elementHasEllipsis() {
    return this.ellipsis.offsetWidth < this.ellipsis.scrollWidth;
  }
  render() {
    return (h(Host, null, this.allowPopover && (h("z-popover", { open: this.popoverVisible, position: PopoverPosition.AUTO, bindTo: this.chip }, h("span", { class: "body-5 tooltip-content" }, this.ellipsis.innerText))), h("z-chip", { ref: (el) => (this.chip = el), id: `chip-${this.fileNumber}`, interactiveIcon: "multiply-circled", type: ZChipType.DEFAULT }, h("span", { ref: (el) => (this.ellipsis = el), tabIndex: -1 }, this.fileName))));
  }
  get el() { return getElement(this); }
};
ZFile.style = stylesCss;

export { ZFile as z_file };

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-cf9497bc.js');
const breakpoints = require('./breakpoints-ebe1a437.js');

const stylesCss = ".sc-z-file-h{position:relative;font-family:var(--font-family-sans);font-weight:var(--font-rg)}.sc-z-file-h>z-popover.sc-z-file{z-index:10}.sc-z-file-h>z-popover.sc-z-file>.tooltip-content.sc-z-file{white-space:nowrap}.sc-z-file-h>z-chip.sc-z-file span.sc-z-file{display:block;overflow:hidden;max-width:250px;letter-spacing:0.32px;line-height:1.33;text-overflow:ellipsis;white-space:nowrap}";

const ZFile = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.removeFile = index.createEvent(this, "removeFile", 7);
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
    return (index.h(index.Host, null, this.allowPopover && (index.h("z-popover", { open: this.popoverVisible, position: index$1.PopoverPosition.AUTO, bindTo: this.chip }, index.h("span", { class: "body-5 tooltip-content" }, this.ellipsis.innerText))), index.h("z-chip", { ref: (el) => (this.chip = el), id: `chip-${this.fileNumber}`, interactiveIcon: "multiply-circled", type: index$1.ZChipType.DEFAULT }, index.h("span", { ref: (el) => (this.ellipsis = el), tabIndex: -1 }, this.fileName))));
  }
  get el() { return index.getElement(this); }
};
ZFile.style = stylesCss;

exports.z_file = ZFile;

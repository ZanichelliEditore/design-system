'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');
const index$1 = require('./index-6b6a3299.js');
const breakpoints = require('./breakpoints-88c4fd6c.js');

const stylesCss = ".sc-z-file-h{font-family:var(--font-family-sans);font-weight:var(--font-rg);position:relative}.sc-z-file-h>z-tooltip.sc-z-file{z-index:10}.sc-z-file-h>z-tooltip.sc-z-file>.tootip-content.sc-z-file{white-space:nowrap}.sc-z-file-h>z-chip.sc-z-file span.sc-z-file{max-width:250px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.33;letter-spacing:0.32px;display:block}";

const ZFile = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.removeFile = index.createEvent(this, "removeFile", 7);
    this.allowTooltip = false;
    this.tooltipVisible = false;
  }
  removeFileHandler() {
    this.removeFile.emit();
    this.el.remove();
  }
  onMouseOver() {
    this.tooltipVisible = true;
  }
  onMouseLeave() {
    this.tooltipVisible = false;
  }
  onInteractiveIconClick() {
    this.removeFileHandler();
  }
  componentDidLoad() {
    var _a, _b;
    if (this.elementHasEllipsis() && window.innerWidth > breakpoints.tabletBreakpoint)
      this.allowTooltip = true;
    (_b = (_a = this.icon) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a);
  }
  elementHasEllipsis() {
    return this.ellipsis.offsetWidth < this.ellipsis.scrollWidth;
  }
  render() {
    return (index.h(index.Host, null, this.allowTooltip && (index.h("z-tooltip", { open: this.tooltipVisible, type: index$1.TooltipPosition.AUTO, "bind-to": `#chip-${this.fileNumber}` }, index.h("span", { class: "body-5 tootip-content" }, this.ellipsis.innerText))), index.h("z-chip", { id: `chip-${this.fileNumber}`, interactiveIcon: "multiply-circled", type: index$1.ZChipType.default }, index.h("span", { ref: (el) => (this.ellipsis = el), tabIndex: -1 }, index.h("slot", null)))));
  }
  get el() { return index.getElement(this); }
};
ZFile.style = stylesCss;

exports.z_file = ZFile;

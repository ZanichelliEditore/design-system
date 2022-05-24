'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');
const index$1 = require('./index-93c4c577.js');
const breakpoints = require('./breakpoints-88c4fd6c.js');
const utils = require('./utils-23a6dee4.js');

const stylesCss = ".sc-z-file-h{font-family:var(--font-family-sans);font-weight:var(--font-rg);position:relative}.sc-z-file-h .chip-content.sc-z-file{display:flex;align-items:center}.sc-z-file-h>z-tooltip.sc-z-file{z-index:10}.sc-z-file-h>z-tooltip.sc-z-file>.tootip-content.sc-z-file{white-space:nowrap}.sc-z-file-h>z-chip.sc-z-file>.chip-content.sc-z-file>span.sc-z-file{max-width:250px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:14px;line-height:1.33;letter-spacing:0.32px}.sc-z-file-h>z-chip.sc-z-file>.chip-content.sc-z-file>span.regular.sc-z-file{font-weight:var(--font-rg)}.sc-z-file-h>z-chip.sc-z-file>.chip-content.sc-z-file>span.bold.sc-z-file{font-weight:var(--font-sb)}.sc-z-file-h .chip-content.sc-z-file>z-icon.sc-z-file:last-child{margin-left:var(--space-unit);cursor:pointer;fill:var(--color-icon01)}@media only screen and (min-width: 1152px){.sc-z-file-h{border-radius:16px}.sc-z-file-h>z-chip.sc-z-file>.chip-content.sc-z-file>span.sc-z-file{font-size:12px}}";

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
    return (index.h(index.Host, null, this.allowTooltip && (index.h("z-tooltip", { open: this.tooltipVisible, type: index$1.TooltipPosition.AUTO, "bind-to": `#chip-${this.fileNumber}` }, index.h("span", { class: "body-5 tootip-content" }, this.ellipsis.innerText))), index.h("z-chip", { id: `chip-${this.fileNumber}`, filter: true, type: index$1.ZChipType.default }, index.h("div", { class: "chip-content" }, index.h("span", { ref: (el) => (this.ellipsis = el), tabIndex: -1, class: {
        "body-3-sb": utils.getDevice() == index$1.DeviceEnum.desktop,
        "body-2-sb": utils.getDevice() !== index$1.DeviceEnum.desktop,
      } }, index.h("slot", null)), index.h("z-icon", { "aria-label": "Elimina file", tabIndex: 0, onClick: () => this.removeFileHandler(), onKeyPress: (e) => {
        if (e.code == "Space" || e.code == "Enter") {
          e.preventDefault();
          this.removeFileHandler();
        }
      }, name: "multiply-circled", height: utils.getDevice() !== index$1.DeviceEnum.desktop ? 20 : 15, width: utils.getDevice() !== index$1.DeviceEnum.desktop ? 20 : 15, ref: (val) => (this.icon = val) })))));
  }
  get el() { return index.getElement(this); }
};
ZFile.style = stylesCss;

exports.z_file = ZFile;

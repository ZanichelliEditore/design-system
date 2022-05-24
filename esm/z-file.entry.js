import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-90e18641.js';
import { f as ZChipType, D as DeviceEnum, g as TooltipPosition } from './index-2fcbc301.js';
import { t as tabletBreakpoint } from './breakpoints-c386984e.js';
import { g as getDevice } from './utils-8fc83bbe.js';

const stylesCss = ".sc-z-file-h{font-family:var(--font-family-sans);font-weight:var(--font-rg);position:relative}.sc-z-file-h .chip-content.sc-z-file{display:flex;align-items:center}.sc-z-file-h>z-tooltip.sc-z-file{z-index:10}.sc-z-file-h>z-tooltip.sc-z-file>.tootip-content.sc-z-file{white-space:nowrap}.sc-z-file-h>z-chip.sc-z-file>.chip-content.sc-z-file>span.sc-z-file{max-width:250px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:14px;line-height:1.33;letter-spacing:0.32px}.sc-z-file-h>z-chip.sc-z-file>.chip-content.sc-z-file>span.regular.sc-z-file{font-weight:var(--font-rg)}.sc-z-file-h>z-chip.sc-z-file>.chip-content.sc-z-file>span.bold.sc-z-file{font-weight:var(--font-sb)}.sc-z-file-h .chip-content.sc-z-file>z-icon.sc-z-file:last-child{margin-left:var(--space-unit);cursor:pointer;fill:var(--color-icon01)}@media only screen and (min-width: 1152px){.sc-z-file-h{border-radius:16px}.sc-z-file-h>z-chip.sc-z-file>.chip-content.sc-z-file>span.sc-z-file{font-size:12px}}";

const ZFile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.removeFile = createEvent(this, "removeFile", 7);
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
    if (this.elementHasEllipsis() && window.innerWidth > tabletBreakpoint)
      this.allowTooltip = true;
    (_b = (_a = this.icon) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a);
  }
  elementHasEllipsis() {
    return this.ellipsis.offsetWidth < this.ellipsis.scrollWidth;
  }
  render() {
    return (h(Host, null, this.allowTooltip && (h("z-tooltip", { open: this.tooltipVisible, type: TooltipPosition.AUTO, "bind-to": `#chip-${this.fileNumber}` }, h("span", { class: "body-5 tootip-content" }, this.ellipsis.innerText))), h("z-chip", { id: `chip-${this.fileNumber}`, filter: true, type: ZChipType.default }, h("div", { class: "chip-content" }, h("span", { ref: (el) => (this.ellipsis = el), tabIndex: -1, class: {
        "body-3-sb": getDevice() == DeviceEnum.desktop,
        "body-2-sb": getDevice() !== DeviceEnum.desktop,
      } }, h("slot", null)), h("z-icon", { "aria-label": "Elimina file", tabIndex: 0, onClick: () => this.removeFileHandler(), onKeyPress: (e) => {
        if (e.code == "Space" || e.code == "Enter") {
          e.preventDefault();
          this.removeFileHandler();
        }
      }, name: "multiply-circled", height: getDevice() !== DeviceEnum.desktop ? 20 : 15, width: getDevice() !== DeviceEnum.desktop ? 20 : 15, ref: (val) => (this.icon = val) })))));
  }
  get el() { return getElement(this); }
};
ZFile.style = stylesCss;

export { ZFile as z_file };

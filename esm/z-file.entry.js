import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-90e18641.js';
import { i as ZChipType, j as TooltipPosition } from './index-96aade4f.js';
import { t as tabletBreakpoint } from './breakpoints-c386984e.js';

const stylesCss = ".sc-z-file-h{font-family:var(--font-family-sans);font-weight:var(--font-rg);position:relative}.sc-z-file-h>z-tooltip.sc-z-file{z-index:10}.sc-z-file-h>z-tooltip.sc-z-file>.tootip-content.sc-z-file{white-space:nowrap}.sc-z-file-h>z-chip.sc-z-file span.sc-z-file{max-width:250px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.33;letter-spacing:0.32px;display:block}";

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
  onInteractiveIconClick() {
    this.removeFileHandler();
  }
  componentDidLoad() {
    var _a, _b;
    if (this.elementHasEllipsis() && window.innerWidth > tabletBreakpoint)
      this.allowTooltip = true;
    (_b = (_a = this.icon) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a);
  }
  elementHasEllipsis() {
    console.log(this.ellipsis, this.ellipsis.offsetWidth, this.ellipsis.scrollWidth);
    return this.ellipsis.offsetWidth < this.ellipsis.scrollWidth;
  }
  render() {
    return (h(Host, null, this.allowTooltip && (h("z-tooltip", { open: this.tooltipVisible, type: TooltipPosition.AUTO, "bind-to": `#chip-${this.fileNumber}` }, h("span", { class: "body-5 tootip-content" }, this.ellipsis.innerText))), h("z-chip", { id: `chip-${this.fileNumber}`, interactiveIcon: "multiply-circled", type: ZChipType.default }, h("span", { ref: (el) => (this.ellipsis = el), tabIndex: -1 }, h("slot", null)))));
  }
  get el() { return getElement(this); }
};
ZFile.style = stylesCss;

export { ZFile as z_file };

import { r as registerInstance, c as createEvent, h } from './index-a2ca4b97.js';

const stylesCss = ":host{font-family:var(--dashboard-font);font-weight:var(--font-rg)}:host>div{display:flex;width:inherit;padding:calc(var(--space-unit) * 2);background:var(--accent-lighter);border-radius:var(--border-radius)}:host>div>slot{color:var(--text-grey-800);font-size:14px}:host>div>z-icon{margin-left:calc(var(--space-unit) * 2);cursor:pointer;fill:var(--myz-blue)}";

const ZInfoBox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.infoBoxClose = createEvent(this, "infoBoxClose", 7);
    /** render close icon flag */
    this.isclosable = true;
  }
  emitInfoBoxClose() {
    this.infoBoxClose.emit({ boxid: this.boxid });
  }
  render() {
    return (h("div", { id: this.boxid }, h("slot", { name: "content" }), this.isclosable && (h("z-icon", { name: "multiply", "data-action": "infoBoxClose", onClick: () => this.emitInfoBoxClose() }))));
  }
};
ZInfoBox.style = stylesCss;

export { ZInfoBox as z_info_box };
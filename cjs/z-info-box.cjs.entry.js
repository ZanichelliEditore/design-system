'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');

const stylesCss = ":host{font-family:var(--dashboard-font);font-weight:var(--font-rg)}:host>div{display:flex;width:inherit;padding:calc(var(--space-unit) * 2);background:var(--accent-lighter);border-radius:var(--border-radius)}:host>div>slot{color:var(--text-grey-800);font-size:14px}:host>div>z-icon{margin-left:calc(var(--space-unit) * 2);cursor:pointer;fill:var(--myz-blue)}";

const ZInfoBox = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.infoBoxClose = index.createEvent(this, "infoBoxClose", 7);
    /** render close icon flag */
    this.isclosable = true;
  }
  emitInfoBoxClose() {
    this.infoBoxClose.emit({ boxid: this.boxid });
  }
  render() {
    return (index.h("div", { id: this.boxid }, index.h("slot", { name: "content" }), this.isclosable && (index.h("z-icon", { name: "multiply", "data-action": "infoBoxClose", onClick: () => this.emitInfoBoxClose() }))));
  }
};
ZInfoBox.style = stylesCss;

exports.z_info_box = ZInfoBox;
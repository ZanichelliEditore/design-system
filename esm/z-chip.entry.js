import { r as registerInstance, h } from './index-fa9e549c.js';

const stylesCss = ":host>div{display:inline-block;min-height:28px;line-height:28px;padding:0 calc(var(--space-unit) * 1.5);background-color:var(--bg-white);border:var(--border-size-small) solid var(--bg-grey-200);border-radius:14px;color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-size:12px}.boldtext{font-weight:bold}";

const ZChip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  renderLegacyChip() {
    return h("div", null, h("span", { class: "boldtext" }, this.boldtext), " ", this.regulartext);
  }
  render() {
    return this.boldtext != null || this.regulartext != null ?
      this.renderLegacyChip() :
      h("div", null, h("slot", null));
  }
};
ZChip.style = stylesCss;

export { ZChip as z_chip };

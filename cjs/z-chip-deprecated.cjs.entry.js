'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');

const stylesCss = ":host>div{display:inline-block;min-height:28px;line-height:28px;padding:0 calc(var(--space-unit) * 1.5);background-color:var(--bg-white);border:var(--border-size-small) solid var(--bg-grey-200);border-radius:14px;color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-size:12px}.boldtext{font-weight:bold}";

const ZChipDeprecated = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  renderLegacyChip() {
    return index.h("div", null, index.h("span", { class: "boldtext" }, this.boldtext), " ", this.regulartext);
  }
  render() {
    return this.boldtext != null || this.regulartext != null ?
      this.renderLegacyChip() :
      index.h("div", null, index.h("slot", null));
  }
};
ZChipDeprecated.style = stylesCss;

exports.z_chip_deprecated = ZChipDeprecated;

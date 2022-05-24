'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');
const index$1 = require('./index-93c4c577.js');

const stylesCss = ":host>button{display:inline-block;padding:0 calc(var(--space-unit) * 1.5);background-color:var(--bg-white);border:var(--border-size-medium) solid var(--bg-grey-200);color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-size:14px}:host>div{display:inline-block;min-height:28px;line-height:28px;padding:0 calc(var(--space-unit) * 1.5);background-color:var(--bg-white);border:var(--border-size-small) solid var(--bg-grey-200);border-radius:14px;color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-size:12px}.boldtext{font-weight:bold}:host>button:hover{color:var(--myz-blue-dark)}:host>button:disabled{border:var(--border-size-medium) solid var(--bg-grey-200);color:rgb(149, 153, 157);box-shadow:none}:host>button.default:focus:focus-visible,:host>button.mini:focus:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}:host>button:not(:disabled):active{background-color:var(--gray50)}:host>button.default,:host>div.default{min-height:44px;border-radius:22px;line-height:44px}:host>button.mini,:host>div.mini{min-height:36px;border-radius:22px;line-height:36px}@media only screen and (min-width: 1152px){:host>button{font-size:12px}:host>button.default,:host>div.default{min-height:32px;border-radius:16px;line-height:32px}:host>button.mini,:host>div.mini{min-height:24px;border-radius:16px;line-height:24px}}";

const ZChip = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.disabled = false;
    this.filter = false;
  }
  renderLegacyChip() {
    return (index.h("div", null, index.h("span", { class: "boldtext" }, this.boldtext), " ", this.regulartext));
  }
  renderFilterChip() {
    if (this.filter) {
      return (index.h("button", { class: this.type ? this.type : index$1.ZChipType.default, disabled: this.disabled, tabindex: "0" }, index.h("slot", null)));
    }
    return (index.h("div", { class: this.type ? this.type : "" }, index.h("slot", null)));
  }
  render() {
    return this.boldtext != null || this.regulartext != null
      ? this.renderLegacyChip()
      : this.renderFilterChip();
  }
  get hostElement() { return index.getElement(this); }
};
ZChip.style = stylesCss;

exports.z_chip = ZChip;

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-132f3901.js');
const utils = require('./utils-c80a4ef9.js');
require('./breakpoints-88c4fd6c.js');

const stylesCss = ".sc-z-chip-h>button.sc-z-chip{display:inline-flex;align-items:center;padding:0 calc(var(--space-unit) * 1.5);border:var(--border-size-small) solid var(--gray400);background-color:var(--bg-white);border-radius:14px;color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-size:14px;font-weight:var(--font-sb)}.sc-z-chip-h>button.sc-z-chip:not(:disabled)>z-icon.sc-z-chip:last-child:hover{color:var(--color-hover-primary);fill:var(--color-hover-primary)}.sc-z-chip-h>button.sc-z-chip:hover:not(:disabled)>z-icon.sc-z-chip:first-child{fill:var(--color-icon02)}.sc-z-chip-h>button.sc-z-chip>z-icon.icon-sx.sc-z-chip{margin-right:calc(var(--space-unit) / 2)}.sc-z-chip-h>button.sc-z-chip>z-icon.sc-z-chip:last-child{margin-left:var(--space-unit);cursor:pointer;fill:var(--color-primary01)}.sc-z-chip-h>button.sc-z-chip:disabled,.sc-z-chip-h>button.sc-z-chip:disabled>z-icon.sc-z-chip{color:var(--color-disabled03);fill:var(--color-disabled03)}.sc-z-chip-h>button.sc-z-chip:disabled>z-icon.sc-z-chip{cursor:auto}.sc-z-chip-h>button.sc-z-chip:disabled{border:var(--border-size-small) solid var(--color-disabled01)}.sc-z-chip-h>button.sc-z-chip:focus:focus-visible,.sc-z-chip-h>div.sc-z-chip:focus:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}.sc-z-chip-h>button.sc-z-chip:hover:not(:disabled):active:hover>z-icon.sc-z-chip:last-child{color:var(--color-primary01);fill:var(--color-primary01)}.sc-z-chip-h>div.sc-z-chip{display:inline-flex;min-height:28px;align-items:center;padding:0 calc(var(--space-unit) * 1.5);border:var(--border-size-small) solid var(--bg-grey-200);background-color:var(--bg-white);border-radius:14px;color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-size:14px;line-height:28px}.sc-z-chip-h>div.sc-z-chip>z-icon.sc-z-chip{margin-right:calc(var(--space-unit) / 2)}.sc-z-chip-h>button.default.sc-z-chip,.sc-z-chip-h>div.default.sc-z-chip{min-height:44px;border-radius:22px;line-height:44px}.sc-z-chip-h>button.medium.sc-z-chip,.sc-z-chip-h>div.medium.sc-z-chip{min-height:40px;border-radius:22px;line-height:40px}.sc-z-chip-h>button.small.sc-z-chip,.sc-z-chip-h>div.small.sc-z-chip{min-height:36px;border-radius:22px;line-height:36px}@media only screen and (min-width: 1152px){.sc-z-chip-h>button.sc-z-chip{font-size:12px}.sc-z-chip-h>div.sc-z-chip{font-size:12px}.sc-z-chip-h>button.default.sc-z-chip,.sc-z-chip-h>div.default.sc-z-chip{min-height:32px;border-radius:16px;line-height:32px}.sc-z-chip-h>button.medium.sc-z-chip,.sc-z-chip-h>div.medium.sc-z-chip{min-height:28px;border-radius:16px;line-height:28px}.sc-z-chip-h>button.small.sc-z-chip,.sc-z-chip-h>div.small.sc-z-chip{min-height:24px;border-radius:16px;line-height:24px}}";

const ZChip = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.interactiveIconClick = index.createEvent(this, "interactiveIconClick", 7);
    /** z-chip size type, can be default, medium or small */
    this.type = index$1.ZChipType.DEFAULT;
    /** set z-chip as disabled  */
    this.disabled = false;
  }
  emitinteractiveIconClick() {
    this.interactiveIconClick.emit();
  }
  getIconSize() {
    return utils.getDevice() !== index$1.Device.DESKTOP ? 22 : 14;
  }
  render() {
    if (this.interactiveIcon) {
      return (index.h("button", { class: this.type, disabled: this.disabled, tabindex: "0", type: "button" }, this.icon && (index.h("z-icon", { class: "icon-sx", name: this.icon, width: this.getIconSize(), height: this.getIconSize() })), index.h("slot", null), index.h("z-icon", { tabIndex: this.disabled ? -1 : 0, onClick: () => this.emitinteractiveIconClick(), onKeyUp: (e) => utils.handleKeyboardSubmit(e, this.emitinteractiveIconClick.bind(this)), name: this.interactiveIcon, width: this.getIconSize(), height: this.getIconSize() })));
    }
    return (index.h("div", { class: `${this.type}`, tabindex: "0" }, this.icon && (index.h("z-icon", { name: this.icon, width: this.getIconSize(), height: this.getIconSize() })), index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
};
ZChip.style = stylesCss;

exports.z_chip = ZChip;

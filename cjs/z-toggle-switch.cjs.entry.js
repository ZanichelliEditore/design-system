'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const utils = require('./utils-305151da.js');
const index$1 = require('./index-7a9a8430.js');
require('./breakpoints-88c4fd6c.js');

const stylesCss = ".sc-z-toggle-switch-h{position:relative;display:inline-flex;font-family:var(--font-family-sans);font-weight:var(--font-rg)}label.sc-z-toggle-switch{display:flex;flex-direction:row;align-items:center;cursor:pointer}label.disabled.sc-z-toggle-switch{cursor:default}label.right.sc-z-toggle-switch{flex-direction:row-reverse}label.sc-z-toggle-switch>span.sc-z-toggle-switch:first-child{color:var(--color-text01);letter-spacing:0}label.left.sc-z-toggle-switch>span.sc-z-toggle-switch:first-child{margin-right:var(--space-unit)}label.right.sc-z-toggle-switch>span.sc-z-toggle-switch:first-child{margin-left:var(--space-unit)}label.sc-z-toggle-switch>span.container.sc-z-toggle-switch{position:relative;top:1px;left:1px;display:flex;width:calc(var(--space-unit) * 4);height:18px;align-items:center;background-color:var(--gray500);border-radius:var(--space-unit);color:var(--gray500);cursor:pointer}label.sc-z-toggle-switch>span.container.disabled.sc-z-toggle-switch,label.sc-z-toggle-switch>span.container.checked.disabled.sc-z-toggle-switch{background-color:var(--color-disabled01);cursor:default}label.sc-z-toggle-switch>span.container.checked.disabled.sc-z-toggle-switch>span.circle.sc-z-toggle-switch>z-icon.sc-z-toggle-switch{fill:var(--color-disabled01)}label.sc-z-toggle-switch>span.container.checked.sc-z-toggle-switch{background-color:var(--color-primary01);fill:var(--color-primary01)}input.sc-z-toggle-switch:focus:focus-visible+label.sc-z-toggle-switch>span.container.sc-z-toggle-switch:not(.disabled){box-shadow:var(--shadow-focus-primary);outline:none}input.sc-z-toggle-switch:focus:focus-visible+label.sc-z-toggle-switch>span.container.disabled.sc-z-toggle-switch{outline:none}label.sc-z-toggle-switch>span.container.sc-z-toggle-switch:not(.disabled):hover{background-color:var(--color-hover-primary);fill:var(--color-hover-primary)}label.sc-z-toggle-switch>span.container.sc-z-toggle-switch>span.circle.sc-z-toggle-switch{position:absolute;top:1px;left:1px;display:flex;width:calc(var(--space-unit) * 2);height:calc(var(--space-unit) * 2);align-items:center;justify-content:center;margin:0;background-color:var(--color-white);border-radius:7px;box-shadow:var(--shadow-1);transition:transform 0.3s ease}label.sc-z-toggle-switch>span.container.checked.sc-z-toggle-switch>span.circle.sc-z-toggle-switch{transform:translateX(calc(100% - 2px))}input[type=\"checkbox\"].sc-z-toggle-switch{position:absolute;z-index:-1;opacity:0;pointer-events:none}";

const ZToggleSwitch = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.toggleClick = index.createEvent(this, "toggleClick", 7);
    /** Disabled flag */
    this.disabled = false;
    /** Label position */
    this.labelPosition = index$1.LabelPosition.LEFT;
    /** Checked state */
    this.checked = false;
    /** HTML id attribute to set to the internal checkbox */
    this.htmlid = `toggle-switch-id-${utils.randomId()}`;
  }
  emitToggleClick() {
    this.toggleClick.emit({
      id: this.htmlid,
      checked: this.checked,
    });
  }
  handleClick(ev) {
    if (this.disabled) {
      return;
    }
    this.checked = ev.target.checked;
    this.emitToggleClick();
  }
  render() {
    return (index.h(index.Host, null, index.h("input", { id: this.htmlid, type: "checkbox", checked: this.checked, disabled: this.disabled, onChange: this.handleClick.bind(this) }), index.h("label", { htmlFor: this.htmlid, class: {
        [this.labelPosition]: true,
        disabled: this.disabled,
      } }, index.h("span", null, index.h("slot", null)), index.h("span", { class: {
        container: true,
        disabled: this.disabled,
        checked: this.checked,
      } }, index.h("span", { class: "circle" }, this.checked && (index.h("z-icon", { width: 12, height: 12, name: "checkmark" })))))));
  }
};
ZToggleSwitch.style = stylesCss;

exports.z_toggle_switch = ZToggleSwitch;

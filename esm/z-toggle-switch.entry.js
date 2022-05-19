import { r as registerInstance, c as createEvent, h } from './index-90e18641.js';
import { r as randomId } from './utils-436360f5.js';
import { r as ZtoggleSwitchPositionEnum } from './index-cda2110a.js';
import './breakpoints-c386984e.js';

const stylesCss = ".sc-z-toggle-switch-h{font-family:var(--font-family-sans);font-weight:var(--font-rg);display:inline-flex}label.sc-z-toggle-switch{display:flex;align-items:center;flex-direction:row;cursor:pointer}label.disabled.sc-z-toggle-switch{cursor:default}label.right.sc-z-toggle-switch{flex-direction:row-reverse}label.sc-z-toggle-switch>span.sc-z-toggle-switch:first-child{letter-spacing:0;color:var(--color-text01)}label.left.sc-z-toggle-switch>span.sc-z-toggle-switch:first-child{margin-right:var(--space-unit)}label.right.sc-z-toggle-switch>span.sc-z-toggle-switch:first-child{margin-left:var(--space-unit)}label.sc-z-toggle-switch>span.container.sc-z-toggle-switch{display:flex;align-items:center}label.sc-z-toggle-switch>span.container.sc-z-toggle-switch{top:1px;left:1px;height:18px;width:calc(var(--space-unit) * 4);border-radius:var(--space-unit);color:var(--gray500);background-color:var(--gray500);position:relative;cursor:pointer}label.sc-z-toggle-switch>span.container.disabled.sc-z-toggle-switch,label.sc-z-toggle-switch>span.container.checked.disabled.sc-z-toggle-switch{background-color:var(--color-disabled01);cursor:default}label.sc-z-toggle-switch>span.container.checked.disabled.sc-z-toggle-switch>span.circle.sc-z-toggle-switch>z-icon.sc-z-toggle-switch{fill:var(--color-disabled01)}label.sc-z-toggle-switch>span.container.checked.sc-z-toggle-switch{background-color:var(--color-primary01);fill:var(--color-primary01)}input.sc-z-toggle-switch:focus:focus-visible+label.sc-z-toggle-switch>span.container.sc-z-toggle-switch:not(.disabled){outline:none;box-shadow:var(--shadow-focus-primary)}input.sc-z-toggle-switch:focus:focus-visible+label.sc-z-toggle-switch>span.container.disabled.sc-z-toggle-switch{outline:none}label.sc-z-toggle-switch>span.container.sc-z-toggle-switch:not(.disabled):hover{background-color:var(--color-hover-primary);fill:var(--color-hover-primary)}label.sc-z-toggle-switch>span.container.sc-z-toggle-switch>span.circle.sc-z-toggle-switch{top:1px;left:1px;position:absolute;display:flex;align-items:center;justify-content:center;margin:0;height:calc(var(--space-unit) * 2);width:calc(var(--space-unit) * 2);border-radius:7px;background-color:var(--color-white);box-shadow:var(--shadow-1);transition:transform 0.3s ease}label.sc-z-toggle-switch>span.container.checked.sc-z-toggle-switch>span.circle.sc-z-toggle-switch{transform:translateX(calc(100% - 2px))}input[type=\"checkbox\"].sc-z-toggle-switch{position:absolute;opacity:0;z-index:-1;pointer-events:none}";

const ZToggleSwitch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.toggleClick = createEvent(this, "toggleClick", 7);
    this.disabled = false;
    this.labelPosition = ZtoggleSwitchPositionEnum.left;
    this.checked = false;
    this.htmlid = `toggle-switch-id-${randomId()}`;
  }
  emitToggleClick() {
    this.toggleClick.emit({
      id: this.htmlid,
      checked: this.checked,
    });
  }
  handleClick(ev) {
    if (this.disabled)
      return;
    this.checked = ev.target.checked;
    this.emitToggleClick();
  }
  render() {
    return [
      h("input", { id: this.htmlid, type: "checkbox", checked: this.checked, disabled: this.disabled, onChange: this.handleClick.bind(this) }),
      h("label", { htmlFor: this.htmlid, class: {
          [this.labelPosition]: true,
          disabled: this.disabled,
        } }, h("span", null, h("slot", null)), h("span", { class: {
          container: true,
          disabled: this.disabled,
          checked: this.checked,
        } }, h("span", { class: "circle" }, this.checked && (h("z-icon", { width: 12, height: 12, name: "checkmark" }))))),
    ];
  }
};
ZToggleSwitch.style = stylesCss;

export { ZToggleSwitch as z_toggle_switch };

import { r as registerInstance, h } from './index-a2ca4b97.js';

const stylesCss = "button{display:flex;width:42px;width:calc(var(--space-unit) * 6);height:calc(var(--space-unit) * 5);height:calc(var(--space-unit) * 6);align-items:center;justify-content:center;padding:0;border:none;border-left:var(--border-size-medium) solid var(--color-surface03);margin:0;background:none;border-radius:0 var(--border-radius) 0 0;color:var(--color-primary01);cursor:pointer;fill:var(--color-primary01);outline:none}button:active,button:focus{color:var(--blue700);fill:var(--blue700)}button>span{display:flex;width:28px;height:28px;align-items:center;justify-content:center;border:0;border-radius:var(--border-radius)}button:hover>span{background:var(--color-primary03)}button:focus>span{background:var(--color-surface01);border-radius:var(--border-radius);box-shadow:0 0 2px 2px var(--accent-dark)}button:active>span{background:var(--color-surface01);border-radius:var(--border-radius);box-shadow:var(--shadow-2)}button:disabled{cursor:not-allowed}button:disabled>span{background:none;box-shadow:var(--shadow-0);pointer-events:none}button:disabled>span>z-icon{fill:var(--color-surface03)}button::-moz-focus-inner{border:0}";

const ZMyzCardIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** disabled status flag */
    this.isdisabled = false;
  }
  render() {
    return (h("button", { disabled: this.isdisabled, "aria-label": this.ariaLabel }, h("span", null, h("z-icon", { name: this.icon, width: 16, height: 16 }))));
  }
};
ZMyzCardIcon.style = stylesCss;

export { ZMyzCardIcon as z_myz_card_icon };

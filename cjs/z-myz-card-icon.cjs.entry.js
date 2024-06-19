'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5dc4a8de.js');

const stylesCss = "button{display:flex;width:42px;width:calc(var(--space-unit) * 6);height:calc(var(--space-unit) * 5);height:calc(var(--space-unit) * 6);align-items:center;justify-content:center;padding:0;border:none;border-left:var(--border-size-medium) solid var(--color-surface03);margin:0;background:none;border-radius:0 var(--border-radius) 0 0;color:var(--color-primary01);cursor:pointer;fill:var(--color-primary01);outline:none}button:active,button:focus{color:var(--blue700);fill:var(--blue700)}button>span{display:flex;width:28px;height:28px;align-items:center;justify-content:center;border:0;border-radius:var(--border-radius)}button:hover>span{background:var(--color-primary03)}button:focus>span{background:var(--color-surface01);border-radius:var(--border-radius);box-shadow:var(--shadow-focus-primary)}button:active>span{background:var(--color-surface01);border-radius:var(--border-radius);box-shadow:var(--shadow-2)}button:disabled{cursor:not-allowed}button:disabled>span{background:none;box-shadow:var(--shadow-0);pointer-events:none}button:disabled>span>z-icon{fill:var(--color-surface03)}button::-moz-focus-inner{border:0}";
const ZMyzCardIconStyle0 = stylesCss;

const ZMyzCardIcon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.icon = undefined;
        this.isdisabled = false;
        this.ariaLabel = "";
    }
    render() {
        return (index.h("button", { key: 'd07c0ca573477aa1045a68da5f4fe528243ce36f', disabled: this.isdisabled, "aria-label": this.ariaLabel }, index.h("span", { key: 'd4fbc76e9d771efc6fba0f0f311e30261c4bb070' }, index.h("z-icon", { key: '7a27b69214edf71caff54e1b0619f1b8ce7f1003', name: this.icon, width: 16, height: 16 }))));
    }
};
ZMyzCardIcon.style = ZMyzCardIconStyle0;

exports.z_myz_card_icon = ZMyzCardIcon;

//# sourceMappingURL=z-myz-card-icon.cjs.entry.js.map
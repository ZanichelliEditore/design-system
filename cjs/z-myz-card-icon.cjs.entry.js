'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dc60bee7.js');

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
        return (index.h("button", { key: '972147f83660d272042a24650300708bee702c03', disabled: this.isdisabled, "aria-label": this.ariaLabel }, index.h("span", { key: '0fc735337402b0c798d26706da88a35bb8fd77dc' }, index.h("z-icon", { key: 'f052b1dcfc412d0aca7b3b60666e75b269aa3139', name: this.icon, width: 16, height: 16 }))));
    }
};
ZMyzCardIcon.style = ZMyzCardIconStyle0;

exports.z_myz_card_icon = ZMyzCardIcon;

//# sourceMappingURL=z-myz-card-icon.cjs.entry.js.map
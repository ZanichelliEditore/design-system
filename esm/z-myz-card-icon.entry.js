import { r as registerInstance, h } from './index-f16bc2ca.js';

const stylesCss = "button{display:flex;width:42px;width:calc(var(--space-unit) * 6);height:calc(var(--space-unit) * 5);height:calc(var(--space-unit) * 6);align-items:center;justify-content:center;padding:0;border:none;border-left:var(--border-size-medium) solid var(--color-surface03);margin:0;background:none;border-radius:0 var(--border-radius) 0 0;color:var(--color-primary01);cursor:pointer;fill:var(--color-primary01);outline:none}button:active,button:focus{color:var(--blue700);fill:var(--blue700)}button>span{display:flex;width:28px;height:28px;align-items:center;justify-content:center;border:0;border-radius:var(--border-radius)}button:hover>span{background:var(--color-primary03)}button:focus>span{background:var(--color-surface01);border-radius:var(--border-radius);box-shadow:var(--shadow-focus-primary)}button:active>span{background:var(--color-surface01);border-radius:var(--border-radius);box-shadow:var(--shadow-2)}button:disabled{cursor:not-allowed}button:disabled>span{background:none;box-shadow:var(--shadow-0);pointer-events:none}button:disabled>span>z-icon{fill:var(--color-surface03)}button::-moz-focus-inner{border:0}";
const ZMyzCardIconStyle0 = stylesCss;

const ZMyzCardIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.icon = undefined;
        this.isdisabled = false;
        this.ariaLabel = "";
    }
    render() {
        return (h("button", { key: 'ad617a342a7d7ae30067dc750b17453d66db9ffa', disabled: this.isdisabled, "aria-label": this.ariaLabel }, h("span", { key: '67079cabf8a0b3213ca75a04e7570d984fe9286f' }, h("z-icon", { key: '1e0a2ebcac6652f6c720da6c74a2d8f718ec825f', name: this.icon, width: 16, height: 16 }))));
    }
};
ZMyzCardIcon.style = ZMyzCardIconStyle0;

export { ZMyzCardIcon as z_myz_card_icon };

//# sourceMappingURL=z-myz-card-icon.entry.js.map
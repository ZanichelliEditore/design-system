import { r as registerInstance, c as createEvent, h } from './index-f16bc2ca.js';

const stylesCss = "button{display:flex;height:36px;align-items:center;padding-right:calc(var(--space-unit) * 2);padding-left:0;border:var(--border-size-medium) solid;border-color:transparent;background-color:var(--color-surface01);border-radius:var(--border-radius);box-shadow:0 0 4px 0 rgb(0 0 0 / 20%);color:var(--color-primary01);cursor:pointer;fill:var(--color-primary01);font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-sb);outline:none;text-transform:uppercase}button::-moz-focus-inner{border:0}button:hover{color:var(--color-hover-primary);fill:var(--color-hover-primary)}button:focus{box-shadow:var(--shadow-focus-primary)}button:active{border-color:var(--color-pressed-primary);box-shadow:var(--shadow-2);color:var(--color-pressed-primary);fill:var(--color-pressed-primary)}button:disabled{color:var(--color-disabled03);fill:var(--color-disabled03)}z-icon{display:inline-block;margin:0 var(--space-unit) 0 calc(var(--space-unit) * 2);transform:rotate(360deg);transition:all 200ms linear}button.isopen{top:-20px}button.avoid-clicks{pointer-events:none}";
const ZToggleButtonStyle0 = stylesCss;

const ZToggleButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toggleClick = createEvent(this, "toggleClick", 7);
        this.label = undefined;
        this.isdisabled = false;
        this.avoidclick = undefined;
        this.opened = false;
        this.ariaLabel = "";
    }
    emitToggleClick() {
        if (this.isdisabled) {
            return;
        }
        this.opened = !this.opened;
        this.toggleClick.emit(this.opened);
    }
    render() {
        return (h("button", { key: '45734652da19db32f9ca48cc87ae096a961b8fdb', tabindex: this.avoidclick ? "-1" : "0", class: {
                "isopen": this.opened,
                "avoid-clicks": this.avoidclick,
            }, disabled: this.isdisabled, "aria-expanded": this.opened ? "true" : "false", "aria-label": this.ariaLabel, onClick: () => this.emitToggleClick() }, h("z-icon", { key: '0630ac16f3c2fe347cf9c81cdbf07a06bc526778', name: this.opened ? "chevron-down" : "chevron-up", width: 16, height: 16 }), this.label));
    }
};
ZToggleButton.style = ZToggleButtonStyle0;

export { ZToggleButton as z_toggle_button };

//# sourceMappingURL=z-toggle-button.entry.js.map
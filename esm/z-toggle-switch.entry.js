import { r as registerInstance, c as createEvent, h, a as Host } from './index-ab5f1eaa.js';
import { k as LabelPosition } from './index-2255c6c8.js';
import { r as randomId } from './utils-7983d02c.js';
import './breakpoints-680e0e56.js';

const stylesCss = ".sc-z-toggle-switch-h{position:relative;display:-ms-inline-flexbox;display:inline-flex;font-family:var(--font-family-sans);font-weight:var(--font-rg)}label.sc-z-toggle-switch{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;cursor:pointer}label.disabled.sc-z-toggle-switch{cursor:default}label.right.sc-z-toggle-switch{-ms-flex-direction:row-reverse;flex-direction:row-reverse}label.sc-z-toggle-switch>span.sc-z-toggle-switch:first-child{color:var(--color-default-text);letter-spacing:0}label.left.sc-z-toggle-switch>span.sc-z-toggle-switch:first-child{margin-right:var(--space-unit)}label.right.sc-z-toggle-switch>span.sc-z-toggle-switch:first-child{margin-left:var(--space-unit)}label.sc-z-toggle-switch>span.container.sc-z-toggle-switch{position:relative;top:1px;left:1px;display:-ms-flexbox;display:flex;width:calc(var(--space-unit) * 4);height:18px;-ms-flex-align:center;align-items:center;background-color:var(--gray500);border-radius:var(--space-unit);color:var(--gray500);cursor:pointer}label.sc-z-toggle-switch>span.container.disabled.sc-z-toggle-switch,label.sc-z-toggle-switch>span.container.checked.disabled.sc-z-toggle-switch{background-color:var(--color-disabled01);cursor:default}label.sc-z-toggle-switch>span.container.checked.disabled.sc-z-toggle-switch>span.circle.sc-z-toggle-switch>z-icon.sc-z-toggle-switch{fill:var(--color-disabled01)}label.sc-z-toggle-switch>span.container.checked.sc-z-toggle-switch{background-color:var(--color-primary01);fill:var(--color-primary01)}input.sc-z-toggle-switch:focus:focus-visible+label.sc-z-toggle-switch>span.container.sc-z-toggle-switch:not(.disabled){-webkit-box-shadow:var(--shadow-focus-primary);box-shadow:var(--shadow-focus-primary);outline:none}input.sc-z-toggle-switch:focus:focus-visible+label.sc-z-toggle-switch>span.container.disabled.sc-z-toggle-switch{outline:none}label.sc-z-toggle-switch>span.container.sc-z-toggle-switch:not(.disabled):hover{background-color:var(--color-hover-primary);fill:var(--color-hover-primary)}label.sc-z-toggle-switch>span.container.sc-z-toggle-switch>span.circle.sc-z-toggle-switch{position:absolute;top:1px;left:1px;display:-ms-flexbox;display:flex;width:calc(var(--space-unit) * 2);height:calc(var(--space-unit) * 2);-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:0;background-color:var(--color-white);border-radius:7px;-webkit-box-shadow:var(--shadow-1);box-shadow:var(--shadow-1);-webkit-transition:-webkit-transform 0.3s ease;transition:-webkit-transform 0.3s ease;transition:transform 0.3s ease;transition:transform 0.3s ease, -webkit-transform 0.3s ease}label.sc-z-toggle-switch>span.container.checked.sc-z-toggle-switch>span.circle.sc-z-toggle-switch{-webkit-transform:translateX(calc(100% - 2px));transform:translateX(calc(100% - 2px))}input[type=\"checkbox\"].sc-z-toggle-switch{position:absolute;z-index:-1;opacity:0;pointer-events:none}";
const ZToggleSwitchStyle0 = stylesCss;

const ZToggleSwitch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toggleClick = createEvent(this, "toggleClick", 7);
        this.disabled = false;
        this.labelPosition = LabelPosition.LEFT;
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
        if (this.disabled) {
            return;
        }
        this.checked = ev.target.checked;
        this.emitToggleClick();
    }
    render() {
        return (h(Host, { key: '1435f2d332c0a6ba1845640836e129eee281f1b0' }, h("input", { key: 'baea7ca82f300316bd418cadfc82718da7dc2f18', id: this.htmlid, type: "checkbox", checked: this.checked, disabled: this.disabled, onChange: this.handleClick.bind(this) }), h("label", { key: '510a2f196cd5f67af2602c5c6e948e2f63395f6f', htmlFor: this.htmlid, class: {
                [this.labelPosition]: true,
                disabled: this.disabled,
            } }, h("span", { key: 'e32ef84026463fb9a99bcb303d0097ffed6ee994' }, h("slot", { key: '07344703d351893b5ab39e4e4a617e4038f1042a' })), h("span", { key: 'cec720a047a8fbc016048e9139639e04233f8f24', class: {
                container: true,
                disabled: this.disabled,
                checked: this.checked,
            } }, h("span", { key: '4639384b98d6de8009678681d71d1097b2c687e6', class: "circle" }, this.checked && (h("z-icon", { key: 'd34f45d60cece7a6969be1a03ad51be4ab0b0f04', width: 12, height: 12, name: "checkmark" })))))));
    }
};
ZToggleSwitch.style = ZToggleSwitchStyle0;

export { ZToggleSwitch as z_toggle_switch };

//# sourceMappingURL=z-toggle-switch.entry.js.map
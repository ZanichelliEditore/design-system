import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { k as LabelPosition } from './index2.js';
import { r as randomId } from './utils.js';
import { d as defineCustomElement$2 } from './index9.js';

const stylesCss = ".sc-z-toggle-switch-h{position:relative;display:inline-flex;font-family:var(--font-family-sans);font-weight:var(--font-rg)}label.sc-z-toggle-switch{display:flex;flex-direction:row;align-items:center;cursor:pointer}label.disabled.sc-z-toggle-switch{cursor:default}label.right.sc-z-toggle-switch{flex-direction:row-reverse}label.sc-z-toggle-switch>span.sc-z-toggle-switch:first-child{color:var(--color-default-text);letter-spacing:0}label.left.sc-z-toggle-switch>span.sc-z-toggle-switch:first-child{margin-right:var(--space-unit)}label.right.sc-z-toggle-switch>span.sc-z-toggle-switch:first-child{margin-left:var(--space-unit)}label.sc-z-toggle-switch>span.container.sc-z-toggle-switch{position:relative;top:1px;left:1px;display:flex;width:calc(var(--space-unit) * 4);height:18px;align-items:center;background-color:var(--gray500);border-radius:var(--space-unit);color:var(--gray500);cursor:pointer}label.sc-z-toggle-switch>span.container.disabled.sc-z-toggle-switch,label.sc-z-toggle-switch>span.container.checked.disabled.sc-z-toggle-switch{background-color:var(--color-disabled01);cursor:default}label.sc-z-toggle-switch>span.container.checked.disabled.sc-z-toggle-switch>span.circle.sc-z-toggle-switch>z-icon.sc-z-toggle-switch{fill:var(--color-disabled01)}label.sc-z-toggle-switch>span.container.checked.sc-z-toggle-switch{background-color:var(--color-primary01);fill:var(--color-primary01)}input.sc-z-toggle-switch:focus:focus-visible+label.sc-z-toggle-switch>span.container.sc-z-toggle-switch:not(.disabled){box-shadow:var(--shadow-focus-primary);outline:none}input.sc-z-toggle-switch:focus:focus-visible+label.sc-z-toggle-switch>span.container.disabled.sc-z-toggle-switch{outline:none}label.sc-z-toggle-switch>span.container.sc-z-toggle-switch:not(.disabled):hover{background-color:var(--color-hover-primary);fill:var(--color-hover-primary)}label.sc-z-toggle-switch>span.container.sc-z-toggle-switch>span.circle.sc-z-toggle-switch{position:absolute;top:1px;left:1px;display:flex;width:calc(var(--space-unit) * 2);height:calc(var(--space-unit) * 2);align-items:center;justify-content:center;margin:0;background-color:var(--color-white);border-radius:7px;box-shadow:var(--shadow-1);transition:transform 0.3s ease}label.sc-z-toggle-switch>span.container.checked.sc-z-toggle-switch>span.circle.sc-z-toggle-switch{transform:translateX(calc(100% - 2px))}input[type=\"checkbox\"].sc-z-toggle-switch{position:absolute;z-index:-1;opacity:0;pointer-events:none}";
const ZToggleSwitchStyle0 = stylesCss;

const ZToggleSwitch$1 = /*@__PURE__*/ proxyCustomElement(class ZToggleSwitch extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
        return (h(Host, { key: 'cd90ad41b289f192e485c0cce90ae2a8057ddd7d' }, h("input", { key: '5cc5e59f8cc0cc0548b072e41149cf7dc31bbcd8', id: this.htmlid, type: "checkbox", checked: this.checked, disabled: this.disabled, onChange: this.handleClick.bind(this) }), h("label", { key: '9774cc39f7ebe6bd02c5ce0e05d1b53075f4e426', htmlFor: this.htmlid, class: {
                [this.labelPosition]: true,
                disabled: this.disabled,
            } }, h("span", { key: '074941585b8a5862f04bd2d404ab74c86bcaa250' }, h("slot", { key: '7fe6486df9479e76a7783646aed3e620f7f1d0f2' })), h("span", { key: 'd4bf4b3febdab1bf8e88c12e1c7aa421b020997c', class: {
                container: true,
                disabled: this.disabled,
                checked: this.checked,
            } }, h("span", { key: 'c46c06ff10a35060945b9298a551cf66508a5450', class: "circle" }, this.checked && (h("z-icon", { key: '7ed667dc510d42e3e001ad8cb82b5c5f9d012583', width: 12, height: 12, name: "checkmark" })))))));
    }
    static get style() { return ZToggleSwitchStyle0; }
}, [6, "z-toggle-switch", {
        "disabled": [516],
        "labelPosition": [513, "label-position"],
        "checked": [1028],
        "htmlid": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-toggle-switch", "z-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "z-toggle-switch":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZToggleSwitch$1);
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const ZToggleSwitch = ZToggleSwitch$1;
const defineCustomElement = defineCustomElement$1;

export { ZToggleSwitch, defineCustomElement };

//# sourceMappingURL=z-toggle-switch.js.map
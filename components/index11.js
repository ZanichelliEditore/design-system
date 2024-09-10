import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './index9.js';

const stylesCss = ":host{display:flex;min-height:calc(var(--space-unit) * 2.5);align-items:start;margin-top:var(--space-unit);color:var(--color-text05);fill:currentcolor;font-family:var(--font-family-sans);font-size:var(--font-size-2);letter-spacing:0.16px}:host(.small),:host(.x-small){margin-top:calc(var(--space-unit) * 0.5);font-size:var(--font-size-1)}:host([status=\"success\"]){color:var(--color-text-success)}:host([status=\"error\"]){color:var(--color-text-error)}:host([status=\"warning\"]){color:var(--color-warning02)}:host(:focus){outline:none}:host>z-icon{--z-icon-width:calc(var(--space-unit) * 2);--z-icon-height:calc(var(--space-unit) * 2);--z-icon-right-margin:var(--space-unit);margin-top:calc(var(--space-unit) * 0.25)}:host(.small)>z-icon,:host(.x-small)>z-icon{--z-icon-width:14px;--z-icon-height:14px;--z-icon-right-margin:calc(var(--space-unit) * 0.5)}";
const ZInputMessageStyle0 = stylesCss;

const ZInputMessage = /*@__PURE__*/ proxyCustomElement(class ZInputMessage extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.statusIcons = {
            success: "checkmark-circle",
            error: "multiply-circled",
            warning: "exclamation-circle",
        };
        this.message = undefined;
        this.status = undefined;
        this.statusRole = {};
    }
    onMessageChange() {
        this.statusRole = this.message && this.status ? { role: "alert" } : {};
    }
    componentWillLoad() {
        this.onMessageChange();
    }
    render() {
        return (h(Host, Object.assign({ key: 'ab7d91f7f574f9fb29ab684cae2de0c0dd64f580' }, this.statusRole, { "aria-label": this.message }), this.statusIcons[this.status] && this.message && h("z-icon", { key: '592524f507e1d6cefb43815648880507e10806f2', name: this.statusIcons[this.status] }), h("span", { key: '96ca6506cfaa10d936543d9f370bcb58fa318b59', innerHTML: this.message })));
    }
    static get watchers() { return {
        "message": ["onMessageChange"],
        "status": ["onMessageChange"]
    }; }
    static get style() { return ZInputMessageStyle0; }
}, [1, "z-input-message", {
        "message": [1],
        "status": [513],
        "statusRole": [32]
    }, undefined, {
        "message": ["onMessageChange"],
        "status": ["onMessageChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-input-message", "z-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "z-input-message":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZInputMessage);
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { ZInputMessage as Z, defineCustomElement as d };

//# sourceMappingURL=index11.js.map
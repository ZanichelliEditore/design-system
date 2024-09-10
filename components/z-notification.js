import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './index9.js';

const stylesCss = ":host{--z-notification--top-offset:0;display:flex;width:100%;box-sizing:border-box;align-items:flex-start;padding:calc(var(--space-unit) * 2);border-bottom:var(--border-size-medium) solid var(--color-surface03);font-family:var(--font-family-sans);outline:none}:host[sticky]{position:sticky;top:var(--z-notification--top-offset)}:host[sticky],:host([showshadow]){box-shadow:var(--shadow-3)}:host([type=\"success\"]){background:var(--color-success-inverse)}:host([type=\"warning\"]){background:var(--color-warning-inverse)}:host([type=\"error\"]){background:var(--color-error-inverse)}.status-icon,.close-button{display:flex;height:20px;align-items:center}:host([type=\"success\"]) .status-icon{fill:var(--color-success01)}:host([type=\"warning\"]) .status-icon{fill:var(--color-warning02)}:host([type=\"error\"]) .status-icon{fill:var(--color-error01)}:host>button,.content-container>button{padding:0;border:none;margin:0;background:transparent;cursor:pointer;font-family:inherit}.status-icon+.content-container{margin-left:var(--space-unit)}.content-container{display:flex;flex:1 auto;flex-wrap:wrap;align-items:baseline;justify-content:space-between;row-gap:calc(var(--space-unit) * 2)}.content-text{max-width:800px;color:var(--color-default-text);font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:20px}.action-button{color:var(--color-primary01);font-size:var(--font-size-1);font-weight:var(--font-sb);letter-spacing:0.32px;line-height:16px}.action-button:focus{box-shadow:var(--shadow-focus-primary);outline:none !important}.content-container+.close-button{margin-left:calc(var(--space-unit) * 2)}.close-button z-icon{fill:var(--color-primary01)}@media only screen and (min-width: 768px){.content-container{flex-wrap:nowrap}.content-text+.action-button{margin-left:calc(var(--space-unit) * 5)}}";
const ZNotificationStyle0 = stylesCss;

const ZNotification$1 = /*@__PURE__*/ proxyCustomElement(class ZNotification extends HTMLElement {
    handleActionButtonClick(e) {
        e.preventDefault();
        this.notificationAction.emit();
    }
    handleCloseButtonClick(e) {
        e.preventDefault();
        this.notificationClose.emit();
    }
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.notificationAction = createEvent(this, "notificationAction", 7);
        this.notificationClose = createEvent(this, "notificationClose", 7);
        this.contenticonname = undefined;
        this.actiontext = undefined;
        this.type = undefined;
        this.showclose = false;
        this.showshadow = false;
        this.sticky = false;
        this.handleActionButtonClick = this.handleActionButtonClick.bind(this);
        this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this);
    }
    render() {
        var _a;
        return (h(Host, { key: 'bf9ead754226002371eb0669770d24c0230bcf92' }, this.contenticonname && (h("z-icon", { key: '322709ad12acd8a885214809012178649b172bd8', class: "status-icon", name: this.contenticonname, width: 16, height: 16 })), h("div", { key: 'd68ea8f5984fee4d906a05f93f9cf3ef4dae932c', class: "content-container" }, h("div", { key: 'd67f12dcbcf7075cbc0e111db260dce207e3411a', class: "content-text" }, h("slot", { key: '6e23a5b287e328657e1848dc1944b3a1ddc065be' })), !!((_a = this.actiontext) === null || _a === void 0 ? void 0 : _a.trim()) && (h("button", { key: '68da7a70a5dec9113c021c915594c2e8424c21be', class: "action-button", type: "button", onClick: this.handleActionButtonClick }, this.actiontext))), this.showclose && (h("button", { key: '342853024b8a9bfce814282471d8d8e9e9f6b522', class: "close-button", type: "button", onClick: this.handleCloseButtonClick }, h("z-icon", { key: 'ce20a4b279bc3cb3d4b0dd7bf4c61fe9b3837556', name: "multiply-circle", width: 16, height: 16 })))));
    }
    static get style() { return ZNotificationStyle0; }
}, [1, "z-notification", {
        "contenticonname": [1],
        "actiontext": [1],
        "type": [513],
        "showclose": [4],
        "showshadow": [516],
        "sticky": [516]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-notification", "z-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "z-notification":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZNotification$1);
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const ZNotification = ZNotification$1;
const defineCustomElement = defineCustomElement$1;

export { ZNotification, defineCustomElement };

//# sourceMappingURL=z-notification.js.map
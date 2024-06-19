import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './index9.js';

const stylesCss = ":host{--z-notification--top-offset:0;display:flex;width:100%;box-sizing:border-box;align-items:flex-start;padding:calc(var(--space-unit) * 2);border-bottom:var(--border-size-medium) solid var(--color-surface03);font-family:var(--font-family-sans);outline:none}:host[sticky]{position:sticky;top:var(--z-notification--top-offset)}:host[sticky],:host([showshadow]){box-shadow:var(--shadow-3)}:host([type=\"success\"]){background:var(--color-success-inverse)}:host([type=\"warning\"]){background:var(--color-warning-inverse)}:host([type=\"error\"]){background:var(--color-error-inverse)}.status-icon,.close-button{display:flex;height:20px;align-items:center}:host([type=\"success\"]) .status-icon{fill:var(--color-success01)}:host([type=\"warning\"]) .status-icon{fill:var(--color-warning02)}:host([type=\"error\"]) .status-icon{fill:var(--color-error01)}:host>button,.content-container>button{padding:0;border:none;margin:0;background:transparent;cursor:pointer;font-family:inherit}.status-icon+.content-container{margin-left:var(--space-unit)}.content-container{display:flex;flex:1 auto;flex-wrap:wrap;align-items:baseline;justify-content:space-between;row-gap:calc(var(--space-unit) * 2)}.content-text{max-width:800px;color:var(--color-default-text);font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:20px}.action-button{color:var(--color-primary01);font-size:var(--font-size-1);font-weight:var(--font-sb);letter-spacing:0.32px;line-height:16px}.content-container+.close-button{margin-left:calc(var(--space-unit) * 2)}.close-button z-icon{fill:var(--color-primary01)}@media and (min-width: 768px){.content-container{flex-wrap:nowrap}.content-text+.action-button{margin-left:calc(var(--space-unit) * 5)}}";
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
        return (h(Host, { key: '49e877c8628f367adc596b40d5f12d5e66f78ed0' }, this.contenticonname && (h("z-icon", { key: '56257c6011f6b5b17c8bbd6250ec99b8d1e41ee2', class: "status-icon", name: this.contenticonname, width: 16, height: 16 })), h("div", { key: 'dc56b45ea4f7d52bb193f8d3c22bb5910be9eeea', class: "content-container" }, h("div", { key: '2637553cf2f72a948014110e96559d15c45513fa', class: "content-text" }, h("slot", { key: '1e60cbb429a9620b88d7cb90df90874d3e454f48' })), !!((_a = this.actiontext) === null || _a === void 0 ? void 0 : _a.trim()) && (h("button", { key: '844e0ba5cef8b13f9d91d5c09472893de5127cc4', class: "action-button", type: "button", onClick: this.handleActionButtonClick }, this.actiontext))), this.showclose && (h("button", { key: '8761fc65bd1b44b38a219e80d8f12b10a898cefe', class: "close-button", type: "button", onClick: this.handleCloseButtonClick }, h("z-icon", { key: '7bd949a2c0abf7431765f28542443c9110097ab3', name: "multiply-circle", width: 16, height: 16 })))));
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
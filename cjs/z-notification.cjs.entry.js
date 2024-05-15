'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dc60bee7.js');

const stylesCss = ":host{--z-notification--top-offset:0;display:flex;width:100%;box-sizing:border-box;align-items:flex-start;padding:calc(var(--space-unit) * 2);border-bottom:var(--border-size-medium) solid var(--color-surface03);font-family:var(--font-family-sans);outline:none}:host[sticky]{position:sticky;top:var(--z-notification--top-offset)}:host[sticky],:host([showshadow]){box-shadow:var(--shadow-3)}:host([type=\"success\"]){background:var(--color-success-inverse)}:host([type=\"warning\"]){background:var(--color-warning-inverse)}:host([type=\"error\"]){background:var(--color-error-inverse)}.status-icon,.close-button{display:flex;height:20px;align-items:center}:host([type=\"success\"]) .status-icon{fill:var(--color-success01)}:host([type=\"warning\"]) .status-icon{fill:var(--color-warning02)}:host([type=\"error\"]) .status-icon{fill:var(--color-error01)}:host>button,.content-container>button{padding:0;border:none;margin:0;background:transparent;cursor:pointer;font-family:inherit}.status-icon+.content-container{margin-left:var(--space-unit)}.content-container{display:flex;flex:1 auto;flex-wrap:wrap;align-items:baseline;justify-content:space-between;row-gap:calc(var(--space-unit) * 2)}.content-text{max-width:800px;color:var(--color-default-text);font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:20px}.action-button{color:var(--color-primary01);font-size:var(--font-size-1);font-weight:var(--font-sb);letter-spacing:0.32px;line-height:16px}.content-container+.close-button{margin-left:calc(var(--space-unit) * 2)}.close-button z-icon{fill:var(--color-primary01)}@media and (min-width: 768px){.content-container{flex-wrap:nowrap}.content-text+.action-button{margin-left:calc(var(--space-unit) * 5)}}";
const ZNotificationStyle0 = stylesCss;

const ZNotification = class {
    handleActionButtonClick(e) {
        e.preventDefault();
        this.notificationAction.emit();
    }
    handleCloseButtonClick(e) {
        e.preventDefault();
        this.notificationClose.emit();
    }
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.notificationAction = index.createEvent(this, "notificationAction", 7);
        this.notificationClose = index.createEvent(this, "notificationClose", 7);
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
        return (index.h(index.Host, { key: 'b610c9bba78b5d6773e97cdcc7d758e6e26e883b' }, this.contenticonname && (index.h("z-icon", { class: "status-icon", name: this.contenticonname, width: 16, height: 16 })), index.h("div", { key: 'c3f2d084587396ece3e4a69db068cd11cd41a086', class: "content-container" }, index.h("div", { key: '0c03f73bdad7fca93e1aba2f7946b33cf49690d5', class: "content-text" }, index.h("slot", { key: '544dedd18270206a8ba2925edfa3aa84268e0c4f' })), !!((_a = this.actiontext) === null || _a === void 0 ? void 0 : _a.trim()) && (index.h("button", { class: "action-button", type: "button", onClick: this.handleActionButtonClick }, this.actiontext))), this.showclose && (index.h("button", { class: "close-button", type: "button", onClick: this.handleCloseButtonClick }, index.h("z-icon", { name: "multiply-circle", width: 16, height: 16 })))));
    }
};
ZNotification.style = ZNotificationStyle0;

exports.z_notification = ZNotification;

//# sourceMappingURL=z-notification.cjs.entry.js.map
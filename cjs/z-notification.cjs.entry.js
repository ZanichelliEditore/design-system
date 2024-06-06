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
        return (index.h(index.Host, { key: 'e1b8c509acb129182cfadc355c1963fd1c4274c6' }, this.contenticonname && (index.h("z-icon", { class: "status-icon", name: this.contenticonname, width: 16, height: 16 })), index.h("div", { key: 'c9cf0db48f3bacb9a5fd30edef7205e2466f833d', class: "content-container" }, index.h("div", { key: 'ac120c5078e63ca5d4089f2e2ddfea3bd60c5660', class: "content-text" }, index.h("slot", { key: 'fcc4c3bb250103c84453421964bc740f26baf40d' })), !!((_a = this.actiontext) === null || _a === void 0 ? void 0 : _a.trim()) && (index.h("button", { class: "action-button", type: "button", onClick: this.handleActionButtonClick }, this.actiontext))), this.showclose && (index.h("button", { class: "close-button", type: "button", onClick: this.handleCloseButtonClick }, index.h("z-icon", { name: "multiply-circle", width: 16, height: 16 })))));
    }
};
ZNotification.style = ZNotificationStyle0;

exports.z_notification = ZNotification;

//# sourceMappingURL=z-notification.cjs.entry.js.map
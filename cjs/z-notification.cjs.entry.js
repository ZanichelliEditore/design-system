'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-195ca522.js');

const stylesCss = ":host{--z-notification--top-offset:0;display:flex;width:100%;box-sizing:border-box;align-items:flex-start;padding:calc(var(--space-unit) * 2);border-bottom:var(--border-size-medium) solid var(--color-surface03);font-family:var(--font-family-sans);outline:none}:host[sticky]{position:sticky;top:var(--z-notification--top-offset)}:host[sticky],:host([showshadow]){box-shadow:var(--shadow-3)}:host([type=\"success\"]){background:var(--color-success-inverse)}:host([type=\"warning\"]){background:var(--color-warning-inverse)}:host([type=\"error\"]){background:var(--color-error-inverse)}.status-icon,.close-button{display:flex;height:20px;align-items:center}:host([type=\"success\"]) .status-icon{fill:var(--color-success01)}:host([type=\"warning\"]) .status-icon{fill:var(--color-warning02)}:host([type=\"error\"]) .status-icon{fill:var(--color-error01)}:host>button,.content-container>button{padding:0;border:none;margin:0;background:transparent;cursor:pointer;font-family:inherit}.status-icon+.content-container{margin-left:var(--space-unit)}.content-container{display:flex;flex:1 auto;flex-wrap:wrap;align-items:baseline;justify-content:space-between;row-gap:calc(var(--space-unit) * 2)}.content-text{max-width:800px;color:var(--color-text01);font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:20px}.action-button{color:var(--color-primary01);font-size:var(--font-size-1);font-weight:var(--font-sb);letter-spacing:0.32px;line-height:16px}.content-container+.close-button{margin-left:calc(var(--space-unit) * 2)}.close-button z-icon{fill:var(--color-primary01)}@media and (min-width: 768px){.content-container{flex-wrap:nowrap}.content-text+.action-button{margin-left:calc(var(--space-unit) * 5)}}";

const ZNotification = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.notificationAction = index.createEvent(this, "notificationAction", 7);
    this.notificationClose = index.createEvent(this, "notificationClose", 7);
    /** Enable close icon */
    this.showclose = false;
    /**
     * Enable shadow.
     * @deprecated shadow is available only for the `sticky` version of the notification.
     */
    this.showshadow = false;
    /** Enable sticky notification bar. */
    this.sticky = false;
    this.handleActionButtonClick = this.handleActionButtonClick.bind(this);
    this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this);
  }
  handleActionButtonClick(e) {
    e.preventDefault();
    this.notificationAction.emit();
  }
  handleCloseButtonClick(e) {
    e.preventDefault();
    this.notificationClose.emit();
  }
  render() {
    var _a;
    return (index.h(index.Host, null, this.contenticonname && (index.h("z-icon", { class: "status-icon", name: this.contenticonname, width: 16, height: 16 })), index.h("div", { class: "content-container" }, index.h("div", { class: "content-text" }, index.h("slot", null)), !!((_a = this.actiontext) === null || _a === void 0 ? void 0 : _a.trim()) && (index.h("button", { class: "action-button", type: "button", onClick: this.handleActionButtonClick }, this.actiontext))), this.showclose && (index.h("button", { class: "close-button", type: "button", onClick: this.handleCloseButtonClick }, index.h("z-icon", { name: "multiply-circle", width: 16, height: 16 })))));
  }
};
ZNotification.style = stylesCss;

exports.z_notification = ZNotification;

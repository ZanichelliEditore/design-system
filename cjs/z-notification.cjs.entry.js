'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');

const stylesCss = ":host{--z-notification--top-offset:0;display:flex;align-items:flex-start;width:100%;padding:calc(var(--space-unit) * 2);font-family:var(--font-family-sans);border-bottom:var(--border-size-medium) solid var(--color-surface03);outline:none;box-sizing:border-box}:host[sticky]{position:sticky;top:var(--z-notification--top-offset)}:host[sticky],:host([showshadow]){box-shadow:var(--shadow-3)}:host([type=\"success\"]){background:var(--color-success-inverse)}:host([type=\"warning\"]){background:var(--color-warning-inverse)}:host([type=\"error\"]){background:var(--color-error-inverse)}.status-icon,.close-button{display:flex;align-items:center;height:20px}:host([type=\"success\"]) .status-icon{fill:var(--color-success01)}:host([type=\"warning\"]) .status-icon{fill:var(--color-warning02)}:host([type=\"error\"]) .status-icon{fill:var(--color-error01)}:host>button,.content-container>button{margin:0;padding:0;background:transparent;border:none;font-family:inherit;cursor:pointer}.status-icon+.content-container{margin-left:var(--space-unit)}.content-container{display:flex;align-items:baseline;justify-content:space-between;row-gap:calc(var(--space-unit) * 2);flex-wrap:wrap;flex:1 auto}.content-text{max-width:800px;color:var(--color-text01);font-size:var(--font-size-2);font-weight:var(--font-rg);line-height:20px;letter-spacing:0.16px}.action-button{color:var(--color-primary01);font-size:var(--font-size-1);font-weight:var(--font-sb);line-height:16px;letter-spacing:0.32px}.content-container+.close-button{margin-left:calc(var(--space-unit) * 2)}.close-button z-icon{fill:var(--color-primary01)}@media and (min-width: 768px){.content-container{flex-wrap:nowrap}.content-text+.action-button{margin-left:calc(var(--space-unit) * 5)}}";

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
    return [
      this.contenticonname && index.h("z-icon", { class: "status-icon", name: this.contenticonname, width: 16, height: 16 }),
      index.h("div", { class: "content-container" }, index.h("div", { class: "content-text" }, index.h("slot", null)), !!((_a = this.actiontext) === null || _a === void 0 ? void 0 : _a.trim()) &&
        index.h("button", { class: "action-button", type: "button", onClick: this.handleActionButtonClick }, this.actiontext)),
      this.showclose && index.h("button", { class: "close-button", type: "button", onClick: this.handleCloseButtonClick }, index.h("z-icon", { name: "multiply-circle", width: 16, height: 16 }))
    ];
  }
};
ZNotification.style = stylesCss;

exports.z_notification = ZNotification;
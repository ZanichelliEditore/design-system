'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dee3e21d.js');
const index$1 = require('./index-73c33cf4.js');

const stylesCss = ":host{width:100%;color:var(--color-text01)}.notification-container{display:flex;padding:0 0 calc(var(--space-unit) * 2) calc(var(--space-unit) * 2);outline:none;border-bottom:var(--border-size-medium) solid var(--color-surface03)}.shadow{box-shadow:var(--shadow-3)}.content-container{display:flex;justify-content:space-between;flex:1 1 auto;flex-wrap:wrap}.content-text{max-width:800px;margin-top:calc(var(--space-unit) * 2);margin-right:calc(var(--space-unit) * 2)}.action-text{margin-top:calc(var(--space-unit) * 2);margin-right:calc(var(--space-unit) * 2);height:fit-content;color:var(--color-primary01);cursor:pointer;white-space:nowrap}:host div>z-icon{justify-self:center;margin-top:calc(var(--space-unit) * 2);margin-right:calc(var(--space-unit))}:host div.success-notification{background:var(--color-success-inverse)}:host div.warning-notification{background:var(--color-warning-inverse)}:host div.error-notification{background:var(--color-error-inverse)}:host div.success-notification>z-icon{fill:var(--color-success01)}:host div.warning-notification>z-icon{fill:var(--color-warning02)}:host div.error-notification>z-icon{fill:var(--color-error01)}:host div>z-icon.close-icon{cursor:pointer;fill:var(--color-primary01);margin-right:calc(var(--space-unit) * 2)}@media only screen and (min-width: 768px){.content-container{flex-wrap:nowrap}.content-text{margin-right:calc(var(--space-unit) * 5)}}";

const ZNotification = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.notificationAction = index.createEvent(this, "notificationAction", 7);
    this.notificationClose = index.createEvent(this, "notificationClose", 7);
    /** enable close icon */
    this.showclose = false;
    /** enable shadow */
    this.showshadow = false;
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
    return (index.h("div", { class: {
        "notification-container": true,
        "success-notification": this.type === index$1.NotificationType.success,
        "warning-notification": this.type === index$1.NotificationType.warning,
        "error-notification": this.type === index$1.NotificationType.error,
        "shadow": this.showshadow
      } }, this.contenticonname && (index.h("z-icon", { name: this.contenticonname, width: 16, height: 16 })), index.h("div", { class: "content-container" }, index.h("z-body", { class: "content-text", level: 4 }, index.h("slot", null)), this.actiontext && !!this.actiontext.trim().length && (index.h("z-body", { class: "action-text", role: "button", tabindex: "0", onClick: (e) => {
        this.handleActionButtonClick(e);
      }, level: 5, variant: "semibold" }, this.actiontext))), this.showclose && (index.h("z-icon", { class: "close-icon", name: "multiply-circle", width: 16, height: 16, onClick: (e) => this.handleCloseButtonClick(e) }))));
  }
};
ZNotification.style = stylesCss;

exports.z_notification = ZNotification;

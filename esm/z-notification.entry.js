import { r as registerInstance, c as createEvent, h } from './index-90e18641.js';

const stylesCss = ":host{--z-notification--top-offset:0;display:flex;align-items:flex-start;width:100%;padding:calc(var(--space-unit) * 2);font-family:var(--font-family-sans);border-bottom:var(--border-size-medium) solid var(--color-surface03);outline:none;box-sizing:border-box}:host[sticky]{position:sticky;top:var(--z-notification--top-offset)}:host[sticky],:host([showshadow]){box-shadow:var(--shadow-3)}:host([type=\"success\"]){background:var(--color-success-inverse)}:host([type=\"warning\"]){background:var(--color-warning-inverse)}:host([type=\"error\"]){background:var(--color-error-inverse)}.status-icon,.close-button{display:flex;align-items:center;height:20px}:host([type=\"success\"]) .status-icon{fill:var(--color-success01)}:host([type=\"warning\"]) .status-icon{fill:var(--color-warning02)}:host([type=\"error\"]) .status-icon{fill:var(--color-error01)}:host>button,.content-container>button{margin:0;padding:0;background:transparent;border:none;font-family:inherit;cursor:pointer}.status-icon+.content-container{margin-left:var(--space-unit)}.content-container{display:flex;align-items:baseline;justify-content:space-between;row-gap:calc(var(--space-unit) * 2);flex-wrap:wrap;flex:1 auto}.content-text{max-width:800px;color:var(--color-text01);font-size:var(--font-size-2);font-weight:var(--font-rg);line-height:20px;letter-spacing:0.16px}.action-button{color:var(--color-primary01);font-size:var(--font-size-1);font-weight:var(--font-sb);line-height:16px;letter-spacing:0.32px}.content-container+.close-button{margin-left:calc(var(--space-unit) * 2)}.close-button z-icon{fill:var(--color-primary01)}@media and (min-width: 768px){.content-container{flex-wrap:nowrap}.content-text+.action-button{margin-left:calc(var(--space-unit) * 5)}}";

const ZNotification = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.notificationAction = createEvent(this, "notificationAction", 7);
    this.notificationClose = createEvent(this, "notificationClose", 7);
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
      this.contenticonname && h("z-icon", { class: "status-icon", name: this.contenticonname, width: 16, height: 16 }),
      h("div", { class: "content-container" }, h("div", { class: "content-text" }, h("slot", null)), !!((_a = this.actiontext) === null || _a === void 0 ? void 0 : _a.trim()) &&
        h("button", { class: "action-button", type: "button", onClick: this.handleActionButtonClick }, this.actiontext)),
      this.showclose && h("button", { class: "close-button", type: "button", onClick: this.handleCloseButtonClick }, h("z-icon", { name: "multiply-circle", width: 16, height: 16 }))
    ];
  }
};
ZNotification.style = stylesCss;

export { ZNotification as z_notification };
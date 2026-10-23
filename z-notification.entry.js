import { r as registerInstance, c as createEvent, h, H as Host } from './index-DafJ7_Il.js';

const stylesCss = () => `:host{--z-notification--top-offset:0;--z-notification--content-max-width:100%;display:block;width:100%}.main-container{display:flex;max-width:var(--z-notification--content-max-width);align-items:flex-start;padding:calc(var(--space-unit) * 2) var(--z-notification--inline-padding, calc(var(--space-unit) * 2));margin:0 auto;background-color:transparent;font-family:var(--font-family-sans)}:host([sticky]){position:sticky;top:var(--z-notification--top-offset)}:host([sticky]),:host([showshadow]){box-shadow:var(--shadow-3)}:host([type="success"]){background:var(--color-inverse-success)}:host([type="warning"]){background:var(--color-inverse-warning)}:host([type="error"]){background:var(--color-inverse-error)}.status-icon,.close-button{display:flex;height:20px;align-items:center}:host([type="success"]) .status-icon{fill:var(--color-default-success)}:host([type="warning"]) .status-icon{fill:var(--color-default-warning)}:host([type="error"]) .status-icon{fill:var(--color-default-error)}:host([borderposition="bottom"]){border-bottom:var(--border-size-medium) solid var(--color-surface03)}:host([borderposition="top"]){border-top:var(--border-size-medium) solid var(--color-surface03)}button{padding:0;border:none;margin:0;background:transparent;cursor:pointer;font-family:inherit}.status-icon+.content-container{margin-left:var(--space-unit)}.content-container{display:flex;flex:1 auto;flex-wrap:wrap;align-items:baseline;justify-content:space-between;row-gap:calc(var(--space-unit) * 2)}.content-text{width:100%;color:var(--color-default-text);font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.action-button{color:var(--color-primary01);font-size:var(--font-size-1);font-weight:var(--font-sb);letter-spacing:0.32px;line-height:1.333;outline:none}.action-button:focus-visible{box-shadow:var(--shadow-focus-primary)}.content-container+.close-button{margin-left:calc(var(--space-unit) * 2)}.close-button z-icon{fill:var(--color-primary01)}@media (min-width: 768px){.content-container{flex-wrap:nowrap}.content-text+.action-button{margin-left:calc(var(--space-unit) * 5)}}`;

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
        /** Border position */
        this.borderposition = "bottom";
        this.handleActionButtonClick = this.handleActionButtonClick.bind(this);
        this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this);
    }
    render() {
        var _a;
        return (h(Host, { key: '4fd2f22c56fba4e7809d407dcbd16cefab495c04' }, h("div", { key: 'cfe35b1852e3e203efe9e02f1b77d61e0d41db9a', class: "main-container" }, this.contenticonname && (h("z-icon", { key: '3ce7c0d1206305eed36ff96459842d2748293ae9', class: "status-icon", name: this.contenticonname, width: 16, height: 16 })), h("div", { key: 'c80079713e7df578506dc269473562034c5d1f5b', class: "content-container" }, h("div", { key: 'f58d8522ee597abc370199362715fb3a294e7d03', class: "content-text" }, h("slot", { key: 'c3c5bfefeb9808ed5446b25df3bb79e5ed715e97' })), !!((_a = this.actiontext) === null || _a === void 0 ? void 0 : _a.trim()) && (h("button", { key: '6d41c5e0273debff7f5d2beca0b5a0e9b31e6c8a', class: "action-button", type: "button", onClick: this.handleActionButtonClick }, this.actiontext))), this.showclose && (h("button", { key: '7eb5261947cadf3264eb71f731ee27b86b660285', class: "close-button", type: "button", onClick: this.handleCloseButtonClick }, h("z-icon", { key: '4113a60cd35f6ba083f1abce5cc46856871cc312', name: "multiply-circle", width: 16, height: 16 }))))));
    }
};
ZNotification.style = stylesCss();

export { ZNotification as z_notification };

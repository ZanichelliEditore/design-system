import { r as registerInstance, c as createEvent, h, H as Host } from './index-SFwvdS4t.js';

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
        return (h(Host, { key: 'fc5e89c4c315d376837f6abcbb1325d28b05b303' }, h("div", { key: '1b647c954c4115c527efc26a03624e040f880379', class: "main-container" }, this.contenticonname && (h("z-icon", { key: 'd8e83788628bdc39dce4cf472e7b8ab79fadcdb7', class: "status-icon", name: this.contenticonname, width: 16, height: 16 })), h("div", { key: '5ef74c7096f090339ff880a16ef3893ee2bb1c5c', class: "content-container" }, h("div", { key: 'b0a7c8f8bc3e18a37508397c01ef6e80b1bf49f3', class: "content-text" }, h("slot", { key: '125bfbcb05d2fb16719a23c7c886785349d0cda5' })), !!((_a = this.actiontext) === null || _a === void 0 ? void 0 : _a.trim()) && (h("button", { key: '41c4c81b6ab08c13ef581d411e440b77c46775da', class: "action-button", type: "button", onClick: this.handleActionButtonClick }, this.actiontext))), this.showclose && (h("button", { key: '053b26950a62fc86e63cb16dbbec4b6119aa5da3', class: "close-button", type: "button", onClick: this.handleCloseButtonClick }, h("z-icon", { key: 'be31594bc169b3d050db02097e60e8c320673878', name: "multiply-circle", width: 16, height: 16 }))))));
    }
};
ZNotification.style = stylesCss();

export { ZNotification as z_notification };

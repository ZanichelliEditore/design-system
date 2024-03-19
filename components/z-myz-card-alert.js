import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { o as AlertType } from './index2.js';
import { d as defineCustomElement$3 } from './index3.js';
import { d as defineCustomElement$2 } from './index9.js';

const stylesCss = ":host{position:absolute;z-index:2;top:0;left:0;width:100%;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>z-alert{height:calc(var(--space-unit) * 6)}.relative-container{position:relative;display:grid;align-items:center;padding:0;grid-column-gap:var(--space-unit);grid-template-columns:18px auto 46px;grid-template-rows:1fr;outline:none}.relative-container::-moz-focus-inner{border:0}.alert-external-wrapper.remove-alert{border:var(--border-size-medium) solid var(--color-surface02);border-top:none}:host div.add-alert{background:var(--color-success-inverse)}:host div.remove-alert{background:var(--color-warning-inverse)}:host div>.content-text{color:var(--color-surface05);font-size:14px;letter-spacing:0.16px;line-height:20px}:host div>.content-action{height:20px;color:var(--color-primary01);cursor:pointer;font-size:12px;font-weight:var(--font-sb);letter-spacing:0.32px;line-height:20px}:host div>z-icon{justify-self:center}";
const ZMyzCardAlertStyle0 = stylesCss;

const ZMyzCardAlert$1 = /*@__PURE__*/ proxyCustomElement(class ZMyzCardAlert extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.undoAction = createEvent(this, "undoAction", 7);
        this.iconname = undefined;
        this.contenttext = undefined;
        this.actiontext = undefined;
        this.type = undefined;
    }
    emitUndoAction() {
        this.undoAction.emit({ actionType: this.type });
    }
    handleSpaceKeyPress(e) {
        if (e.keyCode == 32 || e.keyCode == 13) {
            e.preventDefault();
            this.emitUndoAction();
        }
    }
    handleActionButtonClick(e) {
        e.preventDefault();
        this.emitUndoAction();
    }
    retrieveClass() {
        let className = "";
        switch (this.type) {
            case "add":
                className = "add-alert";
                break;
            case "remove":
                className = "remove-alert";
                break;
            default:
                className = "";
                break;
        }
        return className;
    }
    getAlertType() {
        switch (this.type) {
            case "add":
                return AlertType.SUCCESS;
            case "remove":
                return AlertType.WARNING;
            default:
                return null;
        }
    }
    render() {
        return (h("div", { key: '1b444689e78b349adce31ea4d4b318ae447acc05', class: "alert-external-wrapper " + this.retrieveClass() }, h("z-alert", { key: '8774b645a0c306246db8afbed890b372ae8dcdff', type: this.getAlertType() }, h("div", { key: '03df6396443cffd9b791a9b29b146f05f405a035', class: "relative-container" }, h("z-icon", { key: '7d0a21e9cd2dbbde634440b3e36f2d892023cc81', name: this.iconname, width: 18, height: 18, class: this.retrieveClass() }), h("span", { key: 'a0bc80e8f7b28cebba25ad3f8a5f9bf3233a6930', class: "content-text" }, this.contenttext), this.actiontext && !!this.actiontext.trim().length && (h("span", { role: "button", tabindex: "0", class: "content-action", onClick: (e) => {
                this.handleActionButtonClick(e);
            }, onKeyPress: (e) => {
                this.handleSpaceKeyPress(e);
            } }, this.actiontext))))));
    }
    static get style() { return ZMyzCardAlertStyle0; }
}, [1, "z-myz-card-alert", {
        "iconname": [1],
        "contenttext": [1],
        "actiontext": [1],
        "type": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-myz-card-alert", "z-alert", "z-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "z-myz-card-alert":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZMyzCardAlert$1);
            }
            break;
        case "z-alert":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const ZMyzCardAlert = ZMyzCardAlert$1;
const defineCustomElement = defineCustomElement$1;

export { ZMyzCardAlert, defineCustomElement };

//# sourceMappingURL=z-myz-card-alert.js.map
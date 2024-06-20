import { r as registerInstance, c as createEvent, h } from './index-ab5f1eaa.js';
import { o as AlertType } from './index-2255c6c8.js';

const stylesCss = ":host{position:absolute;z-index:2;top:0;left:0;width:100%;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>z-alert{height:calc(var(--space-unit) * 6)}.relative-container{position:relative;display:grid;-ms-flex-align:center;align-items:center;padding:0;grid-column-gap:var(--space-unit);grid-template-columns:18px auto 46px;grid-template-rows:1fr;outline:none}.relative-container::-moz-focus-inner{border:0}.alert-external-wrapper.remove-alert{border:var(--border-size-medium) solid var(--color-surface02);border-top:none}:host div.add-alert{background:var(--color-success-inverse)}:host div.remove-alert{background:var(--color-warning-inverse)}:host div>.content-text{color:var(--color-surface05);font-size:14px;letter-spacing:0.16px;line-height:20px}:host div>.content-action{height:20px;color:var(--color-primary01);cursor:pointer;font-size:12px;font-weight:var(--font-sb);letter-spacing:0.32px;line-height:20px}:host div>z-icon{justify-self:center}";
const ZMyzCardAlertStyle0 = stylesCss;

const ZMyzCardAlert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", { key: 'ee3f657b10628aa1d8b655fbad1f7f2d55d0cfcc', class: "alert-external-wrapper " + this.retrieveClass() }, h("z-alert", { key: 'f90c4944719e9d9842a159727be73e7d877aca9a', type: this.getAlertType() }, h("div", { key: '414b27076e7e807f79987b8d1bf57724ff7aba21', class: "relative-container" }, h("z-icon", { key: '4a17b0046552751eb1b4f78b666038a34950f669', name: this.iconname, width: 18, height: 18, class: this.retrieveClass() }), h("span", { key: 'dc7059e99b1cb56c47f0ce112f2dcabf0cdafb47', class: "content-text" }, this.contenttext), this.actiontext && !!this.actiontext.trim().length && (h("span", { key: 'fe84b58a497310f2936b14fd06808717a572feb5', role: "button", tabindex: "0", class: "content-action", onClick: (e) => {
                this.handleActionButtonClick(e);
            }, onKeyPress: (e) => {
                this.handleSpaceKeyPress(e);
            } }, this.actiontext))))));
    }
};
ZMyzCardAlert.style = ZMyzCardAlertStyle0;

export { ZMyzCardAlert as z_myz_card_alert };

//# sourceMappingURL=z-myz-card-alert.entry.js.map
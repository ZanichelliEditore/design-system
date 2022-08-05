import { r as registerInstance, c as createEvent, h } from './index-90e18641.js';
import { m as AlertTypesEnum } from './index-c1ce8cab.js';

const stylesCss = ":host{position:absolute;font-family:var(--font-family-sans);font-weight:var(--font-rg);width:100%;top:0px;left:0px;z-index:2}:host>z-alert{height:calc(var(--space-unit) * 6)}.relativeContainer{position:relative;display:grid;grid-template-columns:18px auto 46px;grid-template-rows:1fr;grid-column-gap:var(--space-unit);align-items:center;padding:0;outline:none}.relativeContainer::-moz-focus-inner{border:0}.alert-external-wrapper.removeAlert{border:var(--border-size-medium) solid var(--color-surface02);border-top:none}:host div.addAlert{background:var(--color-success-inverse)}:host div.removeAlert{background:var(--color-warning-inverse)}:host div>.contentText{color:var(--color-surface05);font-size:14px;letter-spacing:0.16px;line-height:20px}:host div>.contentAction{color:var(--color-primary01);font-size:12px;font-weight:var(--font-sb);height:20px;letter-spacing:0.32px;line-height:20px;cursor:pointer}:host div>z-icon{justify-self:center}";

const ZMyzCardAlert = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.undoAction = createEvent(this, "undoAction", 7);
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
        className = "addAlert";
        break;
      case "remove":
        className = "removeAlert";
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
        return AlertTypesEnum.success;
      case "remove":
        return AlertTypesEnum.warning;
      default:
        return null;
    }
  }
  render() {
    return (h("div", { class: "alert-external-wrapper " + this.retrieveClass() }, h("z-alert", { type: this.getAlertType() }, h("div", { class: "relativeContainer" }, h("z-icon", { name: this.iconname, width: 18, height: 18, class: this.retrieveClass() }), h("span", { class: "contentText" }, this.contenttext), this.actiontext && !!this.actiontext.trim().length && (h("span", { role: "button", tabindex: "0", class: "contentAction", onClick: (e) => {
        this.handleActionButtonClick(e);
      }, onKeyPress: (e) => {
        this.handleSpaceKeyPress(e);
      } }, this.actiontext))))));
  }
};
ZMyzCardAlert.style = stylesCss;

export { ZMyzCardAlert as z_myz_card_alert };

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-2dfdb7e2.js');

const stylesCss = ":host{position:absolute;z-index:2;top:0;left:0;width:100%;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>z-alert{height:calc(var(--space-unit) * 6)}.relative-container{position:relative;display:grid;align-items:center;padding:0;grid-column-gap:var(--space-unit);grid-template-columns:18px auto 46px;grid-template-rows:1fr;outline:none}.relative-container::-moz-focus-inner{border:0}.alert-external-wrapper.remove-alert{border:var(--border-size-medium) solid var(--color-surface02);border-top:none}:host div.add-alert{background:var(--color-success-inverse)}:host div.remove-alert{background:var(--color-warning-inverse)}:host div>.content-text{color:var(--color-surface05);font-size:14px;letter-spacing:0.16px;line-height:20px}:host div>.content-action{height:20px;color:var(--color-primary01);cursor:pointer;font-size:12px;font-weight:var(--font-sb);letter-spacing:0.32px;line-height:20px}:host div>z-icon{justify-self:center}";

const ZMyzCardAlert = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.undoAction = index.createEvent(this, "undoAction", 7);
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
        return index$1.AlertType.SUCCESS;
      case "remove":
        return index$1.AlertType.WARNING;
      default:
        return null;
    }
  }
  render() {
    return (index.h("div", { class: "alert-external-wrapper " + this.retrieveClass() }, index.h("z-alert", { type: this.getAlertType() }, index.h("div", { class: "relative-container" }, index.h("z-icon", { name: this.iconname, width: 18, height: 18, class: this.retrieveClass() }), index.h("span", { class: "content-text" }, this.contenttext), this.actiontext && !!this.actiontext.trim().length && (index.h("span", { role: "button", tabindex: "0", class: "content-action", onClick: (e) => {
        this.handleActionButtonClick(e);
      }, onKeyPress: (e) => {
        this.handleSpaceKeyPress(e);
      } }, this.actiontext))))));
  }
};
ZMyzCardAlert.style = stylesCss;

exports.z_myz_card_alert = ZMyzCardAlert;

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-199cd650.js');

const stylesCss = ":host{font-family:var(--dashboard-font);font-weight:var(--font-rg)}z-candybar.hidden{display:none}.content{display:flex;flex-flow:column nowrap;align-content:space-between;align-items:stretch;justify-content:space-between;padding:calc(var(--space-unit) * 3) calc(var(--space-unit) * 2);border-radius:calc(var(--space-unit) * 0.5);color:var(--text-grey-800);font-size:16px;letter-spacing:0;line-height:24px}.content>div>h2{padding:0;margin:0;border-radius:0;color:var(--text-grey-800);font-size:18px;font-weight:var(--font-sb);letter-spacing:0}.content>div>div{padding:calc(var(--space-unit) * 3) 0;font-size:14px;letter-spacing:0.16px;line-height:20px}.content>div>div>p{margin:0}.content>div>div>p>a{display:inline-flex;height:14px;color:var(--text-grey-800);cursor:pointer;font-weight:var(--font-sb);text-decoration:underline}.content>div>div>p>a:visited{z-index:1000;color:var(--text-grey-800);cursor:pointer}.content>z-button{width:100%;margin:0}@media only screen and (min-width: 768px){.content{width:100%;flex-direction:row;align-items:center;padding:calc(var(--space-unit) * 4) calc(var(--space-unit) * 3);font-size:16px;letter-spacing:0;line-height:24px}.content>div{width:560px}.content>div>h2{height:calc(var(--space-unit) * 3.5)}.content>div>div{padding:0}.content>z-button{width:initial;margin:0}}@media only screen and (min-width: 1152px){.content>div{width:935px}}@media only screen and (min-width: 1366px){.content{padding-right:calc(var(--space-unit) * 4);padding-left:calc(var(--space-unit) * 4)}}";

const ZCookiebar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.accept = index.createEvent(this, "accept", 7);
  }
  emitAccept(ev) {
    this.accept.emit({ ev });
  }
  handleOkButtonClick(ev) {
    this.emitAccept(ev);
    if (typeof this.callback === "function") {
      this.callback();
    }
  }
  handleOkButtonKeyUp(ev) {
    this.emitAccept(ev);
    if (ev.code === "Enter") {
      if (typeof this.callback !== "undefined" && typeof this.callback === "function") {
        this.callback();
      }
    }
  }
  renderContentSlot() {
    return (index.h("div", { class: "content", slot: "content" }, index.h("div", null, index.h("h2", null, "Su questo sito usiamo i cookie."), index.h("div", null, index.h("p", null, "Se continui a navigare ci permetti di farlo secondo le regole spiegate nella nostra informativa sulla privacy relativa ai \u00A0", index.h("a", { href: this.cookiepolicyurl, target: "_blank" }, "cookie"), "."))), index.h("z-button", { variant: index$1.ButtonVariant.PRIMARY, onClick: (ev) => this.handleOkButtonClick(ev), onKeyUp: (ev) => this.handleOkButtonKeyUp(ev) }, "ACCETTA")));
  }
  render() {
    return index.h("z-candybar", { class: `${this.hide ? "hidden" : ""}` }, this.renderContentSlot());
  }
};
ZCookiebar.style = stylesCss;

exports.z_cookiebar = ZCookiebar;

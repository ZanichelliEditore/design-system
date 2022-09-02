import { r as registerInstance, c as createEvent, h } from './index-90e18641.js';
import { h as ButtonVariantEnum } from './index-e5e2b27f.js';

const stylesCss = ":host{font-family:var(--dashboard-font);font-weight:var(--font-rg)}z-candybar.hidden{display:none}.content{display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:space-between;align-items:stretch;align-content:space-between;color:var(--text-grey-800);border-radius:calc(var(--space-unit) * 0.5);font-size:16px;letter-spacing:0px;line-height:24px;padding:calc(var(--space-unit) * 3) calc(var(--space-unit) * 2)}.content>div>h2{margin:0;padding:0;color:var(--text-grey-800);border-radius:0px;font-size:18px;font-weight:var(--font-sb);letter-spacing:0px}.content>div>div{padding:calc(var(--space-unit) * 3) 0;font-size:14px;letter-spacing:0.16px;line-height:20px}.content>div>div>p{margin:0}.content>div>div>p>a{cursor:pointer;font-weight:var(--font-sb);color:var(--text-grey-800);text-decoration:underline;height:14px;display:inline-flex}.content>div>div>p>a:visited{color:var(--text-grey-800);cursor:pointer;z-index:1000}.content>z-button{margin:0;width:100%}@media only screen and (min-width: 768px){.content{width:100%;flex-direction:row;align-items:center;font-size:16px;letter-spacing:0px;line-height:24px;padding:calc(var(--space-unit) * 4) calc(var(--space-unit) * 3)}.content>div{width:560px}.content>div>h2{height:calc(var(--space-unit) * 3.5)}.content>div>div{padding:0}.content>z-button{margin:0;width:initial}}@media only screen and (min-width: 1152px){.content>div{width:935px}}@media only screen and (min-width: 1366px){.content{padding-left:calc(var(--space-unit) * 4);padding-right:calc(var(--space-unit) * 4)}}";

const ZCookiebar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.accept = createEvent(this, "accept", 7);
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
      if (typeof this.callback !== "undefined" &&
        typeof this.callback === "function") {
        this.callback();
      }
    }
  }
  renderContentSlot() {
    return (h("div", { class: "content", slot: "content" }, h("div", null, h("h2", null, "Su questo sito usiamo i cookie."), h("div", null, h("p", null, "Se continui a navigare ci permetti di farlo secondo le regole spiegate nella nostra informativa sulla privacy relativa ai \u00A0", h("a", { href: this.cookiepolicyurl, target: "_blank" }, "cookie"), "."))), h("z-button", { variant: ButtonVariantEnum.primary, onClick: (ev) => this.handleOkButtonClick(ev), onKeyUp: (ev) => this.handleOkButtonKeyUp(ev) }, "ACCETTA")));
  }
  render() {
    return (h("z-candybar", { class: `${this.hide ? "hidden" : ""}` }, this.renderContentSlot()));
  }
};
ZCookiebar.style = stylesCss;

export { ZCookiebar as z_cookiebar };

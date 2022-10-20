import { r as registerInstance, h } from './index-a2ca4b97.js';
import { L as LicenseType } from './index-9d028352.js';

const stylesCss = "footer{position:relative;z-index:5;top:0;width:auto;height:calc(var(--space-unit) * 6);padding:0;border-top:var(--border-size-medium) solid var(--color-surface03);margin:0;background-color:var(--color-surface01);border-radius:0 0 var(--border-radius) var(--border-radius);color:var(--color-surface05);font-family:var(--font-family-sans);font-weight:var(--font-rg);transition:height 500ms ease-in-out, top 500ms ease-in-out}footer.real,footer.trial,footer.temp{border-top:var(--border-size-medium) solid var(--accent)}footer .bold{font-family:var(--font-family-sans);font-weight:var(--font-sb)}footer>p{overflow:hidden;height:40px;padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 2) var(--space-unit) calc(var(--space-unit) * 2);margin:0;background-color:var(--color-surface01);font-family:var(--font-family-sans);font-size:16px;font-weight:var(--font-rg);line-height:22px;transition:all 200ms linear}footer.isopen>p{background-color:var(--bg-neutral-200);font-size:14px;font-weight:var(--font-sb);transition:all 200ms linear}footer.isopen.real>p,footer.isopen.trial>p,footer.isopen.temp>p{background-color:var(--accent)}footer .visible{display:block}footer .hidden{display:none}footer>div.content{overflow:hidden;height:60px}footer>div.content>div:not(.slot-handler){padding:var(--space-unit) calc(var(--space-unit) * 2)}footer>div.content>div>p{overflow:hidden;height:20px;padding:0;margin:0;font-size:14px;line-height:20px;text-overflow:ellipsis;white-space:nowrap}footer>div.content>div>p.year-isbn{display:flex;flex-direction:row;justify-content:space-between;padding-top:var(--space-unit)}footer>div.content>div>p.year-isbn>span.isbn{overflow:hidden;text-overflow:ellipsis}footer.isopen>div.content>div:not(.slot-handler){height:68px}footer.isopen>div.content>div>p.authors{height:40px;text-overflow:initial;white-space:initial}footer.isopen>div.content>div>p.year-isbn{height:50px;flex-direction:column;padding-left:0}footer.isopen>div.content>div>p.year-isbn>span.isbn{display:inline-grid;padding-left:0}footer.isopen{top:-212px;height:295px;transition:height 500ms ease-in-out, top 500ms ease-in-out}footer.isopen.custom-content{top:-292px}footer.isopen>div.content{height:280px;transition:height 500ms ease-in-out, top 500ms ease-in-out}footer.isopen.custom-content>div.content{height:230px}.toggle{position:absolute;z-index:10;top:-24px;left:16px}.faded{opacity:0.3;pointer-events:none}footer>p.custom-content,footer .content.custom-content{display:none}footer.isopen>p.custom-content,footer.isopen .content.custom-content{display:block}div.wrapper{position:relative;height:100%}div.wrapper ::slotted([slot=\"content\"]){position:absolute;z-index:10;top:calc(var(--space-unit) * 2);display:block;width:100%;height:112px;box-sizing:border-box;padding:0 calc(var(--space-unit) * 2);border-top:var(--border-size-medium) solid transparent;background:var(--color-white)}div.wrapper.isopen ::slotted([slot=\"content\"]){top:0;bottom:0;height:128px;padding:calc(var(--space-unit) * 2);border-color:var(--accent)}";

const ZMyzCardFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** footer opened by default (optional) */
    this.opened = false;
    /** display footer custom slotted content */
    this.customContent = false;
    this.isOpen = false;
    this.allowTooltipAuthors = false;
  }
  handleToggle() {
    this.isOpen = !this.isOpen;
  }
  getTitleAuthors() {
    return this.allowTooltipAuthors ? this.autori : "";
  }
  componentWillLoad() {
    if (this.opened) {
      this.isOpen = true;
    }
  }
  elementsEllipsis() {
    this.allowTooltipAuthors = this.elementAuthorsHasEllipsis() ? true : false;
  }
  elementAuthorsHasEllipsis() {
    return this.ellipsisAuthors.offsetWidth < this.ellipsisAuthors.scrollWidth;
  }
  retrieveClass() {
    return {
      "isopen": this.isOpen,
      "real": this.cardtype === LicenseType.REAL,
      "trial": this.cardtype === LicenseType.TRIAL,
      "temp": this.cardtype === LicenseType.TEMP,
      "custom-content": this.customContent,
    };
  }
  footerTransitionHandler(e) {
    if (["visibility", "height"].includes(e.propertyName)) {
      this.elementsEllipsis();
    }
  }
  render() {
    return (h("div", { class: Object.assign(Object.assign({}, this.retrieveClass()), { wrapper: true }) }, h("footer", { class: this.retrieveClass(), onTransitionEnd: (e) => this.footerTransitionHandler(e) }, h("span", { class: "toggle" }, h("slot", { name: "toggle" })), this.titolo && h("p", { class: { "custom-content": this.customContent } }, this.titolo), h("div", { class: { "content": true, "custom-content": this.customContent } }, h("div", null, h("p", { class: "authors", ref: (el) => (this.ellipsisAuthors = el) }, h("span", { title: this.getTitleAuthors() }, h("span", { class: "bold" }, this.autori))), h("p", { class: "year-isbn" }, h("span", { class: "isbn" }, h("span", null, h("span", { class: "bold" }, this.isbn), " (ed. cartacea)")))), h("div", { class: `slot-handler ${this.isOpen ? "visible" : "hidden"}` }, h("slot", { name: "list" })))), this.customContent && h("slot", { name: "content" })));
  }
};
ZMyzCardFooter.style = stylesCss;

export { ZMyzCardFooter as z_myz_card_footer };

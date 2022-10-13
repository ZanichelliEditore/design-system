'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-745c0423.js');

const stylesCss = "footer{font-family:var(--font-family-sans);font-weight:var(--font-rg);color:var(--color-surface05);background-color:var(--color-surface01);margin:0px;padding:0px;position:relative;z-index:5;height:calc(var(--space-unit) * 6);width:auto;top:0px;transition:height 500ms ease-in-out, top 500ms ease-in-out;border-radius:0px 0px var(--border-radius) var(--border-radius);border-top:var(--border-size-medium) solid var(--color-surface03)}footer.real,footer.trial,footer.temp{border-top:var(--border-size-medium) solid var(--accent)}footer .bold{font-family:var(--font-family-sans);font-weight:var(--font-sb)}footer>p{font-family:var(--font-family-sans);font-weight:var(--font-rg);font-size:16px;line-height:22px;height:40px;margin:0px;padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 2)\n    var(--space-unit) calc(var(--space-unit) * 2);overflow:hidden;background-color:var(--color-surface01);transition:all 200ms linear}footer.isopen>p{font-size:14px;font-weight:var(--font-sb);transition:all 200ms linear;background-color:var(--bg-neutral-200)}footer.isopen.real>p,footer.isopen.trial>p,footer.isopen.temp>p{background-color:var(--accent)}footer .visible{display:block}footer .hidden{display:none}footer>div.content{height:60px;overflow:hidden}footer>div.content>div:not(.slot-handler){padding:var(--space-unit) calc(var(--space-unit) * 2)}footer>div.content>div>p{font-size:14px;height:20px;line-height:20px;margin:0px;padding:0px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}footer>div.content>div>p.year_isbn{padding-top:var(--space-unit);display:flex;flex-direction:row;justify-content:space-between}footer>div.content>div>p.year_isbn>span.isbn{text-overflow:ellipsis;overflow:hidden}footer.isopen>div.content>div:not(.slot-handler){height:68px}footer.isopen>div.content>div>p.authors{height:40px;white-space:initial;text-overflow:initial}footer.isopen>div.content>div>p.year_isbn{flex-direction:column;height:50px;padding-left:0px}footer.isopen>div.content>div>p.year_isbn>span.isbn{display:inline-grid;padding-left:0px}footer.isopen{height:295px;top:-212px;transition:height 500ms ease-in-out, top 500ms ease-in-out}footer.isopen.customContent{top:-292px}footer.isopen>div.content{height:280px;transition:height 500ms ease-in-out, top 500ms ease-in-out}footer.isopen.customContent>div.content{height:230px}.toggle{position:absolute;top:-24px;left:16px;z-index:10}.faded{opacity:0.3;pointer-events:none}footer>p.customContent,footer .content.customContent{display:none}footer.isopen>p.customContent,footer.isopen .content.customContent{display:block}div.wrapper{position:relative;height:100%}div.wrapper ::slotted([slot=\"content\"]){display:block;height:112px;width:100%;padding:0 calc(var(--space-unit) * 2);box-sizing:border-box;border-top:var(--border-size-medium) solid transparent;position:absolute;top:calc(var(--space-unit) * 2);z-index:10;background:var(--color-white)}div.wrapper.isopen ::slotted([slot=\"content\"]){height:128px;padding:calc(var(--space-unit) * 2);border-color:var(--accent);top:0;bottom:0}";

const ZMyzCardFooter = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    if (this.opened)
      this.isOpen = true;
  }
  elementsEllipsis() {
    this.allowTooltipAuthors = this.elementAuthorsHasEllipsis() ? true : false;
  }
  elementAuthorsHasEllipsis() {
    return this.ellipsisAuthors.offsetWidth < this.ellipsisAuthors.scrollWidth;
  }
  retrieveClass() {
    return {
      isopen: this.isOpen,
      real: this.cardtype === index$1.LicenseTypeEnum.real,
      trial: this.cardtype === index$1.LicenseTypeEnum.trial,
      temp: this.cardtype === index$1.LicenseTypeEnum.temp,
      customContent: this.customContent,
    };
  }
  footerTransitionHandler(e) {
    if (["visibility", "height"].includes(e.propertyName)) {
      this.elementsEllipsis();
    }
  }
  render() {
    return (index.h("div", { class: Object.assign(Object.assign({}, this.retrieveClass()), { wrapper: true }) }, index.h("footer", { class: this.retrieveClass(), onTransitionEnd: (e) => this.footerTransitionHandler(e) }, index.h("span", { class: "toggle" }, index.h("slot", { name: "toggle" })), this.titolo && (index.h("p", { class: { customContent: this.customContent } }, this.titolo)), index.h("div", { class: { content: true, customContent: this.customContent } }, index.h("div", null, index.h("p", { class: "authors", ref: (el) => (this.ellipsisAuthors = el) }, index.h("span", { title: this.getTitleAuthors() }, index.h("span", { class: "bold" }, this.autori))), index.h("p", { class: "year_isbn" }, index.h("span", { class: "isbn" }, index.h("span", null, index.h("span", { class: "bold" }, this.isbn), " (ed. cartacea)")))), index.h("div", { class: `slot-handler ${this.isOpen ? "visible" : "hidden"}` }, index.h("slot", { name: "list" })))), this.customContent && index.h("slot", { name: "content" })));
  }
};
ZMyzCardFooter.style = stylesCss;

exports.z_myz_card_footer = ZMyzCardFooter;

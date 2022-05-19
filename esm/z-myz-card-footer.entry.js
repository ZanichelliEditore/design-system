import { r as registerInstance, h } from './index-90e18641.js';
import { L as LicenseTypeEnum } from './index-cda2110a.js';

const stylesCss = "footer{font-family:var(--font-family-sans);font-weight:var(--font-rg);color:var(--color-surface05);background-color:var(--color-surface01);margin:0px;padding:0px;position:relative;z-index:5;height:calc(var(--space-unit) * 6);width:auto;top:0px;transition:height 500ms ease-in-out, top 500ms ease-in-out;border-radius:0px 0px var(--border-radius) var(--border-radius);border-top:var(--border-size-medium) solid var(--color-surface03)}footer.real,footer.trial{border-top:var(--border-size-medium) solid var(--accent)}footer .bold{font-family:var(--font-family-sans);font-weight:var(--font-sb)}footer>p{font-family:var(--font-family-sans);font-weight:var(--font-rg);font-size:16px;line-height:22px;height:40px;margin:0px;padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 2)\n    var(--space-unit) calc(var(--space-unit) * 2);overflow:hidden;background-color:var(--color-surface01);transition:all 200ms linear}footer.isopen>p{font-size:14px;font-weight:var(--font-sb);transition:all 200ms linear;background-color:var(--bg-neutral-200)}footer.isopen.real>p,footer.isopen.trial>p{background-color:var(--accent)}footer .visible{display:block}footer .hidden{display:none}footer>div.content{height:60px;overflow:hidden}footer>div.content>div:not(.slot-handler){padding:var(--space-unit) calc(var(--space-unit) * 2)}footer>div.content>div>p{font-size:14px;height:20px;line-height:20px;margin:0px;padding:0px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}footer>div.content>div>p.year_isbn{padding-top:var(--space-unit);display:flex;flex-direction:row;justify-content:space-between}footer>div.content>div>p.year_isbn>span.isbn{text-overflow:ellipsis;overflow:hidden}footer.isopen>div.content>div:not(.slot-handler){height:68px}footer.isopen>div.content>div>p.authors{height:40px;white-space:initial;text-overflow:initial}footer.isopen>div.content>div>p.year_isbn{flex-direction:column;height:50px;padding-left:0px}footer.isopen>div.content>div>p.year_isbn>span.isbn{display:inline-grid;padding-left:0px}footer.isopen{height:295px;top:-212px;transition:height 500ms ease-in-out, top 500ms ease-in-out}footer.isopen>div.content{height:280px;transition:height 500ms ease-in-out, top 500ms ease-in-out}.toggle{position:absolute;top:-24px;left:16px;z-index:10}.faded{opacity:0.3;pointer-events:none}";

const ZMyzCardFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** footer opened by default (optional) */
    this.opened = false;
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
      real: this.cardtype === LicenseTypeEnum.real,
      trial: this.cardtype === LicenseTypeEnum.trial,
    };
  }
  footerTransitionHandler(e) {
    if (["visibility", "height"].includes(e.propertyName)) {
      this.elementsEllipsis();
    }
  }
  render() {
    return (h("div", { class: this.faded && "faded" }, h("footer", { class: this.retrieveClass(), onTransitionEnd: (e) => this.footerTransitionHandler(e) }, h("span", { class: "toggle" }, h("slot", { name: "toggle" })), this.titolo && h("p", null, this.titolo), h("div", { class: "content" }, h("div", null, h("p", { class: "authors", ref: (el) => (this.ellipsisAuthors = el) }, h("span", { title: this.getTitleAuthors() }, h("span", { class: "bold" }, this.autori))), h("p", { class: "year_isbn" }, h("span", { class: "isbn" }, h("span", null, h("span", { class: "bold" }, this.isbn), " (ed. cartacea)")))), h("div", { class: `slot-handler ${this.isOpen ? "visible" : "hidden"}` }, h("slot", { name: "list" }))))));
  }
};
ZMyzCardFooter.style = stylesCss;

export { ZMyzCardFooter as z_myz_card_footer };

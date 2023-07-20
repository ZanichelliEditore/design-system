import { r as registerInstance, h, g as getElement } from './index-a2ca4b97.js';
import { Y as BookCardVariant } from './index-fd62a73e.js';
import { m as mobileBreakpoint } from './breakpoints-9b81eb1b.js';
import { r as randomId } from './utils-456f447b.js';

const stylesCss = ":host{--z-book-card-ribbon-background-color:var(--avatar-C08);--z-book-card-ribbon-shadow-color:var(--green950);--z-book-card-compact-width:262px;--z-book-card-compact-height:568px}:host>article{display:block;width:100%;max-width:360px;box-sizing:border-box;border:var(--border-size-medium) solid var(--color-surface03);background-color:var(--color-surface01);border-radius:var(--border-radius);font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>article div.cover{position:relative}:host>article div.cover div.img-wrapper{display:flex;overflow:hidden;border:var(--border-size-small) solid var(--color-surface03);line-height:0}:host>article div.cover div.img-wrapper img{width:auto;max-width:100%;height:auto;max-height:100%;align-self:flex-end}:host>article div.cover div.ribbon{position:absolute;z-index:10;top:calc(var(--space-unit) * 2);left:calc(var(--space-unit) * -2);display:flex;max-width:100%;height:calc(var(--space-unit) * 4);box-sizing:border-box;align-items:center;padding:0 calc(var(--space-unit) * 2);border:var(--border-size-medium) solid var(--color-surface01);background:var(--z-book-card-ribbon-background-color);border-radius:0 var(--border-radius) var(--border-radius) 0;box-shadow:var(--shadow-2);color:var(--color-text04);font-size:var(--font-size-2);font-weight:var(--font-sb);line-height:initial}:host>article div.cover div.ribbon span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:nowrap}:host>article div.cover div.ribbon::before{position:absolute;bottom:-12px;left:-2px;width:0;height:0;border-top:10px solid var(--z-book-card-ribbon-shadow-color);border-left:16px solid transparent;content:\"\"}:host>article div.content{margin:var(--space-unit) 0;border-radius:var(--border-radius)}:host>article .title{display:flex;height:100%;align-self:center;color:var(--color-text02);font-size:var(--font-size-4);font-weight:var(--font-sb);line-height:1.5}:host>article .title *{all:unset}:host>article div.subtitle{color:var(--color-text02);font-size:var(--font-size-2);font-weight:var(--font-rg);line-height:1.4}:host>article div.authors{color:var(--color-text02);font-size:var(--font-size-1);font-weight:var(--font-rg);line-height:1.33}:host>article div.isbn{overflow:hidden;color:var(--color-text02);font-size:var(--font-size-2);line-height:1.33;text-overflow:ellipsis;white-space:nowrap;word-wrap:nowrap}:host>article div.isbn>.code{font-weight:var(--font-sb)}:host>article div.tags{display:flex;overflow:hidden;max-height:32px;flex-flow:row wrap;align-content:stretch;align-items:stretch;justify-content:flex-start;gap:calc(var(--space-unit) / 2)}:host>article ::slotted([slot=\"tags\"]){margin-bottom:var(--space-unit)}:host>article ::slotted([slot=\"header-cta\"]){--z-icon-width:20px;--z-icon-height:20px;padding:var(--space-unit);cursor:pointer;fill:var(--color-icon01)}:host>article.expanded{width:100%;min-width:328px;padding:calc(var(--space-unit) * 2);padding-bottom:0}:host>article.expanded div.header{display:flex;flex-flow:row nowrap;align-content:stretch;align-items:top;justify-content:space-between;margin-bottom:var(--space-unit);white-space:nowrap}:host>article.expanded div.cover div.img-wrapper{border-radius:var(--border-radius)}:host>article.expanded div.cover div.img-wrapper img{width:100%}:host>article.expanded .title,:host>article.expanded .subtitle,:host>article.expanded .authors{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:initial}:host>article.expanded div.footer{border-top:var(--border-size-small) solid var(--color-surface03);margin-bottom:calc(var(--space-unit) * 1.5)}:host>article.expanded div.footer.open{padding-top:calc(var(--space-unit) * 1.5)}:host>article.expanded div.footer.open div.resources{display:initial}:host>article.expanded div.footer.close div.resources{display:none}:host>article.expanded button.show-resources{--z-icon-height:16px;--z-icon-width:16px;all:unset;display:flex;width:100%;flex-flow:row nowrap;align-content:center;align-items:center;justify-content:center;padding:calc(var(--space-unit) * 1) 0;color:var(--color-link-primary);cursor:pointer;fill:var(--color-link-primary);font-size:var(--font-size-2);font-weight:var(--font-sb);gap:var(--space-unit)}:host>article.expanded button.show-resources:focus{box-shadow:var(--shadow-focus-primary)}:host>article.search{width:262px;height:536px;padding:calc(var(--space-unit) * 2);padding-bottom:0}:host>article.search .wrapper-container{display:flex;height:100%;flex-direction:column;justify-content:space-between}:host>article.search .wrapper-container .wrapper{height:451px}:host>article.search .wrapper-container .action-container{padding-bottom:calc(var(--space-unit) * 2);margin:auto;margin-bottom:0}:host>article.search div.header{display:flex;height:24px;flex-flow:row nowrap;align-content:stretch;align-items:center;justify-content:space-between;margin-bottom:calc(var(--space-unit) * 1.5);white-space:nowrap}:host>article.search div.cover div.img-wrapper{height:314px;border-radius:var(--border-radius)}:host>article.search .title{display:block;height:initial;align-self:unset;font-size:var(--font-size-3)}:host>article.search .title,:host>article.search .subtitle,:host>article.search .authors{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host>article.compact{width:var(--z-book-card-compact-width);height:var(--z-book-card-compact-height)}:host>article.compact.borderless{border:none}:host>article.compact div.cover div.img-wrapper{width:100%;height:calc(var(--z-book-card-compact-width) * 1.36);box-sizing:border-box;border:none;background:var(--color-white);border-radius:var(--border-radius) var(--border-radius) 0 0;box-shadow:var(--shadow-2)}:host>article.compact div.wrapper{display:flex;height:100%;flex-flow:column nowrap;align-content:stretch;align-items:stretch;justify-content:flex-start}:host>article.compact div.content{display:flex;box-sizing:border-box;flex-flow:column nowrap;align-content:stretch;align-items:stretch;justify-content:space-between;padding:calc(var(--space-unit) * 2);padding-top:var(--space-unit);margin:0}:host>article.compact div.action-container{padding:calc(var(--space-unit) * 2);padding-top:0;margin-top:auto}:host>article.compact.borderless div.cover div.img-wrapper{width:var(--z-book-card-compact-width)}:host>article.compact.borderless div.content{padding:0;padding-top:var(--space-unit)}:host>article.compact.borderless div.action-container{padding:0;padding-bottom:calc(var(--space-unit) * 2)}:host>article.compact .title{display:block;height:initial;align-self:unset}:host>article.compact .title,:host>article.compact .subtitle,:host>article.compact .authors{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:initial}@media (min-width: 768px){:host>article{width:100%;max-width:initial}:host>article .title{display:block;height:initial;align-self:unset}:host>article.expanded{width:100%;min-width:initial;max-width:initial;height:360px;padding:0;border:0}:host>article.expanded div.wrapper{display:flex;flex-flow:row nowrap;align-content:stretch;align-items:stretch;justify-content:flex-start}:host>article.expanded div.cover div.img-wrapper{width:262px;height:356px;border:0;border:var(--border-size-medium) solid var(--color-surface03);border-right:none;background:var(--color-surface01);border-radius:var(--border-radius) 0 0 var(--border-radius)}:host>article.expanded div.cover div.img-wrapper img{width:auto;border-radius:0}:host>article.expanded div.content{display:flex;overflow:hidden;width:100%;height:356px;flex-flow:column nowrap;align-content:stretch;align-items:stretch;justify-content:space-between;border:var(--border-size-medium) solid var(--color-surface03);border-left:none;margin:0;background:var(--color-surface01);border-radius:0 var(--border-radius) var(--border-radius) 0}:host>article.expanded div.content div.top{padding:calc(var(--space-unit) * 2);padding-bottom:0}:host>article.expanded div.content div.top div.info{display:flex;flex-flow:row nowrap;align-content:stretch;align-items:stretch;justify-content:space-between;margin-bottom:calc(var(--space-unit) / 2)}:host>article.expanded div.content div.top div.info>div.left{width:100%}:host>article.expanded div.content div.bottom{padding:calc(var(--space-unit) * 2);padding-bottom:0}}@media (min-width: 1152px){:host>article{width:fit-content;max-width:initial}}@media (min-width: 1366px){:host>article.expanded{width:635px}:host>article.expanded div.content{width:369px}}";

const ZBookCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isMobile = false;
    this.hasResources = false;
    this.showResources = false;
  }
  componentWillLoad() {
    this.id = `id-${randomId()}`;
    const mobileMediaQuery = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`);
    this.isMobile = mobileMediaQuery.matches;
    mobileMediaQuery.onchange = (mql) => (this.isMobile = mql.matches);
  }
  componentDidLoad() {
    this.handleResources();
  }
  handleResources() {
    var _a;
    if (this.variant !== BookCardVariant.EXPANDED || !this.isMobile) {
      return;
    }
    this.hasResources = ((_a = this.hostElement.querySelectorAll("[slot=resources]")) === null || _a === void 0 ? void 0 : _a.length) > 0;
  }
  toggleResources() {
    this.showResources = !this.showResources;
  }
  renderCard() {
    switch (this.variant) {
      case BookCardVariant.EXPANDED:
        return this.isMobile ? this.renderMobileExpandedCard() : this.renderExpandedCard();
      case BookCardVariant.COMPACT:
        return this.renderCompactCard();
      case BookCardVariant.SEARCH:
        return this.renderSearchCard();
    }
  }
  renderExpandedCard() {
    return (h("div", { class: "wrapper" }, this.renderCover(), h("div", { class: "content" }, h("div", { class: "top" }, h("div", { class: "info" }, h("div", { class: "left" }, this.renderAuthors(), this.renderOperaTitle(), this.renderVolumeTitle(), this.renderIsbn()), h("div", { class: "right" }, this.renderHeaderCtaSlot())), this.renderTagsSlot()), h("div", { class: "bottom" }, this.renderResourcesSlot()))));
  }
  renderMobileExpandedCard() {
    return (h("div", { class: "wrapper" }, h("div", { class: "header" }, this.renderOperaTitle(), this.renderHeaderCtaSlot()), this.renderCover(), h("div", { class: "content" }, this.renderTagsSlot(), this.renderAuthors(), this.renderVolumeTitle(), this.renderIsbn()), this.hasResources && (h("div", { class: {
        footer: true,
        open: this.showResources,
        close: !this.showResources,
      } }, !this.showResources && this.renderShowResources(), this.renderResourcesSlot(), this.showResources && this.renderShowResources()))));
  }
  renderSearchCard() {
    return (h("div", { class: "wrapper-container" }, h("div", { class: "wrapper" }, h("div", { class: "header" }, this.renderOperaTitle(), this.renderHeaderCtaSlot()), this.renderCover(), h("div", { class: "content" }, this.renderTagsSlot(), this.renderAuthors(), this.renderVolumeTitle(), this.renderIsbn())), this.renderFooterCtaSlot()));
  }
  renderCompactCard() {
    return (h("div", { class: "wrapper" }, this.renderCover(), h("div", { class: "content" }, this.renderAuthors(), this.renderOperaTitle(), this.renderVolumeTitle(), this.renderIsbn()), this.renderFooterCtaSlot()));
  }
  renderCover() {
    return (h("div", { class: "cover" }, this.ribbon && this.variant !== BookCardVariant.COMPACT && (h("div", { class: "ribbon" }, h("span", null, this.ribbon))), h("div", { class: "img-wrapper" }, h("img", { src: this.cover, onError: () => {
        if (this.fallbackCover) {
          this.cover = this.fallbackCover;
        }
      }, "aria-hidden": "true" }))));
  }
  renderOperaTitle() {
    const title = this.operaTitleTag
      ? `<${this.operaTitleTag}>${this.operaTitle}</${this.operaTitleTag}>`
      : this.operaTitle;
    return (h("div", { class: "title", innerHTML: title }));
  }
  renderVolumeTitle() {
    return this.volumeTitle ? h("div", { class: "subtitle" }, this.volumeTitle) : null;
  }
  renderAuthors() {
    return this.authors ? (h("div", { class: "authors", "aria-description": "Autori" }, this.authors)) : null;
  }
  renderIsbn() {
    return this.isbn ? (h("div", { class: "isbn" }, h("span", { class: "code", "aria-description": "ISBN edizione cartacea" }, this.isbn), h("span", { class: "label" }, " (ed. cartacea)"))) : null;
  }
  renderShowResources() {
    return (h("button", { class: "show-resources", "aria-label": `Risorse del libro ${this.operaTitle}`, "aria-expanded": this.showResources.toString(), "aria-controls": `resources-${this.id}`, onClick: () => this.toggleResources() }, this.showResources ? "Chiudi" : "Vedi tutto", h("z-icon", { name: this.showResources ? "chevron-up" : "chevron-down" })));
  }
  renderTagsSlot() {
    return (h("div", { class: "tags" }, h("slot", { name: "tags" })));
  }
  renderHeaderCtaSlot() {
    return h("slot", { name: "header-cta" });
  }
  renderResourcesSlot() {
    return (h("div", { id: `resources-${this.id}`, class: "resources" }, h("slot", { name: "resources", onSlotchange: () => this.handleResources() })));
  }
  renderFooterCtaSlot() {
    return (h("div", { class: "action-container" }, h("slot", { name: "footer-cta" })));
  }
  render() {
    return (h("article", { class: {
        [this.variant]: true,
        borderless: !!this.borderless,
      } }, this.renderCard()));
  }
  get hostElement() { return getElement(this); }
};
ZBookCard.style = stylesCss;

export { ZBookCard as z_book_card };

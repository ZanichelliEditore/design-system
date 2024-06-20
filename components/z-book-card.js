import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { Y as BookCardVariant } from './index2.js';
import { m as mobileBreakpoint } from './breakpoints.js';
import { r as randomId } from './utils.js';
import { d as defineCustomElement$2 } from './index9.js';

const stylesCss = ":host{--z-book-card-ribbon-background-color:var(--avatar-C08);--z-book-card-ribbon-shadow-color:var(--green950);--z-book-card-compact-width:262px;--z-book-card-compact-height:568px}:host>article{display:block;width:100%;max-width:360px;-webkit-box-sizing:border-box;box-sizing:border-box;border:var(--border-size-medium) solid var(--color-surface03);background-color:var(--color-surface01);border-radius:var(--border-radius);font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>article div.cover{position:relative}:host>article div.cover div.img-wrapper{display:-ms-flexbox;display:flex;overflow:hidden;border:var(--border-size-small) solid var(--color-surface03);line-height:0}:host>article div.cover div.img-wrapper img{width:auto;max-width:100%;height:auto;max-height:100%;-ms-flex-item-align:end;align-self:flex-end}:host>article div.cover .ribbon{position:absolute;z-index:10;top:calc(var(--space-unit) * 2);left:calc(var(--space-unit) * -2);display:-ms-flexbox;display:flex;max-width:100%;height:calc(var(--space-unit) * 4);-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;padding:0 calc(var(--space-unit) * 2);border:var(--border-size-medium) solid var(--color-surface01);background:var(--z-book-card-ribbon-background-color);border-radius:0 var(--border-radius) var(--border-radius) 0;-webkit-box-shadow:var(--shadow-2);box-shadow:var(--shadow-2);color:var(--color-text-inverse);font-family:var(--font-family-sans);font-size:var(--font-size-2);font-weight:var(--font-sb);line-height:initial}:host>article div.cover .ribbon.interactive:hover{cursor:pointer}:host>article div.cover .ribbon span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:nowrap}:host>article div.cover .ribbon::before{position:absolute;bottom:-12px;left:-2px;width:0;height:0;border-top:10px solid var(--z-book-card-ribbon-shadow-color);border-left:16px solid transparent;content:\"\"}:host>article div.cover .ribbon z-icon{margin-right:var(--space-unit)}:host>article div.content{margin:var(--space-unit) 0;border-radius:var(--border-radius)}:host>article .title{display:-ms-flexbox;display:flex;height:100%;-ms-flex-item-align:center;align-self:center;color:var(--color-default-text);font-size:var(--font-size-4);font-weight:var(--font-sb);line-height:1.5}:host>article .title *{all:unset}:host>article div.subtitle{color:var(--color-default-text);font-size:var(--font-size-2);font-weight:var(--font-rg);line-height:1.4}:host>article div.authors{color:var(--color-default-text);font-size:var(--font-size-1);font-weight:var(--font-rg);line-height:1.33}:host>article div.isbn{overflow:hidden;color:var(--color-default-text);font-size:var(--font-size-2);line-height:1.33;text-overflow:ellipsis;white-space:nowrap;word-wrap:nowrap}:host>article div.isbn>.code{font-weight:var(--font-sb)}:host>article div.tags{display:-ms-flexbox;display:flex;overflow:hidden;max-height:32px;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:start;justify-content:flex-start;gap:calc(var(--space-unit) / 2)}:host>article ::slotted([slot=\"tags\"]){margin-bottom:var(--space-unit)}:host>article ::slotted([slot=\"header-cta\"]){--z-icon-width:20px;--z-icon-height:20px;padding:var(--space-unit);cursor:pointer;fill:var(--color-primary01-icon)}:host>article.expanded{width:100%;min-width:328px;padding:calc(var(--space-unit) * 2);padding-bottom:0}:host>article.expanded div.header{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:top;align-items:top;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:var(--space-unit);white-space:nowrap}:host>article.expanded div.cover div.img-wrapper{border-radius:var(--border-radius)}:host>article.expanded div.cover div.img-wrapper img{width:100%}:host>article.expanded .title,:host>article.expanded .subtitle,:host>article.expanded .authors{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:initial}:host>article.expanded div.footer{border-top:var(--border-size-small) solid var(--color-surface03);margin-bottom:calc(var(--space-unit) * 1.5)}:host>article.expanded div.footer.open{padding-top:calc(var(--space-unit) * 1.5)}:host>article.expanded div.footer.open div.resources{display:initial}:host>article.expanded div.footer.close div.resources{display:none}:host>article.expanded button.show-resources{--z-icon-height:16px;--z-icon-width:16px;all:unset;display:-ms-flexbox;display:flex;width:100%;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-line-pack:center;align-content:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:calc(var(--space-unit) * 1) 0;color:var(--color-link-primary);cursor:pointer;fill:var(--color-link-primary);font-size:var(--font-size-2);font-weight:var(--font-sb);gap:var(--space-unit)}:host>article.expanded button.show-resources:focus{-webkit-box-shadow:var(--shadow-focus-primary);box-shadow:var(--shadow-focus-primary)}:host>article.search{width:262px;height:616px;padding:calc(var(--space-unit) * 2);padding-bottom:0}:host>article.search .wrapper-container{display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between}:host>article.search .wrapper-container .wrapper{height:451px}:host>article.search .wrapper-container .action-container{padding-bottom:calc(var(--space-unit) * 2)}:host>article.search div.header{display:-ms-flexbox;display:flex;height:24px;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:calc(var(--space-unit) * 1.5);white-space:nowrap}:host>article.search div.cover div.img-wrapper{height:314px;border-radius:var(--border-radius)}:host>article.search .title{display:block;height:initial;-ms-flex-item-align:unset;align-self:unset;font-size:var(--font-size-3)}:host>article.search .title,:host>article.search .subtitle,:host>article.search .authors{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host>article.compact{width:var(--z-book-card-compact-width);height:var(--z-book-card-compact-height)}:host>article.compact.borderless{border:none}:host>article.compact div.cover div.img-wrapper{width:100%;height:calc(var(--z-book-card-compact-width) * 1.36);-webkit-box-sizing:border-box;box-sizing:border-box;border:none;background:var(--color-white);border-radius:var(--border-radius) var(--border-radius) 0 0;-webkit-box-shadow:var(--shadow-2);box-shadow:var(--shadow-2)}:host>article.compact div.wrapper{display:-ms-flexbox;display:flex;height:100%;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:start;justify-content:flex-start}:host>article.compact div.content{display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:justify;justify-content:space-between;padding:calc(var(--space-unit) * 2);padding-top:var(--space-unit);margin:0}:host>article.compact div.action-container{padding:calc(var(--space-unit) * 2);padding-top:0;margin-top:auto}:host>article.compact.borderless div.cover div.img-wrapper{width:var(--z-book-card-compact-width)}:host>article.compact.borderless div.content{padding:0;padding-top:var(--space-unit)}:host>article.compact.borderless div.action-container{padding:0;padding-bottom:calc(var(--space-unit) * 2)}:host>article.compact .title{display:block;height:initial;-ms-flex-item-align:unset;align-self:unset}:host>article.compact .title,:host>article.compact .subtitle,:host>article.compact .authors{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:initial}@media (min-width: 768px){:host>article{width:100%;max-width:initial}:host>article .title{display:block;height:initial;-ms-flex-item-align:unset;align-self:unset}:host>article.expanded{width:100%;min-width:initial;max-width:initial;height:360px;padding:0;border:0}:host>article.expanded div.wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:start;justify-content:flex-start}:host>article.expanded div.cover div.img-wrapper{width:262px;height:356px;border:0;border:var(--border-size-medium) solid var(--color-surface03);border-right:none;background:var(--color-surface01);border-radius:var(--border-radius) 0 0 var(--border-radius)}:host>article.expanded div.cover div.img-wrapper img{width:auto;border-radius:0}:host>article.expanded div.content{display:-ms-flexbox;display:flex;overflow:hidden;width:100%;height:356px;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:justify;justify-content:space-between;border:var(--border-size-medium) solid var(--color-surface03);border-left:none;margin:0;background:var(--color-surface01);border-radius:0 var(--border-radius) var(--border-radius) 0}:host>article.expanded div.content div.top{padding:calc(var(--space-unit) * 2);padding-bottom:0}:host>article.expanded div.content div.top div.info{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:calc(var(--space-unit) / 2)}:host>article.expanded div.content div.top div.info>div.left{width:100%}:host>article.expanded div.content div.bottom{padding:calc(var(--space-unit) * 2);padding-bottom:0}}@media (min-width: 1152px){:host>article{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;max-width:initial}}@media (min-width: 1366px){:host>article.expanded{width:635px}:host>article.expanded div.content{width:369px}}";
const ZBookCardStyle0 = stylesCss;

const ZBookCard$1 = /*@__PURE__*/ proxyCustomElement(class ZBookCard extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.ribbonClick = createEvent(this, "ribbonClick", 7);
        this.variant = undefined;
        this.cover = undefined;
        this.operaTitle = undefined;
        this.volumeTitle = undefined;
        this.authors = undefined;
        this.isbn = undefined;
        this.isbnLabel = "";
        this.ribbon = undefined;
        this.ribbonIcon = undefined;
        this.ribbonInteractive = undefined;
        this.borderless = undefined;
        this.fallbackCover = undefined;
        this.operaTitleTag = undefined;
        this.isMobile = false;
        this.hasResources = false;
        this.showResources = false;
    }
    emitRibbonClick() {
        this.ribbonClick.emit();
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
        return (h("div", { class: "cover" }, this.ribbon && this.variant !== BookCardVariant.COMPACT && this.renderRibbon(), h("div", { class: "img-wrapper" }, h("img", { src: this.cover, onError: () => {
                if (this.fallbackCover) {
                    this.cover = this.fallbackCover;
                }
            }, "aria-hidden": "true" }))));
    }
    renderRibbon() {
        const content = [
            this.ribbonIcon && (h("z-icon", { name: this.ribbonIcon, width: 16, height: 16, fill: "color-inverse-icon" })),
            h("span", null, this.ribbon),
        ];
        return this.ribbonInteractive ? (h("button", { class: "ribbon interactive", onClick: () => this.emitRibbonClick() }, content)) : (h("div", { class: "ribbon" }, content));
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
        return this.isbn ? (h("div", { class: "isbn" }, h("span", { class: "code", "aria-description": `ISBN ${this.isbnLabel}` }, this.isbn), this.isbnLabel ? h("span", { class: "label" }, " ", this.isbnLabel) : null)) : null;
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
        return (h("article", { key: '93b847b7f5067c69880ea8ba283a207c8b691a2a', class: {
                [this.variant]: true,
                borderless: !!this.borderless,
            } }, this.renderCard()));
    }
    get hostElement() { return this; }
    static get style() { return ZBookCardStyle0; }
}, [1, "z-book-card", {
        "variant": [1],
        "cover": [1],
        "operaTitle": [1, "opera-title"],
        "volumeTitle": [1, "volume-title"],
        "authors": [1],
        "isbn": [1],
        "isbnLabel": [1, "isbn-label"],
        "ribbon": [1],
        "ribbonIcon": [1, "ribbon-icon"],
        "ribbonInteractive": [4, "ribbon-interactive"],
        "borderless": [4],
        "fallbackCover": [1, "fallback-cover"],
        "operaTitleTag": [1, "opera-title-tag"],
        "isMobile": [32],
        "hasResources": [32],
        "showResources": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-book-card", "z-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "z-book-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZBookCard$1);
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const ZBookCard = ZBookCard$1;
const defineCustomElement = defineCustomElement$1;

export { ZBookCard, defineCustomElement };

//# sourceMappingURL=z-book-card.js.map
import { r as registerInstance, h, H as Host, d as getElement } from './index-DafJ7_Il.js';

const stylesCss = () => `:host,*{box-sizing:border-box}:host{display:flex;overflow:hidden;min-width:0;min-height:11.125rem;padding:var(--space-unit);border:var(--border-size-medium) solid var(--color-surface02);background-color:var(--color-surface01);border-radius:var(--border-size-large);cursor:pointer;font-family:var(--font-family-sans);gap:calc(var(--space-unit) * 2)}z-book-cover{--z-book-cover-stack-shift-x:6px;--z-book-cover-stack-shift-y:8px;--z-book-cover-height:158px;--z-book-cover-border-radius:0}.info-container{display:flex;overflow:hidden;min-width:0;flex:1;flex-direction:column}.authors-label{overflow:hidden;color:var(--color-default-text);font-size:var(--font-size-2);font-weight:var(--font-rg);text-overflow:ellipsis;white-space:nowrap}.card-title{display:-webkit-box;overflow:hidden;margin:0;-webkit-box-orient:vertical;font-size:var(--font-size-3);font-weight:var(--font-bd);-webkit-line-clamp:2;line-clamp:2;line-height:1.5;word-break:break-word}.card-subtitle{overflow:hidden;color:var(--color-default-text);line-height:1.4;text-overflow:ellipsis;white-space:nowrap}.tags-container{display:flex;max-width:100%;flex-wrap:wrap;margin-top:calc(var(--space-unit) * 2);gap:var(--space-unit)}.volumes-label{display:flex;flex-grow:1;align-items:end;color:var(--color-default-text);font-size:var(--font-size-1)}:host(.info-card){height:5rem;gap:calc(var(--space-unit) * 1.5)}:host(.info-card) .info-icon-container{display:flex;align-items:center;align-self:flex-start;justify-content:center;padding:var(--space-unit);margin-bottom:calc(var(--space-unit) * 3);background-color:var(--gray50);border-radius:var(--border-size-large)}:host(.info-card) .info-icon{--z-icon-width:1.125rem;--z-icon-height:1.125rem;fill:var(--color-default-icon)}:host(.info-card) .card-title{display:-webkit-box;overflow:hidden;min-width:0;max-width:100%;max-height:2.4em;margin-top:0;margin-bottom:calc(var(--space-unit) / 2);-webkit-box-orient:vertical;font-size:var(--font-size-3);font-weight:var(--font-bd);-webkit-line-clamp:1;line-clamp:1;line-height:1.2;word-break:break-word}:host(.info-card) .card-subtitle{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2;line-height:1.2;white-space:normal;word-break:break-word}@media (max-width: 767px){.card-title{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2;line-height:1.4;word-break:break-word}}`;

const ZResultCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Whether to show a stack of covers to represent multiple books. */
        this.hasMultipleCovers = false;
        /** Enables the "info" variant of the card. */
        this.isInfoCard = false;
        this.resizeHandler = () => {
            this.setTooltipTitle(this.authorsRef);
            this.setTooltipTitle(this.titleRef);
            this.setTooltipTitle(this.subtitleRef);
        };
        this.renderTitle = () => {
            const TitleTag = this.titleHtmlTag || "div";
            return (h(TitleTag, { class: "card-title", ref: (el) => (this.titleRef = el) }, this.cardTitle));
        };
        this.renderSubtitle = () => {
            return (h("span", { class: "card-subtitle", ref: (el) => (this.subtitleRef = el) }, this.cardSubtitle));
        };
        this.renderOperaCard = () => {
            return (h(Host, null, h("z-book-cover", { cover: this.cover, coverAlt: this.coverAlt, fallbackCover: this.fallbackCover, multiple: this.hasMultipleCovers, bordered: true }), h("div", { class: "info-container" }, this.authors && (h("span", { class: "authors-label", ref: (el) => (this.authorsRef = el) }, this.authors)), this.renderTitle(), this.renderSubtitle(), h("div", { class: "tags-container" }, h("slot", { name: "tags" })), h("div", { class: "volumes-label" }, h("slot", { name: "volumes" })))));
        };
        this.renderInfoCard = () => {
            return (h(Host, { class: "info-card" }, h("div", { class: "info-icon-container" }, h("z-icon", { class: "info-icon", name: "link" })), h("div", { class: "info-container" }, this.renderTitle(), this.renderSubtitle())));
        };
    }
    setTooltipTitle(el) {
        if (!el) {
            return;
        }
        // Check if element uses line-clamp
        const style = window.getComputedStyle(el);
        const hasLineClamp = style.getPropertyValue("-webkit-line-clamp") !== "none";
        let isTruncated;
        if (hasLineClamp) {
            // For elements with line-clamp, check if content height exceeds line-clamp height
            const lineHeight = parseInt(style.lineHeight);
            const maxLines = parseInt(style.getPropertyValue("-webkit-line-clamp"));
            const maxHeight = lineHeight * maxLines;
            isTruncated = el.scrollHeight > maxHeight;
        }
        else {
            // Original check for elements without line-clamp
            isTruncated = el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight;
        }
        if (isTruncated) {
            el.setAttribute("title", el.textContent.trim());
        }
        else {
            el.removeAttribute("title");
        }
    }
    componentDidRender() {
        this.setTooltipTitle(this.authorsRef);
        this.setTooltipTitle(this.titleRef);
        this.setTooltipTitle(this.subtitleRef);
    }
    componentDidLoad() {
        window.addEventListener("resize", this.resizeHandler);
    }
    disconnectedCallback() {
        window.removeEventListener("resize", this.resizeHandler);
    }
    render() {
        return this.isInfoCard ? this.renderInfoCard() : this.renderOperaCard();
    }
    get hostElement() { return getElement(this); }
};
ZResultCard.style = stylesCss();

export { ZResultCard as z_result_card };

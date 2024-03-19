import { r as registerInstance, c as createEvent, h, a as Host, g as getElement } from './index-f16bc2ca.js';
import { I as InputType } from './index-2255c6c8.js';

const stylesCss = "z-pagination{--z-pagination--page-button-width:64px;--z-pagination--pages-container-max-width:100%;display:flex;max-width:100%;flex-flow:column wrap;font-family:var(--font-family-sans);font-weight:var(--font-rg);gap:calc(var(--space-unit) * 2) calc(var(--space-unit) * 4)}z-pagination,z-pagination *{box-sizing:border-box}z-pagination button{height:100%}z-pagination z-icon{fill:var(--color-icon01)}z-pagination *:disabled z-icon{fill:var(--color-disabled02)}z-pagination .page-label{margin-right:calc(var(--space-unit) * 3);color:var(--color-text02)}z-pagination .pagination-bar{display:flex;max-width:100%;height:48px;align-items:center}z-pagination .pagination-bar button{display:flex;align-items:center;justify-content:center;border:none;margin:0;background-color:var(--color-surface03);color:var(--color-primary01);cursor:pointer;font-family:inherit;font-weight:inherit;transition:background-color 0.15s ease-out, color 0.15s ease-out, border-bottom-color 0.15s ease-out,\n    font-size 0.15s ease-in-out, font-weight 0.15s ease-in-out}z-pagination .pagination-bar button:focus-visible{background-color:var(--color-hover-surface);box-shadow:inset var(--shadow-focus-primary);outline:none}z-pagination .pagination-bar .pagination-button{padding:calc(var(--space-unit) * 2);font-weight:var(--font-sb);text-transform:uppercase;white-space:nowrap}z-pagination .pagination-bar .navigation-button{padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 1.5)}z-pagination .pagination-bar .pagination-button:disabled,z-pagination .pagination-bar .navigation-button:disabled{background-color:var(--color-disabled01);color:var(--color-disabled02);cursor:default;pointer-events:none}z-pagination .pagination-bar .page-button,z-pagination .pagination-bar .ellipsis-button{width:var(--z-pagination--page-button-width)}z-pagination .pages-container{position:relative;display:inline-flex;max-width:100%;height:100%;overflow-x:auto;scroll-behavior:smooth;scroll-snap-align:center;scrollbar-width:none}z-pagination .pages-container::-webkit-scrollbar{display:none}z-pagination .pages-chunk{display:flex;scroll-snap-align:center}z-pagination .pagination-bar .page-button{padding-top:var(--border-size-large) solid transparent;border-bottom:var(--border-size-large) solid transparent;font-size:var(--font-size-2);font-weight:var(--font-sb)}z-pagination .pagination-bar .page-button:focus-visible{border-bottom-color:var(--color-hover-light)}z-pagination .pagination-bar .page-button[data-current]{border-bottom-color:var(--color-primary01);font-size:var(--font-size-7)}z-pagination .go-to-page{display:flex;flex-direction:column;row-gap:var(--space-unit)}z-pagination .go-to-page .label{color:var(--color-text02);text-transform:uppercase}z-pagination .go-to-page .inputs{display:flex;column-gap:var(--space-unit)}z-pagination .go-to-page .inputs z-input{width:calc(var(--space-unit) * 11)}z-pagination .go-to-page .inputs z-input input,z-pagination .mobile-go-to-page z-input input{padding:0 calc(var(--space-unit) * 1.5) !important;appearance:none}z-pagination .mobile-go-to-page{display:flex;height:100%;flex:1 auto;align-items:center;justify-content:center;background-color:var(--color-surface03)}z-pagination .mobile-go-to-page z-input{width:var(--z-pagination--page-button-width);margin-right:var(--space-unit)}z-pagination .mobile-go-to-page z-input input{text-align:center}z-pagination .mobile-go-to-page z-input input::-webkit-outer-spin-button,z-pagination .mobile-go-to-page z-input input::-webkit-inner-spin-button{appearance:none}z-pagination .mobile-go-to-page>span{font-size:var(--font-size-2)}@media (hover: hover){z-pagination .pagination-bar button:hover{background-color:var(--color-hover-surface)}z-pagination .pagination-bar .page-button:hover{border-bottom-color:var(--color-hover-light)}}@media (min-width: 768px){z-pagination{--z-pagination--page-button-width:88px;flex-direction:row;align-items:flex-end}z-pagination .pages-container{max-width:var(--z-pagination--pages-container-max-width)}}";
const ZPaginationStyle0 = stylesCss;

const ZPagination = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.pageChanged = createEvent(this, "pageChanged", 7);
        this.label = undefined;
        this.navArrows = true;
        this.totalPages = undefined;
        this.skip = 0;
        this.edges = false;
        this.split = undefined;
        this.visiblePages = undefined;
        this.currentPage = 1;
        this.goToPage = undefined;
        this._visiblePages = this.visiblePages;
        this.isMobile = false;
        this.goToPageValue = null;
    }
    /**
     * Set the max width of the pages container.
     */
    setPagesContainerWidth() {
        if (!this._visiblePages || this.split) {
            this.host.style.setProperty("--z-pagination--pages-container-max-width", "100%");
            return;
        }
        const pagesContainerStyle = window.getComputedStyle(this.host);
        const pageButtonWidth = pagesContainerStyle.getPropertyValue("--z-pagination--page-button-width");
        this.host.style.setProperty("--z-pagination--pages-container-max-width", `calc(${pageButtonWidth} * ${this._visiblePages})`);
    }
    /**
     * Set visible pages.
     * Ensure that the visible pages are always <= the total pages.
     * If `visiblePages` isn't set, fallback to the total pages.
     */
    setVisiblePages() {
        this._visiblePages = Math.min(this.visiblePages || this.totalPages, this.totalPages);
    }
    /**
     * On page changed.
     * @emits pageChanged
     */
    onPageChanged() {
        this.pageChanged.emit(this.currentPage);
        this.scrollToPage();
    }
    /**
     * On split changed.
     * Empty `edges` value. The split feature wins over the pages chunks and edges.
     */
    onSplitChanged() {
        if (this.split) {
            this.edges = false;
        }
    }
    /**
     * Hide stuff on mobile.
     */
    onResize() {
        this.setMobile();
    }
    /**
     * Set functionalities according to screen size.
     */
    setMobile() {
        const mobileMediaQuery = "screen and (max-width: 767px)";
        this.isMobile = window.matchMedia(mobileMediaQuery).matches;
    }
    /**
     * Get a list of pages chunks, each of `visiblePages` length.
     * @returns {number[][]}
     */
    getPagesChunks() {
        // array of numbers from 1 to `totalPages`
        const pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
        const chunks = [];
        const chunksCount = Math.ceil(pages.length / this._visiblePages);
        for (let index = 0; index < chunksCount; index++) {
            chunks.push(pages.slice(index * this._visiblePages, (index + 1) * this._visiblePages));
        }
        return chunks;
    }
    /**
     * Scroll to the left the chunk of pages containing the current page.
     */
    scrollToPage() {
        const pageBtn = this.host.querySelector(`[data-page="${this.currentPage}"]`);
        if (!pageBtn) {
            return;
        }
        pageBtn.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
    }
    /**
     * Select a page.
     * Do validations on the passed value before assigning it to `currentPage`.
     * @param {number} page Page number to set
     */
    selectPage(page) {
        this.currentPage = Math.min(Math.max(page, 1), this.totalPages);
    }
    /**
     * Render page number button.
     * @param {number} page Page number to render
     * @returns {HTMLButtonElement}
     */
    renderPage(page) {
        return (h("button", { class: "page-button", type: "button", "aria-current": this.currentPage === page ? "page" : "false", title: `Vai alla pagina ${page}`, "data-page": page, "data-current": this.currentPage === page, onClick: () => this.selectPage(page) }, page));
    }
    /**
     * Render split button.
     * @param {number} page Page to select on click.
     * @returns {HTMLButtonElement}
     */
    renderEllipsisButton(page) {
        return (h("button", { class: "ellipsis-button", type: "button", title: `Vai alla pagina ${page}`, onClick: () => this.selectPage(page) }, "\u2026"));
    }
    /**
     * Render chunked page buttons.
     * @returns {HTMLDivElement[]}
     */
    renderPages() {
        const pagesChunks = this.getPagesChunks();
        if (pagesChunks.length <= 0) {
            return;
        }
        return pagesChunks.map((chunk) => h("div", { class: "pages-chunk" }, chunk.map((page) => this.renderPage(page))));
    }
    /**
     * Render page buttons when split feature is enabled.
     * @returns {HTMLButtonElement[]}
     */
    renderSplitPages() {
        // left and right split pages, current page, first and last page, left and right ellipsis button
        if (this.totalPages <= this.split * 2 + 5) {
            // Too few pages: ellipsis will never be rendered, so let's just render all pages and that's it.
            return Array.from({ length: this.totalPages }, (_, i) => this.renderPage(i + 1));
        }
        if (this.currentPage <= this.split * 2 + 2) {
            // Render first (2 * split + 3) pages, ellipsis, then last page.
            return [
                ...Array.from({ length: this.split * 2 + 3 }, (_, i) => this.renderPage(i + 1)),
                this.renderEllipsisButton(this.split * 2 + 4),
                this.renderPage(this.totalPages),
            ];
        }
        if (this.currentPage > this.split * 2 + 2 && this.currentPage < this.totalPages - this.split * 2 - 1) {
            // Render first page, ellipsis, current page surrounded by (split) pages both before and after, another ellipsis, then last page.
            return [
                this.renderPage(1),
                this.renderEllipsisButton(this.currentPage - this.split - 1),
                ...Array.from({ length: this.split * 2 + 1 }, (_, i) => this.renderPage(this.currentPage - this.split + i)),
                this.renderEllipsisButton(this.currentPage + this.split + 1),
                this.renderPage(this.totalPages),
            ];
        }
        // Render first page, ellipsis, then last (2 * split + 3) pages.
        return [
            this.renderPage(1),
            this.renderEllipsisButton(this.totalPages - this.split * 2 - 3),
            ...Array.from({ length: this.split * 2 + 3 }, (_, i) => this.renderPage(this.totalPages - this.split * 2 - 2 + i)),
        ];
    }
    renderBackButton() {
        return (h("button", { class: "navigation-button", type: "button", title: "Vai alla pagina precedente", disabled: this.currentPage === 1, onClick: () => this.selectPage(this.currentPage - 1) }, h("z-icon", { name: "chevron-left" })));
    }
    renderForwardButton() {
        return (h("button", { class: "navigation-button", type: "button", title: "Vai alla prossima pagina", disabled: this.currentPage === this.totalPages, onClick: () => this.selectPage(this.currentPage + 1) }, h("z-icon", { name: "chevron-right" })));
    }
    renderMobile() {
        const pagesChunks = this.getPagesChunks();
        return [
            this.label && h("span", { class: "page-label body-1-sb" }, this.label),
            h("div", { class: "pagination-bar" }, this.renderBackButton(), !this.goToPage && (h("div", { class: "pages-container", role: "navigation", tabIndex: -1 }, pagesChunks.length > 0 &&
                pagesChunks.map((chunk) => h("div", { class: "pages-chunk" }, chunk.map((page) => this.renderPage(page)))))), this.goToPage && (h("form", { class: "mobile-go-to-page", onSubmit: (ev) => {
                    ev.preventDefault();
                    this.selectPage(this.goToPageValue);
                } }, h("z-input", { class: "go-to-page-input", type: InputType.NUMBER, min: 1, max: this.totalPages, message: false, onInput: (ev) => {
                    this.goToPageValue = ev.target.value;
                }, placeholder: this.currentPage.toString(), hasclearicon: false }), h("span", null, `/${this.totalPages}`))), this.renderForwardButton()),
        ];
    }
    componentDidLoad() {
        this.setVisiblePages();
    }
    componentDidRender() {
        if (this.split) {
            this.edges = false;
        }
        this.setPagesContainerWidth();
        this.setMobile();
    }
    render() {
        if (this.isMobile) {
            return h(Host, null, this.renderMobile());
        }
        return (h(Host, null, h("div", { class: "pagination-bar" }, this.label && h("span", { class: "page-label body-1-sb" }, this.label), this.edges && (h("button", { class: "pagination-button", type: "button", title: "Vai alla pagina 1", disabled: this.currentPage === 1, onClick: () => this.selectPage(1) }, "Pagina 1")), this.skip < this.totalPages && this.skip > 1 && (h("button", { class: "pagination-button", type: "button", title: `Vai alla pagina ${this.currentPage - this.skip}`, disabled: this.currentPage <= this.skip, onClick: () => this.selectPage(this.currentPage - this.skip) }, "-", this.skip)), this.navArrows && this.renderBackButton(), h("div", { class: "pages-container", role: "navigation", tabIndex: -1 }, this.split ? this.renderSplitPages() : this.renderPages()), this.navArrows && this.renderForwardButton(), this.skip < this.totalPages && this.skip > 1 && (h("button", { class: "pagination-button", type: "button", title: `Vai alla pagina ${this.currentPage + this.skip}`, disabled: this.currentPage > this.totalPages - this.skip, onClick: () => this.selectPage(this.currentPage + this.skip) }, "+", this.skip)), this.edges && (h("button", { class: "pagination-button", type: "button", title: `Vai alla pagina ${this.totalPages}`, disabled: this.currentPage === this.totalPages, onClick: () => this.selectPage(this.totalPages) }, "Pagina ", this.totalPages))), this.goToPage && (h("div", { class: "go-to-page" }, h("span", { class: "label body-5-sb" }, "Vai a pagina:"), h("div", { class: "inputs" }, h("z-input", { class: "go-to-page-input", type: InputType.NUMBER, min: 1, max: this.totalPages, message: false, placeholder: "2", hasclearicon: false, onInput: (ev) => {
                this.goToPageValue = ev.target.value;
            }, onKeyDown: (ev) => ev.key === "Enter" && this.selectPage(this.goToPageValue) }), h("z-button", { disabled: !this.goToPageValue, title: "Vai alla pagina inserita", onClick: () => this.selectPage(this.goToPageValue) }, "vai"))))));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "_visiblePages": ["setPagesContainerWidth"],
        "visiblePages": ["setVisiblePages"],
        "currentPage": ["onPageChanged"],
        "split": ["onSplitChanged"]
    }; }
};
ZPagination.style = ZPaginationStyle0;

export { ZPagination as z_pagination };

//# sourceMappingURL=z-pagination.entry.js.map
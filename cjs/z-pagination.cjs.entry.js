'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5dc4a8de.js');
const index$1 = require('./index-e3835c94.js');

const stylesCss = "z-pagination{--z-pagination--page-button-width:64px;--z-pagination--pages-container-max-width:100%;display:-ms-flexbox;display:flex;max-width:100%;-ms-flex-flow:column wrap;flex-flow:column wrap;font-family:var(--font-family-sans);font-weight:var(--font-rg);gap:calc(var(--space-unit) * 2) calc(var(--space-unit) * 4)}z-pagination,z-pagination *{-webkit-box-sizing:border-box;box-sizing:border-box}z-pagination button{height:100%}z-pagination z-icon{fill:var(--color-primary01-icon)}z-pagination *:disabled z-icon{fill:var(--color-disabled03)}z-pagination .page-label{margin-right:calc(var(--space-unit) * 3);color:var(--color-default-text)}z-pagination .pagination-bar{display:-ms-flexbox;display:flex;max-width:100%;height:48px;-ms-flex-align:center;align-items:center}z-pagination .pagination-bar button{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border:none;margin:0;background-color:var(--color-surface03);color:var(--color-primary01);cursor:pointer;font-family:inherit;font-weight:inherit;-webkit-transition:background-color 0.15s ease-out,\n    color 0.15s ease-out,\n    border-bottom-color 0.15s ease-out,\n    font-size 0.15s ease-in-out,\n    font-weight 0.15s ease-in-out;transition:background-color 0.15s ease-out,\n    color 0.15s ease-out,\n    border-bottom-color 0.15s ease-out,\n    font-size 0.15s ease-in-out,\n    font-weight 0.15s ease-in-out}z-pagination .pagination-bar button:focus-visible{background-color:var(--color-hover-surface);-webkit-box-shadow:inset var(--shadow-focus-primary);box-shadow:inset var(--shadow-focus-primary);outline:none}z-pagination .pagination-bar .pagination-button{padding:calc(var(--space-unit) * 2);font-weight:var(--font-sb);text-transform:uppercase;white-space:nowrap}z-pagination .pagination-bar .navigation-button{padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 1.5)}z-pagination .pagination-bar .pagination-button:disabled,z-pagination .pagination-bar .navigation-button:disabled{background-color:var(--color-disabled01);color:var(--color-disabled03);cursor:default;pointer-events:none}z-pagination .pagination-bar .page-button,z-pagination .pagination-bar .ellipsis-button{width:var(--z-pagination--page-button-width)}z-pagination .pages-container{position:relative;display:-ms-inline-flexbox;display:inline-flex;max-width:100%;height:100%;overflow-x:auto;scroll-behavior:smooth;scroll-snap-align:center;scrollbar-width:none}z-pagination .pages-container::-webkit-scrollbar{display:none}z-pagination .pages-chunk{display:-ms-flexbox;display:flex;scroll-snap-align:center}z-pagination .pagination-bar .page-button{padding-top:var(--border-size-large) solid transparent;border-bottom:var(--border-size-large) solid transparent;font-size:var(--font-size-2);font-weight:var(--font-sb)}z-pagination .pagination-bar .page-button:focus-visible{border-bottom-color:var(--color-hover-light)}z-pagination .pagination-bar .page-button[data-current]{border-bottom-color:var(--color-primary01);font-size:var(--font-size-7)}z-pagination .go-to-page{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;row-gap:var(--space-unit)}z-pagination .go-to-page .label{color:var(--color-default-text);text-transform:uppercase}z-pagination .go-to-page .inputs{display:-ms-flexbox;display:flex;-webkit-column-gap:var(--space-unit);-moz-column-gap:var(--space-unit);column-gap:var(--space-unit)}z-pagination .go-to-page .inputs z-input{width:calc(var(--space-unit) * 11)}z-pagination .go-to-page .inputs z-input input,z-pagination .mobile-go-to-page z-input input{padding:0 calc(var(--space-unit) * 1.5) !important;-webkit-appearance:none;-moz-appearance:none;appearance:none}z-pagination .mobile-go-to-page{display:-ms-flexbox;display:flex;height:100%;-ms-flex:1 auto;flex:1 auto;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:var(--color-surface03)}z-pagination .mobile-go-to-page z-input{width:var(--z-pagination--page-button-width);margin-right:var(--space-unit)}z-pagination .mobile-go-to-page z-input input{text-align:center}z-pagination .mobile-go-to-page z-input input::-webkit-outer-spin-button,z-pagination .mobile-go-to-page z-input input::-webkit-inner-spin-button{-webkit-appearance:none;appearance:none}z-pagination .mobile-go-to-page>span{font-size:var(--font-size-2)}@media (hover: hover){z-pagination .pagination-bar button:hover{background-color:var(--color-hover-surface)}z-pagination .pagination-bar .page-button:hover{border-bottom-color:var(--color-hover-light)}}@media (min-width: 768px){z-pagination{--z-pagination--page-button-width:88px;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:end;align-items:flex-end}z-pagination .pages-container{max-width:var(--z-pagination--pages-container-max-width)}}";
const ZPaginationStyle0 = stylesCss;

const ZPagination = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.pageChanged = index.createEvent(this, "pageChanged", 7);
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
        return (index.h("button", { class: "page-button", type: "button", "aria-current": this.currentPage === page ? "page" : "false", title: `Vai alla pagina ${page}`, "data-page": page, "data-current": this.currentPage === page, onClick: () => this.selectPage(page) }, page));
    }
    /**
     * Render split button.
     * @param {number} page Page to select on click.
     * @returns {HTMLButtonElement}
     */
    renderEllipsisButton(page) {
        return (index.h("button", { class: "ellipsis-button", type: "button", title: `Vai alla pagina ${page}`, onClick: () => this.selectPage(page) }, "\u2026"));
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
        return pagesChunks.map((chunk) => index.h("div", { class: "pages-chunk" }, chunk.map((page) => this.renderPage(page))));
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
        return (index.h("button", { class: "navigation-button", type: "button", title: "Vai alla pagina precedente", disabled: this.currentPage === 1, onClick: () => this.selectPage(this.currentPage - 1) }, index.h("z-icon", { name: "chevron-left" })));
    }
    renderForwardButton() {
        return (index.h("button", { class: "navigation-button", type: "button", title: "Vai alla prossima pagina", disabled: this.currentPage === this.totalPages, onClick: () => this.selectPage(this.currentPage + 1) }, index.h("z-icon", { name: "chevron-right" })));
    }
    renderMobile() {
        const pagesChunks = this.getPagesChunks();
        return [
            this.label && index.h("span", { class: "page-label body-1-sb" }, this.label),
            index.h("div", { class: "pagination-bar" }, this.renderBackButton(), !this.goToPage && (index.h("div", { class: "pages-container", role: "navigation", tabIndex: -1 }, pagesChunks.length > 0 &&
                pagesChunks.map((chunk) => index.h("div", { class: "pages-chunk" }, chunk.map((page) => this.renderPage(page)))))), this.goToPage && (index.h("form", { class: "mobile-go-to-page", onSubmit: (ev) => {
                    ev.preventDefault();
                    this.selectPage(this.goToPageValue);
                } }, index.h("z-input", { class: "go-to-page-input", type: index$1.InputType.NUMBER, min: 1, max: this.totalPages, message: false, onInput: (ev) => {
                    this.goToPageValue = ev.target.value;
                }, placeholder: this.currentPage.toString(), hasclearicon: false }), index.h("span", null, `/${this.totalPages}`))), this.renderForwardButton()),
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
            return index.h(index.Host, null, this.renderMobile());
        }
        return (index.h(index.Host, null, index.h("div", { class: "pagination-bar" }, this.label && index.h("span", { class: "page-label body-1-sb" }, this.label), this.edges && (index.h("button", { class: "pagination-button", type: "button", title: "Vai alla pagina 1", disabled: this.currentPage === 1, onClick: () => this.selectPage(1) }, "Pagina 1")), this.skip < this.totalPages && this.skip > 1 && (index.h("button", { class: "pagination-button", type: "button", title: `Vai alla pagina ${this.currentPage - this.skip}`, disabled: this.currentPage <= this.skip, onClick: () => this.selectPage(this.currentPage - this.skip) }, "-", this.skip)), this.navArrows && this.renderBackButton(), index.h("div", { class: "pages-container", role: "navigation", tabIndex: -1 }, this.split ? this.renderSplitPages() : this.renderPages()), this.navArrows && this.renderForwardButton(), this.skip < this.totalPages && this.skip > 1 && (index.h("button", { class: "pagination-button", type: "button", title: `Vai alla pagina ${this.currentPage + this.skip}`, disabled: this.currentPage > this.totalPages - this.skip, onClick: () => this.selectPage(this.currentPage + this.skip) }, "+", this.skip)), this.edges && (index.h("button", { class: "pagination-button", type: "button", title: `Vai alla pagina ${this.totalPages}`, disabled: this.currentPage === this.totalPages, onClick: () => this.selectPage(this.totalPages) }, "Pagina ", this.totalPages))), this.goToPage && (index.h("div", { class: "go-to-page" }, index.h("span", { class: "label body-5-sb" }, "Vai a pagina:"), index.h("div", { class: "inputs" }, index.h("z-input", { class: "go-to-page-input", type: index$1.InputType.NUMBER, min: 1, max: this.totalPages, message: false, placeholder: "2", hasclearicon: false, onInput: (ev) => {
                this.goToPageValue = ev.target.value;
            }, onKeyDown: (ev) => ev.key === "Enter" && this.selectPage(this.goToPageValue) }), index.h("z-button", { disabled: !this.goToPageValue, title: "Vai alla pagina inserita", onClick: () => this.selectPage(this.goToPageValue) }, "vai"))))));
    }
    get host() { return index.getElement(this); }
    static get watchers() { return {
        "_visiblePages": ["setPagesContainerWidth"],
        "visiblePages": ["setVisiblePages"],
        "currentPage": ["onPageChanged"],
        "split": ["onSplitChanged"]
    }; }
};
ZPagination.style = ZPaginationStyle0;

exports.z_pagination = ZPagination;

//# sourceMappingURL=z-pagination.cjs.entry.js.map
import { Host, h } from "@stencil/core";
import { InputType } from "../../beans";
/**
 * Pagination bar component.
 */
export class ZPagination {
    constructor() {
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
    static get is() { return "z-pagination"; }
    static get originalStyleUrls() {
        return {
            "$": ["styles.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["styles.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Pagination label placed before the bar."
                },
                "attribute": "label",
                "reflect": false
            },
            "navArrows": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Enable navigation arrows."
                },
                "attribute": "nav-arrows",
                "reflect": false,
                "defaultValue": "true"
            },
            "totalPages": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Total number of pages. Required."
                },
                "attribute": "total-pages",
                "reflect": false
            },
            "skip": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Number of pages to skip."
                },
                "attribute": "skip",
                "reflect": false,
                "defaultValue": "0"
            },
            "edges": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Enable buttons to go to the first and last pages."
                },
                "attribute": "edges",
                "reflect": false,
                "defaultValue": "false"
            },
            "split": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Number of pages to show left/right of the current, before showing \"load more\" symbol (\u2026)."
                },
                "attribute": "split",
                "reflect": false
            },
            "visiblePages": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Number of pages to show at a time. If not set, all pages will be shown."
                },
                "attribute": "visible-pages",
                "reflect": false
            },
            "currentPage": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Current page."
                },
                "attribute": "current-page",
                "reflect": false,
                "defaultValue": "1"
            },
            "goToPage": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether to show \"go to page\" feature."
                },
                "attribute": "go-to-page",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "_visiblePages": {},
            "isMobile": {},
            "goToPageValue": {}
        };
    }
    static get events() {
        return [{
                "method": "pageChanged",
                "name": "pageChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when the current page has changed."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "host"; }
    static get watchers() {
        return [{
                "propName": "_visiblePages",
                "methodName": "setPagesContainerWidth"
            }, {
                "propName": "visiblePages",
                "methodName": "setVisiblePages"
            }, {
                "propName": "currentPage",
                "methodName": "onPageChanged"
            }, {
                "propName": "split",
                "methodName": "onSplitChanged"
            }];
    }
    static get listeners() {
        return [{
                "name": "resize",
                "method": "onResize",
                "target": "window",
                "capture": false,
                "passive": true
            }];
    }
}
//# sourceMappingURL=index.js.map

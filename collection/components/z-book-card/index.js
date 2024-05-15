import { h } from "@stencil/core";
import { BookCardVariant } from "../../beans";
import { mobileBreakpoint } from "../../constants/breakpoints";
import { randomId } from "../../utils/utils";
/**
 * @slot resources - books resources (extended variant only)
 * @slot header-cta - header CTA (e.g. bookmark icon - extended and search variant only)
 * @slot tags - card tags (extended and search variant only)
 * @slot footer-cta - footer cta button (search and compact variant only)
 * @cssprop --z-book-card-ribbon-background-color - ribbon backgrund color
 * @cssprop --z-book-card-ribbon-shadow-color - ribbon shadow color
 * @cssprop --z-book-card-compact-width - compact card custom width
 * @cssprop --z-book-card-compact-height - compact card custom height
 */
export class ZBookCard {
    constructor() {
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
        return (h("article", { key: '101c9922d8f9405fc38fb79f36fbf0d608327064', class: {
                [this.variant]: true,
                borderless: !!this.borderless,
            } }, this.renderCard()));
    }
    static get is() { return "z-book-card"; }
    static get encapsulation() { return "shadow"; }
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
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "BookCardVariant",
                    "resolved": "BookCardVariant.COMPACT | BookCardVariant.EXPANDED | BookCardVariant.SEARCH",
                    "references": {
                        "BookCardVariant": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::BookCardVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Card variant: expanded, compact, search"
                },
                "attribute": "variant",
                "reflect": false
            },
            "cover": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Cover URL"
                },
                "attribute": "cover",
                "reflect": false
            },
            "operaTitle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Card main title"
                },
                "attribute": "opera-title",
                "reflect": false
            },
            "volumeTitle": {
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
                    "text": "[optional] Card subtitle"
                },
                "attribute": "volume-title",
                "reflect": false
            },
            "authors": {
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
                    "text": "[optional] Authors"
                },
                "attribute": "authors",
                "reflect": false
            },
            "isbn": {
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
                    "text": "[optional] Main ISBN"
                },
                "attribute": "isbn",
                "reflect": false
            },
            "isbnLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "[optional] ISBN label"
                },
                "attribute": "isbn-label",
                "reflect": false,
                "defaultValue": "\"\""
            },
            "ribbon": {
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
                    "text": "[optional] Ribbon label - expanded and search variant only"
                },
                "attribute": "ribbon",
                "reflect": false
            },
            "ribbonIcon": {
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
                    "text": "[optional] Ribbon icon - expanded and search variant only"
                },
                "attribute": "ribbon-icon",
                "reflect": false
            },
            "ribbonInteractive": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "[optional] Ribbon interactive - expanded and search variant only"
                },
                "attribute": "ribbon-interactive",
                "reflect": false
            },
            "borderless": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "[optional] Borderless card - compact variant only"
                },
                "attribute": "borderless",
                "reflect": false
            },
            "fallbackCover": {
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
                    "text": "[optional] Fallback cover URL"
                },
                "attribute": "fallback-cover",
                "reflect": false
            },
            "operaTitleTag": {
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
                    "text": "[optional] [accessibility] Card title HTML tag"
                },
                "attribute": "opera-title-tag",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isMobile": {},
            "hasResources": {},
            "showResources": {}
        };
    }
    static get events() {
        return [{
                "method": "ribbonClick",
                "name": "ribbonClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "click on interactive ribbon"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=index.js.map

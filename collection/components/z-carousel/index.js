import { Host, h } from "@stencil/core";
import { ButtonVariant, CarouselArrowsPosition, CarouselProgressMode } from "../../beans";
/**
 * ZCarousel component.
 * @cssprop --z-carousel-gutter - The gutter between items.
 * @cssprop --z-carousel-items-shadow - The shadow around the items.
 * @slot - Carousel items. Use `<li>` elements inside this slot.
 */
export class ZCarousel {
    constructor() {
        /** Flag indicating the items container is about to scroll programmatically towards the stored index. */
        this.scrollingTo = null;
        this.isLoading = undefined;
        this.label = undefined;
        this.single = false;
        this.arrowsPosition = undefined;
        this.progressMode = undefined;
        this.fixedArrows = true;
        this.ghostLoadingHeight = 100;
        this.infinite = false;
        this.current = 0;
        this.items = undefined;
        this.highlightedIndicator = undefined;
        this.canNavigatePrev = undefined;
        this.canNavigateNext = undefined;
    }
    onIndexChange() {
        this.indexChange.emit({ currentItem: this.current });
    }
    onSingleModeChange() {
        if (this.single && !this.intersectionObserver) {
            this.setIntersectionObserver();
        }
    }
    onInfiniteModeChange() {
        this.checkNavigationValidity();
    }
    /**
     * Set an intersection observer to:
     * - highlight the indicator of the intersecting item during scroll
     * - set the current item to the last intersecting item
     */
    setIntersectionObserver() {
        this.intersectionObserver = new IntersectionObserver((entries) => {
            const entry = entries.find(({ isIntersecting }) => isIntersecting);
            if (!entry) {
                return;
            }
            const entryIndex = this.items.findIndex((item) => item === entry.target);
            this.highlightedIndicator = entryIndex;
            /* skip setting the current item if intersection has been triggered by a programmatic scroll
            (@see `goTo` function) and the final index has not been reached */
            if (this.scrollingTo !== null && entryIndex !== this.scrollingTo) {
                return;
            }
            this.scrollingTo = null;
            this.current = entryIndex;
        }, {
            root: this.itemsContainer,
            threshold: 0.5,
        });
        this.items.forEach((element) => this.intersectionObserver.observe(element));
    }
    /** Update items' list and check conditions to allow navigation */
    onSlotChange() {
        this.items = Array.from(this.host.children);
        this.checkNavigationValidity();
        this.setIntersectionObserver();
        this.goTo(this.current);
    }
    onPrev() {
        if (this.single) {
            this.goTo(this.infinite && this.current - 1 < 0 ? this.items.length - 1 : Math.max(0, this.current - 1));
            return;
        }
        this.itemsContainer.scrollBy({
            left: this.infinite && this.itemsContainer.scrollLeft == 0
                ? this.itemsContainer.scrollWidth - this.itemsContainer.clientWidth
                : -this.itemsContainer.clientWidth / 2,
            behavior: "smooth",
        });
    }
    onNext() {
        if (this.single) {
            const next = this.infinite && this.current + 1 > this.items.length - 1
                ? 0
                : Math.min(this.current + 1, this.items.length - 1);
            return this.goTo(next);
        }
        this.itemsContainer.scrollBy({
            left: this.infinite &&
                this.itemsContainer.scrollLeft == this.itemsContainer.scrollWidth - this.itemsContainer.clientWidth
                ? -this.itemsContainer.scrollWidth
                : this.itemsContainer.clientWidth / 2,
            behavior: "smooth",
        });
    }
    /**
     * Check if navigation buttons can be enabled and set the related local states.
     */
    checkNavigationValidity() {
        if (this.single) {
            this.canNavigatePrev = this.current > 0;
            this.canNavigateNext = this.current < this.items.length - 1;
            return;
        }
        this.canNavigatePrev = this.itemsContainer.scrollLeft > 0;
        this.canNavigateNext =
            this.itemsContainer.scrollLeft < this.itemsContainer.scrollWidth - this.itemsContainer.clientWidth;
    }
    /**
     * Check if footer has to be rendered.
     */
    canShowFooter() {
        if (!this.canNavigatePrev && !this.canNavigateNext) {
            return false;
        }
        return (this.arrowsPosition === CarouselArrowsPosition.BOTTOM ||
            this.progressMode === CarouselProgressMode.DOTS ||
            this.progressMode === CarouselProgressMode.NUMBERS);
    }
    /**
     * Set current item to passed index.
     * @param index Index to set
     */
    goTo(index) {
        if (this.current === index) {
            return;
        }
        this.scrollingTo = index;
        const left = this.items.slice(0, index).reduce((acc, item) => (acc += item.clientWidth), 0);
        // the scroll will trigger the IntersectionObserver and set the current item
        this.itemsContainer.scroll({
            left,
            behavior: "smooth",
        });
    }
    /** Check if navigation of at least one direction is enabled */
    get canNavigate() {
        return this.canNavigatePrev || this.canNavigateNext;
    }
    setupItems() {
        this.items = Array.from(this.host.children);
        this.items.forEach((item) => {
            item.setAttribute("role", "group");
            item.setAttribute("aria-roledescription", "slide");
        });
    }
    componentDidLoad() {
        var _a;
        (_a = this.itemsContainer) === null || _a === void 0 ? void 0 : _a.addEventListener("scroll", this.checkNavigationValidity.bind(this), { passive: true });
        this.resizeObserver = new ResizeObserver(this.checkNavigationValidity.bind(this));
        this.resizeObserver.observe(this.itemsContainer);
        this.setupItems();
        if (this.single) {
            this.setIntersectionObserver();
        }
        this.checkNavigationValidity();
    }
    disconnectedCallback() {
        var _a;
        (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    render() {
        if (this.isLoading) {
            return (h("div", { class: "z-carousel-container" }, this.label && h("div", { class: "heading-3-sb z-carousel-title" }, this.label), h("div", { style: { height: `${this.ghostLoadingHeight}px` } }, h("z-ghost-loading", null))));
        }
        return (h(Host, null, h("div", { class: "z-carousel-container", role: "group", "aria-roledescription": "carousel", "aria-label": this.label || "Carousel" }, this.label && h("div", { class: "z-carousel-title heading-3-sb" }, this.label), h("div", { class: "z-carousel-wrapper" }, h("z-button", { class: "z-carousel-navigation-arrow", variant: ButtonVariant.SECONDARY, "data-direction": "prev", icon: "arrow-left", onClick: this.onPrev.bind(this), disabled: !this.infinite && !this.canNavigatePrev, hidden: this.arrowsPosition !== CarouselArrowsPosition.OVER || !this.canNavigate, ariaLabel: this.single ? "Mostra l'elemento precedente" : "Mostra gli elementi precedenti" }), h("ul", { class: "z-carousel-items-container", "aria-atomic": "false", "aria-live": "polite", ref: (el) => (this.itemsContainer = el) }, h("slot", { onSlotchange: this.onSlotChange.bind(this) })), h("z-button", { class: "z-carousel-navigation-arrow", variant: ButtonVariant.SECONDARY, "data-direction": "next", icon: "arrow-right", onClick: this.onNext.bind(this), disabled: !this.infinite && !this.canNavigateNext, hidden: this.arrowsPosition !== CarouselArrowsPosition.OVER || !this.canNavigate, ariaLabel: this.single ? "Mostra l'elemento successivo" : "Mostra gli elementi successivi" }))), this.canShowFooter() && (h("div", { class: "z-carousel-footer" }, this.arrowsPosition === CarouselArrowsPosition.BOTTOM && (h("z-button", { class: "z-carousel-navigation-arrow", variant: ButtonVariant.TERTIARY, icon: "arrow-left", onClick: this.onPrev.bind(this), disabled: !this.infinite && !this.canNavigatePrev, ariaLabel: this.single ? "Mostra l'elemento precedente" : "Mostra gli elementi precedenti" })), this.progressMode === CarouselProgressMode.DOTS && this.single && this.items && (h("div", { class: "dots-progress" }, this.items.map((_, index) => (h("button", { type: "button", class: { current: this.highlightedIndicator === index }, "aria-label": this.highlightedIndicator === index ? "Elemento corrente" : `Spostati all'elemento ${index + 1}`, onClick: () => this.goTo(index) }))))), this.progressMode === CarouselProgressMode.NUMBERS && this.single && this.items && (h("div", { class: "numbers-progress interactive-1" }, h("span", { class: "current" }, this.current + 1), h("span", null, "di"), h("span", null, this.items.length))), this.arrowsPosition === CarouselArrowsPosition.BOTTOM && (h("z-button", { class: "z-carousel-navigation-arrow", variant: ButtonVariant.TERTIARY, icon: "arrow-right", onClick: this.onNext.bind(this), disabled: !this.infinite && !this.canNavigateNext, ariaLabel: this.single ? "Mostra l'elemento successivo" : "Mostra gli elementi successivi" }))))));
    }
    static get is() { return "z-carousel"; }
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
            "isLoading": {
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
                    "text": "The z-carousel is on loading state"
                },
                "attribute": "is-loading",
                "reflect": false
            },
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
                    "text": "The z-carousel title"
                },
                "attribute": "label",
                "reflect": false
            },
            "single": {
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
                    "text": "Shows only one content at a time"
                },
                "attribute": "single",
                "reflect": true,
                "defaultValue": "false"
            },
            "arrowsPosition": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "CarouselArrowsPosition",
                    "resolved": "CarouselArrowsPosition.BOTTOM | CarouselArrowsPosition.OVER",
                    "references": {
                        "CarouselArrowsPosition": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::CarouselArrowsPosition"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Arrow buttons position"
                },
                "attribute": "arrows-position",
                "reflect": true
            },
            "progressMode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "CarouselProgressMode",
                    "resolved": "CarouselProgressMode.DOTS | CarouselProgressMode.NUMBERS",
                    "references": {
                        "CarouselProgressMode": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::CarouselProgressMode"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Progress indicator type. Only available for `single` mode"
                },
                "attribute": "progress-mode",
                "reflect": false
            },
            "fixedArrows": {
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
                    "text": "Whether the navigation arrow buttons over the items are always visible or only on mouse hover.\nIf set to `false`, the arrows will not be visible on mobile.\nOnly meaningful with `arrowsPosition` set to `OVER`."
                },
                "attribute": "fixed-arrows",
                "reflect": true,
                "defaultValue": "true"
            },
            "ghostLoadingHeight": {
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
                    "text": "The height of the ghost loader (only visible when `isLoading` is set to `true`)"
                },
                "attribute": "ghost-loading-height",
                "reflect": false,
                "defaultValue": "100"
            },
            "infinite": {
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
                    "text": "When enabled, navigating next the last item will go back to the first item and vice versa."
                },
                "attribute": "infinite",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "current": {},
            "items": {},
            "highlightedIndicator": {},
            "canNavigatePrev": {},
            "canNavigateNext": {}
        };
    }
    static get events() {
        return [{
                "method": "indexChange",
                "name": "indexChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted on index change and only in `single` mode."
                },
                "complexType": {
                    "original": "{currentItem: number}",
                    "resolved": "{ currentItem: number; }",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "host"; }
    static get watchers() {
        return [{
                "propName": "current",
                "methodName": "onIndexChange"
            }, {
                "propName": "single",
                "methodName": "onSingleModeChange"
            }, {
                "propName": "infinite",
                "methodName": "onInfiniteModeChange"
            }];
    }
}
//# sourceMappingURL=index.js.map

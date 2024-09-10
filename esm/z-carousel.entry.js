import { r as registerInstance, c as createEvent, h, a as Host, g as getElement } from './index-a2130b6a.js';
import { Q as CarouselArrowsPosition, R as CarouselProgressMode, B as ButtonVariant } from './index-b7dbacb4.js';

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg);--z-carousel-gutter:0;}:host([single]){display:flex;flex-direction:column;align-items:center;justify-content:center}:host([single]) .z-carousel-container{width:fit-content;max-width:100%}.z-carousel-container{display:flex;flex-direction:column}.z-carousel-title{margin-bottom:calc(var(--space-unit) * 2)}.z-carousel-wrapper{position:relative}.z-carousel-items-container{display:flex;max-width:100%;flex-direction:row;margin:0;box-shadow:var(--z-carousel-items-shadow, none);column-gap:var(--z-carousel-gutter);list-style:none;-ms-overflow-style:none;overflow-x:scroll;padding-inline-start:0;scroll-behavior:smooth;scroll-snap-type:x mandatory;scrollbar-width:none;}.z-carousel-items-container::-webkit-scrollbar{display:none}.z-carousel-items-container ::slotted(*){scroll-snap-align:center}.z-carousel-navigation-arrow[hidden]{display:none}.z-carousel-navigation-arrow[data-direction]{position:absolute;z-index:1;bottom:50%;transform:translateY(50%)}.z-carousel-navigation-arrow[data-direction=\"next\"]{right:0}:host(:not([fixed-arrows])) .z-carousel-wrapper .z-carousel-navigation-arrow{display:none}.z-carousel-footer{display:flex;flex-direction:row;align-items:center;justify-content:center;column-gap:calc(var(--space-unit) * 3)}:host([arrows-position=\"bottom\"]) .z-carousel-footer{margin-top:calc(var(--space-unit) * 0.75)}.z-carousel-footer .numbers-progress,.z-carousel-footer .dots-progress{display:flex;align-items:center;justify-content:center}.z-carousel-footer .dots-progress{column-gap:calc(var(--space-unit) * 3)}:host(:not([arrows-position=\"bottom\"])) .z-carousel-footer .dots-progress{margin-top:calc(var(--space-unit) * 2)}.z-carousel-footer .dots-progress button{display:flex;width:calc(var(--space-unit) * 3);height:calc(var(--space-unit) * 3);align-items:center;padding:0;border:none;margin:0;background-color:var(--color-surface03);border-radius:calc(var(--space-unit) * 3)}.z-carousel-footer .dots-progress button.current{background-color:var(--color-primary01)}.z-carousel-footer .dots-progress button:focus:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}.z-carousel-footer .dots-progress button:not(.current){cursor:pointer}.z-carousel-footer .numbers-progress{column-gap:calc(var(--space-unit) / 2)}:host(:not([arrows-position=\"bottom\"])) .z-carousel-footer .numbers-progress{margin-top:var(--space-unit)}.z-carousel-footer .numbers-progress .current{font-weight:var(--font-sb)}@media (min-width: 768px){:host(:not([fixed-arrows])) .z-carousel-wrapper:hover .z-carousel-navigation-arrow:not([hidden]){display:flex}}";
const ZCarouselStyle0 = stylesCss;

const ZCarousel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.indexChange = createEvent(this, "indexChange", 7);
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
    get host() { return getElement(this); }
    static get watchers() { return {
        "current": ["onIndexChange"],
        "single": ["onSingleModeChange"],
        "infinite": ["onInfiniteModeChange"]
    }; }
};
ZCarousel.style = ZCarouselStyle0;

export { ZCarousel as z_carousel };

//# sourceMappingURL=z-carousel.entry.js.map
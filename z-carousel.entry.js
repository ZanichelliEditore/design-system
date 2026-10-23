import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './index-DafJ7_Il.js';
import { U as CarouselArrowsPosition, V as CarouselProgressMode, B as ButtonVariant } from './index-DdetsoIY.js';

const stylesCss = () => `:host{--z-carousel-gutter:0;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host([single]){display:flex;flex-direction:column;align-items:center;justify-content:center}:host([single]) .z-carousel-container{width:fit-content;max-width:100%}.z-carousel-container{display:flex;flex-direction:column}.z-carousel-title{margin-bottom:calc(var(--space-unit) * 2)}.z-carousel-wrapper{position:relative}.z-carousel-items-container{display:flex;max-width:100%;flex-direction:row;margin:0;box-shadow:var(--z-carousel-items-shadow, none);column-gap:var(--z-carousel-gutter);list-style:none;-ms-overflow-style:none;overflow-x:scroll;padding-inline-start:0;scroll-behavior:smooth;scroll-snap-type:x mandatory;scrollbar-width:none;}.z-carousel-items-container::-webkit-scrollbar{display:none}.z-carousel-items-container ::slotted(*){scroll-snap-align:center}.z-carousel-navigation-arrow[hidden]{display:none}.z-carousel-navigation-arrow[data-direction]{position:absolute;z-index:1;bottom:50%;transform:translateY(50%)}.z-carousel-navigation-arrow[data-direction="next"]{right:0}:host(:not([fixed-arrows])) .z-carousel-wrapper .z-carousel-navigation-arrow{display:none}.z-carousel-footer{display:flex;flex-direction:row;align-items:center;justify-content:center;column-gap:calc(var(--space-unit) * 3)}:host([arrows-position="bottom"]) .z-carousel-footer{margin-top:calc(var(--space-unit) * 0.75)}.z-carousel-footer .numbers-progress,.z-carousel-footer .dots-progress{display:flex;align-items:center;justify-content:center}.z-carousel-footer .dots-progress{column-gap:calc(var(--space-unit) * 3)}:host(:not([arrows-position="bottom"])) .z-carousel-footer .dots-progress{margin-top:calc(var(--space-unit) * 2)}.z-carousel-footer .dots-progress button{display:flex;width:calc(var(--space-unit) * 3);height:calc(var(--space-unit) * 3);align-items:center;padding:0;border:none;margin:0;background-color:var(--color-surface03);border-radius:calc(var(--space-unit) * 3)}.z-carousel-footer .dots-progress button.current{background-color:var(--color-primary01)}.z-carousel-footer .dots-progress button:focus:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}.z-carousel-footer .dots-progress button:not(.current){cursor:pointer}.z-carousel-footer .numbers-progress{column-gap:calc(var(--space-unit) / 2)}:host(:not([arrows-position="bottom"])) .z-carousel-footer .numbers-progress{margin-top:var(--space-unit)}.z-carousel-footer .numbers-progress .current{font-weight:var(--font-sb)}@media (min-width: 768px){:host(:not([fixed-arrows])) .z-carousel-wrapper:hover .z-carousel-navigation-arrow:not([hidden]){display:flex}}`;

const typographyCss = () => `:root{--font-family-sans:"IBM Plex Sans", sans-serif;--font-family-serif:"IBM Plex Serif", serif;--font-lt:300;--font-rg:400;--font-sb:600;--font-bd:700;--font-size-1:0.75rem;--font-size-2:0.875rem;--font-size-3:1rem;--font-size-4:1.125rem;--font-size-5:1.25rem;--font-size-6:1.5rem;--font-size-7:1.75rem;--font-size-8:2rem;--font-size-9:2.25rem;--font-size-10:2.625rem;--font-size-11:3rem;--font-size-12:3.375rem;--font-size-13:3.75rem;--font-size-14:4.25rem;--font-size-15:4.75rem;--font-size-16:5.25rem;--font-size-17:5.75rem;--section-title-1:var(--font-sb) var(--font-size-11) / 1.083 var(--font-family-serif);--section-title-2:var(--font-sb) var(--font-size-10) / 1.142 var(--font-family-serif);--section-title-3:var(--font-sb) var(--font-size-9) / 1.222 var(--font-family-serif);--section-title-4:var(--font-sb) var(--font-size-8) / 1.25 var(--font-family-serif);--section-title-5:var(--font-sb) var(--font-size-7) / 1.2857 var(--font-family-serif);--section-title-6:var(--font-sb) var(--font-size-6) / 1.333 var(--font-family-serif)}.heading-1,.heading-1-sb,.heading-1-lt{font-size:var(--font-size-7);font-weight:var(--font-rg);line-height:1.28}.heading-2,.heading-2-sb,.heading-2-lt{font-size:var(--font-size-6);font-weight:var(--font-rg);line-height:1.333}.heading-3,.heading-3-sb,.heading-3-lt{font-size:var(--font-size-6);font-weight:var(--font-rg);line-height:1.333}.heading-4,.heading-4-sb,.heading-4-lt{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.body-1,.body-1-sb{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.body-2,.body-2-sb{font-size:var(--font-size-4);font-weight:var(--font-rg);line-height:1.5}.body-3,.body-3-sb{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.body-4,.body-4-sb{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.body-5,.body-5-sb{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.interactive-1,.interactive-1-sb{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.interactive-2,.interactive-2-sb{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.interactive-3,.interactive-3-sb{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.helper,.helper-sb{font-size:var(--font-size-1);font-style:italic;font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.section-title-1{font:var(--section-title-1)}.section-title-2{font:var(--section-title-2)}.section-title-3{font:var(--section-title-3)}.section-title-4{font:var(--section-title-4)}.section-title-5{font:var(--section-title-5)}.section-title-6{font:var(--section-title-6)}@media (min-width: 1152px){.heading-1,.heading-1-sb,.heading-1-lt{font-size:var(--font-size-8);font-weight:var(--font-rg);line-height:1.25}.heading-2,.heading-2-sb,.heading-2-lt{font-size:var(--font-size-7);font-weight:var(--font-rg);line-height:1.28}}@media (max-width: 767px){.mobile-heading-1,.mobile-heading-1-sb,.mobile-heading-1-lt{font-size:var(--font-size-7);font-weight:var(--font-rg);line-height:1.28}.mobile-heading-2,.mobile-heading-2-sb,.mobile-heading-2-lt{font-size:var(--font-size-6);font-weight:var(--font-rg);line-height:1.333}.mobile-heading-3,.mobile-heading-3-sb,.mobile-heading-3-lt{font-size:var(--font-size-6);font-weight:var(--font-rg);line-height:1.333}.mobile-heading-4,.mobile-heading-4-sb,.mobile-heading-4-lt{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.mobile-body-1,.mobile-body-1-sb{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.mobile-body-2,.mobile-body-2-sb{font-size:var(--font-size-4);font-weight:var(--font-rg);line-height:1.5}.mobile-body-3,.mobile-body-3-sb{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.mobile-body-4,.mobile-body-4-sb{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.mobile-body-5,.mobile-body-5-sb{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.mobile-interactive-1,.mobile-interactive-1-sb{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.mobile-interactive-2,.mobile-interactive-2-sb{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.mobile-interactive-3,.mobile-interactive-3-sb{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.mobile-section-title-1{font:var(--section-title-1)}.mobile-section-title-2{font:var(--section-title-2)}.mobile-section-title-3{font:var(--section-title-3)}.mobile-section-title-4{font:var(--section-title-4)}.mobile-section-title-5{font:var(--section-title-5)}.mobile-section-title-6{font:var(--section-title-6)}.mobile-heading-1-lt,.mobile-heading-2-lt,.mobile-heading-3-lt,.mobile-heading-4-lt{font-weight:var(--font-lt)}.mobile-heading-1-sb,.mobile-heading-2-sb,.mobile-heading-3-sb,.mobile-heading-4-sb,.mobile-body-1-sb,.mobile-body-2-sb,.mobile-body-3-sb,.mobile-body-4-sb,.mobile-body-5-sb,.mobile-interactive-1-sb,.mobile-interactive-2-sb,.mobile-interactive-3-sb{font-weight:var(--font-sb)}}@media (min-width: 768px) and (max-width: 1151px){.tablet-heading-1,.tablet-heading-1-sb,.tablet-heading-1-lt{font-size:var(--font-size-7);font-weight:var(--font-rg);line-height:1.28}.tablet-heading-2,.tablet-heading-2-sb,.tablet-heading-2-lt{font-size:var(--font-size-6);font-weight:var(--font-rg);line-height:1.333}.tablet-heading-3,.tablet-heading-3-sb,.tablet-heading-3-lt{font-size:var(--font-size-6);font-weight:var(--font-rg);line-height:1.333}.tablet-heading-4,.tablet-heading-4-sb,.tablet-heading-4-lt{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.tablet-body-1,.tablet-body-1-sb{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.tablet-body-2,.tablet-body-2-sb{font-size:var(--font-size-4);font-weight:var(--font-rg);line-height:1.5}.tablet-body-3,.tablet-body-3-sb{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.tablet-body-4,.tablet-body-4-sb{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.tablet-body-5,.tablet-body-5-sb{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.tablet-interactive-1,.tablet-interactive-1-sb{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.tablet-interactive-2,.tablet-interactive-2-sb{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.tablet-interactive-3,.tablet-interactive-3-sb{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.tablet-section-title-1{font:var(--section-title-1)}.tablet-section-title-2{font:var(--section-title-2)}.tablet-section-title-3{font:var(--section-title-3)}.tablet-section-title-4{font:var(--section-title-4)}.tablet-section-title-5{font:var(--section-title-5)}.tablet-section-title-6{font:var(--section-title-6)}.tablet-heading-1-lt,.tablet-heading-2-lt,.tablet-heading-3-lt,.tablet-heading-4-lt{font-weight:var(--font-lt)}.tablet-heading-1-sb,.tablet-heading-2-sb,.tablet-heading-3-sb,.tablet-heading-4-sb,.tablet-body-1-sb,.tablet-body-2-sb,.tablet-body-3-sb,.tablet-body-4-sb,.tablet-body-5-sb,.tablet-interactive-1-sb,.tablet-interactive-2-sb,.tablet-interactive-3-sb{font-weight:var(--font-sb)}}@media (min-width: 1152px) and (max-width: 1365px){.desktop-heading-1,.desktop-heading-1-sb,.desktop-heading-1-lt{font-size:var(--font-size-8);font-weight:var(--font-rg);line-height:1.25}.desktop-heading-2,.desktop-heading-2-sb,.desktop-heading-2-lt{font-size:var(--font-size-7);font-weight:var(--font-rg);line-height:1.28}.desktop-heading-3,.desktop-heading-3-sb,.desktop-heading-3-lt{font-size:var(--font-size-6);font-weight:var(--font-rg);line-height:1.333}.desktop-heading-4,.desktop-heading-4-sb,.desktop-heading-4-lt{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.desktop-body-1,.desktop-body-1-sb{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.desktop-body-2,.desktop-body-2-sb{font-size:var(--font-size-4);font-weight:var(--font-rg);line-height:1.5}.desktop-body-3,.desktop-body-3-sb{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.desktop-body-4,.desktop-body-4-sb{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.desktop-body-5,.desktop-body-5-sb{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.desktop-interactive-1,.desktop-interactive-1-sb{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.desktop-interactive-2,.desktop-interactive-2-sb{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.desktop-interactive-3,.desktop-interactive-3-sb{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.desktop-section-title-1{font:var(--section-title-1)}.desktop-section-title-2{font:var(--section-title-2)}.desktop-section-title-3{font:var(--section-title-3)}.desktop-section-title-4{font:var(--section-title-4)}.desktop-section-title-5{font:var(--section-title-5)}.desktop-section-title-6{font:var(--section-title-6)}.desktop-heading-1-lt,.desktop-heading-2-lt,.desktop-heading-3-lt,.desktop-heading-4-lt{font-weight:var(--font-lt)}.desktop-heading-1-sb,.desktop-heading-2-sb,.desktop-heading-3-sb,.desktop-heading-4-sb,.desktop-body-1-sb,.desktop-body-2-sb,.desktop-body-3-sb,.desktop-body-4-sb,.desktop-body-5-sb,.desktop-interactive-1-sb,.desktop-interactive-2-sb,.desktop-interactive-3-sb{font-weight:var(--font-sb)}}@media (min-width: 1366px){.wide-heading-1,.wide-heading-1-sb,.wide-heading-1-lt{font-size:var(--font-size-8);font-weight:var(--font-rg);line-height:1.25}.wide-heading-2,.wide-heading-2-sb,.wide-heading-2-lt{font-size:var(--font-size-7);font-weight:var(--font-rg);line-height:1.28}.wide-heading-3,.wide-heading-3-sb,.wide-heading-3-lt{font-size:var(--font-size-6);font-weight:var(--font-rg);line-height:1.333}.wide-heading-4,.wide-heading-4-sb,.wide-heading-4-lt{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.wide-body-1,.wide-body-1-sb{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.wide-body-2,.wide-body-2-sb{font-size:var(--font-size-4);font-weight:var(--font-rg);line-height:1.5}.wide-body-3,.wide-body-3-sb{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.wide-body-4,.wide-body-4-sb{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.wide-body-5,.wide-body-5-sb{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.wide-interactive-1,.wide-interactive-1-sb{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.wide-interactive-2,.wide-interactive-2-sb{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.wide-interactive-3,.wide-interactive-3-sb{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.wide-section-title-1{font:var(--section-title-1)}.wide-section-title-2{font:var(--section-title-2)}.wide-section-title-3{font:var(--section-title-3)}.wide-section-title-4{font:var(--section-title-4)}.wide-section-title-5{font:var(--section-title-5)}.wide-section-title-6{font:var(--section-title-6)}.wide-heading-1-lt,.wide-heading-2-lt,.wide-heading-3-lt,.wide-heading-4-lt{font-weight:var(--font-lt)}.wide-heading-1-sb,.wide-heading-2-sb,.wide-heading-3-sb,.wide-heading-4-sb,.wide-body-1-sb,.wide-body-2-sb,.wide-body-3-sb,.wide-body-4-sb,.wide-body-5-sb,.wide-interactive-1-sb,.wide-interactive-2-sb,.wide-interactive-3-sb{font-weight:var(--font-sb)}}.heading-1-lt,.heading-2-lt,.heading-3-lt,.heading-4-lt{font-weight:var(--font-lt)}.heading-1-sb,.heading-2-sb,.heading-3-sb,.heading-4-sb,.body-1-sb,.body-2-sb,.body-3-sb,.body-4-sb,.body-5-sb,.interactive-1-sb,.interactive-2-sb,.interactive-3-sb,.helper-sb{font-weight:var(--font-sb)}`;

const ZCarousel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.indexChange = createEvent(this, "indexChange", 7);
        /** Shows only one content at a time */
        this.single = false;
        /**
         * Whether the navigation arrow buttons over the items are always visible or only on mouse hover.
         * If set to `false`, the arrows will not be visible on mobile.
         * Only meaningful with `arrowsPosition` set to `OVER`.
         */
        this.fixedArrows = true;
        /** The height of the ghost loader (only visible when `isLoading` is set to `true`) */
        this.ghostLoadingHeight = 100;
        /** When enabled, navigating next the last item will go back to the first item and vice versa. */
        this.infinite = false;
        /** Current item index for single mode. */
        this.current = 0;
        /** Flag indicating the items container is about to scroll programmatically towards the stored index. */
        this.scrollingTo = null;
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
    onLoadingChange() {
        if (!this.isLoading) {
            // when loading is finished, we need to set up things with the real items that were not present during the loading phase
            this.setupObserversAndListeners();
        }
    }
    /** Set up all observers and listeners related to the rendered items. */
    setupObserversAndListeners() {
        var _a;
        this.setupItems();
        (_a = this.itemsContainer) === null || _a === void 0 ? void 0 : _a.addEventListener("scroll", this.checkNavigationValidity.bind(this), { passive: true });
        this.resizeObserver = new ResizeObserver(this.checkNavigationValidity.bind(this));
        this.resizeObserver.observe(this.itemsContainer);
        if (this.single) {
            this.setIntersectionObserver();
        }
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
            item.setAttribute("aria-roledescription", "slide");
        });
    }
    componentDidLoad() {
        if (this.isLoading) {
            return;
        }
        this.setupObserversAndListeners();
    }
    disconnectedCallback() {
        var _a;
        (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    render() {
        if (this.isLoading) {
            return (h("div", { class: "z-carousel-container" }, this.label && h("div", { class: "heading-3-sb z-carousel-title" }, this.label), h("div", { style: { height: `${this.ghostLoadingHeight}px` } }, h("z-ghost-loading", null))));
        }
        return (h(Host, null, h("div", { class: "z-carousel-container", "aria-roledescription": "carousel", "aria-label": this.label || "Carousel" }, this.label && h("div", { class: "z-carousel-title heading-3-sb" }, this.label), h("div", { class: "z-carousel-wrapper" }, h("z-button", { class: "z-carousel-navigation-arrow", variant: ButtonVariant.SECONDARY, "data-direction": "prev", icon: "arrow-left", onClick: this.onPrev.bind(this), disabled: !this.infinite && !this.canNavigatePrev, hidden: this.arrowsPosition !== CarouselArrowsPosition.OVER || !this.canNavigate, ariaLabel: this.single ? "Mostra l'elemento precedente" : "Mostra gli elementi precedenti" }), h("ul", { class: "z-carousel-items-container", "aria-atomic": "false", "aria-live": "polite", ref: (el) => (this.itemsContainer = el) }, h("slot", { onSlotchange: this.onSlotChange.bind(this) })), h("z-button", { class: "z-carousel-navigation-arrow", variant: ButtonVariant.SECONDARY, "data-direction": "next", icon: "arrow-right", onClick: this.onNext.bind(this), disabled: !this.infinite && !this.canNavigateNext, hidden: this.arrowsPosition !== CarouselArrowsPosition.OVER || !this.canNavigate, ariaLabel: this.single ? "Mostra l'elemento successivo" : "Mostra gli elementi successivi" }))), this.canShowFooter() && (h("div", { class: "z-carousel-footer" }, this.arrowsPosition === CarouselArrowsPosition.BOTTOM && (h("z-button", { class: "z-carousel-navigation-arrow", variant: ButtonVariant.TERTIARY, icon: "arrow-left", onClick: this.onPrev.bind(this), disabled: !this.infinite && !this.canNavigatePrev, ariaLabel: this.single ? "Mostra l'elemento precedente" : "Mostra gli elementi precedenti" })), this.progressMode === CarouselProgressMode.DOTS && this.single && this.items && (h("div", { class: "dots-progress" }, this.items.map((_, index) => (h("button", { type: "button", class: { current: this.highlightedIndicator === index }, "aria-label": this.highlightedIndicator === index ? "Elemento corrente" : `Spostati all'elemento ${index + 1}`, onClick: () => this.goTo(index) }))))), this.progressMode === CarouselProgressMode.NUMBERS && this.single && this.items && (h("div", { class: "numbers-progress interactive-1" }, h("span", { class: "current" }, this.current + 1), h("span", null, "di"), h("span", null, this.items.length))), this.arrowsPosition === CarouselArrowsPosition.BOTTOM && (h("z-button", { class: "z-carousel-navigation-arrow", variant: ButtonVariant.TERTIARY, icon: "arrow-right", onClick: this.onNext.bind(this), disabled: !this.infinite && !this.canNavigateNext, ariaLabel: this.single ? "Mostra l'elemento successivo" : "Mostra gli elementi successivi" }))))));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "current": [{
                "onIndexChange": 0
            }],
        "single": [{
                "onSingleModeChange": 0
            }],
        "infinite": [{
                "onInfiniteModeChange": 0
            }],
        "isLoading": [{
                "onLoadingChange": 0
            }]
    }; }
};
ZCarousel.style = stylesCss() + typographyCss();

export { ZCarousel as z_carousel };

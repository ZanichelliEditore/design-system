'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-28bcd719.js');

const stylesCss = "z-carousel{font-family:var(--font-family-sans);font-weight:var(--font-rg);--z-carousel-gutter:0}z-carousel[single],z-carousel[single=\"true\"]{display:flex;flex-direction:column;align-items:center;justify-content:center}z-carousel[single=\"true\"] .z-carousel-container,z-carousel[single] .z-carousel-container{width:fit-content;max-width:100%}z-carousel .loading-items-container{display:none}z-carousel .z-carousel-container{display:flex;flex-direction:column}z-carousel .z-carousel-wrapper{position:relative}z-carousel .z-carousel-title{margin-bottom:var(--space-unit);color:var(--gray800)}z-carousel .z-carousel-items-container{display:flex;max-width:100%;flex-direction:row;margin:0;list-style:none;-ms-overflow-style:none;overflow-x:scroll;padding-inline-start:0;scroll-snap-type:x mandatory;scrollbar-width:none;}z-carousel .z-carousel-items-container::-webkit-scrollbar{display:none}z-carousel .z-carousel-items-container>*:not(:last-child){margin-right:var(--z-carousel-gutter)}z-carousel[single=\"true\"] .z-carousel-items-container>*:not(:last-child),z-carousel[single] .z-carousel-items-container>*:not(:last-child){margin-right:0}z-carousel .z-carousel-items-container>li{scroll-snap-align:center}z-button[data-direction]{--z-icon-width:32px;--z-icon-height:32px;position:absolute;bottom:50%;transform:translateY(50%)}z-button[data-direction=\"next\"]{right:0}z-carousel .z-carousel-footer{display:flex;flex-direction:row;align-items:center;justify-content:center;margin-top:var(--space-unit)}z-carousel .z-carousel-footer .numbers-progress,z-carousel .z-carousel-footer .dots-progress{display:flex;align-items:center;justify-content:center}z-carousel .z-carousel-footer .dots-progress button{display:flex;align-items:center;padding:0;border:none;margin:0;background-color:transparent}z-carousel .z-carousel-footer .dots-progress button:not(.current){cursor:pointer}z-carousel .z-carousel-footer .numbers-progress{margin:0 calc(var(--space-unit) / 2);column-gap:calc(var(--space-unit) / 2)}z-carousel .z-carousel-footer .numbers-progress .current{font-weight:var(--font-sb)}z-carousel .z-carousel-footer .dots-progress button.current z-icon{fill:var(--gray800)}z-carousel .z-carousel-footer .dots-progress button:not(.current) z-icon{fill:var(--gray200)}";

const ZCarousel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.indexChange = index.createEvent(this, "indexChange", 7);
    /** Shows only one content at a time */
    this.single = false;
    /** The height of z-carousel ghost loading, this prop is mandatory when isloading is set to true, as otherwise the component won't show. */
    this.ghostLoadingHeight = 100;
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
  /**
   * Set an intersection observer to:
   * - highlight the indicator of the intersecting item during scroll
   * - set the current item to the last intersecting item
   */
  setIntersectionObserver() {
    this.intersectionObserver = new window.IntersectionObserver((entries) => {
      const entry = entries.find((entry) => entry.isIntersecting);
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
  onPrev() {
    if (this.single) {
      this.goTo(Math.max(0, this.current - 1));
      return;
    }
    const scroller = this.itemsContainer;
    if (!scroller) {
      return;
    }
    scroller.scrollBy({
      left: -scroller.clientWidth / 2,
      behavior: "smooth",
    });
  }
  onNext() {
    if (this.single) {
      this.goTo(Math.min(this.current + 1, this.items.length - 1));
      return;
    }
    const scroller = this.itemsContainer;
    if (!scroller) {
      return;
    }
    scroller.scrollBy({
      left: scroller.clientWidth / 2,
      behavior: "smooth",
    });
  }
  /**
   * Check if navigation buttons can be enabled or not and set local states.
   */
  checkNavigationValidity() {
    if (this.single) {
      this.canNavigatePrev = this.current > 1;
      this.canNavigateNext = this.current < this.items.length - 1;
    }
    this.canNavigatePrev = this.itemsContainer.scrollLeft > 0;
    this.canNavigateNext =
      this.itemsContainer.scrollLeft < this.itemsContainer.scrollWidth - this.itemsContainer.clientWidth;
  }
  /**
   * Check if footer can be rendered.
   */
  canShowFooter() {
    return (this.arrowsPosition === index$1.CarouselArrowsPosition.BOTTOM ||
      this.progressMode === index$1.CarouselProgressMode.DOTS ||
      this.progressMode === index$1.CarouselProgressMode.NUMBERS);
  }
  /**
   * Set current item to passed index.
   * @param {number} index Index to set
   */
  goTo(index) {
    if (this.current === index) {
      return;
    }
    this.scrollingTo = index;
    // the scroll will trigger the IntersectionObserver and set the current item
    this.itemsContainer.scroll({
      left: this.items[index].offsetLeft,
      behavior: "smooth",
    });
  }
  componentDidLoad() {
    this.itemsContainer = this.hostElement.querySelector(".z-carousel-items-container");
    if (!this.itemsContainer) {
      return;
    }
    this.items = Array.from(this.itemsContainer.querySelectorAll(":scope > li"));
    if (this.single) {
      this.setIntersectionObserver();
    }
    this.itemsContainer.addEventListener("scroll", this.checkNavigationValidity.bind(this), { passive: true });
    this.checkNavigationValidity();
  }
  render() {
    if (this.isLoading) {
      return (index.h(index.Host, null, this.label && index.h("div", { class: "heading-4 z-carousel-title" }, this.label), index.h("div", { style: { height: `${this.ghostLoadingHeight}px` } }, index.h("z-ghost-loading", null), index.h("div", { class: "loading-items-container" }, index.h("slot", null)))));
    }
    return (index.h(index.Host, null, index.h("div", { class: "z-carousel-container" }, this.label && index.h("div", { class: "heading-4 z-carousel-title" }, this.label), index.h("div", { class: "z-carousel-wrapper" }, this.arrowsPosition === index$1.CarouselArrowsPosition.OVER && (index.h("z-button", { size: index$1.ButtonSize.SMALL, "data-direction": "prev", icon: "chevron-left", onClick: this.onPrev.bind(this), disabled: !this.canNavigatePrev })), index.h("ul", { class: "z-carousel-items-container" }, index.h("slot", null)), this.arrowsPosition === index$1.CarouselArrowsPosition.OVER && (index.h("z-button", { size: index$1.ButtonSize.SMALL, "data-direction": "next", icon: "chevron-right", onClick: this.onNext.bind(this), disabled: !this.canNavigateNext })))), this.canShowFooter() && (index.h("div", { class: "z-carousel-footer" }, this.arrowsPosition === index$1.CarouselArrowsPosition.BOTTOM && (index.h("z-button", { size: index$1.ButtonSize.SMALL, variant: index$1.ButtonVariant.TERTIARY, icon: "arrow-simple-left-filled", onClick: this.onPrev.bind(this), disabled: !this.canNavigatePrev })), this.progressMode === index$1.CarouselProgressMode.DOTS && this.single && this.items && (index.h("div", { class: "dots-progress" }, this.items.map((_item, key) => (index.h("button", { type: "button", class: { current: this.highlightedIndicator === key }, onClick: () => this.goTo(key) }, index.h("z-icon", { name: this.highlightedIndicator === key ? "white-circle-filled" : "black-circle-filled" })))))), this.progressMode === index$1.CarouselProgressMode.NUMBERS && this.single && this.items && (index.h("div", { class: "numbers-progress interactive-3" }, index.h("span", { class: "current" }, this.current + 1), index.h("span", null, "di"), index.h("span", null, this.items.length))), this.arrowsPosition === index$1.CarouselArrowsPosition.BOTTOM && (index.h("z-button", { size: index$1.ButtonSize.SMALL, variant: index$1.ButtonVariant.TERTIARY, icon: "arrow-simple-right-filled", onClick: this.onNext.bind(this), disabled: !this.canNavigateNext }))))));
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "current": ["onIndexChange"],
    "single": ["onSingleModeChange"]
  }; }
};
ZCarousel.style = stylesCss;

exports.z_carousel = ZCarousel;

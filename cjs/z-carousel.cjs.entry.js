'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-199cd650.js');

const stylesCss = "z-carousel{font-family:var(--font-family-sans);font-weight:var(--font-rg);--z-carousel-gutter:0}z-carousel[single],z-carousel[single=\"true\"]{display:flex;flex-direction:column;align-items:center;justify-content:center}z-carousel[single=\"true\"] .z-carousel-container,z-carousel[single] .z-carousel-container{width:fit-content;max-width:100%}z-carousel .loading-items-container{display:none}.z-carousel-container{display:flex;flex-direction:column}.z-carousel-wrapper{position:relative}.z-carousel-title{margin-bottom:var(--space-unit);color:var(--gray800)}.z-carousel-items-container{display:flex;max-width:100%;flex-direction:row;margin:0;list-style:none;-ms-overflow-style:none;overflow-x:scroll;padding-inline-start:0;scroll-snap-type:x mandatory;scrollbar-width:none;}.z-carousel-items-container::-webkit-scrollbar{display:none}.z-carousel-items-container>*:not(:last-child){margin-right:var(--z-carousel-gutter)}z-carousel[single=\"true\"] .z-carousel-items-container>*:not(:last-child),z-carousel[single] .z-carousel-items-container>*:not(:last-child){margin-right:0}.z-carousel-items-container>li{scroll-snap-align:center}z-button[data-direction]{--z-icon-width:32px;--z-icon-height:32px;position:absolute;bottom:50%;transform:translateY(50%)}z-button[data-direction=\"next\"]{right:0}.z-carousel-footer{display:flex;flex-direction:row;align-items:center;justify-content:center;margin-top:var(--space-unit)}.z-carousel-footer .number-progress,.z-carousel-footer .dots-progress{display:flex;align-items:center;justify-content:center}.z-carousel-footer .dots-progress button{display:flex;align-items:center;padding:0;border:none;margin:0;background-color:transparent}.z-carousel-footer .dots-progress button:not(.current){cursor:pointer}.z-carousel-footer .numbers-progress{margin:0 calc(var(--space-unit) / 2)}.z-carousel-footer .numbers-progress>*{margin-right:calc(var(--space-unit) / 2)}.z-carousel-footer .numbers-progress .current{font-weight:var(--font-sb)}.z-carousel-footer .dots-progress button.current z-icon{fill:var(--gray800)}.z-carousel-footer .dots-progress button:not(.current) z-icon{fill:var(--gray200)}";

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
    /** Flag indicating the items container is scrolling programmatically towards the stored index. */
    this.scrollingTo = null;
  }
  onIndexChange() {
    this.scrollingTo = this.current;
    this.itemsContainer.scroll({
      left: this.items[this.current].offsetLeft,
      behavior: "smooth",
    });
    this.indexChange.emit({ currentItem: this.current });
  }
  onSingleModeChange() {
    if (this.single && !this.intersectionObserver) {
      this.setIntersectionObserver();
    }
  }
  componentDidLoad() {
    this.itemsContainer = this.hostElement.querySelector(".z-carousel-items-container");
    if (!this.itemsContainer) {
      return;
    }
    this.items = Array.from(this.itemsContainer.querySelectorAll("li"));
    if (this.single) {
      this.setIntersectionObserver();
    }
  }
  /**
   * Set an intersection observer to show the current index to the indicator when scrolling.
   */
  setIntersectionObserver() {
    this.intersectionObserver = new window.IntersectionObserver((entries) => {
      const entry = entries.find((entry) => entry.isIntersecting);
      if (!entry) {
        return;
      }
      const entryIndex = this.items.findIndex((item) => item === entry.target);
      /* skip setting the current item if intersection has been triggered by a programmatic scroll
      (the scroll in `onIndexChange`) */
      if (this.scrollingTo !== null && entryIndex !== this.scrollingTo) {
        return;
      }
      this.current = entryIndex;
      this.scrollingTo = null;
    }, {
      root: this.itemsContainer,
      threshold: 0.5,
    });
    this.items.forEach((element) => this.intersectionObserver.observe(element));
  }
  onPrev() {
    if (this.single) {
      this.current = Math.max(0, this.current - 1);
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
      this.current = Math.min(this.current + 1, this.items.length - 1);
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
   * Check if footer can be rendered.
   * @returns {boolean}
   */
  canShowFooter() {
    return (this.arrowsPosition === index$1.CarouselArrowsPosition.BOTTOM ||
      this.progressMode === index$1.CarouselProgressMode.DOTS ||
      this.progressMode === index$1.CarouselProgressMode.NUMBERS);
  }
  /**
   * Set current item to passed index.
   * @param {number} index Index to set
   * @returns {void}
   */
  goTo(index) {
    if (this.current === index) {
      return;
    }
    this.current = index;
  }
  render() {
    if (this.isLoading) {
      return (index.h(index.Host, null, this.label && index.h("div", { class: "heading-4 z-carousel-title" }, this.label), index.h("div", { style: { height: `${this.ghostLoadingHeight}px` } }, index.h("z-ghost-loading", null), index.h("div", { class: "loading-items-container" }, index.h("slot", null)))));
    }
    return (index.h(index.Host, null, index.h("div", { class: "z-carousel-container" }, this.label && index.h("div", { class: "heading-4 z-carousel-title" }, this.label), index.h("div", { class: "z-carousel-wrapper" }, this.arrowsPosition === index$1.CarouselArrowsPosition.OVER && (index.h("z-button", { size: index$1.ButtonSize.SMALL, "data-direction": "prev", icon: "chevron-left", onClick: this.onPrev.bind(this) })), index.h("ul", { class: "z-carousel-items-container" }, index.h("slot", null)), this.arrowsPosition === index$1.CarouselArrowsPosition.OVER && (index.h("z-button", { size: index$1.ButtonSize.SMALL, "data-direction": "next", icon: "chevron-right", onClick: this.onNext.bind(this) })))), this.canShowFooter() && (index.h("div", { class: "z-carousel-footer" }, this.arrowsPosition === index$1.CarouselArrowsPosition.BOTTOM && (index.h("z-button", { size: index$1.ButtonSize.SMALL, variant: index$1.ButtonVariant.TERTIARY, icon: "arrow-left-filled", onClick: this.onPrev.bind(this) })), this.progressMode === index$1.CarouselProgressMode.DOTS && this.single && this.items && (index.h("div", { class: "dots-progress" }, this.items.map((_item, key) => (index.h("button", { type: "button", class: { current: this.current === key }, onClick: () => this.goTo(key) }, index.h("z-icon", { name: this.current === key ? "white-circle-filled" : "black-circle-filled" })))))), this.progressMode === index$1.CarouselProgressMode.NUMBERS && this.single && this.items && (index.h("div", { class: "numbers-progress" }, index.h("span", { class: "interactive-3 current" }, this.current + 1), index.h("span", { class: "interactive-3" }, "di"), index.h("span", { class: "interactive-3" }, this.items.length))), this.arrowsPosition === index$1.CarouselArrowsPosition.BOTTOM && (index.h("z-button", { size: index$1.ButtonSize.SMALL, variant: index$1.ButtonVariant.TERTIARY, icon: "arrow-right-filled", onClick: this.onNext.bind(this) }))))));
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "current": ["onIndexChange"],
    "single": ["onSingleModeChange"]
  }; }
};
ZCarousel.style = stylesCss;

exports.z_carousel = ZCarousel;

import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a2ca4b97.js';
import { W as CarouselArrowsPosition, X as CarouselProgressMode, c as ButtonSizeEnum, B as ButtonVariantEnum } from './index-8390ddaf.js';

const stylesCss = "z-carousel{font-family:var(--font-family-sans);font-weight:var(--font-rg);--z-carousel-gutter:0}z-carousel[single],z-carousel[single='true']{display:flex;flex-direction:column;justify-content:center;align-items:center}z-carousel[single='true'] .z-carousel-container,z-carousel[single] .z-carousel-container{width:fit-content;max-width:100%}z-carousel .loading-items-container{display:none}.z-carousel-container{display:flex;flex-direction:column}.z-carousel-wrapper{position:relative}.z-carousel-title{color:var(--gray800);margin-bottom:var(--space-unit)}.z-carousel-items-container{display:flex;flex-direction:row;overflow-x:scroll;max-width:100%;padding-inline-start:0;margin:0;list-style:none;scroll-snap-type:x mandatory;-ms-overflow-style:none;scrollbar-width:none;}.z-carousel-items-container::-webkit-scrollbar{display:none}.z-carousel-items-container>*:not(:last-child){margin-right:var(--z-carousel-gutter)}z-carousel[single='true'] .z-carousel-items-container>*:not(:last-child),z-carousel[single] .z-carousel-items-container>*:not(:last-child){margin-right:0}.z-carousel-items-container>li{scroll-snap-align:center}z-button[data-direction]{--z-icon-width:32px;--z-icon-height:32px;position:absolute;bottom:calc(50% - calc(var(--space-unit) * 3));cursor:pointer}z-button[data-direction=\"next\"]{right:0}.z-carousel-footer{display:flex;flex-direction:row;align-items:center;justify-content:center;margin-top:var(--space-unit)}.z-carousel-footer .number-progress,.z-carousel-footer .dots-progress{display:flex;align-items:center;justify-content:center}.z-carousel-footer .dots-progress button{display:flex;align-items:center;margin:0;padding:0;border:none;background-color:transparent}.z-carousel-footer .dots-progress button:not(.current){cursor:pointer}.z-carousel-footer .numbers-progress{margin:0 calc(var(--space-unit) / 2)}.z-carousel-footer .numbers-progress>*{margin-right:calc(var(--space-unit) / 2)}.z-carousel-footer .numbers-progress .current{font-weight:var(--font-sb)}.z-carousel-footer .dots-progress button.current z-icon{fill:var(--gray800)}.z-carousel-footer .dots-progress button:not(.current) z-icon{fill:var(--gray200)}";

const ZCarousel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.indexChange = createEvent(this, "indexChange", 7);
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
    this.items[this.current].scrollIntoView({
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
      (the scrollIntoView in `onIndexChange`) */
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
    return (this.arrowsPosition === CarouselArrowsPosition.BOTTOM ||
      this.progressMode === CarouselProgressMode.DOTS ||
      this.progressMode === CarouselProgressMode.NUMBERS);
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
      return h(Host, null, this.label && h("div", { class: "heading-4 z-carousel-title" }, this.label), h("div", { style: { height: `${this.ghostLoadingHeight}px` } }, h("z-ghost-loading", null), h("div", { class: "loading-items-container" }, h("slot", null))));
    }
    return (h(Host, null, h("div", { class: "z-carousel-container" }, this.label && h("div", { class: "heading-4 z-carousel-title" }, this.label), h("div", { class: "z-carousel-wrapper" }, this.arrowsPosition === CarouselArrowsPosition.OVER && (h("z-button", { size: ButtonSizeEnum.small, "data-direction": "prev", icon: "chevron-left", onClick: this.onPrev.bind(this) })), h("ul", { class: "z-carousel-items-container" }, h("slot", null)), this.arrowsPosition === CarouselArrowsPosition.OVER && (h("z-button", { size: ButtonSizeEnum.small, "data-direction": "next", icon: "chevron-right", onClick: this.onNext.bind(this) })))), this.canShowFooter() && (h("div", { class: "z-carousel-footer" }, this.arrowsPosition === CarouselArrowsPosition.BOTTOM && (h("z-button", { size: ButtonSizeEnum.small, variant: ButtonVariantEnum.tertiary, icon: "arrow-left-filled", onClick: this.onPrev.bind(this) })), this.progressMode === CarouselProgressMode.DOTS &&
      this.single &&
      this.items && (h("div", { class: "dots-progress" }, this.items.map((_item, key) => (h("button", { type: "button", class: { current: this.current === key }, onClick: () => this.goTo(key) }, h("z-icon", { name: this.current === key
        ? "white-circle-filled"
        : "black-circle-filled" })))))), this.progressMode === CarouselProgressMode.NUMBERS &&
      this.single &&
      this.items && (h("div", { class: "numbers-progress" }, h("span", { class: "interactive-3 current" }, this.current + 1), h("span", { class: "interactive-3" }, "di"), h("span", { class: "interactive-3" }, this.items.length))), this.arrowsPosition === CarouselArrowsPosition.BOTTOM && (h("z-button", { size: ButtonSizeEnum.small, variant: ButtonVariantEnum.tertiary, icon: "arrow-right-filled", onClick: this.onNext.bind(this) }))))));
  }
  get hostElement() { return getElement(this); }
  static get watchers() { return {
    "current": ["onIndexChange"],
    "single": ["onSingleModeChange"]
  }; }
};
ZCarousel.style = stylesCss;

export { ZCarousel as z_carousel };

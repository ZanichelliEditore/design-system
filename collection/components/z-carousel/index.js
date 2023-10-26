import { h, Host } from "@stencil/core";
import { CarouselArrowsPosition, CarouselProgressMode, ButtonVariant, ControlSize } from "../../beans";
/**
 * ZCarousel component.
 * @cssprop --z-carousel-gutter - The gutter between items.
 * @slot - carousel items. use `<li>` elements inside this slot as it is wrapped inside an `<ul>`
 */
export class ZCarousel {
  constructor() {
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
    return (this.arrowsPosition === CarouselArrowsPosition.BOTTOM ||
      this.progressMode === CarouselProgressMode.DOTS ||
      this.progressMode === CarouselProgressMode.NUMBERS);
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
    this.items.forEach((item) => {
      item.setAttribute("role", "group");
      item.setAttribute("aria-roledescription", "slide");
    });
  }
  render() {
    if (this.isLoading) {
      return (h(Host, null, this.label && h("div", { class: "heading-4 z-carousel-title" }, this.label), h("div", { style: { height: `${this.ghostLoadingHeight}px` } }, h("z-ghost-loading", null), h("div", { class: "loading-items-container" }, h("slot", null)))));
    }
    return (h(Host, null, h("div", { class: "z-carousel-container", role: "group", "aria-roledescription": "carousel", "aria-label": this.label || "Carousel" }, this.label && h("div", { class: "heading-4 z-carousel-title" }, this.label), h("div", { class: "z-carousel-wrapper" }, this.arrowsPosition === CarouselArrowsPosition.OVER && (h("z-button", { size: ControlSize.SMALL, "data-direction": "prev", icon: "chevron-left", onClick: this.onPrev.bind(this), disabled: !this.canNavigatePrev, ariaLabel: this.single ? "Mostra l'elemento precedente" : "Mostra gli elementi precedenti" })), h("ul", { class: "z-carousel-items-container", "aria-atomic": "false", "aria-live": "polite" }, h("slot", null)), this.arrowsPosition === CarouselArrowsPosition.OVER && (h("z-button", { size: ControlSize.SMALL, "data-direction": "next", icon: "chevron-right", onClick: this.onNext.bind(this), disabled: !this.canNavigateNext, ariaLabel: this.single ? "Mostra l'elemento successivo" : "Mostra gli elementi successivi" })))), this.canShowFooter() && (h("div", { class: "z-carousel-footer" }, this.arrowsPosition === CarouselArrowsPosition.BOTTOM && (h("z-button", { size: ControlSize.SMALL, variant: ButtonVariant.TERTIARY, icon: "arrow-simple-left-filled", onClick: this.onPrev.bind(this), disabled: !this.canNavigatePrev, ariaLabel: this.single ? "Mostra l'elemento precedente" : "Mostra gli elementi precedenti" })), this.progressMode === CarouselProgressMode.DOTS && this.single && this.items && (h("div", { class: "dots-progress" }, this.items.map((_item, key) => (h("button", { type: "button", class: { current: this.highlightedIndicator === key }, "aria-label": this.highlightedIndicator === key ? "Elemento corrente" : `Spostati all'elemento ${key + 1}`, onClick: () => this.goTo(key) }, h("z-icon", { name: this.highlightedIndicator === key ? "white-circle-filled" : "black-circle-filled" })))))), this.progressMode === CarouselProgressMode.NUMBERS && this.single && this.items && (h("div", { class: "numbers-progress interactive-3" }, h("span", { class: "current" }, this.current + 1), h("span", null, "di"), h("span", null, this.items.length))), this.arrowsPosition === CarouselArrowsPosition.BOTTOM && (h("z-button", { size: ControlSize.SMALL, variant: ButtonVariant.TERTIARY, icon: "arrow-simple-right-filled", onClick: this.onNext.bind(this), disabled: !this.canNavigateNext, ariaLabel: this.single ? "Mostra l'elemento successivo" : "Mostra gli elementi successivi" }))))));
  }
  static get is() { return "z-carousel"; }
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
          "text": "The z-carousel title, if given."
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
        "reflect": false,
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
              "path": "../../beans"
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
        "reflect": false
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
              "path": "../../beans"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Progress indicator. Only available for `single` mode"
        },
        "attribute": "progress-mode",
        "reflect": false
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
          "text": "The height of z-carousel ghost loading, this prop is mandatory when isloading is set to true, as otherwise the component won't show."
        },
        "attribute": "ghost-loading-height",
        "reflect": false,
        "defaultValue": "100"
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
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "hostElement"; }
  static get watchers() {
    return [{
        "propName": "current",
        "methodName": "onIndexChange"
      }, {
        "propName": "single",
        "methodName": "onSingleModeChange"
      }];
  }
}

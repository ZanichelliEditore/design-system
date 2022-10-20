import { h, Host } from "@stencil/core";
import { CarouselArrowsPosition, CarouselProgressMode, ButtonVariant, ButtonSize } from "../../beans";
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
      return (h(Host, null, this.label && h("div", { class: "heading-4 z-carousel-title" }, this.label), h("div", { style: { height: `${this.ghostLoadingHeight}px` } }, h("z-ghost-loading", null), h("div", { class: "loading-items-container" }, h("slot", null)))));
    }
    return (h(Host, null, h("div", { class: "z-carousel-container" }, this.label && h("div", { class: "heading-4 z-carousel-title" }, this.label), h("div", { class: "z-carousel-wrapper" }, this.arrowsPosition === CarouselArrowsPosition.OVER && (h("z-button", { size: ButtonSize.SMALL, "data-direction": "prev", icon: "chevron-left", onClick: this.onPrev.bind(this) })), h("ul", { class: "z-carousel-items-container" }, h("slot", null)), this.arrowsPosition === CarouselArrowsPosition.OVER && (h("z-button", { size: ButtonSize.SMALL, "data-direction": "next", icon: "chevron-right", onClick: this.onNext.bind(this) })))), this.canShowFooter() && (h("div", { class: "z-carousel-footer" }, this.arrowsPosition === CarouselArrowsPosition.BOTTOM && (h("z-button", { size: ButtonSize.SMALL, variant: ButtonVariant.TERTIARY, icon: "arrow-left-filled", onClick: this.onPrev.bind(this) })), this.progressMode === CarouselProgressMode.DOTS && this.single && this.items && (h("div", { class: "dots-progress" }, this.items.map((_item, key) => (h("button", { type: "button", class: { current: this.current === key }, onClick: () => this.goTo(key) }, h("z-icon", { name: this.current === key ? "white-circle-filled" : "black-circle-filled" })))))), this.progressMode === CarouselProgressMode.NUMBERS && this.single && this.items && (h("div", { class: "numbers-progress" }, h("span", { class: "interactive-3 current" }, this.current + 1), h("span", { class: "interactive-3" }, "di"), h("span", { class: "interactive-3" }, this.items.length))), this.arrowsPosition === CarouselArrowsPosition.BOTTOM && (h("z-button", { size: ButtonSize.SMALL, variant: ButtonVariant.TERTIARY, icon: "arrow-right-filled", onClick: this.onNext.bind(this) }))))));
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
      "items": {}
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

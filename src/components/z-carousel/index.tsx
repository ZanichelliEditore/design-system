import {Component, h, Prop, Element, Watch, Event, EventEmitter, State, Host} from "@stencil/core";
import {CarouselArrowsPosition, CarouselProgressMode, ButtonVariant, ButtonSize} from "../../beans";

/**
 * ZCarousel component.
 * @cssprop --z-carousel-gutter - The gutter between items.
 * @slot - carousel items. use `<li>` elements inside this slot as it is wrapped inside an `<ul>`
 */
@Component({
  tag: "z-carousel",
  styleUrl: "styles.css",
  shadow: false,
})
export class ZCarousel {
  @Element() hostElement: HTMLZCarouselElement;

  /** The z-carousel is on loading state */
  @Prop()
  isLoading: boolean;

  /** The z-carousel title, if given. */
  @Prop()
  label?: string;

  /** Shows only one content at a time */
  @Prop()
  single = false;

  /** Arrow buttons position */
  @Prop()
  arrowsPosition?: CarouselArrowsPosition;

  /** Progress indicator. Only available for `single` mode */
  @Prop()
  progressMode?: CarouselProgressMode;

  /** The height of z-carousel ghost loading, this prop is mandatory when isloading is set to true, as otherwise the component won't show. */
  @Prop()
  ghostLoadingHeight = 100;

  /** Current item index for single mode. */
  @State()
  current = 0;

  /** Items on the slider. */
  @State()
  items: HTMLLIElement[];

  /** Index of the indicator to highlight. */
  @State()
  highlightedIndicator: number;

  @State()
  canNavigatePrev: boolean;

  @State()
  canNavigateNext: boolean;

  /** Reference for the items container element. */
  private itemsContainer: HTMLUListElement;

  /** Observer that handles current index change when scrolling on single mode. */
  private intersectionObserver: IntersectionObserver;

  /** Flag indicating the items container is about to scroll programmatically towards the stored index. */
  private scrollingTo: number = null;

  /** Emitted on index change and only in `single` mode. */
  @Event()
  indexChange: EventEmitter;

  @Watch("current")
  onIndexChange(): void {
    this.indexChange.emit({currentItem: this.current});
  }

  @Watch("single")
  onSingleModeChange(): void {
    if (this.single && !this.intersectionObserver) {
      this.setIntersectionObserver();
    }
  }

  /**
   * Set an intersection observer to:
   * - highlight the indicator of the intersecting item during scroll
   * - set the current item to the last intersecting item
   */
  private setIntersectionObserver(): void {
    this.intersectionObserver = new window.IntersectionObserver(
      (entries) => {
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
      },
      {
        root: this.itemsContainer,
        threshold: 0.5,
      }
    );

    this.items.forEach((element) => this.intersectionObserver.observe(element));
  }

  private onPrev(): void {
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

  private onNext(): void {
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
  private checkNavigationValidity(): void {
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
  private canShowFooter(): boolean {
    return (
      this.arrowsPosition === CarouselArrowsPosition.BOTTOM ||
      this.progressMode === CarouselProgressMode.DOTS ||
      this.progressMode === CarouselProgressMode.NUMBERS
    );
  }

  /**
   * Set current item to passed index.
   * @param {number} index Index to set
   */
  private goTo(index): void {
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

  componentDidLoad(): void {
    this.itemsContainer = this.hostElement.querySelector(".z-carousel-items-container");
    if (!this.itemsContainer) {
      return;
    }

    this.items = Array.from(this.itemsContainer.querySelectorAll("li"));

    if (this.single) {
      this.setIntersectionObserver();
    }

    this.itemsContainer.addEventListener("scroll", this.checkNavigationValidity.bind(this), {passive: true});
    this.checkNavigationValidity();
  }

  render(): HTMLZCarouselElement {
    if (this.isLoading) {
      return (
        <Host>
          {this.label && <div class="heading-4 z-carousel-title">{this.label}</div>}
          <div style={{height: `${this.ghostLoadingHeight}px`}}>
            <z-ghost-loading></z-ghost-loading>
            <div class="loading-items-container">
              <slot />
            </div>
          </div>
        </Host>
      );
    }

    return (
      <Host>
        <div class="z-carousel-container">
          {this.label && <div class="heading-4 z-carousel-title">{this.label}</div>}
          <div class="z-carousel-wrapper">
            {this.arrowsPosition === CarouselArrowsPosition.OVER && (
              <z-button
                size={ButtonSize.SMALL}
                data-direction="prev"
                icon="chevron-left"
                onClick={this.onPrev.bind(this)}
                disabled={!this.canNavigatePrev}
              />
            )}
            <ul class="z-carousel-items-container">
              <slot />
            </ul>
            {this.arrowsPosition === CarouselArrowsPosition.OVER && (
              <z-button
                size={ButtonSize.SMALL}
                data-direction="next"
                icon="chevron-right"
                onClick={this.onNext.bind(this)}
                disabled={!this.canNavigateNext}
              />
            )}
          </div>
        </div>

        {this.canShowFooter() && (
          <div class="z-carousel-footer">
            {this.arrowsPosition === CarouselArrowsPosition.BOTTOM && (
              <z-button
                size={ButtonSize.SMALL}
                variant={ButtonVariant.TERTIARY}
                icon="arrow-simple-left-filled"
                onClick={this.onPrev.bind(this)}
                disabled={!this.canNavigatePrev}
              />
            )}
            {this.progressMode === CarouselProgressMode.DOTS && this.single && this.items && (
              <div class="dots-progress">
                {this.items.map((_item, key) => (
                  <button
                    type="button"
                    class={{current: this.highlightedIndicator === key}}
                    onClick={() => this.goTo(key)}
                  >
                    <z-icon name={this.highlightedIndicator === key ? "white-circle-filled" : "black-circle-filled"} />
                  </button>
                ))}
              </div>
            )}
            {this.progressMode === CarouselProgressMode.NUMBERS && this.single && this.items && (
              <div class="numbers-progress interactive-3">
                <span class="current">{this.current + 1}</span>
                <span>di</span>
                <span>{this.items.length}</span>
              </div>
            )}
            {this.arrowsPosition === CarouselArrowsPosition.BOTTOM && (
              <z-button
                size={ButtonSize.SMALL}
                variant={ButtonVariant.TERTIARY}
                icon="arrow-simple-right-filled"
                onClick={this.onNext.bind(this)}
                disabled={!this.canNavigateNext}
              />
            )}
          </div>
        )}
      </Host>
    );
  }
}

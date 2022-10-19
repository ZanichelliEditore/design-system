import {Component, h, Prop, Element, Watch, Event, EventEmitter, State, Host} from "@stencil/core";
import {HostElement} from "@stencil/core/internal";
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

  /** Reference for the items container element. */
  private itemsContainer: HTMLUListElement;

  /** Observer that handles current index change when scrolling on single mode. */
  private intersectionObserver: IntersectionObserver;

  /** Flag indicating the items container is scrolling programmatically towards the stored index. */
  private scrollingTo: number = null;

  /** Emitted on index change and only in `single` mode. */
  @Event()
  indexChange: EventEmitter;

  @Watch("current")
  onIndexChange(): void {
    this.scrollingTo = this.current;
    this.itemsContainer.scroll({
      left: this.items[this.current].offsetLeft,
      behavior: "smooth",
    });
    this.indexChange.emit({currentItem: this.current});
  }

  @Watch("single")
  onSingleModeChange(): void {
    if (this.single && !this.intersectionObserver) {
      this.setIntersectionObserver();
    }
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
  }

  /**
   * Set an intersection observer to show the current index to the indicator when scrolling.
   */
  private setIntersectionObserver(): void {
    this.intersectionObserver = new window.IntersectionObserver(
      (entries) => {
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

  private onNext(): void {
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
   * @returns {void}
   */
  private goTo(index): void {
    if (this.current === index) {
      return;
    }

    this.current = index;
  }

  render(): HTMLDivElement | HostElement {
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
                icon="arrow-left-filled"
                onClick={this.onPrev.bind(this)}
              />
            )}
            {this.progressMode === CarouselProgressMode.DOTS && this.single && this.items && (
              <div class="dots-progress">
                {this.items.map((_item, key) => (
                  <button
                    type="button"
                    class={{current: this.current === key}}
                    onClick={() => this.goTo(key)}
                  >
                    <z-icon name={this.current === key ? "white-circle-filled" : "black-circle-filled"} />
                  </button>
                ))}
              </div>
            )}
            {this.progressMode === CarouselProgressMode.NUMBERS && this.single && this.items && (
              <div class="numbers-progress">
                <span class="interactive-3 current">{this.current + 1}</span>
                <span class="interactive-3">di</span>
                <span class="interactive-3">{this.items.length}</span>
              </div>
            )}
            {this.arrowsPosition === CarouselArrowsPosition.BOTTOM && (
              <z-button
                size={ButtonSize.SMALL}
                variant={ButtonVariant.TERTIARY}
                icon="arrow-right-filled"
                onClick={this.onNext.bind(this)}
              />
            )}
          </div>
        )}
      </Host>
    );
  }
}

import {Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h} from "@stencil/core";
import {ButtonVariant, CarouselArrowsPosition, CarouselProgressMode} from "../../beans";

/**
 * ZCarousel component.
 * @cssprop --z-carousel-gutter - The gutter between items.
 * @cssprop --z-carousel-items-shadow - The shadow around the items.
 * @slot - Carousel items. Use `<li>` elements inside this slot.
 */
@Component({
  tag: "z-carousel",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZCarousel {
  @Element() host: HTMLZCarouselElement;

  /** The z-carousel is on loading state */
  @Prop()
  isLoading: boolean;

  /** The z-carousel title */
  @Prop()
  label?: string;

  /** Shows only one content at a time */
  @Prop({reflect: true})
  single = false;

  /** Arrow buttons position */
  @Prop({reflect: true})
  arrowsPosition?: CarouselArrowsPosition;

  /** Progress indicator type. Only available for `single` mode */
  @Prop()
  progressMode?: CarouselProgressMode;

  /**
   * Whether the navigation arrow buttons over the items are always visible or only on mouse hover.
   * If set to `false`, the arrows will not be visible on mobile.
   * Only meaningful with `arrowsPosition` set to `OVER`.
   */
  @Prop({reflect: true})
  fixedArrows = true;

  /** The height of the ghost loader (only visible when `isLoading` is set to `true`) */
  @Prop()
  ghostLoadingHeight = 100;

  /** When enabled, navigating next the last item will go back to the first item and vice versa. */
  @Prop()
  infinite = false;

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
  protected itemsContainer: HTMLUListElement;

  /** Observer that handles current index change when scrolling on single mode. */
  private intersectionObserver: IntersectionObserver;

  /** Observer to check if navigation can still be enabled/showed when the size of the items' container changes */
  private resizeObserver: ResizeObserver;

  /** Flag indicating the items container is about to scroll programmatically towards the stored index. */
  private scrollingTo: number = null;

  /** Emitted on index change and only in `single` mode. */
  @Event()
  indexChange: EventEmitter<{currentItem: number}>;

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

  @Watch("infinite")
  onInfiniteModeChange(): void {
    this.checkNavigationValidity();
  }

  /**
   * Set an intersection observer to:
   * - highlight the indicator of the intersecting item during scroll
   * - set the current item to the last intersecting item
   */
  private setIntersectionObserver(): void {
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries.find(({isIntersecting}) => isIntersecting);
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

  /** Update items' list and check conditions to allow navigation */
  private onSlotChange(): void {
    this.items = Array.from(this.host.children) as HTMLLIElement[];
    this.checkNavigationValidity();
    this.setIntersectionObserver();
    this.goTo(this.current);
  }

  private onPrev(): void {
    if (this.single) {
      this.goTo(this.infinite && this.current - 1 < 0 ? this.items.length - 1 : Math.max(0, this.current - 1));

      return;
    }

    this.itemsContainer.scrollBy({
      left:
        this.infinite && this.itemsContainer.scrollLeft == 0
          ? this.itemsContainer.scrollWidth - this.itemsContainer.clientWidth
          : -this.itemsContainer.clientWidth / 2,
      behavior: "smooth",
    });
  }

  private onNext(): void {
    if (this.single) {
      const next =
        this.infinite && this.current + 1 > this.items.length - 1
          ? 0
          : Math.min(this.current + 1, this.items.length - 1);

      return this.goTo(next);
    }

    this.itemsContainer.scrollBy({
      left:
        this.infinite &&
        this.itemsContainer.scrollLeft == this.itemsContainer.scrollWidth - this.itemsContainer.clientWidth
          ? -this.itemsContainer.scrollWidth
          : this.itemsContainer.clientWidth / 2,
      behavior: "smooth",
    });
  }

  /**
   * Check if navigation buttons can be enabled and set the related local states.
   */
  private checkNavigationValidity(): void {
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
  private canShowFooter(): boolean {
    if (!this.canNavigatePrev && !this.canNavigateNext) {
      return false;
    }

    return (
      this.arrowsPosition === CarouselArrowsPosition.BOTTOM ||
      this.progressMode === CarouselProgressMode.DOTS ||
      this.progressMode === CarouselProgressMode.NUMBERS
    );
  }

  /**
   * Set current item to passed index.
   * @param index Index to set
   */
  private goTo(index: number): void {
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
  private get canNavigate(): boolean {
    return this.canNavigatePrev || this.canNavigateNext;
  }

  private setupItems(): void {
    this.items = Array.from(this.host.children) as HTMLLIElement[];
    this.items.forEach((item) => {
      item.setAttribute("role", "group");
      item.setAttribute("aria-roledescription", "slide");
    });
  }

  componentDidLoad(): void {
    this.itemsContainer?.addEventListener("scroll", this.checkNavigationValidity.bind(this), {passive: true});
    this.resizeObserver = new ResizeObserver(this.checkNavigationValidity.bind(this));
    this.resizeObserver.observe(this.itemsContainer);
    this.setupItems();
    if (this.single) {
      this.setIntersectionObserver();
    }
    this.checkNavigationValidity();
  }

  disconnectedCallback(): void {
    this.resizeObserver?.disconnect();
  }

  render(): HTMLDivElement | HTMLZCarouselElement {
    if (this.isLoading) {
      return (
        <div class="z-carousel-container">
          {this.label && <div class="heading-3-sb z-carousel-title">{this.label}</div>}
          <div style={{height: `${this.ghostLoadingHeight}px`}}>
            <z-ghost-loading></z-ghost-loading>
          </div>
        </div>
      );
    }

    return (
      <Host>
        <div
          class="z-carousel-container"
          role="group"
          aria-roledescription="carousel"
          aria-label={this.label || "Carousel"}
        >
          {this.label && <div class="z-carousel-title heading-3-sb">{this.label}</div>}
          <div class="z-carousel-wrapper">
            <z-button
              class="z-carousel-navigation-arrow"
              variant={ButtonVariant.SECONDARY}
              data-direction="prev"
              icon="arrow-left"
              onClick={this.onPrev.bind(this)}
              disabled={!this.infinite && !this.canNavigatePrev}
              hidden={this.arrowsPosition !== CarouselArrowsPosition.OVER || !this.canNavigate}
              ariaLabel={this.single ? "Mostra l'elemento precedente" : "Mostra gli elementi precedenti"}
            />
            <ul
              class="z-carousel-items-container"
              aria-atomic="false"
              aria-live="polite"
              ref={(el) => (this.itemsContainer = el)}
            >
              <slot onSlotchange={this.onSlotChange.bind(this)} />
            </ul>
            <z-button
              class="z-carousel-navigation-arrow"
              variant={ButtonVariant.SECONDARY}
              data-direction="next"
              icon="arrow-right"
              onClick={this.onNext.bind(this)}
              disabled={!this.infinite && !this.canNavigateNext}
              hidden={this.arrowsPosition !== CarouselArrowsPosition.OVER || !this.canNavigate}
              ariaLabel={this.single ? "Mostra l'elemento successivo" : "Mostra gli elementi successivi"}
            />
          </div>
        </div>

        {this.canShowFooter() && (
          <div class="z-carousel-footer">
            {this.arrowsPosition === CarouselArrowsPosition.BOTTOM && (
              <z-button
                class="z-carousel-navigation-arrow"
                variant={ButtonVariant.TERTIARY}
                icon="arrow-left"
                onClick={this.onPrev.bind(this)}
                disabled={!this.infinite && !this.canNavigatePrev}
                ariaLabel={this.single ? "Mostra l'elemento precedente" : "Mostra gli elementi precedenti"}
              />
            )}
            {this.progressMode === CarouselProgressMode.DOTS && this.single && this.items && (
              <div class="dots-progress">
                {this.items.map((_, index) => (
                  <button
                    type="button"
                    class={{current: this.highlightedIndicator === index}}
                    aria-label={
                      this.highlightedIndicator === index ? "Elemento corrente" : `Spostati all'elemento ${index + 1}`
                    }
                    onClick={() => this.goTo(index)}
                  />
                ))}
              </div>
            )}
            {this.progressMode === CarouselProgressMode.NUMBERS && this.single && this.items && (
              <div class="numbers-progress interactive-1">
                <span class="current">{this.current + 1}</span>
                <span>di</span>
                <span>{this.items.length}</span>
              </div>
            )}
            {this.arrowsPosition === CarouselArrowsPosition.BOTTOM && (
              <z-button
                class="z-carousel-navigation-arrow"
                variant={ButtonVariant.TERTIARY}
                icon="arrow-right"
                onClick={this.onNext.bind(this)}
                disabled={!this.infinite && !this.canNavigateNext}
                ariaLabel={this.single ? "Mostra l'elemento successivo" : "Mostra gli elementi successivi"}
              />
            )}
          </div>
        )}
      </Host>
    );
  }
}

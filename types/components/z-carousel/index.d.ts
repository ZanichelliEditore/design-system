import { EventEmitter } from "../../stencil-public-runtime";
import { CarouselArrowsPosition, CarouselProgressMode } from "../../beans";
/**
 * ZCarousel component.
 * @cssprop --z-carousel-gutter - The gutter between items.
 * @slot - carousel items. use `<li>` elements inside this slot as it is wrapped inside an `<ul>`
 */
export declare class ZCarousel {
  hostElement: HTMLZCarouselElement;
  /** The z-carousel is on loading state */
  isLoading: boolean;
  /** The z-carousel title, if given. */
  label?: string;
  /** Shows only one content at a time */
  single: boolean;
  /** Arrow buttons position */
  arrowsPosition?: CarouselArrowsPosition;
  /** Progress indicator. Only available for `single` mode */
  progressMode?: CarouselProgressMode;
  /** The height of z-carousel ghost loading, this prop is mandatory when isloading is set to true, as otherwise the component won't show. */
  ghostLoadingHeight: number;
  /** Current item index for single mode. */
  current: number;
  /** Items on the slider. */
  items: HTMLLIElement[];
  /** Reference for the items container element. */
  private itemsContainer;
  /** Observer that handles current index change when scrolling on single mode. */
  private intersectionObserver;
  /** Flag indicating the items container is scrolling programmatically towards the stored index. */
  private scrollingTo;
  /** Emitted on index change and only in `single` mode. */
  indexChange: EventEmitter;
  onIndexChange(): void;
  onSingleModeChange(): void;
  componentDidLoad(): void;
  /**
   * Set an intersection observer to show the current index to the indicator when scrolling.
   */
  private setIntersectionObserver;
  private onPrev;
  private onNext;
  /**
   * Check if footer can be rendered.
   * @returns {boolean}
   */
  private canShowFooter;
  /**
   * Set current item to passed index.
   * @param {number} index Index to set
   * @returns {void}
   */
  private goTo;
  render(): HTMLZCarouselElement;
}

import { EventEmitter } from "../../stencil-public-runtime";
import { CarouselArrowsPosition, CarouselProgressMode } from "../../beans";
/**
 * ZCarousel component.
 * @cssprop --z-carousel-gutter - The gutter between items.
 * @cssprop --z-carousel-items-shadow - The shadow around the items.
 * @slot - Carousel items. Use `<li>` elements inside this slot.
 */
export declare class ZCarousel {
    host: HTMLZCarouselElement;
    /** The z-carousel is on loading state */
    isLoading: boolean;
    /** The z-carousel title */
    label?: string;
    /** Shows only one content at a time */
    single: boolean;
    /** Arrow buttons position */
    arrowsPosition?: CarouselArrowsPosition;
    /** Progress indicator type. Only available for `single` mode */
    progressMode?: CarouselProgressMode;
    /**
     * Whether the navigation arrow buttons over the items are always visible or only on mouse hover.
     * If set to `false`, the arrows will not be visible on mobile.
     * Only meaningful with `arrowsPosition` set to `OVER`.
     */
    fixedArrows: boolean;
    /** The height of the ghost loader (only visible when `isLoading` is set to `true`) */
    ghostLoadingHeight: number;
    /** When enabled, navigating next the last item will go back to the first item and vice versa. */
    infinite: boolean;
    /** Current item index for single mode. */
    current: number;
    /** Items on the slider. */
    items: HTMLLIElement[];
    /** Index of the indicator to highlight. */
    highlightedIndicator: number;
    canNavigatePrev: boolean;
    canNavigateNext: boolean;
    /** Reference for the items container element. */
    protected itemsContainer: HTMLUListElement;
    /** Observer that handles current index change when scrolling on single mode. */
    private intersectionObserver;
    /** Observer to check if navigation can still be enabled/showed when the size of the items' container changes */
    private resizeObserver;
    /** Flag indicating the items container is about to scroll programmatically towards the stored index. */
    private scrollingTo;
    /** Emitted on index change and only in `single` mode. */
    indexChange: EventEmitter<{
        currentItem: number;
    }>;
    onIndexChange(): void;
    onSingleModeChange(): void;
    onInfiniteModeChange(): void;
    /**
     * Set an intersection observer to:
     * - highlight the indicator of the intersecting item during scroll
     * - set the current item to the last intersecting item
     */
    private setIntersectionObserver;
    /** Update items' list and check conditions to allow navigation */
    private onSlotChange;
    private onPrev;
    private onNext;
    /**
     * Check if navigation buttons can be enabled and set the related local states.
     */
    private checkNavigationValidity;
    /**
     * Check if footer has to be rendered.
     */
    private canShowFooter;
    /**
     * Set current item to passed index.
     * @param index Index to set
     */
    private goTo;
    /** Check if navigation of at least one direction is enabled */
    private get canNavigate();
    private setupItems;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render(): HTMLDivElement | HTMLZCarouselElement;
}

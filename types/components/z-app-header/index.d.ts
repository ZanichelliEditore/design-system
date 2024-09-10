import { EventEmitter } from "../../stencil-public-runtime";
/**
 * @slot title - Slot for the main title
 * @slot top-subtitle - Slot for the top subtitle. It will not appear in stuck header.
 * @slot stucked-title - Title for the stuck header. By default it uses the text from the `title` slot.
 * @slot product-logo - To insert the product logo, it should be used with an img tag.
 * @cssprop --app-header-content-max-width - Use it to set header's content max width. Useful when the project use a fixed width layout. Defaults to `100%`.
 * @cssprop --app-header-top-offset - Top offset for the stuck header. Useful when there are other fixed elements above the header. Defaults to `48px` (the height of the main topbar).
 * @cssprop --app-header-drawer-trigger-size - The size of the drawer icon. Defaults to `--space-unit * 4`.
 * @cssprop --app-header-bg - Header background color. Defaults to `--color-surface01`.
 * @cssprop --app-header-stucked-bg - Stuck header background color. Defaults to `--color-surface01`.
 * @cssprop --app-header-stucked-text-color - Stuck header text color. Defaults to `--color-default-text`.
 */
export declare class ZAppHeader {
    hostElement: HTMLZAppHeaderElement;
    /**
     * Stuck mode for the header.
     * You can programmatically set it using an IntersectionObserver.
     */
    stuck: boolean;
    /**
     * the menu bar is not displayed and a burger icon appears to open the offcanvas menu
     */
    enableOffcanvas: boolean;
    /**
     * Enable the search bar.
     */
    enableSearch: boolean;
    /**
     * Placeholder text for the search bar.
     */
    searchPlaceholder: string;
    /**
     * Search string for the search bar.
     */
    searchString: string;
    /**
     * Url to the search page.
     * Set this prop and `enableSearch` to show a link-button on mobile and tablet viewports, instead of the normal searchbar.
     * The link will also appear on the sticky header.
     */
    searchPageUrl: string;
    /**
     * Enable laZ logo.
     */
    enableZLogo: boolean;
    /**
     * The stuck state of the bar.
     */
    private _stuck;
    /**
     * Current viewport.
     * Used to change the aspect of the search button (icon only) on mobile and tablet.
     */
    private currentViewport;
    /**
     * Current count of menu items.
     */
    menuLength: number;
    /**
     * Emitted when the `stuck` state of the header changes
     */
    sticking: EventEmitter;
    /**
     * The opening state of the drawer.
     */
    private drawerOpen;
    private container?;
    private menuElements?;
    private closeMenuButton;
    private burgerButton;
    private searchbar;
    /** Observer when the size of the element container changes */
    private resizeObserver;
    private currentIndex;
    private observer?;
    constructor();
    evaluateViewport(): void;
    handleKeyDown(e: KeyboardEvent): void;
    private handleArrowsNav;
    private getNextItem;
    onStuck(): void;
    setMenuFloatingMode(): void;
    onStuckMode(): void;
    private enableStuckObserver;
    private disableStuckMode;
    private get title();
    private get scrollParent();
    private get canShowMenu();
    private openDrawer;
    private closeDrawer;
    private collectMenuElements;
    private isSlotPresent;
    private renderSeachbar;
    private renderProductLogos;
    private renderMenuButton;
    private renderOffcanvas;
    private renderStuck;
    private getWidthMenu;
    private focusToFirstItemMenu;
    private handleFocusItem;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render(): HTMLZAppHeaderElement;
}

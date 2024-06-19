import { EventEmitter } from "../../stencil-public-runtime";
import { NavigationTabsOrientation, NavigationTabsSize } from "../../beans";
/**
 * Navigation tabs component.
 * To select a specific tab programmatically, set the `aria-selected` attribute to `true` on the desired tab.
 * @slot - Main slot. Use `<button>` or `<a>` tags as children.
 * @cssprop --z-navigation-tabs-nav-buttons-bg - Navigation buttons background color.
 * @cssprop --z-navigation-tabs-nav-buttons-fg - Navigation buttons foreground color.
 */
export declare class ZNavigationTabs {
    /**
     * Set `aria-label` attribute to the internal `<nav>` element with `tablist` role.
     */
    ariaLabel: string;
    /**
     * Navigation tabs orientation.
     */
    orientation?: NavigationTabsOrientation;
    /**
     * Navigation tabs size.
     */
    size?: NavigationTabsSize;
    /**
     * Index of the selected tab.
     * Useful to programmatically select a tab.
     * The tab can also be selected by setting the `aria-selected` attribute to `true` on the desired tab.
     */
    selectedTab: number;
    /**
     * Emitted when the selected tab changes.
     * Contains the index of the new selected tab in the `detail` of the event.
     */
    selected: EventEmitter<number>;
    /**
     * Whether to show navigation buttons.
     */
    canNavigate: boolean;
    /**
     * Whether backwards navigation is allowed.
     */
    canNavigatePrev: boolean;
    /**
     * Whether forward navigation is allowed.
     */
    canNavigateNext: boolean;
    host: HTMLZNavigationTabsElement;
    /**
     * Index of the last tab that held focus.
     */
    private focusedTab;
    /**
     * Reference to the `<nav>` element
     */
    private nav;
    /**
     * Getter for the direction to check based on current orientation.
     */
    get direction(): string;
    /**
     * Getter for the dimension to check based on current orientation.
     */
    get dimension(): string;
    get tabs(): HTMLElement[];
    private resizeObserver;
    /**
     * Scroll into view to center the tab.
     */
    private scrollToTab;
    /**
     * Scroll the navigation bar half of its size backward.
     */
    private navigateBackwards;
    /**
     * Scroll the navigation bar half of its size forward.
     */
    private navigateForward;
    /**
     * Check if a keyboard event was triggered by an arrow key.
     */
    private isArrowNavigation;
    /**
     * Check if the navigation buttons are needed.
     */
    private checkScrollVisible;
    /**
     * Check if navigation buttons can be enabled for each direction.
     */
    checkScrollEnabled(): void;
    /**
     * When the selected tab changes, update the `aria-selected` attribute on each tab and scroll to the selected tab.
     */
    onTabSelected(): void;
    /**
     * Handle click on the tabs.
     * @param event `click` event triggered by a child tab
     */
    handleTabClick(event: MouseEvent): void;
    /**
     * When a tab is focused, temporarily set to -1 the `tabindex` of the selected tab (if any) and set the `focusedTab` to the index of the focused tab.
     */
    onTabFocusIn(event: FocusEvent): void;
    /**
     * Handle keyboard navigation through tabs with arrow keys.
     */
    navigateThroughTabs(event: KeyboardEvent): void | boolean;
    /**
     * If the focus is not going on a tab (`relatedTarget` is the new focused element), set to 0 the `tabindex` of the selected tab or the one of the first tab, then unset the `focusedTab`.
     */
    onTabFocusOut(event: FocusEvent): void;
    connectedCallback(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render(): HTMLZNavigationTabsElement;
}

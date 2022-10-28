import { NavigationTabsSize, NavigationTabsOrientation } from "../../../../beans";
/**
 * Navigation tabs component.
 * @slot - Main slot. Use `z-navigation-tab` or `z-navigation-tab-link` components as children.
 */
export declare class ZNavigationTabs {
  /**
   * Navigation tabs orientation.
   */
  orientation?: NavigationTabsOrientation;
  /**
   * Navigation tabs size.
   */
  size?: NavigationTabsSize;
  /**
   * Whether to show navigation buttons.
   */
  canNavigate: boolean;
  /**
   * Whether backwards navigation is enabled.
   */
  canNavigatePrev: boolean;
  /**
   * Whether forward navigation is enabled.
   */
  canNavigateNext: boolean;
  host: HTMLZNavigationTabsElement;
  private tabsNav;
  /**
   * Getter for the direction to check based on current orientation.
   */
  get direction(): string;
  /**
   * Getter for the dimension to check based on current orientation.
   */
  get dimension(): string;
  /**
   * Set the `size` prop to all `z-navigation-tab` children.
   */
  setChildrenSize(): void;
  /**
   * Set the `orientation` prop to all `z-navigation-tab` children.
   */
  setChildrenOrientation(): void;
  /**
   * Check if the navigation buttons are needed on window resize.
   */
  checkScrollVisible(): void;
  /**
   * Check if navigation buttons can be enabled for each direction.
   */
  checkScrollEnabled(): void;
  /**
   * Listen for child tab selection.
   * Deselect all other previously selected tabs,
   * then scroll to the new selected tab and center it.
   * @param {CustomEvent} event `selected` event triggered by a child tab
   */
  onTabSelected(event: CustomEvent): void;
  /**
   * Scroll the navigation bar half of its size backward.
   */
  private navigateBackwards;
  /**
   * Scroll the navigation bar half of its size forward.
   */
  private navigateForward;
  componentDidRender(): void;
  render(): HTMLZNavigationTabsElement;
}

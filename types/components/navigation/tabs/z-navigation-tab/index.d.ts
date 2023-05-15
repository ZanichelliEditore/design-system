import { NavigationTabsOrientation, NavigationTabsSize } from "../../../../beans";
/**
 * Single tab component to use inside `z-navigation-tabs`. It renders a button.
 */
export declare class ZNavigationTab {
  /**
   * set aria-controls attribute to tab property identifying a corresponding tabpanel
   * the aria-controls attribute refers to the id of the HTML element that has role="tabpanel"
   * and that contains the actual content of this tab.
   * ref: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls
   */
  ariaControls?: string;
  /**
   * set id attribute to tab property identifying a corresponding tabpanel attribute aria-labelledby.
   * ref: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role
   */
  tabId?: string;
  /**
   * Whether the tab is selected.
   */
  selected?: boolean;
  /**
   * Whether the tab is disabled.
   */
  disabled?: boolean;
  /**
   * Tab orientation. Do not set this manually: `z-navigation-tabs` will handle this.
   */
  orientation: NavigationTabsOrientation;
  /**
   * Tab size. Do not set this manually: `z-navigation-tabs` will handle this.
   */
  size: NavigationTabsSize;
  /**
   * Name of the icon to use.
   * The `filled` version will be automatically used (if found) when the tab is `selected`.
   */
  icon: string;
  /**
   * Label to show in the tab.
   */
  label: string;
  /**
   * Html `title` attribute for the button.
   */
  htmlTitle: string;
  /**
   * The tab has been selected.
   */
  private selectedEvent;
  /**
   * Scroll into view to center the tab.
   */
  private scrollToTab;
  onClick(): void;
  onSelected(): void;
  /**
   * Render the icon component using the icon's name passed from prop.
   * Use the `filled` version when the tab is `selected`.
   * @returns {HTMLElement}
   */
  private renderIcon;
  render(): HTMLButtonElement;
}

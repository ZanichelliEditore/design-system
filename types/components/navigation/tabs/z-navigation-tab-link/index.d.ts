import { NavigationTabsOrientation, NavigationTabsSize } from "../../../../beans";
/**
 * Single tab component to use inside `z-navigation-tabs`. It renders an anchor element.
 */
export declare class ZNavigationTabLink {
  /**
   * set aria-controls attribute to tab property identifying a corresponding tabpanel
   * (that has a tabpanel role) by that element's id.
   * When an element with the tabpanel role has focus, or a child of it has focus,
   * that indicates that the connected element with the tab role is the active tab in a tablist.
   */
  ariaControls?: string;
  /**
   * set id attribute to tab property identifying a corresponding tabpanel
   * (that has a tabpanel role) by that element's attribute  aria-labelledby.
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
   * Html title attribute for the anchor element.
   */
  htmlTitle: string;
  /**
   * Html `target` attribute for the anchor element.
   */
  target: string;
  /**
   * Url to set to the anchor element.
   */
  href: string;
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
  render(): HTMLAnchorElement;
}

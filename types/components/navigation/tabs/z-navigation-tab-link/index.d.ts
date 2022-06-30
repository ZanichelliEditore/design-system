import { NavigationTabsOrientation, NavigationTabsSize } from "../../../../beans";
/**
 * Single tab component to use inside `z-navigation-tabs`. It renders an anchor element.
 */
export declare class ZNavigationTabLink {
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
  private selectedEvent;
  /**
   * Scroll into view to center the tab.
   */
  scrollToTab({ target: button }: {
    target: any;
  }): void;
  onClick(): void;
  onSelected(): void;
  /**
   * Render the icon component using the icon's name passed from prop.
   * Use the `filled` version when the tab is `selected`.
   * @returns {HTMLElement}
   */
  renderIcon(): any;
  render(): any;
}

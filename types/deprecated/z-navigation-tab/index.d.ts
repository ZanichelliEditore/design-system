import { NavigationTabsOrientation, NavigationTabsSize } from "../../beans";
/**
 * Single tab component to use inside `z-navigation-tabs`. It renders a button.
 * This component uses the `tab` role:
 * @link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role
 */
export declare class ZNavigationTab {
  /**
   * `aria-controls` attribute of the tab.
   * Identifies the element (with `role=tabpanel`) whose contents or presence are controlled by this tab.
   * The value must be the `id` of the element it controls.
   * @link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls
   */
  ariaControls?: string;
  /**
   * `id` attribute of the tab.
   * Set this id to the `aria-labelledby` attribute of the controlled `tabpanel` element.
   * @link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby
   * @deprecated Use native `id` attribute instead
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
   * @deprecated Use a native `<button>` instead.
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
  render(): HTMLZNavigationTabElement;
}

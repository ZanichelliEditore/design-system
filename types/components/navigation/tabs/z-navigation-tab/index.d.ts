import { NavigationTabsOrientation, NavigationTabsSize } from "../../../../beans";
/**
 * Single tab component to use inside `z-navigation-tabs`. It renders a button.
 * @slot icon - Tab icon. If no extra customization is needed, use the `icon` prop passing the icon's name.
 */
export declare class ZNavigationTab {
  host: HTMLElement;
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
   * Name of the icon to use. Use the slot `icon` for extra customization.
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
  private emitSelected;
  onFocus(): void;
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

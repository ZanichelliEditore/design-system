import { PopoverPosition, SortDirection, VisibilityCondition } from "../../../../beans";
/**
 * ZTh component.
 * @slot - ZTh content.
 * @slot contextual-menu - Contextual menu content. Only visible when `showMenu` is true.
 */
export declare class ZTh {
  host: HTMLZThElement;
  /**
   * Number of columns that the cell should span.
   */
  colspan: number;
  /**
   * Enables the contextual menu.
   * Can be set to "hover" or "always" to show the button only on cell hover or always.
   * Set a nullish value to hide the menu button.
   */
  showMenu: VisibilityCondition;
  /**
   * Whether the cell should stick.
   */
  sticky: boolean;
  /**
   * Current sorting direction.
   * Set `SortDirection.ASC` or `SortDirection.DESC` to show the sort icon.
   */
  sortDirection?: SortDirection;
  /**
   * Set popover position.
   */
  popoverPosition: PopoverPosition;
  /**
   * Store the open state of the menu.
   */
  isMenuOpen: boolean;
  /**
   * Sort event fired when the user clicks on the sort button.
   * The sorting logic must be implemented by the app.
   * You can set an `id` on the `z-th` to easly identify the column in the event listener.
   */
  private sort;
  private menuTrigger;
  private popoverEl;
  /**
   * Get the value to set to the `aria-sort` attribute based on the current sort direction.
   */
  private get ariaSortDirection();
  /**
   * Handle the click on the sort button.
   * @fires sort
   */
  private handleSort;
  protected updateColspan(): void;
  componentWillLoad(): void;
  render(): HTMLZThElement;
}

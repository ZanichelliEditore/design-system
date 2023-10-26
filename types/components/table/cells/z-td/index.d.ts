import { EventEmitter } from "../../../../stencil-public-runtime";
import { VisibilityCondition } from "../../../../beans";
/**
 * ZTd component.
 * @slot - ZTd content.
 */
export declare class ZTd {
  host: HTMLZTdElement;
  /**
   * Number of columns that the cell should span.
   */
  colspan: number;
  /**
   * Whether the cell should stick.
   */
  sticky: boolean;
  /**
   * Enables the contextual menu.
   * Can be set to "hover" or "always" to show the button only on cell hover or always.
   * Set a nullish value to hide the menu button.
   */
  showMenu: VisibilityCondition;
  /**
   * Store the open state of the menu.
   */
  isMenuOpen: boolean;
  private menuTrigger;
  private popoverEl;
  /**
   * Emitted when the value of the `colspan` changes.
   */
  colspanChange: EventEmitter<number>;
  protected updateColspan(): void;
  private onMenuButtonClick;
  componentWillLoad(): void;
  render(): HTMLZTdElement;
}

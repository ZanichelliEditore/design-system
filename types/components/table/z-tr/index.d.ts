import { EventEmitter } from "../../../stencil-public-runtime";
import "../cells/z-td/index";
import "../cells/z-th/index";
/**
 * ZTr component.
 * When the row is `expandable`, you can set the `prevent-expand` css class on an interactive element inside the row
 * to prevent the row from expanding.
 * @slot - ZTr content (`z-td` or `z-th`).
 */
export declare class ZTr {
  host: HTMLZTrElement;
  /**
   * Whether the row is expandable.
   * Use a `z-td` as the last cell of the row for the additional content.
   * It will show a button to expand/collapse the row.
   * The last cell will be hidden until the button or row is clicked.
   *
   * If some element inside the expandable row contains the `prevent-expand` css class,
   * the row will not expand by clicking that element.
   */
  expandable: boolean;
  /**
   * Whether the row is currently expanded.
   */
  expanded: boolean;
  /**
   * HTML Id of the expandable content.
   * It is used to link the button to the content through the `aria-controls` attribute.
   */
  expandableContentId: string;
  /** Row has been expanded */
  expand: EventEmitter;
  protected updateColumns(): void;
  /**
   * Handle click on row.
   * Skip expansion if the click is on a element with `prevent-expand` css class.
   */
  private onRowClick;
  componentWillLoad(): void;
  render(): HTMLZTrElement;
}

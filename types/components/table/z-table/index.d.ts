import { EventEmitter } from "../../../stencil-public-runtime";
import "../z-thead/index";
import "../z-tbody/index";
import "../z-tr/index";
import "../z-tfoot/index";
/**
 * ZTable component.
 * @slot - Table content (`z-thead`, `z-tbody`, `z-tfoot`, `z-tr`).
 * @cssprop --z-table--cells-padding - Padding of the cells.
 */
export declare class ZTable {
  host: HTMLZTableElement;
  /**
   * Whether the table cells should show a border between them.
   */
  bordered: boolean;
  /**
   * Whether the table contains some expandable rows.
   */
  expandable: boolean;
  private updateExpandable;
  /**
   * Table emits its own resize event when it changes size, using a ResizeObserver.
   * This is convenient for sticky cells that needs to update styles when stuck.
   */
  tableResize: EventEmitter<ZTable>;
  private resizeObserver;
  private expandableMutationObserver;
  /**
   * Setup table:
   * - create the resize observer for resize event
   * - create mutation observer for expandable attribute
   */
  componentWillLoad(): void;
  disconnectedCallback(): void;
  render(): HTMLZTableElement;
}

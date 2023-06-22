import {Component, Element, Event, EventEmitter, Host, Prop, State, h} from "@stencil/core";
import "../z-thead/index";
import "../z-tbody/index";
import "../z-tr/index";
import "../z-tfoot/index";

/**
 * ZTable component.
 * @slot - Table content (z-thead, z-tbody, z-tfoot, z-tr).
 * @cssprop --z-table--cell-padding - Padding of the cells.
 */
@Component({
  tag: "z-table",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZTable {
  @Element() host: HTMLZTableElement;

  /**
   * Whether the table cells should show a border between them.
   */
  @Prop({reflect: true})
  bordered = false;

  /**
   * Whether the table contains some expandable rows.
   */
  @State()
  expandable = false;

  private updateExpandable(): void {
    this.expandable = this.host.querySelectorAll("z-tr[expandable]").length > 0;
  }

  /**
   * Table emits its own resize event when it changes size, using a ResizeObserver.
   * This is convenient for sticky cells that needs to update styles when stuck.
   */
  @Event()
  tableResize: EventEmitter<ZTable>;

  /**
   * Setup table:
   * - create the resize observer for resize event
   * - create mutation observer for expandable attribute
   */
  componentWillLoad(): void {
    const resizeObserver = new ResizeObserver(() => {
      this.tableResize.emit(this);
    });

    resizeObserver.observe(this.host);

    const mutationObserver = new MutationObserver(() => {
      this.updateExpandable();
    });
    mutationObserver.observe(this.host, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["expandable"],
      attributeOldValue: false,
    });
  }

  render(): HTMLZTableElement {
    return (
      <Host expandable={this.expandable}>
        <div
          class="table"
          role="table"
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}

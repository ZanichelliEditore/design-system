import {Component, Element, Event, EventEmitter, Host, Prop, State, h} from "@stencil/core";
import "../z-thead/index";
import "../z-tbody/index";
import "../z-tr/index";
import "../z-tfoot/index";

/**
 * ZTable component.
 * @slot - Table content (`z-thead`, `z-tbody`, `z-tfoot`, `z-tr`).
 * @cssprop --z-table--cells-padding - Padding of the cells.
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

  private resizeObserver: ResizeObserver;

  private expandableMutationObserver: MutationObserver;

  /**
   * Setup table:
   * - create the resize observer for resize event
   * - create mutation observer for expandable attribute
   */
  componentWillLoad(): void {
    this.resizeObserver = new ResizeObserver(() => {
      this.tableResize.emit(this);
    });

    this.resizeObserver.observe(this.host);

    this.expandableMutationObserver = new MutationObserver(() => {
      this.updateExpandable();
    });
    this.expandableMutationObserver.observe(this.host, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["expandable"],
      attributeOldValue: false,
    });
  }

  disconnectedCallback(): void {
    this.resizeObserver.disconnect();
    this.expandableMutationObserver.disconnect();
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

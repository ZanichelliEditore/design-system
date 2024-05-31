import {Component, Element, Host, Prop, State, h} from "@stencil/core";
import "../z-tbody/index";
import "../z-tfoot/index";
import "../z-thead/index";
import "../z-tr/index";

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

  private expandableMutationObserver: MutationObserver;

  /**
   * Setup the table creating a mutation observer for the expandable attribute.
   */
  componentWillLoad(): void {
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
    this.expandableMutationObserver?.disconnect();
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

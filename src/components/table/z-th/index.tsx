import {Component, Element, Host, Prop, State, Watch, h} from "@stencil/core";

/**
 * ZTh component.
 */
@Component({
  tag: "z-th",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZTh {
  @Element() host: HTMLZThElement;

  /**
   * Number of columns that the cell should span.
   */
  @Prop()
  colspan: number;

  /**
   * Whether the cell should stick.
   */
  @Prop({reflect: true})
  sticky = false;

  /**
   * Whether the cell is currently stuck.
   */
  @State()
  stuck = false;

  private ownerTable?: HTMLZTableElement;

  protected onTableScroll(): void {
    const table = this.ownerTable;
    if (!table) {
      return;
    }

    const tableBoundingClientRect = table.getBoundingClientRect();
    const boundingClientRect = this.host.getBoundingClientRect();
    const tableRight = tableBoundingClientRect.right - (table.offsetWidth - table.clientWidth) + 2;
    this.stuck = boundingClientRect.left === tableBoundingClientRect.left || boundingClientRect.right === tableRight;
  }

  @Watch("colspan")
  protected updateColspan(): void {
    if (this.colspan) {
      this.host.style.gridColumn = `span ${this.colspan}`;
    } else {
      this.host.style.removeProperty("grid-column");
    }
  }

  @Watch("sticky")
  protected updateSticky(): void {
    const table = this.ownerTable;
    if (!table) {
      this.stuck = false;

      return;
    }

    table.removeEventListener("scroll", this.onTableScroll);
    table.removeEventListener("tableResize", this.onTableScroll);

    if (this.sticky) {
      table.addEventListener("scroll", this.onTableScroll, {capture: true, passive: true});
      table.addEventListener("tableResize", this.onTableScroll, {capture: true, passive: true});
      this.onTableScroll();
    } else {
      this.stuck = false;
    }
  }

  connectedCallback(): void {
    this.ownerTable = this.host.closest("z-table");
    this.updateSticky();
  }

  disconnectedCallback(): void {
    this.updateSticky();
    this.ownerTable = undefined;
  }

  componentWillLoad(): void {
    this.updateColspan();
    this.updateSticky();
  }

  render(): HTMLZThElement {
    return (
      <Host
        role="columnheader"
        stuck={this.stuck}
      >
        <slot></slot>
      </Host>
    );
  }
}

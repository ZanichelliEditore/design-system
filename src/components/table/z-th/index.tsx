import {Component, Element, Host, Prop, State, Watch, h} from "@stencil/core";
import {ButtonVariant, ControlSize} from "../../../beans";

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
   * Enables the contextual menu.
   * If true, a contextual menu button will be shown on hover.
   */
  @Prop({reflect: true})
  showMenu = false;

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

  /**
   * Store the open state of the menu.
   */
  @State()
  isMenuOpen = false;

  private ownerTable?: HTMLZTableElement;

  private menuTrigger: HTMLZButtonElement;

  private popoverEl: HTMLZPopoverElement;

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
        menu-open={this.isMenuOpen}
      >
        <slot></slot>
        {this.showMenu && (
          <div class="z-th--menu-container prevent-expand">
            <z-button
              variant={ButtonVariant.TERTIARY}
              icon="contextual-menu"
              size={ControlSize.X_SMALL}
              ref={(el) => (this.menuTrigger = el as HTMLZButtonElement)}
              onClick={() => (this.popoverEl.open = !this.popoverEl.open)}
            />
            <z-popover
              ref={(el) => (this.popoverEl = el as HTMLZPopoverElement)}
              bindTo={this.menuTrigger}
              onOpenChange={(event) => (this.isMenuOpen = event.detail.open)}
            >
              <slot name="contextual-menu"></slot>
            </z-popover>
          </div>
        )}
      </Host>
    );
  }
}

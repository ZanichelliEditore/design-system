import {Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h} from "@stencil/core";
import {ButtonVariant, ControlSize, PopoverPosition, SortDirection, VisibilityCondition} from "../../../../beans";

/**
 * ZTh component.
 * @slot - ZTh content.
 * @slot contextual-menu - Contextual menu content. Only visible when `showMenu` is true.
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
   * Can be set to "hover" or "always" to show the button only on cell hover or always.
   * Set a nullish value to hide the menu button.
   */
  @Prop({reflect: true})
  showMenu: VisibilityCondition = null;

  /**
   * Enables the sorting button.
   * Can be set to "hover" or "always" to show the button only on cell hover or always.
   * Set a nullish value to hide the sort button.
   */
  @Prop({reflect: true})
  showSorting: VisibilityCondition = null;

  /**
   * Whether the cell should stick.
   */
  @Prop({reflect: true})
  sticky = false;

  /**
   * Current sorting direction.
   * Set `SortDirection.ASC` or `SortDirection.DESC` to show the sort icon.
   */
  @Prop({mutable: true})
  sortDirection?: SortDirection;

  /**
   * Set popover position.
   */
  @Prop()
  popoverPosition = PopoverPosition.AUTO;

  /**
   * Store the open state of the menu.
   */
  @State()
  isMenuOpen = false;

  /**
   * Sort event fired when the user clicks on the sort button.
   * The sorting logic must be implemented by the app.
   * You can set an `id` on the `z-th` to easly identify the column in the event listener.
   */
  @Event()
  private sort: EventEmitter;

  private menuTrigger: HTMLElement;

  private popoverEl: HTMLZPopoverElement;

  /**
   * Get the value to set to the `aria-sort` attribute based on the current sort direction.
   */
  private get ariaSortDirection(): string {
    if (!this.sortDirection) {
      return null;
    }

    return this.sortDirection === SortDirection.ASC ? "ascending" : "descending";
  }

  /**
   * Handle the click on the sort button.
   * This method will also handle the z-index logic.
   * @fires sort
   */
  private handleSort(): void {
    if (!this.sortDirection) {
      return;
    }

    this.sortDirection = this.sortDirection === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC;

    this.sort.emit({sortDirection: this.sortDirection});

    const row = this.host.parentElement;
    if (row) {
      const zThElements = Array.from(row.querySelectorAll("z-th"));
      zThElements.forEach((th) => (th.style.zIndex = "1"));
    }

    this.host.style.zIndex = "2";
  }

  @Watch("colspan")
  protected updateColspan(): void {
    if (this.colspan) {
      this.host.style.gridColumn = `span ${this.colspan}`;
    } else {
      this.host.style.removeProperty("grid-column");
    }
  }

  componentWillLoad(): void {
    this.updateColspan();
  }

  render(): HTMLZThElement {
    return (
      <Host
        tabIndex="0"
        menu-open={this.isMenuOpen}
        aria-sort={this.ariaSortDirection}
        sortable={this.showSorting}
      >
        <div
          tabIndex={1}
          class="zth-body"
          onClick={() => {
            if (this.showSorting) {
              this.handleSort();
            }
          }}
        >
          <div
            class="z-th-content-container"
            style={this.showMenu && {justifyContent: "space-between"}}
          >
            <slot></slot>
            {this.showSorting && (
              <button
                class={{"z-th--sort-button": true, "sort-active": this.showSorting === VisibilityCondition.ALWAYS}}
                type="button"
                onClick={this.handleSort.bind(this)}
              >
                <z-icon
                  name={this.sortDirection === SortDirection.DESC ? "arrow-simple-up" : "arrow-simple-down"}
                  width={14}
                  height={14}
                />
              </button>
            )}
            {this.showMenu && (
              <div class="cell--menu-container">
                <z-button
                  variant={ButtonVariant.TERTIARY}
                  icon="contextual-menu"
                  size={ControlSize.X_SMALL}
                  ref={(el) => (this.menuTrigger = el as HTMLElement)}
                  onClick={() => (this.popoverEl.open = !this.popoverEl.open)}
                />
                <z-popover
                  ref={(el) => (this.popoverEl = el as HTMLZPopoverElement)}
                  bindTo={this.menuTrigger}
                  onOpenChange={(event) => (this.isMenuOpen = event.detail.open)}
                  position={this.popoverPosition}
                >
                  <slot name="contextual-menu"></slot>
                </z-popover>
              </div>
            )}
          </div>
        </div>
      </Host>
    );
  }
}

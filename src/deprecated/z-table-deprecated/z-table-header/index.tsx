import {Component, Element, Event, EventEmitter, h, Host, Listen, Prop} from "@stencil/core";
import {ButtonSize, ButtonVariant, PopoverPosition} from "../../../beans";
import {getElementTree} from "../../../utils/utils";

/**
 * @deprecated
 */
@Component({
  tag: "z-table-header",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZTableHeader {
  @Element() host: HTMLZTableHeaderElement;

  /** Column ID */
  @Prop()
  columnId: string;

  /** Set padding size of cell, if special 0px padding will be set */
  @Prop({reflect: true})
  padding: "x-small" | "small" | "medium" | "large" | "special" = "medium";

  /** [Optional] Make the header sortable */
  @Prop()
  sortable?: boolean;

  /** [Optional] Show contextual menu button */
  @Prop()
  showButton?: boolean;

  /** [Optional] Default sort order */
  @Prop()
  defaultSortDirection?: "asc" | "desc" | "none" = "asc";

  /** Sort direction */
  @Prop({mutable: true})
  sortDirection: "asc" | "desc" | "none" = "none";

  private popover?: HTMLZPopoverElement;

  private triggerButton?: HTMLZButtonElement;

  constructor() {
    this.emitOnSort = this.emitOnSort.bind(this);
  }

  /** [Optional] callback for sorting */
  @Event()
  sort: EventEmitter;

  private emitOnSort(): void {
    this.sort.emit({
      columnId: this.columnId,
      sortDirection: this.sortDirection,
    });
  }

  private handleSort(): void {
    if (!this.sortable) {
      return;
    }

    this.sortDirection = (() => {
      switch (this.sortDirection) {
        case "asc":
          return "desc";
        case "desc":
          return "asc";
        case "none":
          return this.defaultSortDirection;
        default:
          return "none";
      }
    })();

    this.emitOnSort();
  }

  private handleMenuClick(): void {
    this.popover.open = !this.popover.open;
  }

  @Listen("click", {target: "body", capture: true})
  handleOutsideClick(e: MouseEvent): void {
    const tree = getElementTree(e.target as Element);
    const parent = tree.find((elem: Element) => elem.nodeName.toLowerCase() === "z-popover");

    if (!parent && this.popover) {
      this.popover.open = false;
    }
  }

  @Listen("click", {target: "body", capture: true})
  handleClickHeaders(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    const parent = getElementTree(target).find((elem: Element) => elem.nodeName.toLowerCase() === "z-table-header");

    if (!this.sortable || !parent) {
      return;
    }

    const parentColumnId = parent.attributes.getNamedItem("column-id").value;
    const isSortable =
      (target.parentNode as HTMLZTableHeaderElement).sortable || (target as HTMLZTableHeaderElement).sortable;

    if (parentColumnId !== this.columnId && isSortable) {
      this.sortDirection = "none";
    }
  }

  componentWillRender(): void {
    this.host.setAttribute("role", "columnheader");
  }

  render(): HTMLZTableHeaderElement {
    return (
      <Host
        class={{
          sortable: this.sortable,
        }}
        onClick={() => this.handleSort()}
      >
        <div class="container">
          <slot />
          {this.sortable && this.sortDirection !== "none" && (
            <z-icon
              name={this.sortDirection === "asc" ? "arrow-up" : "arrow-down"}
              class="arrow"
            />
          )}
        </div>

        {this.showButton && (
          <div class="popover-container">
            <z-button
              ref={(el) => (this.triggerButton = el as HTMLZButtonElement)}
              class="contextual-popover-button"
              icon="contextual-menu"
              variant={ButtonVariant.TERTIARY}
              size={ButtonSize.X_SMALL}
              onClick={() => this.handleMenuClick()}
            ></z-button>

            <z-popover
              ref={(el) => (this.popover = el as HTMLZPopoverElement)}
              position={PopoverPosition.BOTTOM}
              center={true}
              bindTo={this.triggerButton as HTMLElement}
            >
              <div>
                <slot name="contextual-menu" />
              </div>
            </z-popover>
          </div>
        )}
      </Host>
    );
  }
}

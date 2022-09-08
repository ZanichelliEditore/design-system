import {Component, Element, Event, EventEmitter, h, Host, Listen, Prop} from "@stencil/core";
import classNames from "classnames";
import {
  ButtonSizeEnum,
  ButtonVariantEnum,
  PopoverPositions,
  Size,
  SortDirection,
  SortDirectionEnum,
} from "../../../beans";
import {getElementTree} from "../../../utils/utils";
@Component({
  tag: "z-table-header",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZTableHeader {
  @Element() host: HTMLElement;

  /** Column ID */
  @Prop() columnId: string;

  /** Set padding size of cell, if special 0px padding will be set */
  @Prop({reflect: true}) padding: Size = Size.medium;

  /** [Optional] Make the header sortable */
  @Prop() sortable?: boolean;

  /** [Optional] Show contextual menu button */
  @Prop() showButton?: boolean;

  /** [Optional] Default sort order */
  @Prop() defaultSortDirection?: SortDirection = SortDirectionEnum.asc;

  @Prop({mutable: true}) sortDirection: SortDirection = SortDirectionEnum.none;

  private popover?: HTMLZPopoverElement;

  private triggerButton?: HTMLZButtonDeprecatedElement;

  constructor() {
    this.emitOnSort = this.emitOnSort.bind(this);
  }

  /** [Optional] callback for sorting */
  @Event() sort: EventEmitter;
  emitOnSort() {
    this.sort.emit({
      columnId: this.columnId,
      sortDirection: this.sortDirection,
    });
  }

  handleSort() {
    if (!this.sortable) {
      return;
    }

    this.sortDirection = (() => {
      switch (this.sortDirection) {
        case SortDirectionEnum.asc:
          return SortDirectionEnum.desc;
        case SortDirectionEnum.desc:
          return SortDirectionEnum.asc;
        case SortDirectionEnum.none:
          return this.defaultSortDirection;
        default:
          return SortDirectionEnum.none;
      }
    })();

    this.emitOnSort();
  }

  handleMenuClick() {
    this.popover.open = !this.popover.open;
  }

  @Listen("click", {target: "body", capture: true})
  handleOutsideClick(e: any) {
    const tree = getElementTree(e.target);
    const parent = tree.find((elem: any) => elem.nodeName.toLowerCase() === "z-popover");

    if (!parent && this.popover) {
      this.popover.open = false;
    }
  }

  @Listen("click", {target: "body", capture: true})
  handleClickHeaders(e: any) {
    const {target} = e;
    const parent = getElementTree(target).find((elem: any) => elem.nodeName.toLowerCase() === "z-table-header");

    if (!this.sortable || !parent) {
      return;
    }

    const parentColumnId = parent.attributes.getNamedItem("column-id").value;
    const isSortable = target.parentNode.sortable || target.sortable;

    if (parentColumnId !== this.columnId && isSortable) {
      this.sortDirection = SortDirectionEnum.none;
    }
  }

  componentWillRender() {
    this.host.setAttribute("role", "columnheader");
  }

  render() {
    return (
      <Host
        class={classNames({
          sortable: this.sortable,
        })}
        onClick={() => this.handleSort()}
      >
        <div class="container">
          <slot />
          {this.sortable && this.sortDirection !== SortDirectionEnum.none && (
            <z-icon
              name={this.sortDirection === SortDirectionEnum.asc ? "arrow-up" : "arrow-down"}
              class="arrow"
            />
          )}
        </div>

        {this.showButton && (
          <div class="popover-container">
            <z-button
              ref={(el) => (this.triggerButton = el as HTMLZPopoverElement)}
              class="contextual-popover-button"
              icon="contextual-menu"
              variant={ButtonVariantEnum["tertiary"]}
              size={ButtonSizeEnum["x-small"]}
              onClick={() => this.handleMenuClick()}
            ></z-button>

            <z-popover
              ref={(el) => (this.popover = el as HTMLZPopoverElement)}
              position={PopoverPositions.bottom}
              center={true}
              bindTo={this.triggerButton}
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

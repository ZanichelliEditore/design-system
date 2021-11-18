import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  State,
} from "@stencil/core";
import classNames from "classnames";
import {
  ButtonSizeEnum,
  ButtonVariantEnum,
  PopoverPosition,
  SortDirection,
  SortDirectionEnum,
  TableHeaderSize,
} from "../../../beans";
import { getElementTree } from "../../../utils/utils";
@Component({
  tag: "z-registro-table-header",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZRegistroTableHeader {
  @Element() host: HTMLElement;

  /** Column ID */
  @Prop() columnId: string;

  /** [Optional] Padding of the header */
  @Prop() size?: TableHeaderSize = TableHeaderSize["medium"];

  /** [Optional] Make the header sortable */
  @Prop() sortable?: boolean;

  /** [Optional] Show contextual menu button */
  @Prop() showButton?: boolean;

  @Prop({ mutable: true }) sortDirection: SortDirection = SortDirectionEnum.none;

  @State() isMenuOpened: boolean = false;

  constructor() {
    this.emitOnSort = this.emitOnSort.bind(this);
  }

  /** [Optional] callback for sorting */
  @Event() sort: EventEmitter;
  emitOnSort() {
    this.sort.emit({
      columnId: this.columnId,
      sortDirection: this.sortDirection
    });
  }

  handleSort() {
    if (!this.sortable) {
      return;
    }
    if (
      this.sortDirection === SortDirectionEnum.none ||
      this.sortDirection === SortDirectionEnum.desc
    ) {
      this.sortDirection = SortDirectionEnum.asc;
    } else if (this.sortDirection === SortDirectionEnum.asc) {
      this.sortDirection = SortDirectionEnum.desc;
    }

    this.emitOnSort();
  }

  handleMenuClick() {
    this.isMenuOpened = !this.isMenuOpened;
  }

  @Listen("click", { target: "body", capture: true })
  handleOutsideClick(e: any) {
    const tree = getElementTree(e.target);
    const parent = tree.find(
      (elem: any) => elem.nodeName.toLowerCase() === "z-popover"
    );

    if (!parent) {
      this.isMenuOpened = false;
    }
  }

  @Listen("click", { target: "body", capture: true })
  handleClickHeaders(e: any) {
    const { target } = e;
    const parent = getElementTree(target).find(
      (elem: any) => elem.nodeName.toLowerCase() === "z-registro-table-header"
    );

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
        class={classNames(`size-${this.size}`, {
          sortable: this.sortable,
        })}
        onClick={() => this.handleSort()}
      >
        <div class={classNames("container")}>
          <slot />
          {this.sortable && this.sortDirection !== SortDirectionEnum.none && (
            <z-icon
              name={
                this.sortDirection === SortDirectionEnum.asc
                  ? "arrow-up"
                  : "arrow-down"
              }
              class="arrow"
            />
          )}
        </div>

        {this.showButton && (
          <div
            class={classNames("popover-container", {
              visible: this.isMenuOpened,
            })}
          >
            <z-popover
              position={PopoverPosition["below-center"]}
              background-color={"gray200"}
            >
              <z-button
                icon="contextual-menu"
                variant={ButtonVariantEnum["tertiary"]}
                size={ButtonSizeEnum["x-small"]}
                square
                slot="trigger"
                onClick={() => this.handleMenuClick()}
              ></z-button>

              <div slot="popover">
                <slot name="contextual-menu" />
              </div>
            </z-popover>
          </div>
        )}
      </Host>
    );
  }
}

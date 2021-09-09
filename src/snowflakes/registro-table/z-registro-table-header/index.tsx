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
  SortingOrientation,
  SortingOrientationEnum,
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

  @Prop({ mutable: true }) sortingOrientation: SortingOrientation = SortingOrientationEnum.none;

  @State() isMenuOpened: boolean = false;

  constructor() {
    this.emitOnSort = this.emitOnSort.bind(this);
  }

  /** [Optional] callback for sorting */
  @Event() sort: EventEmitter;
  emitOnSort() {
    this.sort.emit({ 
      columnId: this.columnId,
      sortingOrientation: this.sortingOrientation
    });
  }

  handleSort() {
    if (!this.sortable) {
      return;
    }
    if (
      this.sortingOrientation === SortingOrientationEnum.none ||
      this.sortingOrientation === SortingOrientationEnum.desc
    ) {
      this.sortingOrientation = SortingOrientationEnum.asc;
    } else if (this.sortingOrientation === SortingOrientationEnum.asc) {
      this.sortingOrientation = SortingOrientationEnum.desc;
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
    if (!this.sortable) {
      return;
    }
    const tree = getElementTree(e.target);
    const parent = tree.find(
      (elem: any) => elem.nodeName.toLowerCase() === "z-registro-table-header"
    );

    if (
      parent &&
      parent.attributes.getNamedItem("column-id").value !== this.columnId
    ) {
      this.sortingOrientation = SortingOrientationEnum.none;
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
          {this.sortable && this.sortingOrientation !== SortingOrientationEnum.none && (
            <z-icon
              name={
                this.sortingOrientation === SortingOrientationEnum.asc
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

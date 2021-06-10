import {
  Component,
  Element,
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
  TableHeaderSize,
} from "../../../beans";
import { getElementTree } from "../../../utils/utils";
@Component({
  tag: "z-registro-table-header",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZRegistroTableHeader {
  @Element() host: HTMLElement;

  /** Column ID */
  @Prop() id: string;

  /** [Optional] Padding of the header */
  @Prop() size?: TableHeaderSize = TableHeaderSize["medium"];

  /** [Optional] Make the header sortable */
  @Prop() sortable?: boolean;

  /** [Optional] Show contextual menu button */
  @Prop() showButton?: boolean;

  /** [Optional] Callback for sortable prop */
  @Prop() onSort: (sortingOrientation: SortingOrientation) => void = () => {};

  @State() isMenuOpened: boolean = false;

  @State() sortingOrientation: SortingOrientation = SortingOrientation["none"];

  handleSort() {
    if (!this.sortable) {
      return;
    }
    console.log(`ID: ${this.id}`);
    if (
      this.sortingOrientation === SortingOrientation["none"] ||
      this.sortingOrientation === SortingOrientation["desc"]
    ) {
      this.sortingOrientation = SortingOrientation["asc"];
    } else if (this.sortingOrientation === SortingOrientation["asc"]) {
      this.sortingOrientation = SortingOrientation["desc"];
    }

    this.onSort(this.sortingOrientation);
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

    if (parent && parent.id !== this.id) {
      this.sortingOrientation = SortingOrientation["none"];
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
          <z-icon
            name={
              this.sortingOrientation === SortingOrientation["asc"]
                ? "arrow-up"
                : "arrow-down"
            }
            class={classNames("arrow", {
              hidden:
                !this.sortable ||
                this.sortingOrientation === SortingOrientation["none"],
            })}
          />
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

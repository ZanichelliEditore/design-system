import {Component, Element, Event, EventEmitter, Host, Listen, Prop, State, Watch, h} from "@stencil/core";
import {randomId} from "../../../utils/utils";
import "../cells/z-td/index";
import "../cells/z-th/index";

/**
 * ZTr component.
 * When the row is `expandable`, you can set the `prevent-expand` css class on an interactive element inside the row
 * to prevent the row from expanding.
 * @slot - ZTr content (`z-td` or `z-th`).
 */
@Component({
  tag: "z-tr",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZTr {
  @Element() host: HTMLZTrElement;

  /**
   * Whether the row is expandable.
   * Use a `z-td` as the last cell of the row for the additional content.
   * It will show a button to expand/collapse the row.
   * The last cell will be hidden until the button or row is clicked.
   *
   * If some element inside the expandable row contains the `prevent-expand` css class,
   * the row will not expand by clicking that element.
   */
  @Prop({reflect: true})
  expandable = false;

  /**
   * Whether the row is currently expanded.
   */
  @State()
  expanded = false;

  /**
   * HTML Id of the expandable content.
   * It is used to link the button to the content through the `aria-controls` attribute.
   */
  @State()
  expandableContentId: string;

  /** Row has been expanded */
  @Event()
  expand: EventEmitter;

  @Watch("expandable")
  @Listen("colspanchange")
  protected updateColumns(): void {
    const cells = Array.from(this.host.querySelectorAll<HTMLZTdElement | HTMLZThElement>("z-td, z-th"));
    if (this.expandable) {
      cells.pop();
    }

    const columns = cells.map((cell) => cell.colspan || 1).reduce((a, b) => a + b, 0);
    this.host.style.setProperty("--columns", `${columns}`);

    if (this.expandable) {
      const expandableContent = cells.pop();
      expandableContent.id = expandableContent.id || `z-tr-expandable-content-${randomId()}`;
      this.expandableContentId = expandableContent.id;
    }
  }

  /**
   * Handle click on row.
   * Skip expansion if the click is on a element with `prevent-expand` css class.
   */
  private onRowClick(event: MouseEvent): void {
    const preventExpand = (event.target as HTMLElement).closest(".prevent-expand");
    if (!this.expandable || preventExpand) {
      return;
    }

    this.expanded = !this.expanded;
    this.expand.emit({expanded: this.expanded});
  }

  componentWillLoad(): void {
    this.updateColumns();
  }

  render(): HTMLZTrElement {
    return (
      <Host
        role="row"
        tabIndex={0}
        expanded={this.expanded}
        onClick={this.onRowClick.bind(this)}
      >
        <div class="z-tr--expand-button-container">
          {this.expandable && (
            <button
              aria-expanded={this.expanded ? "true" : "false"}
              aria-label={this.expanded ? "Comprimi riga" : "Espandi riga"}
              aria-controls={this.expandableContentId}
              type="button"
            >
              <z-icon name={this.expanded ? "minus-circled" : "plus-circled"}></z-icon>
            </button>
          )}
        </div>
        <slot onSlotchange={this.updateColumns.bind(this)}></slot>
      </Host>
    );
  }
}

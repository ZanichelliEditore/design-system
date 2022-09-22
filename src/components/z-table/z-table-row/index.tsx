import {Component, Prop, State, Host, h, Event, EventEmitter} from "@stencil/core";
import {HostElement} from "@stencil/core/internal";

import {ZTableRowExpandedType} from "../../../beans";
@Component({
  tag: "z-table-row",
  styleUrl: "styles.css",
  shadow: false,
  scoped: false,
})
export class ZTableRow {
  /** Table row expanded type */
  @Prop({reflect: true})
  expandedType: ZTableRowExpandedType = ZTableRowExpandedType.NONE;

  @State()
  expanded = false;

  /** Row has been expanded */
  @Event()
  expand: EventEmitter;
  private emitOnExpand(): void {
    this.expand.emit({expanded: this.expanded});
  }

  private handleExpand(): void {
    this.expanded = !this.expanded;

    this.emitOnExpand();
  }

  private renderExpandButton(): HTMLZTableCellElement {
    if (this.expandedType == ZTableRowExpandedType.EXPANDABLE) {
      return (
        <z-table-cell style={{borderRight: "none"}}>
          <z-icon name={this.expanded ? "minus-circled" : "plus-circled"} />
        </z-table-cell>
      );
    }
    return (
      <z-table-cell style={{borderRight: "none"}}>
        <div class="z-icon-placeholder" />
      </z-table-cell>
    );
  }

  render(): HostElement {
    return (
      <Host
        role="row"
        expanded={this.expanded}
        onClick={(event) => {
          const contextualMenuClick = event.target.nodeName === "Z-CONTEXTUAL-MENU";
          const isExpandable = this.expandedType === ZTableRowExpandedType.EXPANDABLE;

          if (isExpandable && !contextualMenuClick) {
            this.handleExpand();
          }
        }}
      >
        {this.expandedType !== ZTableRowExpandedType.NONE && this.renderExpandButton()}
        <slot />
      </Host>
    );
  }
}

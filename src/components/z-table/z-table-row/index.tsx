import {Component, Prop, State, Host, h, Event, EventEmitter} from "@stencil/core";

import {ZTableRowExpandedType} from "../../../beans";
@Component({
  tag: "z-table-row",
  styleUrl: "styles.css",
  shadow: false,
  scoped: false,
})
export class ZTableRow {
  @Prop({reflect: true}) expandedType: ZTableRowExpandedType = ZTableRowExpandedType.none;

  @State() expanded = false;

  @Event() expand: EventEmitter;
  emitOnExpand() {
    this.expand.emit({expanded: this.expanded});
  }

  handleExpand() {
    this.expanded = !this.expanded;

    this.emitOnExpand();
  }

  renderExpandButton() {
    if (this.expandedType == ZTableRowExpandedType.expandable) {
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

  render() {
    return (
      <Host
        role="row"
        expanded={this.expanded}
        onClick={(event) => {
          const contextualMenuClick = event.target.nodeName === "Z-CONTEXTUAL-MENU";
          const isExpandable = this.expandedType === ZTableRowExpandedType.expandable;

          if (isExpandable && !contextualMenuClick) {
            this.handleExpand();
          }
        }}
      >
        {this.expandedType !== ZTableRowExpandedType.none && this.renderExpandButton()}
        <slot />
      </Host>
    );
  }
}

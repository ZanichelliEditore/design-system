import {
  Component,
  Prop,
  State,
  Host,
  h,
  Event,
  EventEmitter,
} from "@stencil/core";

import { ZRegistroTableRowExpandedType } from "../../../beans";
@Component({
  tag: "z-registro-table-row",
  styleUrl: "styles.css",
  shadow: false,
  scoped: false,
})
export class ZRegistroTableRow {
  @Prop({ reflect: true }) expandedType: ZRegistroTableRowExpandedType =
    ZRegistroTableRowExpandedType.none;

  @State() expanded: boolean = false;

  @Event() expand: EventEmitter;
  emitOnExpand() {
    this.expand.emit({ expanded: this.expanded });
  }

  handleExpand() {
    this.expanded = !this.expanded;

    this.emitOnExpand();
  }

  renderExpandButton() {
    if (this.expandedType == ZRegistroTableRowExpandedType.expandable) {
      return (
        <z-registro-table-cell style={{ borderRight: "none" }}>
          <z-icon name={this.expanded ? "minus-circled" : "plus-circled"} />
        </z-registro-table-cell>
      );
    }
    return (
      <z-registro-table-cell style={{ borderRight: "none" }}>
        <div class="z-icon-placeholder" />
      </z-registro-table-cell>
    );
  }

  render() {
    return (
      <Host
        role="row"
        expanded={this.expanded}
        onClick={() => {
          this.expandedType === ZRegistroTableRowExpandedType.expandable &&
            this.handleExpand();
        }}
      >
        {this.expandedType !== ZRegistroTableRowExpandedType.none &&
          this.renderExpandButton()}
        <slot />
      </Host>
    );
  }
}

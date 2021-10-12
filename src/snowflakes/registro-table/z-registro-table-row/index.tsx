import {
  Component,
  Prop,
  State,
  Element,
  Host,
  h,
  Event,
  EventEmitter,
} from "@stencil/core";
import { ExpandedTableRowButtonType } from "../../../beans";
@Component({
  tag: "z-registro-table-row",
  styleUrl: "styles.css",
  shadow: false,
  scoped: false,
})
export class ZRegistroTableRow {
  @Element() host: HTMLElement;

  @Prop({ reflect: true }) expandable;

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
    if (this.expandable == ExpandedTableRowButtonType.expandable) {
      return (
        <z-registro-table-cell>
          <z-icon name={this.expanded ? "minus-circled" : "plus-circled"} />
        </z-registro-table-cell>
      );
    } else return <div class="z-icon-placeholder" />;
  }

  render() {
    return (
      <Host
        role="row"
        expanded={this.expanded}
        onClick={() =>
          this.expandable === ExpandedTableRowButtonType.expandable &&
          this.handleExpand()
        }
      >
        {this.expandable !== ExpandedTableRowButtonType.none &&
          this.renderExpandButton()}
        <slot />
      </Host>
    );
  }
}

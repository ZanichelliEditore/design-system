import {
  Component,
  Prop,
  State,
  Host,
  h,
  Event,
  EventEmitter,
} from "@stencil/core";
@Component({
  tag: "z-registro-table-row",
  styleUrl: "styles.css",
  shadow: false,
  scoped: false,
})
export class ZRegistroTableRow {
  @Prop({ reflect: true }) expandable?: boolean;

  @State() expanded: boolean = false;

  @Event() expand: EventEmitter;
  emitOnExpand() {
    this.expand.emit({ expanded: this.expanded });
  }

  handleExpand() {
    this.expanded = !this.expanded;

    this.emitOnExpand();
  }

  _renderExpandButton() {
    return (
      <z-registro-table-cell onClick={() => this.handleExpand()}>
        <z-icon name={this.expanded ? "minus-circled" : "plus-circled"} />
      </z-registro-table-cell>
    );
  }

  render() {
    return (
      <Host role="row" expanded={this.expanded}>
        {this.expandable && this._renderExpandButton()}
        <slot />
      </Host>
    );
  }
}

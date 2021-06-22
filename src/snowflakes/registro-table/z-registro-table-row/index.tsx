import { Component, Prop, State, Host, h } from "@stencil/core";
@Component({
  tag: "z-registro-table-row",
  styleUrl: "styles.css",
  shadow: false,
  scoped: false,
})
export class ZRegistroTableRow {
  @Prop({ reflect: true }) expandable?: boolean;

  @State() expanded: boolean = false;

  _renderExpandButton() {
    return (
      <z-registro-table-cell onClick={() => (this.expanded = !this.expanded)}>
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

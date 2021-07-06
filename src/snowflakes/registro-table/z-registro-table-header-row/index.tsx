import { Component, Prop, Host, h } from "@stencil/core";

@Component({
  tag: "z-registro-table-header-row",
  styleUrl: "styles.css",
  shadow: false,
})
export class ZRegistroTableHeaderRow {
  @Prop({ reflect: true }) expandable?: boolean;

  _renderExpandHeader() {
    return <z-registro-table-header></z-registro-table-header>;
  }

  render() {
    return (
      <Host role="row">
        {this.expandable && this._renderExpandHeader()}
        <slot />
      </Host>
    );
  }
}

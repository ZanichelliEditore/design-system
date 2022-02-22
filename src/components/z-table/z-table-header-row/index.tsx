import { Component, Prop, Host, h } from "@stencil/core";

@Component({
  tag: "z-table-header-row",
  styleUrl: "styles.css",
  shadow: false,
})
export class ZTableHeaderRow {
  @Prop({ reflect: true }) expandable?: boolean;

  _renderExpandHeader() {
    return <z-table-header></z-table-header>;
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

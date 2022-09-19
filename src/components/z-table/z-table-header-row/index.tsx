import {Component, Prop, Host, h} from "@stencil/core";
import {HostElement} from "@stencil/core/internal";

@Component({
  tag: "z-table-header-row",
  styleUrl: "styles.css",
  shadow: false,
})
export class ZTableHeaderRow {
  @Prop({reflect: true}) expandable?: boolean;

  private renderExpandHeader(): HTMLZTableHeaderElement {
    return <z-table-header></z-table-header>;
  }

  render(): HostElement {
    return (
      <Host role="row">
        {this.expandable && this.renderExpandHeader()}
        <slot />
      </Host>
    );
  }
}

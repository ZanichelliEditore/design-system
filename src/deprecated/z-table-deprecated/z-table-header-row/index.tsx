import {Component, Prop, Host, h} from "@stencil/core";

/**
 * @deprecated
 */
@Component({
  tag: "z-table-header-row",
  styleUrl: "styles.css",
  shadow: false,
})
export class ZTableHeaderRow {
  /** Row expandable flag */
  @Prop({reflect: true})
  expandable?: boolean;

  private renderExpandHeader(): HTMLZTableHeaderElement {
    return <z-table-header></z-table-header>;
  }

  render(): HTMLZTableHeaderRowElement {
    return (
      <Host role="row">
        {this.expandable && this.renderExpandHeader()}
        <slot />
      </Host>
    );
  }
}

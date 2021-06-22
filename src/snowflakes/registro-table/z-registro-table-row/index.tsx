import { Component, Prop, State, Host, h } from "@stencil/core";
import { ButtonSizeEnum, ButtonVariantEnum } from "../../../beans";
@Component({
  tag: "z-registro-table-row",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZRegistroTableRow {
  @Prop({ reflect: true }) expandable?: boolean;

  @State() expanded: boolean = false;

  _renderExpandButton() {
    return (
      <z-registro-table-cell>
        <z-button
          icon={this.expanded ? "minus-circled" : "plus-circled"}
          size={ButtonSizeEnum["x-small"]}
          variant={ButtonVariantEnum.tertiary}
          onClick={() => (this.expanded = !this.expanded)}
          square
        />
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

import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-registro-table-expanded-row",
  styleUrl: "styles.css",
  shadow: false,
})
export class ZRegistroTableExpandedRow {
  @Prop() colSpan: number;

  render() {
    return (
      <td colSpan={this.colSpan}>
        <div class="content-container">
          <div class="inner-content">
            <slot />
          </div>
        </div>
      </td>
    );
  }
}

import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-registro-table-expanded-row",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZRegistroTableExpandedRow {
  /** Number table column plus 1 for the expand button */
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

import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-registro-table-expanded-row",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZRegistroTableExpandedRow {
  /** Number table column plus 1 for the expand button */
  @Prop() colSpan: number;
  @Prop() size: "tall" | "medium" | "small" | "none";

  render() {
    return (
      <td colSpan={this.colSpan}>
        <div class="content-container">
          <slot />
        </div>
      </td>
    );
  }
}

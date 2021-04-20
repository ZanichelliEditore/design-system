import { Component, h } from "@stencil/core";

@Component({
  tag: "z-registro-table-row",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZRegistroTableRow {
  render() {
    return (
      <tr>
        <slot />
      </tr>
    );
  }
}

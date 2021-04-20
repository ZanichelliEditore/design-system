import { Component, h } from "@stencil/core";

@Component({
  tag: "z-registro-table-cell",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZRegistroTableCell {
  render() {
    return (
      <td>
        <slot />
      </td>
    );
  }
}

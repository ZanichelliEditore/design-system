import { Component, h } from "@stencil/core";

@Component({
  tag: "z-registro-table-header",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZRegistroTableHeader {
  render() {
    return (
      <th>
        <slot />
      </th>
    );
  }
}

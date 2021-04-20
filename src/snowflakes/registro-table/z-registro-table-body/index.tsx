import { Component, h } from "@stencil/core";

@Component({
  tag: "z-registro-table-body",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZRegistroTableBody {
  render() {
    return (
      <tbody>
        <slot />
      </tbody>
    );
  }
}

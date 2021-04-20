import { Component, h } from "@stencil/core";

@Component({
  tag: "z-registro-table-footer",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZRegistroTableFooter {
  render() {
    return (
      <tfoot>
        <slot />
      </tfoot>
    );
  }
}

import { Component, h } from "@stencil/core";

@Component({
  tag: "z-registro-table-head",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZRegistroTableHead {
  render() {
    return (
      <thead>
        <slot />
      </thead>
    );
  }
}

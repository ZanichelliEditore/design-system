import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-registro-table-expanded-row",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZRegistroTableExpandedRow {
  @Prop() myProp: string;

  render() {
    return (
      <td colSpan={4}>
        <div class="inner-content">
          <slot />
        </div>
      </td>
    );
  }
}

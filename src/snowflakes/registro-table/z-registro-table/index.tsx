import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-registro-table",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZRegistroTable {
  // @Prop() myProp: string;

  render() {
    return (
      <table>
        <thead>
          <slot slot="header" />
        </thead>
        <tbody>
          <slot slot="body" />
        </tbody>
        <tfoot>
          <slot slot="footer" />
        </tfoot>
      </table>
    );
  }
}

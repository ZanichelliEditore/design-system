import { Component, Element, h } from "@stencil/core";

@Component({
  tag: "z-registro-table-row",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZRegistroTableRow {
  @Element() host: HTMLElement;

  componentWillRender() {
    this.host.setAttribute("role", "row");
  }

  render() {
    return <slot />;
  }
}

import { Component, Element, h } from "@stencil/core";

@Component({
  tag: "z-registro-table-cell",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZRegistroTableCell {
  @Element() host: HTMLElement;

  componentWillRender() {
    this.host.setAttribute("role", "cell");
  }

  render() {
    return <slot />;
  }
}

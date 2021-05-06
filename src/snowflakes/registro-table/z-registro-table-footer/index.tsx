import { Component, Element, h } from "@stencil/core";

@Component({
  tag: "z-registro-table-footer",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZRegistroTableFooter {
  @Element() host: HTMLElement;

  componentWillRender() {
    this.host.setAttribute("role", "rowgroup");
  }

  render() {
    return <slot />;
  }
}

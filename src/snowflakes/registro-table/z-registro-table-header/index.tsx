import { Component, Element, h } from "@stencil/core";

@Component({
  tag: "z-registro-table-header",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZRegistroTableHeader {
  @Element() host: HTMLElement;

  componentWillRender() {
    this.host.setAttribute("role", "columnheader");
  }

  render() {
    return <slot />;
  }
}

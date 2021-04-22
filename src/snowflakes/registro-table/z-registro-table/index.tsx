import { Component, Element, h } from "@stencil/core";

@Component({
  tag: "z-registro-table",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZRegistroTable {
  @Element() host: HTMLElement;

  componentWillRender() {
    this.host.setAttribute("role", "table");
  }

  render() {
    return <slot />;
  }
}

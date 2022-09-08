import {Component, Element, h} from "@stencil/core";

@Component({
  tag: "z-table-body",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZTableBody {
  @Element() host: HTMLElement;

  componentWillRender() {
    this.host.setAttribute("role", "rowgroup");

    Array.from(this.host.children).forEach((child, index) => child.setAttribute("aria-rowindex", `${index}`));
  }

  render() {
    return <slot />;
  }
}

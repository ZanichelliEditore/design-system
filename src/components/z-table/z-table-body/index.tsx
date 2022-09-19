import {Component, Element, h} from "@stencil/core";

@Component({
  tag: "z-table-body",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZTableBody {
  @Element() host: HTMLZTableBodyElement;

  componentWillRender(): void {
    this.host.setAttribute("role", "rowgroup");

    Array.from(this.host.children).forEach((child, index) => child.setAttribute("aria-rowindex", `${index}`));
  }

  render(): HTMLSlotElement {
    return <slot />;
  }
}

import {Component, Element, h} from "@stencil/core";

@Component({
  tag: "z-table-footer",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZTableFooter {
  @Element() host: HTMLZTableFooterElement;

  componentWillRender(): void {
    this.host.setAttribute("role", "rowgroup");
  }

  render(): HTMLSlotElement {
    return <slot />;
  }
}

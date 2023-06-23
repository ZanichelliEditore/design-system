import {Component, Element, h} from "@stencil/core";

/**
 * @deprecated
 */
@Component({
  tag: "z-table-head",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZTableHead {
  @Element() host: HTMLZTableHeadElement;

  componentWillRender(): void {
    this.host.setAttribute("role", "rowgroup");
  }

  render(): HTMLSlotElement {
    return <slot />;
  }
}

import {Component, Element, h} from "@stencil/core";

@Component({
  tag: "z-table-footer",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZTableFooter {
  @Element() host: HTMLElement;

  componentWillRender() {
    this.host.setAttribute("role", "rowgroup");
  }

  render() {
    return <slot />;
  }
}

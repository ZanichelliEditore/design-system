import {Component, Element, h} from "@stencil/core";

@Component({
  tag: "z-table-head",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZTableHead {
  @Element() host: HTMLElement;

  componentWillRender() {
    this.host.setAttribute("role", "rowgroup");
  }

  render() {
    return <slot />;
  }
}

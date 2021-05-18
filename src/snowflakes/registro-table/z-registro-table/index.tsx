import { Component, Element, h, Prop } from "@stencil/core";

@Component({
  tag: "z-registro-table",
  styleUrl: "styles.css",
  shadow: false,
  scoped: false,
})
export class ZRegistroTable {
  @Element() host: HTMLElement;
  @Prop({ reflect: false }) bordered: boolean = false;
  @Prop({ reflect: false }) columnSticky: boolean = false;
  @Prop({ reflect: false }) headerSticky: boolean = false;

  componentWillRender() {
    this.host.setAttribute("role", "table");

    if (this.bordered) {
      this.host.classList.add("table-bordered");
    }

    if (this.columnSticky) {
      this.host.classList.add("table-column-sticky");
    }

    if (this.headerSticky) {
      this.host.classList.add("table-header-sticky");
    }
  }

  render() {
    return <slot />;
  }
}

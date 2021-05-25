import { Component, Element, Host, Prop, h } from "@stencil/core";

/**
 * @slot - table elements
 * @slot sticky-footer - set the content of the sticky footer
 */

@Component({
  tag: "z-registro-table",
  styleUrl: "styles.css",
  shadow: false,
  scoped: false,
})
export class ZRegistroTable {
  @Element() host: HTMLElement;

  /** Sets table with border */
  @Prop() bordered?: boolean = false;

  /** Sets first column sticky */
  @Prop() columnSticky?: boolean = false;

  /** Sets header sticky */
  @Prop() headerSticky?: boolean = false;

  componentWillRender() {
    this.host.setAttribute("role", "table");
  }

  render() {
    return (
      <Host>
        <div
          class={`table ${this.bordered ? "table-bordered" : ""} 
            ${this.columnSticky ? "table-column-sticky" : ""} 
            ${this.headerSticky ? "table-header-sticky" : ""}`}
        >
          <slot />
        </div>
        <slot name="sticky-footer" />
      </Host>
    );
  }
}

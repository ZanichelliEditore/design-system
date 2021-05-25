import { Component, Element, Host, Prop, h, State } from "@stencil/core";
import classNames from "classnames";

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

  /** Scroll horizontal position */
  @State() scrollX: number = 0;

  componentWillRender() {
    this.host.setAttribute("role", "table");
  }

  handleScroll(e: any) {
    this.scrollX = e.currentTarget.scrollLeft;
  }

  render() {
    return (
      <Host onScroll={this.handleScroll}>
        <div
          class={classNames(
            "table",
            { "table-bordered": this.bordered },
            { "table-column-sticky": this.columnSticky },
            { "table-header-sticky": this.headerSticky },
            { "column-sticky-shadow": this.scrollX > 0 && this.columnSticky }
          )}
        >
          <slot />
        </div>
        <slot name="sticky-footer" />
      </Host>
    );
  }
}

import { Component, Element, Host, h, State } from "@stencil/core";

@Component({
  tag: "z-registro-table",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true
})
export class ZRegistroTable {
  @Element() host: HTMLElement;
  @State() hasStickyFooter: boolean = false;

  componentWillRender() {
    this.host.setAttribute("role", "table");
    this.hasStickyFooter = !!this.host.querySelector('[slot="sticky-footer"]');
  }

  render() {
    return (
        <Host>
            <div class="table">
                <slot />
            </div>
            { this.hasStickyFooter && <div class="sticky-footer">
                <slot name="sticky-footer" />
            </div> }
        </Host>
    )
    
  }
}

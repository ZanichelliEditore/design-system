import { Component, Element, Host, h } from "@stencil/core";

@Component({
  tag: "z-registro-table",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZRegistroTable {
  @Element() host: HTMLElement;

  componentWillRender() {
    this.host.setAttribute("role", "table");
  }

  render() {
    return (
        <Host>
            <div>
                <slot name="tHeader" />
                <slot name="tBody" />
            </div>
            <slot name="tFooter"/>
        </Host>
    )
    
  }
}

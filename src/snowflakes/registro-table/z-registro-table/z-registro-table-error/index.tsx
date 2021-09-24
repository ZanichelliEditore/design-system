import { Component, Element, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "z-registro-table-error",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZRegistroTableError {
  @Prop() tableClass?: string;
  @Prop() errorLink?: string;
  @Element() host: HTMLElement;
  render() {
    return (
      <Host>
        <div class={this.tableClass}>
          <slot name="table-header" />
        </div>
        <div class="content">
          <z-body level={3} variant="semibold">
            Siamo spiacenti,
            <br />
            Non siamo riusciti a caricare il contenuto richiesto
          </z-body>
          <br />
          {this.errorLink && (
            <z-body level={4}>
              <z-link href={this.errorLink} underline={true} target="_blank">
                Clicca qui
              </z-link>
              per provare di nuovo
            </z-body>
          )}
        </div>
      </Host>
    );
  }
}

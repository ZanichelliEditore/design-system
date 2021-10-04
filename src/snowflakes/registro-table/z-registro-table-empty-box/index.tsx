import { Component, h, Host, Prop } from "@stencil/core";

@Component({
  tag: "z-registro-table-empty-box",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZRegistroTableEmptyBox {
  /** Sets main title message*/
  @Prop() message?: string =
    "Siamo spiacenti, al momento non sono presenti dati da visualizzare.";

  /** Sets message */
  @Prop() subtitle?: string = "";

  render() {
    return (
      <Host>
        <z-body level={3} variant={"semibold"}>
          {this.message}
        </z-body>
        <br />
        <z-body level={4} variant={"regular"}>
          {this.subtitle}
        </z-body>
        <div class="cta">
          <slot name="cta1"></slot>
          <slot name="cta2"></slot>
        </div>
      </Host>
    );
  }
}

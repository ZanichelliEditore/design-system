import {Component, Host, Prop, h} from "@stencil/core";

/**
 * TFoot component.
 */
@Component({
  tag: "z-tfoot",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZTfoot {
  /**
   * If true, the footer will be stuck to the bottom of the table.
   */
  @Prop({reflect: true})
  sticky = false;

  render(): void {
    return (
      <Host role="rowgroup">
        <slot></slot>
      </Host>
    );
  }
}

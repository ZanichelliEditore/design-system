import {Component, Host, Prop, h} from "@stencil/core";

/**
 * ZThead component.
 * @slot - ZThead content (`z-tr`).
 */
@Component({
  tag: "z-thead",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZThead {
  /**
   * If true, the header will be stuck to the top of the table.
   */
  @Prop({reflect: true})
  sticky = false;

  render(): HTMLZTheadElement {
    return (
      <Host role="rowgroup">
        <slot></slot>
      </Host>
    );
  }
}

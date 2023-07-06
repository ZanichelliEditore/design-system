import {Component, Host, h} from "@stencil/core";

/**
 * ZTbody component.
 * @slot - ZTbody content (`z-tr`).
 */
@Component({
  tag: "z-tbody",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZTbody {
  render(): HTMLZTbodyElement {
    return (
      <Host role="rowgroup">
        <slot></slot>
      </Host>
    );
  }
}

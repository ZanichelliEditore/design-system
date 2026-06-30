import {Component, ComponentInterface, Host, h} from "@stencil/core";

/**
 * ZTbody component.
 * @slot - ZTbody content (`z-tr`).
 */
@Component({
  tag: "z-tbody",
  styleUrls: ["styles.css", "../../css-components/z-table/styles.css"],
  shadow: true,
})
export class ZTbody implements ComponentInterface {
  render(): HTMLZTbodyElement {
    return (
      <Host role="rowgroup">
        <slot></slot>
      </Host>
    );
  }
}

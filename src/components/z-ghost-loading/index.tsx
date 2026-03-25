import {Component, ComponentInterface, h, Host} from "@stencil/core";
@Component({
  tag: "z-ghost-loading",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZGhostLoading implements ComponentInterface {
  render(): HTMLZGhostLoadingElement {
    return <Host />;
  }
}

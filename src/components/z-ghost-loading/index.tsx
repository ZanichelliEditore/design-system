import {Component, h, Host} from "@stencil/core";
import { HostElement } from '@stencil/core/internal';
@Component({
  tag: "z-ghost-loading",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZGhostLoading {
  render(): HostElement {
    return <Host />;
  }
}

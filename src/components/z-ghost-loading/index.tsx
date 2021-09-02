import { Component, h, Host } from '@stencil/core';
@Component({
  tag: 'z-ghost-loading',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZGhostLoading {

  render() {
    return (
      <Host />
    );
  }
}

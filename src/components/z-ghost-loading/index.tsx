import { Component, Prop, h, Host } from '@stencil/core';

import { GhostLoadingSize } from '../../beans';

@Component({
  tag: 'z-ghost-loading',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZGhostLoading {

  /**
 * [optional] Sets the ghost loading size.
 */
  @Prop({reflect: true}) size?: GhostLoadingSize = GhostLoadingSize.large;

  render() {
    return (
      <Host />
    );
  }
}

import { Component, h , Host} from '@stencil/core';

@Component({
  tag: 'z-visually-hidden',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZVisuallyHidden {

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}

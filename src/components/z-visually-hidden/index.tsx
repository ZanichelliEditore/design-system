import { Component, h , Host} from '@stencil/core';

@Component({
  tag: 'z-visually-hidden',
  styleUrl: 'styles.css',
  shadow: false
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

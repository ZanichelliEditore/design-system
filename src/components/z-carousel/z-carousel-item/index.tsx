import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'z-carousel-item',
  styleUrl: 'styles.css',
  shadow: false,
  scoped: true
})

export class ZCarouselItem {
  /** [optional] gap between the slide items */
  @Prop() gap?: number = 0;

  render() {
    return (
      <li class="carousel-item" style={{ paddingRight: `${this.gap}px` }}>
        <slot />
      </li>
    );
  }
}

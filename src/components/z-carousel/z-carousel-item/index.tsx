import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'z-carousel-item',
  styleUrl: 'styles.css',
  shadow: false,
  scoped: true
})

export class ZCarouselItem {
  @Prop() myProp: string;

  render() {
    return (
      <li class="carousel-item">
        <slot />
      </li>
    );
  }
}

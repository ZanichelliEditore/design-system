import { Component, Prop, h } from '@stencil/core';
import { icons } from './icons';

@Component({
  tag: 'z-icon',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZIcon {
  @Prop() name: string;
  @Prop() height?: number = 18;
  @Prop() width?: number = 18;
  @Prop() iconid?: string;

  render() {
    return (
      <svg viewBox="0 0 18 18" width={this.width + 'px'} height={this.height + 'px'} id={this.iconid}>
        <path d={icons[this.name]}></path>
        <polygon points={icons[this.name]}></polygon>
      </svg>
    );
  }
}

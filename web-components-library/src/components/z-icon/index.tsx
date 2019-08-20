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

  selectPathOrPolygon(iconName: string): HTMLElement {
    if (iconName && iconName.startsWith('M')) {
      return <path d={icons[this.name]}></path>
    } else {
      return <polygon points={icons[this.name]}></polygon>
    }
  }

  render() {
    return (
      <svg viewBox="0 0 18 18" width={this.width} height={this.height} id={this.iconid}>
        {this.selectPathOrPolygon(icons[this.name])}
      </svg>
    );
  }
}

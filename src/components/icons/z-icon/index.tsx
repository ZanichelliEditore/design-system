import { Component, Prop, h } from '@stencil/core';
import { icons } from '../icons';

@Component({
  tag: 'z-icon',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZIcon {
  /** icon name (choice between available icons) */
  @Prop() name: string;
  /** icon height (optional) */
  @Prop() height?: number;
  /** icon width (optional) */
  @Prop() width?: number;
  /** icon id (optional) */
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
      <svg viewBox="0 0 1000 1000" width={this.width} height={this.height} id={this.iconid}>
        {this.selectPathOrPolygon(icons[this.name])}
      </svg>
    );
  }
}

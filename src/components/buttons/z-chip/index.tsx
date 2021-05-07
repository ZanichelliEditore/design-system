import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'z-chip',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZChip {
  @Prop() regulartext?: string;
  @Prop() boldtext?: number;


  render() {
    return (
      <div>
        {
          this.boldtext || this.regulartext ?
          <span><span class="boldtext">{this.boldtext}</span> {this.regulartext}</span> :
          <slot />
        }
      </div>
    );
  }
}

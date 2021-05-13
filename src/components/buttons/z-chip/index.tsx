import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'z-chip',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZChip {
  @Prop() regulartext?: string;
  @Prop() boldtext?: number;

  private renderLegacyChip() {
    return <div>
      <span class="boldtext">{this.boldtext}</span> {this.regulartext}
    </div>;
  }

  render() {
    return this.boldtext || this.regulartext ?
      this.renderLegacyChip() :
      <div><slot /></div>;
  }
}

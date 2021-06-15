import { Component, Prop, h, Element, State } from '@stencil/core';

@Component({
  tag: 'z-card-cover',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZCardCover {
  @Prop({ reflect: true }) shadowed = false;
  @Prop({ reflect: true }) overlay = false;
  // @Prop({ reflect: true }) bordered = false;
  // @Prop({ reflect: true }) clickable = false;
  @Element() host: HTMLElement;
  @State() hasCoverImage: boolean;

  componentWillLoad() {
    this.hasCoverImage = !!this.host.querySelector('[slot="cover"]');
  }

  /**
   * Template for a card without image cover.
   * A colored background replaces the image and some data is moved over it.
   */
  renderColorCoverCard() {
    return [
      <div class="cover-container">
        <div class="color-cover">
          <div class="content">
            <slot name="metadata" />
            <slot name="title" />
          </div>
        </div>
      </div>,
      <div class="content">
        <slot name="text" />
        <div class="actions">
          <slot name="action" />
        </div>
      </div>
    ];
  }

  render() {
    if (this.overlay || this.hasCoverImage) {
      return [
        <div class="cover-container">
          {this.hasCoverImage && <slot name="cover" />}
          {!this.hasCoverImage && <div class="color-cover"></div>}
        </div>,
        <div class="content">
          <slot name="metadata" />
          <slot name="title" />
          <slot name="text" />
          <div class="actions">
            <slot name="action" />
          </div>
        </div>
      ];
    }

    return this.renderColorCoverCard();
  }
}

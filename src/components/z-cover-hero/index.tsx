import { Component, Prop, h, Element } from '@stencil/core';
import { CoverHeroVariants, CoverHeroContentPosition } from '../../beans';

@Component({
  tag: 'z-cover-hero',
  styleUrl: 'styles.css',
  shadow: true
})

/**
 * Cover hero component.
 * Component to display a hero image with content.
 *
 * @slot cover - slot for the cover image.
 * @slot content - slot for the content.
 * @slot info-reveal - slot for the info reveal.
 * @cssprop --cover-hero-height - height of the cover hero.
 * @cssprop --cover-hero-overlay - overlay color of the cover hero (css background property).
 * @cssprop --cover-hero-text-color - color of the text.
 */

export class ZCoverHero {
  @Element() el: HTMLElement;

  /**
   * Cover hero variant.
   * Can be one of "OVERLAY", "STACKED".
   */
  @Prop({ reflect: true }) variant: CoverHeroVariants = CoverHeroVariants.OVERLAY;

  /**
   * Cover hero content position (only for stacked variant).
   */
  @Prop({ reflect: true }) contentPosition: CoverHeroContentPosition = CoverHeroContentPosition.TOP;

  /**
   * Template for the content.
   */
  private renderContent() {
    return (
      <div class="content-container">
        <slot name="content"></slot>
      </div>
    )
  }

  render() {
    return [
      (this.variant === CoverHeroVariants.STACKED && this.contentPosition === CoverHeroContentPosition.TOP) &&
        this.renderContent(),
      <div class="content-hero">
        <div class="cover">
          <slot name="cover"></slot>
          <slot name="info-reveal"></slot>
        </div>
        {this.variant === CoverHeroVariants.OVERLAY &&
          this.renderContent()
        }
      </div>,
      (this.variant === CoverHeroVariants.STACKED && this.contentPosition === CoverHeroContentPosition.BOTTOM) &&
        this.renderContent()
    ];
  }
}

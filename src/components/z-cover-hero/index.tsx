import { Component, Prop, h, Element } from '@stencil/core';
import { CoverHeroVariants, CoverHeroContentPosition } from '../../beans';

/**
 * Component short description.
 */
@Component({
  tag: 'z-cover-hero',
  styleUrl: 'styles.css',
  shadow: true
})
export class ZCoverHero {
  /**
   * Cover hero variant.
   * Can be one of "overlay", "stacked".
   * Leave it undefined for the default cover hero variant.
   */
  @Prop({ reflect: true }) variant: CoverHeroVariants;

  /** Cover hero content position. */
  @Prop({ reflect: true }) position: CoverHeroContentPosition;

  @Element() host: HTMLElement;

  /**
   * Template for the content.
   */
  private renderContent() {
    return (
      <div class="container">
        <slot name="content"></slot>
      </div>
    )
  }

  render() {
    return [
      (this.variant === CoverHeroVariants.stacked && this.position === CoverHeroContentPosition.top) && [
        this.renderContent()
      ],
      <div class="hero">
        <div class="cover">
          <slot name="cover"></slot>
          <z-info-reveal>
              cd
          </z-info-reveal>
        </div>
        {this.variant === CoverHeroVariants.overlay &&
          this.renderContent()
        }
      </div>,
      (this.variant === CoverHeroVariants.stacked && this.position === CoverHeroContentPosition.bottom) && [
        this.renderContent()
      ],
    ];
  }
}

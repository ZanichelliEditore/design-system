import { CoverHeroVariant, CoverHeroContentPosition } from "../../beans";
/**
 * Cover hero component.
 * Component to display a hero image with content.
 *
 * @slot cover - slot for the cover image.
 * @slot content - slot for the content.
 * @slot info-reveal - slot for the info reveal.
 * @cssprop --cover-hero-height - height of the cover hero.
 * @cssprop --cover-hero-overlay - overlay color of the cover hero (CSS background property).
 * @cssprop --cover-hero-text-color - color of the text.
 */
export declare class ZCoverHero {
  el: HTMLElement;
  /**
   * Cover hero variant.
   * Can be one of "OVERLAY", "STACKED".
   */
  variant: CoverHeroVariant;
  /**
   * Cover hero content position (only for STACKED variant).
   */
  contentPosition: CoverHeroContentPosition;
  /**
   * Template for the content.
   */
  private renderContent;
  render(): any;
}

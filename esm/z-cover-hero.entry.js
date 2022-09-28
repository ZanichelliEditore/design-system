import { r as registerInstance, h, H as Host, g as getElement } from './index-90e18641.js';
import { U as CoverHeroVariant, V as CoverHeroContentPosition } from './index-3c2d757b.js';

const stylesCss = ":host{--cover-hero-height:auto;--cover-hero-overlay:none;--cover-hero-text-color:var(--color-text-inverse);display:block}:host,*{box-sizing:border-box}:host .content-hero{position:relative;align-items:baseline;width:100%;height:var(--cover-hero-height);min-height:calc(var(--space-unit) * 30);background-color:var(--gray600)}:host .content-container{color:var(--cover-hero-text-color);fill:var(--cover-hero-text-color)}:host .content-hero .cover{position:absolute;z-index:0;width:100%;height:100%}::slotted([slot=\"cover\"]){position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:top center}::slotted(z-info-reveal){position:absolute;bottom:var(--grid-margin);right:var(--grid-margin);z-index:1}:host([variant=\"overlay\"]) .content-hero .cover::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:var(--cover-hero-overlay)}:host([variant=\"overlay\"]) .content-hero .content-container{position:relative;height:100%;padding:var(--grid-margin)}:host([variant=\"stacked\"]){--cover-hero-text-color:var(--color-text01)}:host([variant=\"stacked\"]) .content-container ::slotted(*){padding:var(--grid-margin) 0}";

const ZCoverHero = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Cover hero variant.
     * Can be one of "OVERLAY", "STACKED".
     */
    this.variant = CoverHeroVariant.OVERLAY;
    /**
     * Cover hero content position (only for STACKED variant).
     */
    this.contentPosition = CoverHeroContentPosition.TOP;
  }
  /**
   * Template for the content.
   */
  renderContent() {
    return (h("div", { class: "content-container" }, h("slot", { name: "content" })));
  }
  render() {
    return (h(Host, null, this.variant === CoverHeroVariant.STACKED &&
      this.contentPosition === CoverHeroContentPosition.TOP &&
      this.renderContent(), h("div", { class: "content-hero" }, h("div", { class: "cover" }, h("slot", { name: "cover" })), h("slot", { name: "info-reveal" }), this.variant === CoverHeroVariant.OVERLAY && this.renderContent()), (this.variant === CoverHeroVariant.STACKED && this.contentPosition ===
      CoverHeroContentPosition.BOTTOM) && this.renderContent()));
  }
  get el() { return getElement(this); }
};
ZCoverHero.style = stylesCss;

export { ZCoverHero as z_cover_hero };

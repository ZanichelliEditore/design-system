'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');
const index$1 = require('./index-3dd0f9bd.js');

const stylesCss = ":host{--cover-hero-height:auto;--cover-hero-overlay:none;--cover-hero-text-color:var(--color-text-inverse);display:block}:host,*{box-sizing:border-box}:host .content-hero{position:relative;align-items:baseline;width:100%;height:var(--cover-hero-height);min-height:calc(var(--space-unit) * 30);background-color:var(--gray600)}:host .content-container{color:var(--cover-hero-text-color);fill:var(--cover-hero-text-color)}:host .content-hero .cover{position:absolute;z-index:0;width:100%;height:100%}::slotted([slot=\"cover\"]){position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:top center}::slotted(z-info-reveal){position:absolute;bottom:var(--grid-margin);right:var(--grid-margin);z-index:1}:host([variant=\"overlay\"]) .content-hero .cover::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:var(--cover-hero-overlay)}:host([variant=\"overlay\"]) .content-hero .content-container{position:relative;height:100%;padding:var(--grid-margin)}:host([variant=\"stacked\"]){--cover-hero-text-color:var(--color-text01)}:host([variant=\"stacked\"]) .content-container ::slotted(*){padding:var(--grid-margin) 0}";

const ZCoverHero = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Cover hero variant.
     * Can be one of "OVERLAY", "STACKED".
     */
    this.variant = index$1.CoverHeroVariant.OVERLAY;
    /**
     * Cover hero content position (only for STACKED variant).
     */
    this.contentPosition = index$1.CoverHeroContentPosition.TOP;
  }
  /**
   * Template for the content.
   */
  renderContent() {
    return (index.h("div", { class: "content-container" }, index.h("slot", { name: "content" })));
  }
  render() {
    return (index.h(index.Host, null, this.variant === index$1.CoverHeroVariant.STACKED &&
      this.contentPosition === index$1.CoverHeroContentPosition.TOP &&
      this.renderContent(), index.h("div", { class: "content-hero" }, index.h("div", { class: "cover" }, index.h("slot", { name: "cover" })), index.h("slot", { name: "info-reveal" }), this.variant === index$1.CoverHeroVariant.OVERLAY && this.renderContent()), (this.variant === index$1.CoverHeroVariant.STACKED && this.contentPosition ===
      index$1.CoverHeroContentPosition.BOTTOM) && this.renderContent()));
  }
  get el() { return index.getElement(this); }
};
ZCoverHero.style = stylesCss;

exports.z_cover_hero = ZCoverHero;

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-e8ce94a1.js');

const stylesCss = ":host{--aspect-ratio:1.62;--z-card--border-color:var(--gray200);--z-card--color-cover-background:var(--color-surface01);--z-card--text-background:var(--color-surface01);--z-card--text-border-radius:none;--z-card--text-border:none;--z-card--text-padding:calc(var(--space-unit) * 2) var(--space-unit);position:relative;display:flex;flex-direction:column;font-family:var(--font-family-sans);font-weight:var(--font-rg)}*,::slotted(*){box-sizing:border-box}:host(:not([variant=\"overlay\"])) .cover-container{position:relative;width:100%}.cover-container{padding-bottom:calc(100% / var(--aspect-ratio))}::slotted([slot=\"cover\"]),.color-cover{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:center}.cover-container>z-icon{--z-icon-width:calc(var(--space-unit) * 11);--z-icon-height:var(--z-icon-width);position:absolute;top:calc(50% - calc(var(--z-icon-height) / 2));left:calc(50% - calc(var(--z-icon-width) / 2));fill:var(--color-primary01)}.color-cover{background-color:var(--z-card--color-cover-background)}.content{display:flex;flex-direction:column;padding-top:var(--space-unit)}.color-cover .cover-content{display:flex;height:100%;flex-direction:column;justify-content:flex-end;padding:var(--space-unit)}::slotted([slot=\"metadata\"]),::slotted([slot=\"title\"]),::slotted([slot=\"text\"]){display:box;overflow:hidden;-webkit-box-orient:vertical}::slotted([slot=\"title\"]:not(:last-child)),::slotted([slot=\"text\"]:not(:last-child)){margin-bottom:var(--space-unit)}::slotted([slot=\"title\"])::before{position:absolute;z-index:1;top:0;right:0;bottom:0;left:0;content:\"\"}::slotted([slot=\"metadata\"]:not(:last-child)){margin:0 0 calc(var(--space-unit) * 0.25);-webkit-line-clamp:1;text-transform:uppercase}::slotted([slot=\"title\"]){margin:0;color:inherit;font-size:inherit;font-weight:var(--font-sb);-webkit-line-clamp:2;text-decoration:none}::slotted([slot=\"text\"]){margin:0;-webkit-line-clamp:3}.actions{position:relative;z-index:2;display:flex;flex-direction:row;align-items:center}::slotted([slot=\"action\"]:not(:last-child)){margin-right:calc(var(--space-unit) * 2)}:host([clickable]) ::slotted([slot=\"title\"]:focus:focus-visible)::before{box-shadow:var(--shadow-focus-primary)}:host([clickable]) ::slotted([slot=\"title\"]:focus:focus-visible){outline:none}:host([variant=\"text\"]){border:var(--z-card--text-border);background-color:var(--z-card--text-background);border-radius:var(--z-card--text-border-radius)}:host([show-shadow])>.content,:host([variant=\"border\"])>.content,:host([variant=\"shadow\"])>.content{height:100%;padding:var(--space-unit) var(--space-unit) calc(var(--space-unit) * 2)}:host([variant=\"text\"])>.content{padding:var(--z-card--text-padding)}:host([variant=\"border\"]) .actions,:host([variant=\"shadow\"]) .actions{margin-top:auto}:host([variant=\"border\"]){border:var(--border-size-small) solid var(--z-card--border-color)}:host([variant=\"border\"][clickable]:hover)>.content{background:var(--color-background)}:host([variant=\"border\"][clickable]:focus:focus-visible){box-shadow:var(--shadow-focus-primary)}:host([variant=\"border\"][clickable]:active){border-color:transparent}:host([variant=\"shadow\"]),:host([show-shadow]){box-shadow:var(--shadow-2)}:host([variant=\"shadow\"][clickable]:hover),:host([clickable][show-shadow]:hover){box-shadow:var(--shadow-4)}:host([variant=\"shadow\"][clickable]:focus:focus-visible),:host([clickable][show-shadow]:focus:focus-visible){box-shadow:var(--shadow-focus-primary)}:host([variant=\"shadow\"][clickable]:active),:host([clickable][show-shadow]:active){box-shadow:none}:host([variant=\"overlay\"]) .content{position:absolute;top:0;right:0;bottom:0;left:0;justify-content:flex-end;padding:var(--space-unit);background-image:linear-gradient(to top, rgb(0 0 0 / 100%), rgb(0 0 0 / 0%));color:var(--color-text-inverse);fill:var(--color-text-inverse)}";

const ZCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** Enable shadow. Default: false. */
    this.showShadow = false;
    /** Enable 'clickable' style like hover and focus style. */
    this.clickable = false;
  }
  componentWillLoad() {
    this.hasCoverImage = this.host.querySelector('[slot="cover"]') !== null;
  }
  /**
   * Template for a card without image cover.
   * A colored background replaces the image and some data is moved over it.
   */
  renderColorCoverCard() {
    return [
      index.h("div", { class: "cover-container" }, index.h("div", { class: "color-cover" }, index.h("div", { class: "cover-content" }, index.h("slot", { name: "metadata" }), index.h("slot", { name: "title" })))),
      index.h("div", { class: "content" }, index.h("slot", { name: "text" }), index.h("div", { class: "actions" }, index.h("slot", { name: "action" }))),
    ];
  }
  /**
   * Template for the content div.
   */
  renderContentDiv() {
    return (index.h("div", { class: "content" }, index.h("slot", { name: "metadata" }), index.h("slot", { name: "title" }), index.h("slot", { name: "text" }), index.h("div", { class: "actions" }, index.h("slot", { name: "action" }))));
  }
  render() {
    if (this.variant === index$1.CardVariant.TEXT) {
      return index.h(index.Host, null, this.renderContentDiv());
    }
    if (this.variant === index$1.CardVariant.OVERLAY || this.hasCoverImage) {
      return (index.h(index.Host, null, index.h("div", { class: "cover-container" }, this.hasCoverImage && [
        index.h("slot", { name: "cover" }),
        this.variant !== index$1.CardVariant.OVERLAY && this.coverIcon && index.h("z-icon", { name: this.coverIcon }),
      ], !this.hasCoverImage && index.h("div", { class: "color-cover" })), this.renderContentDiv()));
    }
    return index.h(index.Host, null, this.renderColorCoverCard());
  }
  get host() { return index.getElement(this); }
};
ZCard.style = stylesCss;

exports.z_card = ZCard;
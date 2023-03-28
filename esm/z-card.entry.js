import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a2ca4b97.js';
import { C as CardVariant } from './index-e36ec4a4.js';

const stylesCss = ":host{--aspect-ratio:1.62;--z-card--border-color:var(--gray200);--z-card--color-cover-background:var(--color-surface01);--z-card--text-background:var(--color-surface01);--z-card--text-border-radius:none;--z-card--text-border:none;position:relative;display:flex;flex-direction:column;font-family:var(--font-family-sans);font-weight:var(--font-rg)}*,::slotted(*){box-sizing:border-box}:host(:not([variant=\"overlay\"])) .cover-container{position:relative;width:100%}.cover-container{padding-bottom:calc(100% / var(--aspect-ratio))}::slotted([slot=\"cover\"]),.color-cover{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:center}.cover-container>z-icon{--z-icon-width:calc(var(--space-unit) * 11);--z-icon-height:var(--z-icon-width);position:absolute;top:calc(50% - calc(var(--z-icon-height) / 2));left:calc(50% - calc(var(--z-icon-width) / 2));fill:var(--color-primary01)}.color-cover{background-color:var(--z-card--color-cover-background)}.content{display:flex;flex-direction:column;padding-top:var(--space-unit)}.color-cover .cover-content{display:flex;height:100%;flex-direction:column;justify-content:flex-end;padding:var(--space-unit)}::slotted([slot=\"metadata\"]),::slotted([slot=\"title\"]),::slotted([slot=\"text\"]){display:box;overflow:hidden;-webkit-box-orient:vertical}::slotted([slot=\"title\"]:not(:last-child)),::slotted([slot=\"text\"]:not(:last-child)){margin-bottom:var(--space-unit)}::slotted([slot=\"text\"]),::slotted([slot=\"actions\"]){margin:0}::slotted([slot=\"metadata\"]:not(:last-child)){margin:0 0 calc(var(--space-unit) * 0.25);-webkit-line-clamp:1;text-transform:uppercase}::slotted([slot=\"title\"]){margin:0;font-weight:var(--font-sb);-webkit-line-clamp:2}::slotted([slot=\"text\"]){-webkit-line-clamp:3}.actions{display:flex;flex-direction:row;align-items:center}::slotted([slot=\"action\"]:not(:last-child)){margin-right:calc(var(--space-unit) * 1.5)}:host([clickable]){cursor:pointer}:host([clickable]:focus:focus-visible){outline:none}:host(:not([variant])[clickable]:focus:focus-visible){padding:calc(var(--space-unit) * 0.5);box-shadow:var(--shadow-focus-primary)}:host([variant=\"text\"]){border:var(--z-card--text-border);background-color:var(--z-card--text-background);border-radius:var(--z-card--text-border-radius)}:host([showshadow])>.content,:host([variant=\"border\"])>.content,:host([variant=\"shadow\"])>.content{height:100%;padding:var(--space-unit) var(--space-unit) calc(var(--space-unit) * 2)}:host([variant=\"text\"])>.content{padding:calc(var(--space-unit) * 2) var(--space-unit)}:host([variant=\"border\"]) .actions,:host([variant=\"shadow\"]) .actions{margin-top:auto}:host([variant=\"border\"]){border:var(--border-size-small) solid var(--z-card--border-color)}:host([variant=\"border\"][clickable]:hover)>.content{background:var(--color-background)}:host([variant=\"border\"][clickable]:focus:focus-visible){box-shadow:var(--shadow-focus-primary)}:host([variant=\"border\"][clickable]:active){border-color:transparent}:host([variant=\"shadow\"]),:host([showshadow]){box-shadow:var(--shadow-2)}:host([variant=\"shadow\"][clickable]:hover),:host([clickable][showshadow]:hover){box-shadow:var(--shadow-4)}:host([variant=\"shadow\"][clickable]:focus:focus-visible),:host([clickable][showshadow]:focus:focus-visible){box-shadow:var(--shadow-focus-primary)}:host([variant=\"shadow\"][clickable]:active),:host([clickable][showshadow]:active){box-shadow:none}:host([variant=\"overlay\"]) .content{position:absolute;top:0;right:0;bottom:0;left:0;justify-content:flex-end;padding:var(--space-unit);background-image:linear-gradient(to top, rgb(0 0 0 / 100%), rgb(0 0 0 / 0%));color:var(--color-text-inverse);fill:var(--color-text-inverse)}";

const ZCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.cardClicked = createEvent(this, "cardClicked", 7);
    /** Enable click interactions on the card. Default: false */
    this.clickable = false;
    /** Enable shadow. Default: false. */
    this.showshadow = false;
  }
  onClick(ev) {
    // Do nothing for clicks on actions.
    if (ev.target.getAttribute("slot") === "action") {
      return;
    }
    if (!this.clickable) {
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }
    this.cardClicked.emit();
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
      h("div", { class: "cover-container" }, h("div", { class: "color-cover" }, h("div", { class: "cover-content" }, h("slot", { name: "metadata" }), h("slot", { name: "title" })))),
      h("div", { class: "content" }, h("slot", { name: "text" }), h("div", { class: "actions" }, h("slot", { name: "action" }))),
    ];
  }
  /**
   * Template for the content div.
   */
  renderContentDiv() {
    return (h("div", { class: "content" }, h("slot", { name: "metadata" }), h("slot", { name: "title" }), h("slot", { name: "text" }), h("div", { class: "actions" }, h("slot", { name: "action" }))));
  }
  render() {
    if (this.variant === CardVariant.TEXT) {
      return h(Host, null, this.renderContentDiv());
    }
    if (this.variant === CardVariant.OVERLAY || this.hasCoverImage) {
      return (h(Host, null, h("div", { class: "cover-container" }, this.hasCoverImage && [
        h("slot", { name: "cover" }),
        this.variant !== CardVariant.OVERLAY && this.coverIcon && h("z-icon", { name: this.coverIcon }),
      ], !this.hasCoverImage && h("div", { class: "color-cover" })), this.renderContentDiv()));
    }
    return h(Host, null, this.renderColorCoverCard());
  }
  get host() { return getElement(this); }
};
ZCard.style = stylesCss;

export { ZCard as z_card };

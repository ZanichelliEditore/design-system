'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5dc4a8de.js');
const index$1 = require('./index-39ce4edf.js');

const stylesCss = ":host{--aspect-ratio:1.62;--z-card--border-color:var(--gray200);--z-card--color-cover-background:var(--color-surface01);--z-card--text-background:var(--color-surface01);--z-card--text-border-radius:none;--z-card--text-border:none;--z-card--text-padding:calc(var(--space-unit) * 2) var(--space-unit);position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;font-family:var(--font-family-sans);font-weight:var(--font-rg)}*,::slotted(*){-webkit-box-sizing:border-box;box-sizing:border-box}:host(:not([variant=\"overlay\"])) .cover-container{position:relative;width:100%}.cover-container{padding-bottom:calc(100% / var(--aspect-ratio))}::slotted([slot=\"cover\"]),.color-cover{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}.cover-container>z-icon{--z-icon-width:calc(var(--space-unit) * 11);--z-icon-height:var(--z-icon-width);position:absolute;top:calc(50% - calc(var(--z-icon-height) / 2));left:calc(50% - calc(var(--z-icon-width) / 2));fill:var(--color-primary01)}.color-cover{background-color:var(--z-card--color-cover-background)}.content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-top:var(--space-unit)}.color-cover .cover-content{display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:end;justify-content:flex-end;padding:var(--space-unit)}::slotted([slot=\"metadata\"]),::slotted([slot=\"title\"]),::slotted([slot=\"text\"]){display:-webkit-inline-box;overflow:hidden;-webkit-box-orient:vertical}::slotted([slot=\"title\"]:not(:last-child)),::slotted([slot=\"text\"]:not(:last-child)){margin-bottom:var(--space-unit)}::slotted([slot=\"title\"])::before{position:absolute;z-index:1;top:0;right:0;bottom:0;left:0;content:\"\"}::slotted([slot=\"metadata\"]:not(:last-child)){margin:0 0 calc(var(--space-unit) * 0.25);-webkit-line-clamp:1;text-transform:uppercase}::slotted([slot=\"title\"]){margin:0;color:inherit;font-size:inherit;font-weight:var(--font-sb);-webkit-line-clamp:2;text-decoration:none}::slotted([slot=\"text\"]){margin:0;-webkit-line-clamp:3}.actions{position:relative;z-index:2;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}::slotted([slot=\"action\"]:not(:last-child)){margin-right:calc(var(--space-unit) * 2)}:host([clickable]) ::slotted([slot=\"title\"]:focus:focus-visible)::before{-webkit-box-shadow:var(--shadow-focus-primary);box-shadow:var(--shadow-focus-primary)}:host([clickable]) ::slotted([slot=\"title\"]:focus:focus-visible){-webkit-box-shadow:none !important;box-shadow:none !important;outline:none !important}:host([variant=\"text\"]){border:var(--z-card--text-border);background-color:var(--z-card--text-background);border-radius:var(--z-card--text-border-radius)}:host([show-shadow])>.content,:host([variant=\"border\"])>.content,:host([variant=\"shadow\"])>.content{height:100%;padding:var(--space-unit) var(--space-unit) calc(var(--space-unit) * 2)}:host([variant=\"text\"])>.content{padding:var(--z-card--text-padding)}:host([variant=\"border\"]) .actions,:host([variant=\"shadow\"]) .actions{margin-top:auto}:host([variant=\"border\"]){border:var(--border-size-small) solid var(--z-card--border-color)}:host([variant=\"border\"][clickable]:hover)>.content{background:var(--color-background)}:host([variant=\"border\"][clickable]:focus:focus-visible){-webkit-box-shadow:var(--shadow-focus-primary);box-shadow:var(--shadow-focus-primary)}:host([variant=\"border\"][clickable]:active){border-color:transparent}:host([variant=\"shadow\"]),:host([show-shadow]){-webkit-box-shadow:var(--shadow-2);box-shadow:var(--shadow-2)}:host([variant=\"shadow\"][clickable]:hover),:host([clickable][show-shadow]:hover){-webkit-box-shadow:var(--shadow-4);box-shadow:var(--shadow-4)}:host([variant=\"shadow\"][clickable]:focus:focus-visible),:host([clickable][show-shadow]:focus:focus-visible){-webkit-box-shadow:var(--shadow-focus-primary);box-shadow:var(--shadow-focus-primary)}:host([variant=\"shadow\"][clickable]:active),:host([clickable][show-shadow]:active){-webkit-box-shadow:none;box-shadow:none}:host([variant=\"overlay\"]) .content{position:absolute;top:0;right:0;bottom:0;left:0;-ms-flex-pack:end;justify-content:flex-end;padding:var(--space-unit);background-image:-webkit-gradient(linear, left bottom, left top, from(rgb(0 0 0 / 100%)), to(rgb(0 0 0 / 0%)));background-image:linear-gradient(to top, rgb(0 0 0 / 100%), rgb(0 0 0 / 0%));color:var(--color-text-inverse);fill:var(--color-text-inverse)}";
const ZCardStyle0 = stylesCss;

const ZCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.variant = undefined;
        this.coverIcon = undefined;
        this.showShadow = false;
        this.clickable = false;
        this.hasCoverImage = undefined;
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
ZCard.style = ZCardStyle0;

exports.z_card = ZCard;

//# sourceMappingURL=z-card.cjs.entry.js.map
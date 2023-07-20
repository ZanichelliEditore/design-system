import { r as registerInstance, c as createEvent, h } from './index-a2ca4b97.js';
import { B as ButtonVariant, d as ButtonSize } from './index-fd62a73e.js';

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host z-myz-card{--card-overflow:visible}:host>div{position:relative;width:100%;height:522px;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out, -webkit-transform 0.5s ease-out}:host>div .content{position:relative;z-index:2;width:100%;height:522px;transform-style:preserve-3d;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out, -webkit-transform 0.5s ease-out}:host>div .content.flipped{margin-top:-2px;transform:rotateY(180deg)}:host>div .front,:host>div .back{position:absolute;top:0;left:0;width:100%;height:100%;backface-visibility:hidden}:host>div .front{z-index:2;top:0;left:0;transform:rotateY(0deg)}:host>div .front z-button{position:absolute;z-index:3;top:calc(var(--space-unit) * 0.5);left:calc(-1 * var(--space-unit))}:host>div .back{z-index:1;top:0;left:0;display:flex;justify-content:center;padding:0 var(--space-unit);margin-left:calc(-1 * var(--space-unit));transform:rotateY(180deg)}.hide-info{display:none}";

const ZMyzCardDictionary = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.cardFlipped = createEvent(this, "cardFlipped", 7);
    /** card is disabled */
    this.disabled = false;
    /** card is flipped */
    this.flipped = false;
    /** flip button label */
    this.flipbuttonlabel = "INFO";
    /** hide info button */
    this.hideinfobtn = false;
  }
  handleFlipCard(e) {
    this.flipCard(e.detail);
  }
  flipCard(showBack = true) {
    this.flipped = showBack;
    this.cardFlipped.emit(showBack);
  }
  render() {
    return (h("div", null, h("z-myz-card", null, h("z-myz-card-header", { titolo: this.name }), h("div", { class: `content ${this.flipped ? "flipped" : ""}` }, h("div", { class: "front" }, h("z-myz-card-body", null, h("z-myz-card-cover", { slot: "cover", titolo: this.name, img: this.cover, faded: this.disabled })), h("z-button", { class: { "hide-info": this.hideinfobtn }, variant: ButtonVariant.SECONDARY, icon: "informationsource", size: ButtonSize.X_SMALL, onClick: () => this.flipCard(true), disabled: this.flipped }, this.flipbuttonlabel)), h("div", { class: "back" }, h("slot", { name: "info" }))), h("slot", null))));
  }
};
ZMyzCardDictionary.style = stylesCss;

export { ZMyzCardDictionary as z_myz_card_dictionary };

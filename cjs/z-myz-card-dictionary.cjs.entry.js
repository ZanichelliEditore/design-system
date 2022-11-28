'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-fa110f37.js');

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host z-myz-card{--card-overflow:visible}:host>div{position:relative;width:100%;height:522px;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out, -webkit-transform 0.5s ease-out}:host>div .content{position:relative;z-index:2;width:100%;height:522px;transform-style:preserve-3d;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out, -webkit-transform 0.5s ease-out}:host>div .content.flipped{margin-top:-2px;transform:rotateY(180deg)}:host>div .front,:host>div .back{position:absolute;top:0;left:0;width:100%;height:100%;backface-visibility:hidden}:host>div .front{z-index:2;top:0;left:0;transform:rotateY(0deg)}:host>div .front z-button{position:absolute;z-index:3;top:calc(var(--space-unit) * 0.5);left:calc(-1 * var(--space-unit))}:host>div .back{z-index:1;top:0;left:0;display:flex;justify-content:center;padding:0 var(--space-unit);margin-left:calc(-1 * var(--space-unit));transform:rotateY(180deg)}.hide-info{display:none}";

const ZMyzCardDictionary = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.cardFlipped = index.createEvent(this, "cardFlipped", 7);
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
    return (index.h("div", null, index.h("z-myz-card", null, index.h("z-myz-card-header", { titolo: this.name }), index.h("div", { class: `content ${this.flipped ? "flipped" : ""}` }, index.h("div", { class: "front" }, index.h("z-myz-card-body", null, index.h("z-myz-card-cover", { slot: "cover", titolo: this.name, img: this.cover, faded: this.disabled })), index.h("z-button", { class: { "hide-info": this.hideinfobtn }, variant: index$1.ButtonVariant.SECONDARY, icon: "informationsource", size: index$1.ButtonSize.X_SMALL, onClick: () => this.flipCard(true), disabled: this.flipped }, this.flipbuttonlabel)), index.h("div", { class: "back" }, index.h("slot", { name: "info" }))), index.h("slot", null))));
  }
};
ZMyzCardDictionary.style = stylesCss;

exports.z_myz_card_dictionary = ZMyzCardDictionary;

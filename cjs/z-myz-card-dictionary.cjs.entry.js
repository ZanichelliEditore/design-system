'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dc60bee7.js');
const index$1 = require('./index-39ce4edf.js');

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host z-myz-card{--card-overflow:visible}:host>div{position:relative;width:100%;height:522px;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out, -webkit-transform 0.5s ease-out}:host>div .content{position:relative;z-index:2;width:100%;height:522px;transform-style:preserve-3d;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out, -webkit-transform 0.5s ease-out}:host>div .content.flipped{margin-top:-2px;transform:rotateY(180deg)}:host>div .front,:host>div .back{position:absolute;top:0;left:0;width:100%;height:100%;backface-visibility:hidden}:host>div .front{z-index:2;top:0;left:0;transform:rotateY(0deg)}:host>div .front z-button{position:absolute;z-index:3;top:calc(var(--space-unit) * 0.5);left:calc(-1 * var(--space-unit))}:host>div .back{z-index:1;top:0;left:0;display:flex;justify-content:center;padding:0 var(--space-unit);margin-left:calc(-1 * var(--space-unit));transform:rotateY(180deg)}.hide-info{display:none}";
const ZMyzCardDictionaryStyle0 = stylesCss;

const ZMyzCardDictionary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.cardFlipped = index.createEvent(this, "cardFlipped", 7);
        this.name = undefined;
        this.cover = undefined;
        this.disabled = false;
        this.flipped = false;
        this.flipbuttonlabel = "INFO";
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
        return (index.h("div", { key: '27902c8b5de865c26c56ba38e245b9bad6edbd18' }, index.h("z-myz-card", { key: 'fc8095edfa2a7d59331977975e24af5fb6e35930' }, index.h("z-myz-card-header", { key: '66dd4738696aa8417d36de2bcd4e8b6957a5f5e2', titolo: this.name }), index.h("div", { key: '5f825ad42844b2e895f17516e7b090d3c5ce8a6c', class: `content ${this.flipped ? "flipped" : ""}` }, index.h("div", { key: 'f86a2a9e7378ba99b4eacf5c106f1a0dce5f4f96', class: "front" }, index.h("z-myz-card-body", { key: 'ca603d9fde5d8eef714dce707d6d7107d3211e4d' }, index.h("z-myz-card-cover", { key: '63381a0912ced7fd24ad16865417c4e1da993e77', slot: "cover", titolo: this.name, img: this.cover, faded: this.disabled })), index.h("z-button", { key: '0cdfdcd7c39064180d4ec16bd5c0beb4b82c6e8c', class: { "hide-info": this.hideinfobtn }, variant: index$1.ButtonVariant.SECONDARY, icon: "informationsource", size: index$1.ButtonSize.X_SMALL, onClick: () => this.flipCard(true), disabled: this.flipped }, this.flipbuttonlabel)), index.h("div", { key: 'ca62bad1d808d9f5fec3b620fa558c0a6ecea908', class: "back" }, index.h("slot", { key: '068e582536a203fbf6bbd56eeef4ede786b89d1c', name: "info" }))), index.h("slot", { key: '97fb9bea58f45f42d81ff5344f34a9acaba32639' }))));
    }
};
ZMyzCardDictionary.style = ZMyzCardDictionaryStyle0;

exports.z_myz_card_dictionary = ZMyzCardDictionary;

//# sourceMappingURL=z-myz-card-dictionary.cjs.entry.js.map
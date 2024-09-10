'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e801ae96.js');
const index$1 = require('./index-bab7a651.js');

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host z-myz-card{--card-overflow:visible}:host>div{position:relative;width:100%;height:522px;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out,\n    -webkit-transform 0.5s ease-out}:host>div .content{position:relative;z-index:2;width:100%;height:522px;transform-style:preserve-3d;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out,\n    -webkit-transform 0.5s ease-out}:host>div .content.flipped{margin-top:-2px;transform:rotateY(180deg)}:host>div .front,:host>div .back{position:absolute;top:0;left:0;width:100%;height:100%;backface-visibility:hidden}:host>div .front{z-index:2;top:0;left:0;transform:rotateY(0deg)}:host>div .front z-button{position:absolute;z-index:3;top:calc(var(--space-unit) * 0.5);left:calc(-1 * var(--space-unit))}:host>div .back{z-index:1;top:0;left:0;display:flex;justify-content:center;padding:0 var(--space-unit);margin-left:calc(-1 * var(--space-unit));transform:rotateY(180deg)}.hide-info{display:none}";
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
        return (index.h("div", { key: 'd86e3c2140c9100c3bac377380a4fff77d089153' }, index.h("z-myz-card", { key: '34a3f2a9bfe747865ad3a4dca7f0ec106b1fe567' }, index.h("z-myz-card-header", { key: 'dc172fabf38338d7fd89af67a80da6918a1c0918', titolo: this.name }), index.h("div", { key: '8d0b945f35287a60658cf37b15440f8b66c98b65', class: `content ${this.flipped ? "flipped" : ""}` }, index.h("div", { key: '7b205650b760c3fb8f7d538bbfe5d2a73e237992', class: "front" }, index.h("z-myz-card-body", { key: 'c8fe772333350bc8ef4643f04e0585b80fea7e83' }, index.h("z-myz-card-cover", { key: 'a1b65f443fdf541dee8b21fb3709362ed6eaff4f', slot: "cover", titolo: this.name, img: this.cover, faded: this.disabled })), index.h("z-button", { key: 'e5b8bb0a7543a5f1e3954564f4cd28c11963b0aa', class: { "hide-info": this.hideinfobtn }, variant: index$1.ButtonVariant.SECONDARY, icon: "informationsource", size: index$1.ButtonSize.X_SMALL, onClick: () => this.flipCard(true), disabled: this.flipped }, this.flipbuttonlabel)), index.h("div", { key: 'ce3cfb76aac872409b162b80c6659799c17ea6ed', class: "back" }, index.h("slot", { key: 'eafdc479751d3326775dd01f1ced2ac9a9df189f', name: "info" }))), index.h("slot", { key: '4e4d018a5ca6c9282985d7fb978abb738675fa52' }))));
    }
};
ZMyzCardDictionary.style = ZMyzCardDictionaryStyle0;

exports.z_myz_card_dictionary = ZMyzCardDictionary;

//# sourceMappingURL=z-myz-card-dictionary.cjs.entry.js.map
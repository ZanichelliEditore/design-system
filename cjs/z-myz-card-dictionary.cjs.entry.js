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
        return (index.h("div", { key: '1fe60ae11176ccbc16a5ff68e483d89e22b91c02' }, index.h("z-myz-card", { key: 'e553917829677ee56d9b076d7a23c87c6f90378a' }, index.h("z-myz-card-header", { key: '9406d2c2e6e06fc71f75f687e62f73d482932ca8', titolo: this.name }), index.h("div", { key: '81f749c82b968c5d41303432e384da5808f9e0ee', class: `content ${this.flipped ? "flipped" : ""}` }, index.h("div", { key: 'facefc39c8331e8a385b8ff44768f6be8899fbca', class: "front" }, index.h("z-myz-card-body", { key: '73c31a9f60d94c02d3a4e85738b355430b2de4a1' }, index.h("z-myz-card-cover", { key: '95d79bc0ace8e3ec30b9920dd79a79dce6de9ed9', slot: "cover", titolo: this.name, img: this.cover, faded: this.disabled })), index.h("z-button", { key: '805fcc896d005e1b1c891918ad780e627ca3a372', class: { "hide-info": this.hideinfobtn }, variant: index$1.ButtonVariant.SECONDARY, icon: "informationsource", size: index$1.ButtonSize.X_SMALL, onClick: () => this.flipCard(true), disabled: this.flipped }, this.flipbuttonlabel)), index.h("div", { key: '6df3496b8aa8cf79b40c5443d96ca253596f9305', class: "back" }, index.h("slot", { key: 'f5895f11b8a6d88322057b55cf33676b2b47619f', name: "info" }))), index.h("slot", { key: 'e1645cc8da0229d33341d0d1b749e82e93caa804' }))));
    }
};
ZMyzCardDictionary.style = ZMyzCardDictionaryStyle0;

exports.z_myz_card_dictionary = ZMyzCardDictionary;

//# sourceMappingURL=z-myz-card-dictionary.cjs.entry.js.map
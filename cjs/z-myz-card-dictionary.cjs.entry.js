'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5dc4a8de.js');
const index$1 = require('./index-39ce4edf.js');

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
        return (index.h("div", { key: 'ed889966f8549cc26bb5a74907698789dc5589db' }, index.h("z-myz-card", { key: '2f800d33d6ad0b9c0da423ae300d166c5cff1138' }, index.h("z-myz-card-header", { key: 'ac3b947d1bc44020038864cee354d25e03e35520', titolo: this.name }), index.h("div", { key: '510d58895ab181f57bf347181e9800e2905051ac', class: `content ${this.flipped ? "flipped" : ""}` }, index.h("div", { key: '5edbb595e686ab20daf7627d8853bac7ded0b400', class: "front" }, index.h("z-myz-card-body", { key: '4429043e3309372204e1327b63af4bb7070e8821' }, index.h("z-myz-card-cover", { key: '4131ba8eac6d1b4de4ebb2132b90b23c84a4e208', slot: "cover", titolo: this.name, img: this.cover, faded: this.disabled })), index.h("z-button", { key: '868186b2ce493dcea4927f02678da0014adde59e', class: { "hide-info": this.hideinfobtn }, variant: index$1.ButtonVariant.SECONDARY, icon: "informationsource", size: index$1.ButtonSize.X_SMALL, onClick: () => this.flipCard(true), disabled: this.flipped }, this.flipbuttonlabel)), index.h("div", { key: '82831b99ec4d728738523fe6cc4ad63a63d503f1', class: "back" }, index.h("slot", { key: 'e636f908bec08c14febee93e62a3b053b46e5cfb', name: "info" }))), index.h("slot", { key: 'c7fc3bc013651830a0777c1c41d7c11ea9d90041' }))));
    }
};
ZMyzCardDictionary.style = ZMyzCardDictionaryStyle0;

exports.z_myz_card_dictionary = ZMyzCardDictionary;

//# sourceMappingURL=z-myz-card-dictionary.cjs.entry.js.map
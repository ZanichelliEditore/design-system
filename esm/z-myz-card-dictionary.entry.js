import { r as registerInstance, c as createEvent, h } from './index-f16bc2ca.js';
import { B as ButtonVariant, d as ButtonSize } from './index-2255c6c8.js';

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host z-myz-card{--card-overflow:visible}:host>div{position:relative;width:100%;height:522px;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out, -webkit-transform 0.5s ease-out}:host>div .content{position:relative;z-index:2;width:100%;height:522px;transform-style:preserve-3d;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out, -webkit-transform 0.5s ease-out}:host>div .content.flipped{margin-top:-2px;transform:rotateY(180deg)}:host>div .front,:host>div .back{position:absolute;top:0;left:0;width:100%;height:100%;backface-visibility:hidden}:host>div .front{z-index:2;top:0;left:0;transform:rotateY(0deg)}:host>div .front z-button{position:absolute;z-index:3;top:calc(var(--space-unit) * 0.5);left:calc(-1 * var(--space-unit))}:host>div .back{z-index:1;top:0;left:0;display:flex;justify-content:center;padding:0 var(--space-unit);margin-left:calc(-1 * var(--space-unit));transform:rotateY(180deg)}.hide-info{display:none}";
const ZMyzCardDictionaryStyle0 = stylesCss;

const ZMyzCardDictionary = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.cardFlipped = createEvent(this, "cardFlipped", 7);
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
        return (h("div", { key: '96caf561d4eba775d1444997a7e7c836c26cc9ec' }, h("z-myz-card", { key: '3a8c8c93437564ac3230d1b0eb488b7dac9ebf2f' }, h("z-myz-card-header", { key: '0d8799942f0d4f9ab2af2c49c00e57b1e1656e12', titolo: this.name }), h("div", { key: '973b554f76522b627b16e5eb9a149fba5f40b2ed', class: `content ${this.flipped ? "flipped" : ""}` }, h("div", { key: '9bbc28302b56a87066f823bd6d955bb0da2727f5', class: "front" }, h("z-myz-card-body", { key: 'fa95d36e00e3fa7b7687700ce81011a7c448e3c9' }, h("z-myz-card-cover", { key: '97e18aa20e8aa457ce59c6099e6750006f1b6558', slot: "cover", titolo: this.name, img: this.cover, faded: this.disabled })), h("z-button", { key: '98b88db1a8cb836761859b28e78a91e77a382ee9', class: { "hide-info": this.hideinfobtn }, variant: ButtonVariant.SECONDARY, icon: "informationsource", size: ButtonSize.X_SMALL, onClick: () => this.flipCard(true), disabled: this.flipped }, this.flipbuttonlabel)), h("div", { key: '45bb4be033a17b7234bfcec8c0094f83aefc826d', class: "back" }, h("slot", { key: '089d5d4d4b842d205ee4a9f4109551a9968a2606', name: "info" }))), h("slot", { key: 'e458915924a0b35036620574f35c0340eeea851c' }))));
    }
};
ZMyzCardDictionary.style = ZMyzCardDictionaryStyle0;

export { ZMyzCardDictionary as z_myz_card_dictionary };

//# sourceMappingURL=z-myz-card-dictionary.entry.js.map
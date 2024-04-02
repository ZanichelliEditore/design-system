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
        return (h("div", { key: '75b18feaa0c930cafb3eeadfbd3a815acf629ad3' }, h("z-myz-card", { key: '069f6f457a1245042e32e1d79101f76d40a065bc' }, h("z-myz-card-header", { key: '7143e0aa8db6f3130778bb34c84f84074950a8ec', titolo: this.name }), h("div", { key: '9562c13fbd46a054f9a8a2a307803a62a3973462', class: `content ${this.flipped ? "flipped" : ""}` }, h("div", { key: '2887ee676e44064eaaa5ec96981b1d6f2ec75553', class: "front" }, h("z-myz-card-body", { key: '46a2ae89fb4aa4ff0283f6bd8315da9572bf9e12' }, h("z-myz-card-cover", { key: '15ae6368e0adee0b691acae69456ca57151f22e5', slot: "cover", titolo: this.name, img: this.cover, faded: this.disabled })), h("z-button", { key: 'c8c0a403c084f72c934fb4c9c4a171bec8cf7cdd', class: { "hide-info": this.hideinfobtn }, variant: ButtonVariant.SECONDARY, icon: "informationsource", size: ButtonSize.X_SMALL, onClick: () => this.flipCard(true), disabled: this.flipped }, this.flipbuttonlabel)), h("div", { key: '5923095048d52d5c2ac78b4074e4e876468e06b0', class: "back" }, h("slot", { key: '4e934ba81c365e10e411fd758edfad1593642bb0', name: "info" }))), h("slot", { key: '211875e202f745c2e4d44c90858c3edc878e762b' }))));
    }
};
ZMyzCardDictionary.style = ZMyzCardDictionaryStyle0;

export { ZMyzCardDictionary as z_myz_card_dictionary };

//# sourceMappingURL=z-myz-card-dictionary.entry.js.map
import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { B as ButtonVariant, d as ButtonSize } from './index2.js';
import { d as defineCustomElement$7 } from './index4.js';
import { d as defineCustomElement$6 } from './index9.js';
import { d as defineCustomElement$5 } from './index16.js';
import { d as defineCustomElement$4 } from './index17.js';
import { d as defineCustomElement$3 } from './index18.js';
import { d as defineCustomElement$2 } from './index19.js';

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host z-myz-card{--card-overflow:visible}:host>div{position:relative;width:100%;height:522px;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out, -webkit-transform 0.5s ease-out}:host>div .content{position:relative;z-index:2;width:100%;height:522px;transform-style:preserve-3d;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out, -webkit-transform 0.5s ease-out}:host>div .content.flipped{margin-top:-2px;transform:rotateY(180deg)}:host>div .front,:host>div .back{position:absolute;top:0;left:0;width:100%;height:100%;backface-visibility:hidden}:host>div .front{z-index:2;top:0;left:0;transform:rotateY(0deg)}:host>div .front z-button{position:absolute;z-index:3;top:calc(var(--space-unit) * 0.5);left:calc(-1 * var(--space-unit))}:host>div .back{z-index:1;top:0;left:0;display:flex;justify-content:center;padding:0 var(--space-unit);margin-left:calc(-1 * var(--space-unit));transform:rotateY(180deg)}.hide-info{display:none}";
const ZMyzCardDictionaryStyle0 = stylesCss;

const ZMyzCardDictionary$1 = /*@__PURE__*/ proxyCustomElement(class ZMyzCardDictionary extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    static get style() { return ZMyzCardDictionaryStyle0; }
}, [1, "z-myz-card-dictionary", {
        "name": [1],
        "cover": [1],
        "disabled": [4],
        "flipped": [1028],
        "flipbuttonlabel": [1],
        "hideinfobtn": [4]
    }, [[0, "flipCard", "handleFlipCard"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-myz-card-dictionary", "z-button", "z-icon", "z-myz-card", "z-myz-card-body", "z-myz-card-cover", "z-myz-card-header"];
    components.forEach(tagName => { switch (tagName) {
        case "z-myz-card-dictionary":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZMyzCardDictionary$1);
            }
            break;
        case "z-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "z-myz-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "z-myz-card-body":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "z-myz-card-cover":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "z-myz-card-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const ZMyzCardDictionary = ZMyzCardDictionary$1;
const defineCustomElement = defineCustomElement$1;

export { ZMyzCardDictionary, defineCustomElement };

//# sourceMappingURL=z-myz-card-dictionary.js.map
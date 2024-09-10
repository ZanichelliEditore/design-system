import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { B as ButtonVariant, d as ButtonSize } from './index2.js';
import { d as defineCustomElement$7 } from './index4.js';
import { d as defineCustomElement$6 } from './index9.js';
import { d as defineCustomElement$5 } from './index16.js';
import { d as defineCustomElement$4 } from './index17.js';
import { d as defineCustomElement$3 } from './index18.js';
import { d as defineCustomElement$2 } from './index19.js';

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host z-myz-card{--card-overflow:visible}:host>div{position:relative;width:100%;height:522px;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out,\n    -webkit-transform 0.5s ease-out}:host>div .content{position:relative;z-index:2;width:100%;height:522px;transform-style:preserve-3d;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out,\n    -webkit-transform 0.5s ease-out}:host>div .content.flipped{margin-top:-2px;transform:rotateY(180deg)}:host>div .front,:host>div .back{position:absolute;top:0;left:0;width:100%;height:100%;backface-visibility:hidden}:host>div .front{z-index:2;top:0;left:0;transform:rotateY(0deg)}:host>div .front z-button{position:absolute;z-index:3;top:calc(var(--space-unit) * 0.5);left:calc(-1 * var(--space-unit))}:host>div .back{z-index:1;top:0;left:0;display:flex;justify-content:center;padding:0 var(--space-unit);margin-left:calc(-1 * var(--space-unit));transform:rotateY(180deg)}.hide-info{display:none}";
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
        return (h("div", { key: 'd86e3c2140c9100c3bac377380a4fff77d089153' }, h("z-myz-card", { key: '34a3f2a9bfe747865ad3a4dca7f0ec106b1fe567' }, h("z-myz-card-header", { key: 'dc172fabf38338d7fd89af67a80da6918a1c0918', titolo: this.name }), h("div", { key: '8d0b945f35287a60658cf37b15440f8b66c98b65', class: `content ${this.flipped ? "flipped" : ""}` }, h("div", { key: '7b205650b760c3fb8f7d538bbfe5d2a73e237992', class: "front" }, h("z-myz-card-body", { key: 'c8fe772333350bc8ef4643f04e0585b80fea7e83' }, h("z-myz-card-cover", { key: 'a1b65f443fdf541dee8b21fb3709362ed6eaff4f', slot: "cover", titolo: this.name, img: this.cover, faded: this.disabled })), h("z-button", { key: 'e5b8bb0a7543a5f1e3954564f4cd28c11963b0aa', class: { "hide-info": this.hideinfobtn }, variant: ButtonVariant.SECONDARY, icon: "informationsource", size: ButtonSize.X_SMALL, onClick: () => this.flipCard(true), disabled: this.flipped }, this.flipbuttonlabel)), h("div", { key: 'ce3cfb76aac872409b162b80c6659799c17ea6ed', class: "back" }, h("slot", { key: 'eafdc479751d3326775dd01f1ced2ac9a9df189f', name: "info" }))), h("slot", { key: '4e4d018a5ca6c9282985d7fb978abb738675fa52' }))));
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
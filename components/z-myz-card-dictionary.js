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
        return (h("div", { key: '1fe60ae11176ccbc16a5ff68e483d89e22b91c02' }, h("z-myz-card", { key: 'e553917829677ee56d9b076d7a23c87c6f90378a' }, h("z-myz-card-header", { key: '9406d2c2e6e06fc71f75f687e62f73d482932ca8', titolo: this.name }), h("div", { key: '81f749c82b968c5d41303432e384da5808f9e0ee', class: `content ${this.flipped ? "flipped" : ""}` }, h("div", { key: 'facefc39c8331e8a385b8ff44768f6be8899fbca', class: "front" }, h("z-myz-card-body", { key: '73c31a9f60d94c02d3a4e85738b355430b2de4a1' }, h("z-myz-card-cover", { key: '95d79bc0ace8e3ec30b9920dd79a79dce6de9ed9', slot: "cover", titolo: this.name, img: this.cover, faded: this.disabled })), h("z-button", { key: '805fcc896d005e1b1c891918ad780e627ca3a372', class: { "hide-info": this.hideinfobtn }, variant: ButtonVariant.SECONDARY, icon: "informationsource", size: ButtonSize.X_SMALL, onClick: () => this.flipCard(true), disabled: this.flipped }, this.flipbuttonlabel)), h("div", { key: '6df3496b8aa8cf79b40c5443d96ca253596f9305', class: "back" }, h("slot", { key: 'f5895f11b8a6d88322057b55cf33676b2b47619f', name: "info" }))), h("slot", { key: 'e1645cc8da0229d33341d0d1b749e82e93caa804' }))));
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
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { A as AvatarSize } from './index2.js';

const stylesCss = ":host{display:inline-flex;overflow:hidden;align-items:center;justify-content:center;background-color:var(--gray700);border-radius:50%;font-family:var(--font-family-sans);text-transform:uppercase}:host(.small),:host(.small)>img{width:calc(var(--space-unit) * 3);height:calc(var(--space-unit) * 3)}:host(.medium),:host(.medium)>img{width:calc(var(--space-unit) * 4);height:calc(var(--space-unit) * 4)}:host(.large),:host(.large)>img{width:calc(var(--space-unit) * 5);height:calc(var(--space-unit) * 5)}:host>img{object-fit:cover}";
const ZAvatarStyle0 = stylesCss;

const ZAvatar$1 = /*@__PURE__*/ proxyCustomElement(class ZAvatar extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        var _a, _b;
        this.size = AvatarSize.MEDIUM;
        this.text = undefined;
        this.textColor = "color-white";
        this.backgroundColor = "gray700";
        this.image = undefined;
        if (((_a = this.text) === null || _a === void 0 ? void 0 : _a.length) === 0 && ((_b = this.image) === null || _b === void 0 ? void 0 : _b.length) === 0) {
            console.warn("z-avatar must contain at least one prop between text and image");
        }
    }
    getTextSize() {
        if (this.size === AvatarSize.SMALL) {
            return "5";
        }
        else if (this.size === AvatarSize.MEDIUM) {
            return "4";
        }
        else if (this.size === AvatarSize.LARGE) {
            return "2";
        }
    }
    render() {
        return (h(Host, { key: '63564a1499f36b406dcece1fd47bb0aa8e06ed6d', class: { [this.size]: true, [`body-${this.getTextSize()}-sb`]: true }, style: {
                color: `var(--${this.textColor})`,
                backgroundColor: `var(--${this.backgroundColor})`,
            } }, this.text && !this.image && h("span", { key: '9813952059608df9a5cdf74db7038aec2751dfa8' }, this.text.substring(0, 2)), this.image && (h("img", { key: 'd918f83b5212cb7618e30a0dc040f0c312341386', src: this.image, onError: () => (this.image = "") }))));
    }
    static get style() { return ZAvatarStyle0; }
}, [1, "z-avatar", {
        "size": [1],
        "text": [1],
        "textColor": [1, "text-color"],
        "backgroundColor": [1, "background-color"],
        "image": [1025]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-avatar"];
    components.forEach(tagName => { switch (tagName) {
        case "z-avatar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZAvatar$1);
            }
            break;
    } });
}

const ZAvatar = ZAvatar$1;
const defineCustomElement = defineCustomElement$1;

export { ZAvatar, defineCustomElement };

//# sourceMappingURL=z-avatar.js.map
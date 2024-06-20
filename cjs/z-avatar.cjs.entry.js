'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5dc4a8de.js');
const index$1 = require('./index-39ce4edf.js');

const stylesCss = ":host{display:-ms-inline-flexbox;display:inline-flex;overflow:hidden;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:var(--gray700);border-radius:50%;font-family:var(--font-family-sans);text-transform:uppercase}:host(.small),:host(.small)>img{width:calc(var(--space-unit) * 3);height:calc(var(--space-unit) * 3)}:host(.medium),:host(.medium)>img{width:calc(var(--space-unit) * 4);height:calc(var(--space-unit) * 4)}:host(.large),:host(.large)>img{width:calc(var(--space-unit) * 5);height:calc(var(--space-unit) * 5)}:host>img{-o-object-fit:cover;object-fit:cover}";
const ZAvatarStyle0 = stylesCss;

const ZAvatar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        var _a, _b;
        this.size = index$1.AvatarSize.MEDIUM;
        this.text = undefined;
        this.textColor = "color-white";
        this.backgroundColor = "gray700";
        this.image = undefined;
        if (((_a = this.text) === null || _a === void 0 ? void 0 : _a.length) === 0 && ((_b = this.image) === null || _b === void 0 ? void 0 : _b.length) === 0) {
            console.warn("z-avatar must contain at least one prop between text and image");
        }
    }
    getTextSize() {
        if (this.size === index$1.AvatarSize.SMALL) {
            return "5";
        }
        else if (this.size === index$1.AvatarSize.MEDIUM) {
            return "4";
        }
        else if (this.size === index$1.AvatarSize.LARGE) {
            return "2";
        }
    }
    render() {
        return (index.h(index.Host, { key: '63564a1499f36b406dcece1fd47bb0aa8e06ed6d', class: { [this.size]: true, [`body-${this.getTextSize()}-sb`]: true }, style: {
                color: `var(--${this.textColor})`,
                backgroundColor: `var(--${this.backgroundColor})`,
            } }, this.text && !this.image && index.h("span", { key: '9813952059608df9a5cdf74db7038aec2751dfa8' }, this.text.substring(0, 2)), this.image && (index.h("img", { key: 'd918f83b5212cb7618e30a0dc040f0c312341386', src: this.image, onError: () => (this.image = "") }))));
    }
};
ZAvatar.style = ZAvatarStyle0;

exports.z_avatar = ZAvatar;

//# sourceMappingURL=z-avatar.cjs.entry.js.map
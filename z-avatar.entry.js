import { r as registerInstance, h, H as Host } from './index-DafJ7_Il.js';
import { A as AvatarSize } from './index-DdetsoIY.js';

const stylesCss = () => `:host{display:inline-flex;overflow:hidden;align-items:center;justify-content:center;background-color:var(--gray700);border-radius:50%;font-family:var(--font-family-sans);text-transform:uppercase}:host(.small),:host(.small)>img{width:calc(var(--space-unit) * 3);height:calc(var(--space-unit) * 3)}:host(.medium),:host(.medium)>img{width:calc(var(--space-unit) * 4);height:calc(var(--space-unit) * 4)}:host(.large),:host(.large)>img{width:calc(var(--space-unit) * 5);height:calc(var(--space-unit) * 5)}:host>img{object-fit:cover}`;

const ZAvatar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        var _a, _b;
        /** [optional] Avatar size */
        this.size = AvatarSize.MEDIUM;
        /** [optional] Avatar text color */
        this.textColor = "color-white";
        /** [optional] Avatar background color */
        this.backgroundColor = "gray700";
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
        return (h(Host, { key: '4c19eb378e7f4c493fc57b9775de2b8304cbab72', class: { [this.size]: true, [`body-${this.getTextSize()}-sb`]: true }, style: {
                color: `var(--${this.textColor})`,
                backgroundColor: `var(--${this.backgroundColor})`,
            } }, this.text && !this.image && h("span", { key: '960af3c8fdd28dab045384b97835ea6c8cc9c6af' }, this.text.substring(0, 2)), this.image && (h("img", { key: '694fef396af746eb13df05dac19774f68760324b', src: this.image, onError: () => (this.image = "") }))));
    }
};
ZAvatar.style = stylesCss();

export { ZAvatar as z_avatar };

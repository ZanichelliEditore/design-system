import { r as registerInstance, h, a as Host } from './index-a2130b6a.js';
import { A as AvatarSize } from './index-b7dbacb4.js';

const stylesCss = ":host{display:inline-flex;overflow:hidden;align-items:center;justify-content:center;background-color:var(--gray700);border-radius:50%;font-family:var(--font-family-sans);text-transform:uppercase}:host(.small),:host(.small)>img{width:calc(var(--space-unit) * 3);height:calc(var(--space-unit) * 3)}:host(.medium),:host(.medium)>img{width:calc(var(--space-unit) * 4);height:calc(var(--space-unit) * 4)}:host(.large),:host(.large)>img{width:calc(var(--space-unit) * 5);height:calc(var(--space-unit) * 5)}:host>img{object-fit:cover}";
const ZAvatarStyle0 = stylesCss;

const ZAvatar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '4be97c710d33cc6dd35c1f0a7141b7f13c6e161f', class: { [this.size]: true, [`body-${this.getTextSize()}-sb`]: true }, style: {
                color: `var(--${this.textColor})`,
                backgroundColor: `var(--${this.backgroundColor})`,
            } }, this.text && !this.image && h("span", { key: 'af2d27fb007244f5830151e24e68cc757761d84e' }, this.text.substring(0, 2)), this.image && (h("img", { key: 'c507bc501c79eeb009e979242b5224a1fab85470', src: this.image, onError: () => (this.image = "") }))));
    }
};
ZAvatar.style = ZAvatarStyle0;

export { ZAvatar as z_avatar };

//# sourceMappingURL=z-avatar.entry.js.map
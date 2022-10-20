import { r as registerInstance, h, H as Host } from './index-a2ca4b97.js';
import { A as AvatarSize } from './index-9d028352.js';

const stylesCss = ":host{display:inline-flex;overflow:hidden;align-items:center;justify-content:center;background-color:var(--bg-grey-700);border-radius:50%;font-family:var(--font-family-sans);text-transform:uppercase}:host(.small),:host(.small)>img{width:calc(var(--space-unit) * 3);height:calc(var(--space-unit) * 3)}:host(.medium),:host(.medium)>img{width:calc(var(--space-unit) * 4);height:calc(var(--space-unit) * 4)}:host(.large),:host(.large)>img{width:calc(var(--space-unit) * 5);height:calc(var(--space-unit) * 5)}:host>img{object-fit:cover}";

const ZAvatar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    var _a, _b;
    /** [optional] Avatar size */
    this.size = AvatarSize.MEDIUM;
    /** [optional] Avatar text color */
    this.textColor = "text-white";
    /** [optional] Avatar background color */
    this.backgroundColor = "bg-grey-700";
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
    return (h(Host, { class: { [this.size]: true, [`body-${this.getTextSize()}-sb`]: true }, style: {
        color: `var(--${this.textColor})`,
        backgroundColor: `var(--${this.backgroundColor})`,
      } }, this.text && !this.image && h("span", null, this.text.substring(0, 2)), this.image && (h("img", { src: this.image, onError: () => (this.image = "") }))));
  }
};
ZAvatar.style = stylesCss;

export { ZAvatar as z_avatar };

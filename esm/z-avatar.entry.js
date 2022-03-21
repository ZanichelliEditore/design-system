import { r as registerInstance, h, H as Host } from './index-fa9e549c.js';
import { A as AvatarSize } from './index-f928c852.js';

const stylesCss = ":host{font-family:var(--font-family-sans);background-color:var(--bg-grey-700);border-radius:50%;display:inline-flex;align-items:center;justify-content:center;overflow:hidden;text-transform:uppercase}:host(.small),:host(.small)>img{height:calc(var(--space-unit) * 3);width:calc(var(--space-unit) * 3)}:host(.medium),:host(.medium)>img{height:calc(var(--space-unit) * 4);width:calc(var(--space-unit) * 4)}:host(.large),:host(.large)>img{height:calc(var(--space-unit) * 5);width:calc(var(--space-unit) * 5)}:host>img{object-fit:cover}";

const ZAvatar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** [optional] Avatar size */
    this.size = AvatarSize.medium;
    /** [optional] Avatar text color */
    this.textColor = "text-white";
    /** [optional] Avatar background color */
    this.backgroundColor = "bg-grey-700";
    if (!this.text && !this.image) {
      console.warn("z-avatar must contain at least one prop between text and image");
    }
  }
  getTextSize() {
    if (this.size === AvatarSize.small) {
      return "5";
    }
    else if (this.size === AvatarSize.medium) {
      return "4";
    }
    else if (this.size === AvatarSize.large) {
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

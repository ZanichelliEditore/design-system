'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-195ca522.js');
const index$1 = require('./index-cf9497bc.js');

const stylesCss = ":host{display:inline-flex;overflow:hidden;align-items:center;justify-content:center;background-color:var(--gray700);border-radius:50%;font-family:var(--font-family-sans);text-transform:uppercase}:host(.small),:host(.small)>img{width:calc(var(--space-unit) * 3);height:calc(var(--space-unit) * 3)}:host(.medium),:host(.medium)>img{width:calc(var(--space-unit) * 4);height:calc(var(--space-unit) * 4)}:host(.large),:host(.large)>img{width:calc(var(--space-unit) * 5);height:calc(var(--space-unit) * 5)}:host>img{object-fit:cover}";

const ZAvatar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    var _a, _b;
    /** [optional] Avatar size */
    this.size = index$1.AvatarSize.MEDIUM;
    /** [optional] Avatar text color */
    this.textColor = "color-white";
    /** [optional] Avatar background color */
    this.backgroundColor = "gray700";
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
    return (index.h(index.Host, { class: { [this.size]: true, [`body-${this.getTextSize()}-sb`]: true }, style: {
        color: `var(--${this.textColor})`,
        backgroundColor: `var(--${this.backgroundColor})`,
      } }, this.text && !this.image && index.h("span", null, this.text.substring(0, 2)), this.image && (index.h("img", { src: this.image, onError: () => (this.image = "") }))));
  }
};
ZAvatar.style = stylesCss;

exports.z_avatar = ZAvatar;

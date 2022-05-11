import { r as registerInstance, h } from './index-fa9e549c.js';
import { i as icons } from './icons-bceeb196.js';

const stylesCss = ":host{line-height:0;vertical-align:middle;margin-right:var(--z-icon-right-margin, 0);margin-left:var(--z-icon-left-margin, 0)}:host svg:not([width]){width:var(--z-icon-width, 18px)}:host svg:not([height]){height:var(--z-icon-height, 18px)}";

const ZIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  selectPathOrPolygon(iconName) {
    if (iconName && iconName.startsWith("M")) {
      return h("path", { d: icons[this.name] });
    }
    else {
      return h("polygon", { points: icons[this.name] });
    }
  }
  render() {
    return (h("svg", { viewBox: "0 0 1000 1000", width: this.width, height: this.height, id: this.iconid, fill: this.fill ? `var(--${this.fill})` : "" }, this.selectPathOrPolygon(icons[this.name])));
  }
};
ZIcon.style = stylesCss;

export { ZIcon as z_icon };

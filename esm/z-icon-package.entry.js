import { r as registerInstance, h } from './index-90e18641.js';
import { i as icons } from './icons-d8a127bf.js';

const stylesCss = ":host>div{display:flex;flex-flow:row wrap;justify-content:flex-start;font-family:Verdana, Arial, Helvetica, sans-serif;font-size:12px}:host>div>div{width:300px;margin:5px}:host>div>div>label{margin:0 10px}";

const ZIconPackage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const iconsNames = Object.keys(icons);
    return (h("div", null, iconsNames.map((icon) => {
      return (h("div", null, h("z-icon", { name: icon }), h("label", null, icon)));
    })));
  }
};
ZIconPackage.style = stylesCss;

export { ZIconPackage as z_icon_package };

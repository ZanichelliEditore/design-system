import { r as registerInstance, h } from './index-a2ca4b97.js';
import { I as ICONS } from './icons-56ca282c.js';

const stylesCss = ":host>div{display:flex;flex-flow:row wrap;justify-content:flex-start;font-family:Verdana, Arial, Helvetica, sans-serif;font-size:12px}:host>div>div{width:300px;margin:5px}:host>div>div>label{margin:0 10px}";

const ZIconPackage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, Object.keys(ICONS).map((icon) => {
      return (h("div", null, h("z-icon", { name: icon }), h("label", null, icon)));
    })));
  }
};
ZIconPackage.style = stylesCss;

export { ZIconPackage as z_icon_package };

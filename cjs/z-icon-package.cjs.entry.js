'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const icons = require('./icons-460f0f1e.js');

const stylesCss = ":host>div{display:flex;flex-flow:row wrap;justify-content:flex-start;font-family:Verdana, Arial, Helvetica, sans-serif;font-size:12px}:host>div>div{width:300px;margin:5px}:host>div>div>label{margin:0 10px}";

const ZIconPackage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", null, Object.keys(icons.ICONS).map((icon) => {
      return (index.h("div", null, index.h("z-icon", { name: icon }), index.h("label", null, icon)));
    })));
  }
};
ZIconPackage.style = stylesCss;

exports.z_icon_package = ZIconPackage;
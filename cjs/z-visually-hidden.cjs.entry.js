'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-195ca522.js');

const stylesCss = ":host{position:absolute;overflow:hidden;width:1px;height:1px;padding:0;border:0;margin:0 -1px -1px 0;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}";

const ZVisuallyHidden = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return index.h("slot", null);
  }
};
ZVisuallyHidden.style = stylesCss;

exports.z_visually_hidden = ZVisuallyHidden;

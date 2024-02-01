'use strict';

const index = require('./index-195ca522.js');

const stylesCss = ":host{display:block;box-sizing:border-box}";

const ZTbody = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { role: "rowgroup" }, index.h("slot", null)));
  }
};
ZTbody.style = stylesCss;

exports.ZTbody = ZTbody;

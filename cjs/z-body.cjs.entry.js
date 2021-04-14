'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-25d17ad3.js');

const ZBody = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.variant = "regular";
  }
  render() {
    return (index.h("z-typography", { component: this.component || "span", level: `b${this.level}`, variant: this.variant }, index.h("slot", null)));
  }
};

exports.z_body = ZBody;

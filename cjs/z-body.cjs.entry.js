'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');

const ZBody = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** Font weight variant */
    this.variant = "regular";
  }
  render() {
    return (index.h("z-typography", { tabIndex: 0, component: this.component || "span", level: `b${this.level}`, variant: this.variant }, index.h("slot", null)));
  }
};

exports.z_body = ZBody;

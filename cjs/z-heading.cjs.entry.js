'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-31e5f406.js');

const ZHeading = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.variant = "regular";
  }
  render() {
    return (index.h("z-typography", { component: this.component || `h${this.level}`, level: `h${this.level}`, variant: this.variant }, index.h("slot", null)));
  }
};

exports.z_heading = ZHeading;

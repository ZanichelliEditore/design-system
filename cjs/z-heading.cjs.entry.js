'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dee3e21d.js');

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

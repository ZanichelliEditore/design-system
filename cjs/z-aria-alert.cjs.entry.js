'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-b7c319f2.js');

const ZAriaAlert = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** Aria live mode */
    this.mode = index$1.ZAriaAlertMode.POLITE;
  }
  render() {
    return (index.h(index.Host, { "aria-live": this.mode, "aria-atomic": "true", "aria-relevant": "additions" }, index.h("slot", null)));
  }
};

exports.z_aria_alert = ZAriaAlert;

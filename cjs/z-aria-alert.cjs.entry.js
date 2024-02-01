'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-195ca522.js');
const index$1 = require('./index-cf9497bc.js');

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

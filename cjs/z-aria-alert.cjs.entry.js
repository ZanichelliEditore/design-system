'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');
const index$1 = require('./index-438f76bc.js');

const ZAriaAlert = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mode = index$1.ZAriaAlertMode.polite;
  }
  render() {
    return (index.h(index.Host, { "aria-live": this.mode, "aria-atomic": "true", "aria-relevant": "additions" }, index.h("slot", null)));
  }
};

exports.z_aria_alert = ZAriaAlert;

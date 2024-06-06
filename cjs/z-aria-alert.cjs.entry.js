'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dc60bee7.js');
const index$1 = require('./index-39ce4edf.js');

const ZAriaAlert = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.mode = index$1.ZAriaAlertMode.POLITE;
    }
    render() {
        return (index.h(index.Host, { key: '88e0d50e7f29c2e80aaa047a32902bc6347ad8d9', "aria-live": this.mode, "aria-atomic": "true", "aria-relevant": "additions" }, index.h("slot", { key: 'c76710250968f02393f69652d148ddf22eb1839e' })));
    }
};

exports.z_aria_alert = ZAriaAlert;

//# sourceMappingURL=z-aria-alert.cjs.entry.js.map
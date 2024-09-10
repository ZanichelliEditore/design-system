'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e801ae96.js');
const index$1 = require('./index-bab7a651.js');

const ZAriaAlert = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.mode = index$1.ZAriaAlertMode.POLITE;
    }
    render() {
        return (index.h(index.Host, { key: '851bdac7b9b7c2dd4a5042a78cfacfe234051928', "aria-live": this.mode, "aria-atomic": "true", "aria-relevant": "additions" }, index.h("slot", { key: 'e3217c0633b68f55bd62c26fd1afb6d00dfe2708' })));
    }
};

exports.z_aria_alert = ZAriaAlert;

//# sourceMappingURL=z-aria-alert.cjs.entry.js.map
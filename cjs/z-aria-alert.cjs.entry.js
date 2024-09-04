'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5dc4a8de.js');
const index$1 = require('./index-e3835c94.js');

const ZAriaAlert = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.mode = index$1.ZAriaAlertMode.POLITE;
    }
    render() {
        return (index.h(index.Host, { key: '3dc09efdfb273cbb3700c75f6e83112d6d158fb0', "aria-live": this.mode, "aria-atomic": "true", "aria-relevant": "additions" }, index.h("slot", { key: '109c1e5fa0fa0bd7fa990c7fdb23c0f65dd6811e' })));
    }
};

exports.z_aria_alert = ZAriaAlert;

//# sourceMappingURL=z-aria-alert.cjs.entry.js.map
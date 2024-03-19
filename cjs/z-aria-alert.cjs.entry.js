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
        return (index.h(index.Host, { key: 'a3275876421862b2b2c80c044ca50f50464cfd55', "aria-live": this.mode, "aria-atomic": "true", "aria-relevant": "additions" }, index.h("slot", { key: '3767d930ccea80abbd79b4f3ee6d1733df29b934' })));
    }
};

exports.z_aria_alert = ZAriaAlert;

//# sourceMappingURL=z-aria-alert.cjs.entry.js.map
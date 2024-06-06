import { r as registerInstance, h, a as Host } from './index-f16bc2ca.js';
import { u as ZAriaAlertMode } from './index-2255c6c8.js';

const ZAriaAlert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.mode = ZAriaAlertMode.POLITE;
    }
    render() {
        return (h(Host, { key: '88e0d50e7f29c2e80aaa047a32902bc6347ad8d9', "aria-live": this.mode, "aria-atomic": "true", "aria-relevant": "additions" }, h("slot", { key: 'c76710250968f02393f69652d148ddf22eb1839e' })));
    }
};

export { ZAriaAlert as z_aria_alert };

//# sourceMappingURL=z-aria-alert.entry.js.map
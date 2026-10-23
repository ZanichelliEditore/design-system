import { r as registerInstance, h, H as Host } from './index-DafJ7_Il.js';
import { t as ZAriaAlertMode } from './index-DdetsoIY.js';

const ZAriaAlert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Aria live mode */
        this.mode = ZAriaAlertMode.POLITE;
    }
    render() {
        return (h(Host, { key: '08ea2a5fcd4fed8c592ebffbcf6f108444cdae09', "aria-live": this.mode, "aria-atomic": "true", "aria-relevant": "additions" }, h("slot", { key: 'dabf388e8dee86e912d2f62f54634dcef6e63dab' })));
    }
};

export { ZAriaAlert as z_aria_alert };

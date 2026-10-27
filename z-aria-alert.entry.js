import { r as registerInstance, h, H as Host } from './index-SFwvdS4t.js';
import { t as ZAriaAlertMode } from './index-DdetsoIY.js';

const ZAriaAlert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Aria live mode */
        this.mode = ZAriaAlertMode.POLITE;
    }
    render() {
        return (h(Host, { key: 'e8f8112449c5d6206a2b586cdc506544331ae029', "aria-live": this.mode, "aria-atomic": "true", "aria-relevant": "additions" }, h("slot", { key: 'dc7b7a918bd5cf2add1b508d92d2fdf7f13e462a' })));
    }
};

export { ZAriaAlert as z_aria_alert };

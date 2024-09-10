import { r as registerInstance, h, a as Host } from './index-a2130b6a.js';
import { t as ZAriaAlertMode } from './index-b7dbacb4.js';

const ZAriaAlert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.mode = ZAriaAlertMode.POLITE;
    }
    render() {
        return (h(Host, { key: '851bdac7b9b7c2dd4a5042a78cfacfe234051928', "aria-live": this.mode, "aria-atomic": "true", "aria-relevant": "additions" }, h("slot", { key: 'e3217c0633b68f55bd62c26fd1afb6d00dfe2708' })));
    }
};

export { ZAriaAlert as z_aria_alert };

//# sourceMappingURL=z-aria-alert.entry.js.map
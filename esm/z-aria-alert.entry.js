import { r as registerInstance, h, a as Host } from './index-ab5f1eaa.js';
import { t as ZAriaAlertMode } from './index-a7f69d42.js';

const ZAriaAlert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.mode = ZAriaAlertMode.POLITE;
    }
    render() {
        return (h(Host, { key: '3dc09efdfb273cbb3700c75f6e83112d6d158fb0', "aria-live": this.mode, "aria-atomic": "true", "aria-relevant": "additions" }, h("slot", { key: '109c1e5fa0fa0bd7fa990c7fdb23c0f65dd6811e' })));
    }
};

export { ZAriaAlert as z_aria_alert };

//# sourceMappingURL=z-aria-alert.entry.js.map
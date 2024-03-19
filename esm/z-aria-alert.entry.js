import { r as registerInstance, h, a as Host } from './index-f16bc2ca.js';
import { u as ZAriaAlertMode } from './index-2255c6c8.js';

const ZAriaAlert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.mode = ZAriaAlertMode.POLITE;
    }
    render() {
        return (h(Host, { key: 'a3275876421862b2b2c80c044ca50f50464cfd55', "aria-live": this.mode, "aria-atomic": "true", "aria-relevant": "additions" }, h("slot", { key: '3767d930ccea80abbd79b4f3ee6d1733df29b934' })));
    }
};

export { ZAriaAlert as z_aria_alert };

//# sourceMappingURL=z-aria-alert.entry.js.map